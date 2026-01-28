'use client';

import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LogOut, User, BookOpen, TrendingUp, Download } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function StudentPage() {
  const { user, isAuthenticated, isLoading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && (!isAuthenticated || user?.role !== 'student')) {
      router.push('/login');
    }
  }, [isAuthenticated, user, isLoading, router]);

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated || user?.role !== 'student') {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold">
              CS
            </div>
            <h1 className="hidden sm:block font-bold text-lg text-foreground">
              Student Portal
            </h1>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2 bg-transparent">
                <User className="w-4 h-4" />
                {user?.name}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem disabled className="text-xs">
                {user?.email}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Welcome, {user?.name}</h1>
            <p className="text-muted-foreground mt-2">
              Class: {user?.className}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            <Card className="border-border">
              <CardContent className="pt-6">
                <p className="text-muted-foreground text-sm">Overall Score</p>
                <p className="text-3xl font-bold text-accent mt-2">78%</p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="pt-6">
                <p className="text-muted-foreground text-sm">Attendance</p>
                <p className="text-3xl font-bold text-accent mt-2">94%</p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="pt-6">
                <p className="text-muted-foreground text-sm">Assignments</p>
                <p className="text-3xl font-bold text-accent mt-2">12/15</p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="pt-6">
                <p className="text-muted-foreground text-sm">Exams Done</p>
                <p className="text-3xl font-bold text-accent mt-2">4/6</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-border">
              <CardContent className="pt-6">
                <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-accent" />
                  My Subjects
                </h3>
                <div className="space-y-2">
                  {['Mathematics', 'English', 'Science', 'Social Studies', 'Hindi'].map((subject) => (
                    <div
                      key={subject}
                      className="flex justify-between items-center pb-2 border-b border-border last:border-0"
                    >
                      <span className="text-foreground">{subject}</span>
                      <span className="text-accent font-medium">75%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  Recent Activities
                </h3>
                <div className="space-y-3">
                  <div className="pb-3 border-b border-border">
                    <p className="text-sm font-medium text-foreground">
                      Marks posted for Unit Test
                    </p>
                    <p className="text-xs text-muted-foreground">2 days ago</p>
                  </div>
                  <div className="pb-3 border-b border-border">
                    <p className="text-sm font-medium text-foreground">
                      New assignment submitted
                    </p>
                    <p className="text-xs text-muted-foreground">5 days ago</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Attendance marked for week
                    </p>
                    <p className="text-xs text-muted-foreground">1 week ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-border">
            <CardContent className="pt-6">
              <h3 className="font-bold text-foreground mb-4">Download Documents</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Button variant="outline" className="gap-2 bg-transparent">
                  <Download className="w-4 h-4" />
                  Report Card
                </Button>
                <Button variant="outline" className="gap-2 bg-transparent">
                  <Download className="w-4 h-4" />
                  Admit Card
                </Button>
                <Button variant="outline" className="gap-2 bg-transparent">
                  <Download className="w-4 h-4" />
                  Certificates
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
