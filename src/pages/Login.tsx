import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InputField } from '../components/InputField'
import { useAuth } from '../contexts/AuthContext' // Make sure this path is correct
import HeaderLogin from '../components/HeaderLogin'

const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    try {
      await login(email, password)
      navigate('/documents') // Redirect to the documents page after successful login
    } catch (err) {
      setError('Invalid email or password. Please try again.')
    }
  }

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Manrope, Noto Sans, sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-2 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] py-5 flex-1">
            <HeaderLogin />

            <form onSubmit={handleSubmit} className="flex justify-center flex-col mt-20">
              <div className="flex flex-wrap justify-between gap-3 p-4">
                <div className="flex min-w-72 flex-col gap-3">
                  <p className="text-[#111418] text-4xl font-black leading-tight tracking-[-0.033em]">
                    Welcome back to DocuPro
                  </p>
                  <p className="text-[#637588] text-base font-normal leading-normal">
                    Access your documents, appointments, and more.
                  </p>
                </div>
              </div>

              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <InputField
                  label="Email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <InputField
                  label="Password"
                  type="password"
                  placeholder="•••••••••••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </div>

              {error && <p className="text-red-500 text-sm px-4">{error}</p>}

              <div className="flex px-4 py-3">
                <button
                  type="submit"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#1466b8] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Log in</span>
                </button>
              </div>

              <p className="text-[#637588] text-sm font-normal leading-normal pb-3 pt-1 px-4 underline">
                By logging in, you agree to our Terms of Service and Privacy Policy
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
