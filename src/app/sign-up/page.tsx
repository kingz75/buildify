'use client'

import { useActionState } from 'react'
import Link from 'next/link'
import { signUp, type FormState } from '@/app/actions/auth'
import { AuthCard } from '@/components/auth/auth-card'
import { AuthForm } from '@/components/auth/auth-form'
import { AuthField } from '@/components/auth/auth-field'

const initialState: FormState = {
  message: '',
  errors: undefined,
  status: undefined,
}

export default function SignUpPage() {
  const [state, formAction, isPending] = useActionState(signUp, initialState)

  return (
    <AuthCard
      title="Sign up"
      description="Enter your details to create a new account"
    >
      <AuthForm
        action={formAction}
        submitText="Sign up"
        loadingText="Signing up..."
        isLoading={isPending}
      >
        <AuthField
          name="email"
          label="Email"
          placeholder="john@doe.com"
          type="email"
        />

        <AuthField
          name="password"
          label="Password"
          placeholder="Enter your password"
          type="password"
        />
      </AuthForm>

      <div className="text-center text-sm text-muted-foreground mt-4 space-x-1">
        <span>Already have an account? </span>
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
