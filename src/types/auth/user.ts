import { z } from 'zod';

export const userSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export type User = z.infer<typeof userSchema>;

export interface UserProfile extends User {
  preferences: {
    language: string;
    notifications: boolean;
    theme: 'light' | 'dark';
  };
}