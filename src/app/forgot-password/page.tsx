'use client'

import { useActionState, useState } from 'react'
import Link from 'next/link'
import { forgotPassword } from '@/app/actions/auth'
import { AuthCard } from '@/components/auth/auth-card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { CheckCircle2 } from 'lucide-react'

const initialState = {
  message: '',
  success: false,
}

export default function ForgotPasswordPage() {
  const [state, formAction, isPending] = useActionState(
    forgotPassword,
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
        title="Check your email"
        description="We've sent you a password recovery link"
      >
        <Alert className="border-green-500 bg-green-50 dark:bg-green-950">
          <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
          <AlertDescription className="text-green-800 dark:text-green-200">
            If an account exists with that email, you'll receive a password
            recovery link shortly. Please check your inbox and spam folder.
          </AlertDescription>
        </Alert>

        <div className="text-center text-sm text-muted-foreground mt-4">
          <span>Remember your password? </span>
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

  return (
    <AuthCard
      title="Forgot password"
      description="Enter your email address and we'll send you a recovery link"
    >
      <form action={formAction} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@doe.com"
            required
          />
        </div>

        {state?.message && !state?.success && (
          <Alert variant="destructive">
            <AlertDescription>{state.message}</AlertDescription>
          </Alert>
        )}

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? 'Sending...' : 'Send recovery link'}
        </Button>
      </form>

      <div className="text-center text-sm text-muted-foreground mt-4">
        <span>Remember your password? </span>
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
