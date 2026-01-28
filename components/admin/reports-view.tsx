'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';

const reports = [
  {
    id: 1,
    name: 'Academic Performance Report',
    description: 'Comprehensive analysis of student performance',
    date: 'Jan 28, 2025',
  },
  {
    id: 2,
    name: 'Attendance Report',
    description: 'Monthly attendance statistics for all classes',
    date: 'Jan 27, 2025',
  },
  {
    id: 3,
    name: 'Financial Report',
    description: 'School financial statements and budgets',
    date: 'Jan 25, 2025',
  },
  {
    id: 4,
    name: 'Staff Report',
    description: 'Complete staff information and credentials',
    date: 'Jan 20, 2025',
  },
];

export default function ReportsView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Reports</h2>
        <p className="text-muted-foreground mt-2">View and download school reports</p>
      </div>

      <div className="space-y-4">
        {reports.map((report) => (
          <Card key={report.id} className="border-border">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="flex gap-4 flex-1">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{report.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{report.description}</p>
                    <p className="text-xs text-muted-foreground mt-2">{report.date}</p>
                  </div>
                </div>
                <Button className="gap-2 bg-primary hover:bg-primary/90 flex-shrink-0">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
