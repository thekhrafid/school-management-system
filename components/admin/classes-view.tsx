'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2 } from 'lucide-react';

const classes = [
  { id: 1, name: 'Class 10-A', teacher: 'John Smith', students: 45, section: 'A' },
  { id: 2, name: 'Class 10-B', teacher: 'Sarah Johnson', students: 42, section: 'B' },
  { id: 3, name: 'Class 9-A', teacher: 'Michael Wilson', students: 48, section: 'A' },
  { id: 4, name: 'Class 9-B', teacher: 'Lisa Brown', students: 45, section: 'B' },
  { id: 5, name: 'Class 8-A', teacher: 'David Martin', students: 46, section: 'A' },
];

export default function ClassesView() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Class Management</h2>
          <p className="text-muted-foreground mt-2">Manage all school classes</p>
        </div>
        <Button className="gap-2 bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4" />
          Add Class
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {classes.map((cls) => (
          <Card key={cls.id} className="border-border">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-foreground">{cls.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">Section {cls.section}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-600 bg-transparent">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Class Teacher</p>
                <p className="font-medium text-foreground">{cls.teacher}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Students</p>
                <p className="font-medium text-foreground">{cls.students} students</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
