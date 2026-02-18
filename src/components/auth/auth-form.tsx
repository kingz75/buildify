import * as React from 'react'
import { Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface AuthFormProps {
  children: React.ReactNode
  submitText: string
  loadingText: string
  isLoading?: boolean
  className?: string
  action?: (formData: FormData) => void
}

export function AuthForm({
  children,
  submitText,
  loadingText,
  isLoading = false,
  className = 'space-y-4',
  action,
}: AuthFormProps) {
  return (
    <form action={action} className={className}>
      {children}

      <Button type="submit" size="sm" className="w-full" disabled={isLoading}>
        {isLoading ? (
          <div className="flex items-center justify-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin" />
            {loadingText}
          </div>
        ) : (
          submitText
        )}
      </Button>
    </form>
  )
}
