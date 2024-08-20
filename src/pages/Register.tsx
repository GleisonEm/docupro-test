import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InputField } from '../components/InputField'
import { useAuth } from '../contexts/AuthContext'
import HeaderRegister from '../components/HeaderRegister'

const Register: React.FC = () => {
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const { register } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    try {
      await register(name, username, email, password)
      navigate('/login') // Redirect to the login page after successful registration
    } catch (err) {
      setError('Failed to register. Please try again.')
    }
  }

  return (
    <div
      className="relative flex min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Manrope, Noto Sans, sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-2 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] py-5 flex-1">
            <HeaderRegister />
            <h3 className="text-[#111418] tracking-light text-2xl md:text-3xl font-bold leading-tight px-4 text-start pb-2 pt-5">
              Create your DocuPro account
            </h3>
            <form onSubmit={handleSubmit} className="flex justify-center flex-col mt-20">
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <InputField
                  label="Name"
                  placeholder="Name"
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <InputField
                  label="Username"
                  placeholder="Username"
                  type="text"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <InputField
                  label="Email"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <InputField
                  label="Password"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <InputField
                  label="Confirm password"
                  placeholder="Confirm password"
                  type="password"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm px-4">{error}</p>}
              <p className="text-[#637588] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-start">
                By clicking Register, you agree to the DocuPro Terms of Service and Privacy Policy
              </p>
              <div className="flex px-4 py-3">
                <button
                  type="submit"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#1466b8] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Register</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
