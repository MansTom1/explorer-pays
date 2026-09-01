import { z } from 'zod'        /*Regels de validation pour le formulaire d'inscription */

export const registerSchema = z
  .object({
    nom: z
      .string()
      .min(2, { message: 'Le nom doit contenir au moins 2 caractères' }),

    email: z
      .email({ message: 'Adresse email invalide' }),

    password: z
      .string()
      .min(6, { message: 'Le mot de passe doit contenir au moins 6 caractères' }),

    confirmPassword: z
      .string(),
  })
  .refine(
    (data) => data.password === data.confirmPassword,
    {
      message: 'Les mots de passe ne correspondent pas',
      path: ['confirmPassword'],
    },
  )

export type RegisterFormData = z.infer<typeof registerSchema>