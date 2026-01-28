'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'admin' | 'teacher' | 'student' | 'parent' | 'guest';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  className?: string; // for students
  employeeId?: string; // for teachers
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (data: RegisterData) => Promise<void>;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  className?: string;
  employeeId?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demo purposes
const MOCK_USERS: Record<string, User & { password: string }> = {
  'admin@school.com': {
    id: '1',
    name: 'Admin User',
    email: 'admin@school.com',
    role: 'admin',
    password: 'admin123',
  },
  'teacher@school.com': {
    id: '2',
    name: 'John Smith',
    email: 'teacher@school.com',
    role: 'teacher',
    employeeId: 'EMP001',
    password: 'teacher123',
  },
  'student@school.com': {
    id: '3',
    name: 'Alex Johnson',
    email: 'student@school.com',
    role: 'student',
    className: '10-A',
    password: 'student123',
  },
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored user session
    const stored = localStorage.getItem('auth_user');
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem('auth_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const mockUser = MOCK_USERS[email];
    if (!mockUser || mockUser.password !== password) {
      throw new Error('Invalid email or password');
    }

    const userData: User = {
      id: mockUser.id,
      name: mockUser.name,
      email: mockUser.email,
      role: mockUser.role,
      className: mockUser.className,
      employeeId: mockUser.employeeId,
    };

    setUser(userData);
    localStorage.setItem('auth_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth_user');
  };

  const register = async (data: RegisterData) => {
    // Mock registration - in real app would call API
    const newUser: User = {
      id: String(Date.now()),
      name: data.name,
      email: data.email,
      role: data.role,
      className: data.className,
      employeeId: data.employeeId,
    };

    setUser(newUser);
    localStorage.setItem('auth_user', JSON.stringify(newUser));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        logout,
        register,
      }}
    >
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
