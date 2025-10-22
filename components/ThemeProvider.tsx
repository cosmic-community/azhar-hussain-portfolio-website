'use client'

import { useEffect } from 'react'

interface ThemeProviderProps {
  children: React.ReactNode
  initialDarkMode?: boolean
}

export default function ThemeProvider({ children, initialDarkMode }: ThemeProviderProps) {
  useEffect(() => {
    const theme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldBeDark = theme === 'dark' || (!theme && (initialDarkMode || prefersDark))
    
    if (shouldBeDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [initialDarkMode])
  
  return <>{children}</>
}