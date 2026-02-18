'use client'

import { useActionState } from 'react'
import Link from 'next/link'
import { signIn, type FormState } from '@/app/actions/auth'
import { AuthCard } from '@/components/auth/auth-card'
import { AuthForm } from '@/components/auth/auth-form'
import { AuthField } from '@/components/auth/auth-field'

const initialState: FormState = {
  message: '',
  errors: undefined,
  status: undefined,
}

export default function SignInPage() {
  const [state, formAction, isPending] = useActionState(signIn, initialState)

  return (
    <AuthCard
      title="Sign in"
      description="Enter your email and password to access your account"
    >
      <AuthForm
        action={formAction}
        submitText="Sign in"
        loadingText="Signing in..."
        isLoading={isPending}
      >
        <AuthField
          name="email"
          label="Email"
          placeholder="john@doe.com"
          type="email"
        />

        <div className="space-y-2">
          <AuthField
            name="password"
            label="Password"
            placeholder="Enter your password"
            type="password"
          />
          <div className="text-right">
            <Link
              href="/forgot-password"
              className="text-xs md:text-sm text-muted-foreground hover:text-primary underline-offset-4 hover:underline"
            >
              Forgot password?
            </Link>
          </div>
        </div>
      </AuthForm>

      <div className="text-center text-sm text-muted-foreground mt-4 space-x-1">
        <span>Don't have an account? </span>
        <Link
          href="/sign-up"
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          Sign up
        </Link>
      </div>
    </AuthCard>
  )
}
