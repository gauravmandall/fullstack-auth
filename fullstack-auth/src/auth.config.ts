import type { NextAuthConfig } from 'next-auth'
import credentials from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

import { LoginSchema } from '@/schemas'
import { getUserByEmail } from '@/data/user'

export default {
  providers: [
    credentials({
      async authorize(credentials) {
        const validateFields = LoginSchema.safeParse(credentials)

        if (validateFields.success) {
          const { email, password } = validateFields.data

          const user = await getUserByEmail(email)
          if (!user || !user.password) return null

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) return user;

        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig
