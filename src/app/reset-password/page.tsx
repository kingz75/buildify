'use client'

import { useActionState, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { resetPassword, type FormState } from '@/app/actions/auth'
import { AuthCard } from '@/components/auth/auth-card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'

const initialState: FormState = {
  message: '',
  success: false,
  status: undefined,
}

function ResetPasswordForm() {
  const searchParams = useSearchParams()
  const userId = searchParams.get('userId')
  const secret = searchParams.get('secret')

  const [state, formAction, isPending] = useActionState(
    resetPassword,
    initialState,
  )
  const [isSuccess, setIsSuccess] = useState(false)

  // Handle success state from server action
  if (state?.success && !isSuccess) {
    setIsSuccess(true)
  }

  if (isSuccess) {
    return (
      <AuthCard
        title="Password reset successful"
        description="Your password has been reset successfully"
      >
        <Alert className="border-green-500 bg-green-50 dark:bg-green-950">
          <AlertDescription className="text-green-800 dark:text-green-200">
            You can now sign in with your new password.
          </AlertDescription>
        </Alert>

        <div className="text-center text-sm text-muted-foreground mt-4">
          <Link
            href="/sign-in"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            Sign in
          </Link>
        </div>
      </AuthCard>
    )
  }

  if (!userId || !secret) {
    return (
      <AuthCard
        title="Invalid reset link"
        description="This password reset link is invalid or has expired"
      >
        <Alert variant="destructive">
          <AlertDescription>
            Please request a new password reset link.
          </AlertDescription>
        </Alert>

        <div className="text-center text-sm text-muted-foreground mt-4">
          <Link
            href="/forgot-password"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            Request new link
          </Link>
        </div>
      </AuthCard>
    )
  }

  return (
    <AuthCard
      title="Reset password"
      description="Enter your new password below"
    >
      <form action={formAction} className="space-y-4">
        <input type="hidden" name="userId" value={userId} />
        <input type="hidden" name="secret" value={secret} />

        <div className="space-y-2">
          <Label htmlFor="password">New password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your new password"
            required
            minLength={8}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm password</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your new password"
            required
            minLength={8}
          />
        </div>

        {state?.message && !state?.success && (
          <Alert variant="destructive">
            <AlertDescription>{state.message}</AlertDescription>
          </Alert>
        )}

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? 'Resetting...' : 'Reset password'}
        </Button>
      </form>

      <div className="text-center text-sm text-muted-foreground mt-4">
        <Link
          href="/sign-in"
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          Back to sign in
        </Link>
      </div>
    </AuthCard>
  )
}

function LoadingState() {
  return (
    <AuthCard
      title="Loading..."
      description="Please wait while we process your request"
    >
      <div className="flex justify-center py-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    </AuthCard>
  )
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<LoadingState />}>
      <ResetPasswordForm />
    </Suspense>
  )
}
