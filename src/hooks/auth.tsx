import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface AuthState {
  email: string
}

interface SignInCredential {
  email: string;
  password: string;
}

interface AuthContextData {
  signIn(credentials: SignInCredential): Promise<void>
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState)

  const signIn = useCallback(async ({ email, password }) => {

    if (email === 'radelphino@gmail.com') {
      const response = await api.get('users/1')

      const userMail = response.data.email

      setData({ email: userMail })

      return userMail
    }
  }, [])

  return (
    <AuthContext.Provider value={{ signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an Auth Provider');
  }

  return context;
}
