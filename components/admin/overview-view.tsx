'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Users, BookOpen, Award, TrendingUp } from 'lucide-react';

export default function OverviewView() {
  const stats = [
    {
      icon: Users,
      label: 'Total Students',
      value: '500',
      change: '+2.5%',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: BookOpen,
      label: 'Total Classes',
      value: '25',
      change: 'Stable',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Users,
      label: 'Total Teachers',
      value: '45',
      change: '+1 new',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: Award,
      label: 'Pass Rate',
      value: '96%',
      change: '+3.2%',
      color: 'bg-orange-100 text-orange-600',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Dashboard</h2>
        <p className="text-muted-foreground mt-2">Welcome to the School Management System</p>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-accent mt-2">{stat.change}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-border">
          <CardContent className="pt-6">
            <h3 className="font-bold text-foreground mb-4">Recent Activities</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <div>
                  <p className="font-medium text-foreground">Marks Uploaded</p>
                  <p className="text-sm text-muted-foreground">Class 10-A Mathematics</p>
                </div>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <div>
                  <p className="font-medium text-foreground">New Student Enrolled</p>
                  <p className="text-sm text-muted-foreground">Class 9-B</p>
                </div>
                <p className="text-xs text-muted-foreground">5 hours ago</p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-foreground">Attendance Submitted</p>
                  <p className="text-sm text-muted-foreground">Class 10-B</p>
                </div>
                <p className="text-xs text-muted-foreground">1 day ago</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardContent className="pt-6">
            <h3 className="font-bold text-foreground mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-muted-foreground">Average Attendance</p>
                <p className="font-bold text-accent">94%</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-muted-foreground">Pending Tasks</p>
                <p className="font-bold text-accent">3</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-muted-foreground">Assignments Due</p>
                <p className="font-bold text-accent">7</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
