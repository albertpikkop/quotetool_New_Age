import { z } from 'zod';
import { ValidationError } from '../types';

export function formatValidationErrors(error: z.ZodError): ValidationError[] {
  return error.errors.map(err => ({
    field: err.path.join('.'),
    message: err.message
  }));
}

export function validateField<T>(
  schema: z.ZodSchema<T>,
  value: unknown
): ValidationError | null {
  const result = schema.safeParse(value);
  if (!result.success) {
    const [error] = formatValidationErrors(result.error);
    return error;
  }
  return null;
}