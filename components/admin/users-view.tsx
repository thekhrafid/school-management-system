'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Edit, Trash2, Plus } from 'lucide-react';

const users = [
  { id: 1, name: 'John Smith', email: 'john.smith@school.com', role: 'Teacher', status: 'Active' },
  { id: 2, name: 'Sarah Johnson', email: 'sarah.j@school.com', role: 'Teacher', status: 'Active' },
  { id: 3, name: 'Alex Brown', email: 'alex.b@student.com', role: 'Student', status: 'Active' },
  { id: 4, name: 'Emily Davis', email: 'emily.d@student.com', role: 'Student', status: 'Inactive' },
  { id: 5, name: 'Michael Wilson', email: 'michael.w@school.com', role: 'Teacher', status: 'Active' },
];

export default function UsersView() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-foreground">User Management</h2>
          <p className="text-muted-foreground mt-2">Manage all school users and permissions</p>
        </div>
        <Button className="gap-2 bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4" />
          Add User
        </Button>
      </div>

      <Card className="border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-card border-b border-border">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-foreground">Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-foreground">Email</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-foreground">Role</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-foreground">Status</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-accent/5 transition-colors">
                  <td className="px-6 py-4 text-sm text-foreground">{user.name}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{user.email}</td>
                  <td className="px-6 py-4 text-sm">
                    <Badge variant="outline" className="bg-primary/10">
                      {user.role}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <Badge
                      variant={user.status === 'Active' ? 'default' : 'secondary'}
                      className={
                        user.status === 'Active'
                          ? 'bg-green-100 text-green-800 border-green-200'
                          : 'bg-gray-100 text-gray-800 border-gray-200'
                      }
                    >
                      {user.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-1 bg-transparent">
                        <Edit className="w-4 h-4" />
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-1 text-red-600 hover:text-red-700 bg-transparent"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
