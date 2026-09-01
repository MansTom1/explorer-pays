import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { register as registerUser } from '../services/authService'
import { createUserProfile } from '../services/userService'

import {
  registerSchema,
  type RegisterFormData,
} from '../schemas/authSchema'

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = async (data: RegisterFormData) => {
  try {
    const user = await registerUser(
      data.email,
      data.password,
      data.nom,
    )

    await createUserProfile(user.uid, {
      nom: data.nom,
      theme: 'light',
    })

    console.log('Compte créé avec succès')
  } catch (error) {
    console.error(error)
  }
}

  return (
    <main className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-4"
      >
        <h1 className="text-3xl font-bold">
          Créer un compte
        </h1>

        <div>
          <label htmlFor="nom">Nom</label>
          <input
            id="nom"
            type="text"
            {...register('nom')}
            className="w-full rounded border p-2"
          />

          {errors.nom && (
            <p>{errors.nom.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="w-full rounded border p-2"
          />

          {errors.email && (
            <p>{errors.email.message}</p>
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
            <p>{errors.password.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="confirmPassword">
            Confirmer le mot de passe
          </label>
          <input
            id="confirmPassword"
            type="password"
            {...register('confirmPassword')}
            className="w-full rounded border p-2"
          />

          {errors.confirmPassword && (
            <p>{errors.confirmPassword.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="rounded border px-4 py-2"
        >
          Créer mon compte
        </button>
      </form>
    </main>
  )
}

export default RegisterPage