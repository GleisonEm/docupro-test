// src/contexts/AuthContext.tsx
import React, { createContext, useState, useContext, useEffect } from 'react'
import { NavigateFunction } from 'react-router-dom'
import { login as apiLogin, register as apiRegister } from '../services/Auth'

interface AuthContextType {
  token: string | null
  login: (email: string, password: string) => Promise<void>
  register: (name: string, username: string, email: string, password: string) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode; navigate: NavigateFunction }> = ({
  children,
  navigate,
}) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'))

  const login = async (email: string, password: string) => {
    try {
      const response = await apiLogin(email, password)
      const { accessToken } = response.data
      setToken(accessToken)
      localStorage.setItem('token', accessToken)
    } catch (error) {
      console.error('Login failed', error)
      throw error
    }
  }

  const register = async (name: string, username: string, email: string, password: string) => {
    try {
      const response = await apiRegister(name, username, email, password)
      const { accessToken } = response.data
      setToken(accessToken)
      localStorage.setItem('token', accessToken)
    } catch (error) {
      console.error('Registration failed', error)
      throw error
    }
  }

  const logout = () => {
    setToken(null)
    localStorage.removeItem('token')
  }

  const isAuthenticated = !!token

  useEffect(() => {
    if (token) {
      navigate('/documents')
    }
  }, [token, navigate])

  return (
    <AuthContext.Provider value={{ token, login, register, logout, isAuthenticated }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
