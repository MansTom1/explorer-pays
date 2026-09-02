import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router'
import { useState } from 'react'

import {
  loginSchema,
  type LoginFormData,
} from '../schemas/authSchema'

import { login as loginUser } from '../services/authService'

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState('')

  const onSubmit = async (data: LoginFormData) => {
    setErrorMessage('') // Alignement corrigé ici

    try {
      await loginUser(data.email, data.password)
      navigate('/profile')
    } catch (error) {
      setErrorMessage(
        'Email ou mot de passe incorrect.',
      )
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-4"
      >
        <h1 className="text-3xl font-bold">
          Connexion
        </h1>

        <div>
          <label htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="w-full rounded border p-2"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="password">
            Mot de passe
          </label>
          <input
            id="password"
            type="password"
            {...register('password')}
            className="w-full rounded border p-2"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>

        {errorMessage && (
           <p role="alert" className="text-sm font-medium text-red-600 bg-red-50 p-2 rounded">
             {errorMessage}
           </p>
        )}
        
        <button
          type="submit"
          className="rounded border px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          Se connecter
        </button>
      </form>
    </main>
  )
}

export default LoginPage
