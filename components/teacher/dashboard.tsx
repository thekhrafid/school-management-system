'use client';

import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import TeacherNav from './teacher-nav';
import ClassesView from './classes-view';
import AttendanceView from './attendance-view';
import MarksView from './marks-view';
import MessagesView from './messages-view';

type ViewType = 'dashboard' | 'classes' | 'attendance' | 'marks' | 'messages';

export default function TeacherDashboard() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated || user?.role !== 'teacher') {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <TeacherNav currentView={currentView} onViewChange={setCurrentView} />
      <main className="max-w-7xl mx-auto px-4 py-8">
        {currentView === 'dashboard' && (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Welcome, {user.name}</h1>
              <p className="text-muted-foreground mt-2">
                Employee ID: {user.employeeId}
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-muted-foreground text-sm">Total Classes</p>
                <p className="text-3xl font-bold text-accent mt-2">5</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-muted-foreground text-sm">Total Students</p>
                <p className="text-3xl font-bold text-accent mt-2">180</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-muted-foreground text-sm">Attendance Rate</p>
                <p className="text-3xl font-bold text-accent mt-2">94%</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-muted-foreground text-sm">Pending Tasks</p>
                <p className="text-3xl font-bold text-accent mt-2">3</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Upcoming Classes
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <div>
                      <p className="font-medium text-foreground">Class 10-A</p>
                      <p className="text-sm text-muted-foreground">9:00 AM - Mathematics</p>
                    </div>
                    <p className="text-sm text-accent font-medium">Today</p>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border">
                    <div>
                      <p className="font-medium text-foreground">Class 9-B</p>
                      <p className="text-sm text-muted-foreground">10:30 AM - English</p>
                    </div>
                    <p className="text-sm text-accent font-medium">Today</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Quick Actions
                </h2>
                <div className="space-y-2">
                  <button className="w-full text-left px-4 py-2 hover:bg-accent/10 rounded-lg text-foreground transition-colors">
                    Mark Attendance
                  </button>
                  <button className="w-full text-left px-4 py-2 hover:bg-accent/10 rounded-lg text-foreground transition-colors">
                    Upload Marks
                  </button>
                  <button className="w-full text-left px-4 py-2 hover:bg-accent/10 rounded-lg text-foreground transition-colors">
                    Send Message to Class
                  </button>
                  <button className="w-full text-left px-4 py-2 hover:bg-accent/10 rounded-lg text-foreground transition-colors">
                    Create Assignment
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentView === 'classes' && <ClassesView />}
        {currentView === 'attendance' && <AttendanceView />}
        {currentView === 'marks' && <MarksView />}
        {currentView === 'messages' && <MessagesView />}
      </main>
    </div>
  );
}
