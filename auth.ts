import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
//import { sql } from '@vercel/postgres';
//import sql, { empty, join, raw } from "sql-template-tag";
//import sql, { SQLStatement } from 'sql-template-strings';
import {  pool } from '@/app/api/postgres2';


import type { Invoice, User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';
import { fetchJa } from '@/app/lib/API/data'


//const bPool =  pool;
 


async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await fetchJa(email);
    return user.data[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
      
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
      
        
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          
          /*
          const user = {
            id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
            name: 'Jarda',
            email: 'jarda@gmail.com',
            password:'$2b$10$4xB/TqEVPrTCQeNADEg2k.3e/Zhm87A6Uzk6miKifVkc9Qf27wuXO'


          }
          */
          //return user;

            if (!user) return null;
             const passwordsMatch = await bcrypt.compare(password, user.password);
 
          if (passwordsMatch) return user;
        }
 
        console.log('Invalid credentials');
        
 
        return null;
      },
    }),
  ],
});