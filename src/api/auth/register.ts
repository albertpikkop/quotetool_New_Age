import { RegisterFormData } from '../../types/auth';
import { AppError } from '../../utils/errorHandling';

export async function register(data: RegisterFormData) {
  try {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new AppError(
        error.message || 'Registration failed',
        'AUTH_REGISTER_ERROR',
        error.details
      );
    }

    return response.json();
  } catch (error) {
    throw new AppError(
      'Registration failed',
      'AUTH_REGISTER_ERROR',
      { originalError: error }
    );
  }
}