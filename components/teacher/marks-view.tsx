'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const marksData = [
  { subject: 'Mathematics', exam: 'Unit Test 1', date: 'Jan 20', submitted: true, students: 45 },
  { subject: 'English', exam: 'Unit Test 1', date: 'Jan 22', submitted: true, students: 48 },
  { subject: 'Science', exam: 'Practical Exam', date: 'Jan 25', submitted: false, students: 43 },
  { subject: 'Social Studies', exam: 'Unit Test 2', date: 'Jan 28', submitted: false, students: 44 },
];

export default function MarksView() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Marks Management</h2>
          <p className="text-muted-foreground mt-2">Upload and manage student marks</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          Upload Marks
        </Button>
      </div>

      <div className="space-y-4">
        {marksData.map((item, index) => (
          <Card key={index} className="border-border">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-5 gap-4 items-center">
                <div>
                  <p className="text-sm text-muted-foreground">Subject</p>
                  <p className="font-medium text-foreground">{item.subject}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Exam</p>
                  <p className="font-medium text-foreground">{item.exam}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p className="font-medium text-foreground">{item.date}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        item.submitted ? 'bg-green-600' : 'bg-yellow-600'
                      }`}
                    />
                    <p className="text-sm font-medium text-foreground">
                      {item.submitted ? 'Submitted' : 'Pending'}
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  {item.submitted ? 'View' : 'Submit'}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
