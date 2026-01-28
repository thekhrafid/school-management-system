'use client';

import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import AdminNav from './admin-nav';
import OverviewView from './overview-view';
import UsersView from './users-view';
import ClassesView from './classes-view';
import ReportsView from './reports-view';
import SettingsView from './settings-view';

type ViewType = 'overview' | 'users' | 'classes' | 'reports' | 'settings';

export default function AdminDashboard() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const [currentView, setCurrentView] = useState<ViewType>('overview');

  useEffect(() => {
    if (!isLoading && (!isAuthenticated || user?.role !== 'admin')) {
      router.push('/login');
    }
  }, [isAuthenticated, user, isLoading, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated || user?.role !== 'admin') {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminNav currentView={currentView} onViewChange={setCurrentView} />
      <main className="max-w-7xl mx-auto px-4 py-8">
        {currentView === 'overview' && <OverviewView />}
        {currentView === 'users' && <UsersView />}
        {currentView === 'classes' && <ClassesView />}
        {currentView === 'reports' && <ReportsView />}
        {currentView === 'settings' && <SettingsView />}
      </main>
    </div>
  );
}
