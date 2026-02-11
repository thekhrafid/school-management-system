'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle } from 'lucide-react';

const attendanceData = [
  { id: 1, date: 'Jan 28, 2025', class: 'Class 10-A', present: 43, absent: 2, rate: '95.6%' },
  { id: 2, date: 'Jan 27, 2025', class: 'Class 10-A', present: 44, absent: 1, rate: '97.8%' },
  { id: 3, date: 'Jan 28, 2025', class: 'Class 9-A', present: 46, absent: 2, rate: '95.8%' },
  { id: 4, date: 'Jan 27, 2025', class: 'Class 9-A', present: 47, absent: 1, rate: '97.9%' },
];

export default function AttendanceView() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Attendance Management</h2>
          <p className="text-muted-foreground mt-2">Mark and track student attendance</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          Mark Attendance
        </Button>
      </div>

      <div className="space-y-4">
        {attendanceData.map((record) => (
          <Card key={record.id} className="border-border">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-5 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p className="font-medium text-foreground">{record.date}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Class</p>
                  <p className="font-medium text-foreground">{record.class}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Present</p>
                  <div className="flex items-center gap-1 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-700" />
                    <p className="font-medium text-foreground">{record.present}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Absent</p>
                  <div className="flex items-center gap-1 mt-1">
                    <XCircle className="w-4 h-4 text-red-600" />
                    <p className="font-medium text-foreground">{record.absent}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Rate</p>
                  <p className="font-medium text-accent">{record.rate}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
