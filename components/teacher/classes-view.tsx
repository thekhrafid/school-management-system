'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users } from 'lucide-react';

const classes = [
  { id: 1, name: 'Class 10-A', subject: 'Mathematics', students: 45 },
  { id: 2, name: 'Class 10-B', subject: 'Mathematics', students: 42 },
  { id: 3, name: 'Class 9-A', subject: 'English', students: 48 },
  { id: 4, name: 'Class 9-B', subject: 'English', students: 45 },
];

export default function ClassesView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">My Classes</h2>
        <p className="text-muted-foreground mt-2">Manage your assigned classes</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {classes.map((cls) => (
          <Card key={cls.id} className="border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-foreground">{cls.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Subject</p>
                <p className="font-medium text-foreground">{cls.subject}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Students</p>
                <div className="flex items-center gap-2 mt-1">
                  <Users className="w-4 h-4 text-accent" />
                  <p className="font-medium text-foreground">{cls.students} students</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
