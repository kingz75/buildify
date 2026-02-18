'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createAdminClient, createSessionClient } from '@/server/lib/appwrite'
import { AppwriteException, ID } from 'node-appwrite'
import z from 'zod'

// Session cookie names
const SESSION_SECRET_COOKIE = 'appwrite-session-secret'
const SESSION_ID_COOKIE = 'appwrite-session-id'

export async function getSession() {
  const cookieStore = await cookies()
  const secret = cookieStore.get(SESSION_SECRET_COOKIE)?.value
  const sessionId = cookieStore.get(SESSION_ID_COOKIE)?.value

  if (!secret || !sessionId) {
    return null
  }

  // Appwrite expects session in format: secret:sessionId
  return `${secret}:${sessionId}`
}

const signUpInSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  redirect: z.string().optional(),
})

export async function signUp(prevState: unknown, formData: FormData) {
  const rawData = {
    email: formData.get('email'),
    password: formData.get('password'),
    redirect: formData.get('redirect') || undefined,
  }

  const validated = signUpInSchema.safeParse(rawData)

  if (!validated.success) {
    return {
      errors: validated.error.flatten().fieldErrors,
      message: 'Invalid form data',
    }
  }

  const { email, password, redirect: redirectUrl } = validated.data

  try {
    const { account } = createAdminClient()

    await account.create({ userId: ID.unique(), email, password })
    const session = await account.createEmailPasswordSession({
      email,
      password,
    })

    // Set cookies
    const cookieStore = await cookies()
    let maxAge = 30 * 24 * 60 * 60 // 30 days
    if (session.expire) {
      const expireTime = Math.floor(new Date(session.expire).getTime() / 1000)
      const now = Math.floor(Date.now() / 1000)
      maxAge = Math.max(0, expireTime - now)
    }

    cookieStore.set(SESSION_SECRET_COOKIE, session.secret, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge,
      path: '/',
    })

    cookieStore.set(SESSION_ID_COOKIE, session.$id, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge,
      path: '/',
    })
  } catch (error) {
    const appwriteError = error as AppwriteException
    return {
      message: appwriteError.message || 'Failed to sign up',
      status: appwriteError.code,
    }
  }

  if (redirectUrl) {
    redirect(redirectUrl)
  } else {
    redirect('/')
  }
}

export async function signIn(prevState: unknown, formData: FormData) {
  const rawData = {
    email: formData.get('email'),
    password: formData.get('password'),
    redirect: formData.get('redirect') || undefined,
  }

  const validated = signUpInSchema.safeParse(rawData)

  if (!validated.success) {
    return {
      errors: validated.error.flatten().fieldErrors,
      message: 'Invalid form data',
    }
  }

  const { email, password, redirect: redirectUrl } = validated.data

  try {
    const { account } = createAdminClient()

    const session = await account.createEmailPasswordSession({
      email,
      password,
    })

    // Set cookies
    const cookieStore = await cookies()
    let maxAge = 30 * 24 * 60 * 60 // 30 days
    if (session.expire) {
      const expireTime = Math.floor(new Date(session.expire).getTime() / 1000)
      const now = Math.floor(Date.now() / 1000)
      maxAge = Math.max(0, expireTime - now)
    }

    cookieStore.set(SESSION_SECRET_COOKIE, session.secret, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge,
      path: '/',
    })

    cookieStore.set(SESSION_ID_COOKIE, session.$id, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge,
      path: '/',
    })
  } catch (error) {
    const appwriteError = error as AppwriteException
    return {
      message: appwriteError.message || 'Failed to sign in',
      status: appwriteError.code,
    }
  }

  if (redirectUrl) {
    redirect(redirectUrl)
  } else {
    redirect('/')
  }
}

export async function signOut() {
  try {
    const session = await getSession()

    if (session) {
      const client = await createSessionClient(session)
      await client.account.deleteSession({ sessionId: 'current' })
    }
  } catch (error) {
    console.error('Error deleting session:', error)
  } finally {
    // Always clear the cookies
    const cookieStore = await cookies()
    cookieStore.delete(SESSION_SECRET_COOKIE)
    cookieStore.delete(SESSION_ID_COOKIE)
  }

  redirect('/')
}

export async function getCurrentUser() {
  const session = await getSession()

  if (!session) {
    return null
  }

  try {
    const client = await createSessionClient(session)
    const currentUser = await client.account.get()
    return currentUser
  } catch (error) {
    const appwriteError = error as AppwriteException
    if (appwriteError.code === 401) {
      // Clear invalid cookies
      const cookieStore = await cookies()
      cookieStore.delete(SESSION_SECRET_COOKIE)
      cookieStore.delete(SESSION_ID_COOKIE)
    }
    return null
  }
}

const forgotPasswordSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

export async function forgotPassword(prevState: unknown, formData: FormData) {
  const rawData = {
    email: formData.get('email'),
  }

  const validated = forgotPasswordSchema.safeParse(rawData)

  if (!validated.success) {
    return {
      errors: validated.error.flatten().fieldErrors,
      message: 'Invalid form data',
    }
  }

  const { email } = validated.data

  try {
    const { account } = createAdminClient()
    const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/reset-password`
    await account.createRecovery({ email, url: resetUrl })

    return {
      success: true,
      message: 'Password recovery email sent successfully',
    }
  } catch (error) {
    const appwriteError = error as AppwriteException
    return {
      message: appwriteError.message || 'Failed to send recovery email',
      status: appwriteError.code,
    }
  }
}

const resetPasswordSchema = z.object({
  userId: z.string().min(1, 'User ID is required'),
  secret: z.string().min(1, 'Secret is required'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string().min(8, 'Password must be at least 8 characters'),
})

export async function resetPassword(prevState: unknown, formData: FormData) {
  const rawData = {
    userId: formData.get('userId'),
    secret: formData.get('secret'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
  }

  const validated = resetPasswordSchema.safeParse(rawData)

  if (!validated.success) {
    return {
      errors: validated.error.flatten().fieldErrors,
      message: 'Invalid form data',
    }
  }

  const { userId, secret, password, confirmPassword } = validated.data

  if (password !== confirmPassword) {
    return {
      message: 'Passwords do not match',
      status: 400,
    }
  }

  try {
    const { account } = createAdminClient()
    await account.updateRecovery({
      userId,
      secret,
      password,
    })

    return {
      success: true,
      message: 'Password reset successfully',
    }
  } catch (error) {
    const appwriteError = error as AppwriteException
    return {
      message: appwriteError.message || 'Failed to reset password',
      status: appwriteError.code,
    }
  }
}
