import { z } from 'zod';
import { ValidationError } from '../../types/common';
import { LoginFormData, RegisterFormData } from '../../types/auth';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters')
});

const registerSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});

export function validateLoginForm(data: LoginFormData): ValidationError[] {
  try {
    loginSchema.parse(data);
    return [];
  } catch (error) {
    if (error instanceof z.ZodError) {
      return error.errors.map(err => ({
        field: err.path.join('.'),
        message: err.message
      }));
    }
    return [{ field: 'form', message: 'Invalid form data' }];
  }
}

export function validateRegisterForm(data: RegisterFormData): ValidationError[] {
  try {
    registerSchema.parse(data);
    return [];
  } catch (error) {
    if (error instanceof z.ZodError) {
      return error.errors.map(err => ({
        field: err.path.join('.'),
        message: err.message
      }));
    }
    return [{ field: 'form', message: 'Invalid form data' }];
  }
}