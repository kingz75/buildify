import * as React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface AuthFieldProps {
  name: string
  label: string
  placeholder: string
  type?: string
}

export function AuthField({
  name,
  label,
  placeholder,
  type = 'text',
}: AuthFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="text-sm md:text-base">
        {label}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="text-sm md:text-base h-8 md:h-9"
        required
      />
    </div>
  )
}
