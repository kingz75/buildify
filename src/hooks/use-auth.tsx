'use client'

import { useRouter } from 'next/navigation'
import { signOut as signOutAction } from '@/app/actions/auth'
import { Models } from 'node-appwrite'
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'

type AuthContextType = {
  currentUser: Models.User<Models.Preferences> | null
  signOut: () => Promise<void>
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] =
    useState<Models.User<Models.Preferences> | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check auth status on mount
    async function checkAuth() {
      try {
        const response = await fetch('/api/auth/me')
        if (response.ok) {
          const data = await response.json()
          setCurrentUser(data.user)
        }
      } catch (error) {
        console.error('Auth check failed:', error)
      } finally {
        setIsLoading(false)
      }
    }
    checkAuth()
  }, [])

  const signOut = async () => {
    await signOutAction()
    setCurrentUser(null)
    router.push('/')
    router.refresh()
  }

  return (
    <AuthContext.Provider value={{ currentUser, signOut, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
