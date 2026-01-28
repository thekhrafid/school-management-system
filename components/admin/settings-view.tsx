'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function SettingsView() {
  const [schoolName, setSchoolName] = useState('Chandanpur Secondary High School');
  const [schoolCode, setSchoolCode] = useState('CSHS-2000');
  const [email, setEmail] = useState('info@chandanpurhighschool.edu');
  const [phone, setPhone] = useState('+91 (123) 456-7890');

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Settings</h2>
        <p className="text-muted-foreground mt-2">Manage school settings and configuration</p>
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-foreground">School Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              School Name
            </label>
            <Input
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              className="border-border"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              School Code
            </label>
            <Input
              value={schoolCode}
              onChange={(e) => setSchoolCode(e.target.value)}
              className="border-border"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Email Address
            </label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-border"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Phone Number
            </label>
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border-border"
            />
          </div>
          <Button className="bg-primary hover:bg-primary/90">Save Changes</Button>
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Academic Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium text-foreground">Academic Year</p>
              <p className="text-sm text-muted-foreground">2024-2025</p>
            </div>
            <Button variant="outline">Change</Button>
          </div>
          <div className="flex justify-between items-center pt-4 border-t border-border">
            <div>
              <p className="font-medium text-foreground">Grading System</p>
              <p className="text-sm text-muted-foreground">Point-based (0-100)</p>
            </div>
            <Button variant="outline">Configure</Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-foreground">System Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium text-foreground">Maintenance Mode</p>
              <p className="text-sm text-muted-foreground">System is running normally</p>
            </div>
            <Button variant="outline">Toggle</Button>
          </div>
          <div className="flex justify-between items-center pt-4 border-t border-border">
            <div>
              <p className="font-medium text-foreground">Backup</p>
              <p className="text-sm text-muted-foreground">Last backup: Jan 28, 2025</p>
            </div>
            <Button variant="outline">Backup Now</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
