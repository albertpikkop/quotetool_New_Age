import React, { createContext, useContext, useState, useCallback } from 'react';
import { User, AuthState, LoginFormData, RegisterFormData } from '../../types/auth';
import { useHapticFeedback } from '../../hooks/useHapticFeedback';

interface AuthContextType extends AuthState {
  login: (data: LoginFormData) => Promise<void>;
  register: (data: RegisterFormData) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: false,
  });
  const { triggerHaptic } = useHapticFeedback();

  const login = useCallback(async (data: LoginFormData) => {
    setState(prev => ({ ...prev, isLoading: true }));
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      const user: User = {
        id: '1',
        email: data.email,
        firstName: 'John',
        lastName: 'Doe',
        createdAt: new Date(),
        updatedAt: new Date()
      };
      setState({
        user,
        isAuthenticated: true,
        isLoading: false,
      });
      triggerHaptic('medium');
    } catch (error) {
      setState(prev => ({ ...prev, isLoading: false }));
      throw error;
    }
  }, [triggerHaptic]);

  const register = useCallback(async (data: RegisterFormData) => {
    setState(prev => ({ ...prev, isLoading: true }));
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      const user: User = {
        id: '1',
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      setState({
        user,
        isAuthenticated: true,
        isLoading: false,
      });
      triggerHaptic('medium');
    } catch (error) {
      setState(prev => ({ ...prev, isLoading: false }));
      throw error;
    }
  }, [triggerHaptic]);

  const logout = useCallback(() => {
    setState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
    triggerHaptic('light');
  }, [triggerHaptic]);

  return (
    <AuthContext.Provider value={{ ...state, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}