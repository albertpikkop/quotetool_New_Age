import { LoginFormData } from '../../types/auth';
import { AppError } from '../../utils/errorHandling';

export async function login(credentials: LoginFormData) {
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new AppError(
        error.message || 'Login failed',
        'AUTH_LOGIN_ERROR',
        error.details
      );
    }

    return response.json();
  } catch (error) {
    throw new AppError(
      'Login failed',
      'AUTH_LOGIN_ERROR',
      { originalError: error }
    );
  }
}

export async function logout() {
  try {
    const response = await fetch('/api/auth/logout', {
      method: 'POST',
    });

    if (!response.ok) {
      throw new AppError('Logout failed', 'AUTH_LOGOUT_ERROR');
    }
  } catch (error) {
    throw new AppError(
      'Logout failed',
      'AUTH_LOGOUT_ERROR',
      { originalError: error }
    );
  }
}