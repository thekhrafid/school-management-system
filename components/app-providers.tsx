'use client';

import React from "react"

import { AuthProvider } from '@/lib/auth-context';
import { I18nProvider } from '@/lib/i18n-context';
import { MessagesProvider } from '@/lib/messages-context';
import { Toaster } from 'sonner';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <I18nProvider>
        <MessagesProvider>
          {children}
          <Toaster />
        </MessagesProvider>
      </I18nProvider>
    </AuthProvider>
  );
}
