'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const messages = [
  {
    id: 1,
    from: 'Admin',
    subject: 'Important Notice',
    preview: 'Please note the new schedule...',
    date: 'Jan 28',
    unread: true,
  },
  {
    id: 2,
    from: 'Principal',
    subject: 'Staff Meeting',
    preview: 'There will be a staff meeting on...',
    date: 'Jan 27',
    unread: true,
  },
  {
    id: 3,
    from: 'Accounts',
    subject: 'Salary Slip',
    preview: 'Your salary slip for January...',
    date: 'Jan 25',
    unread: false,
  },
];

export default function MessagesView() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Messages</h2>
          <p className="text-muted-foreground mt-2">Manage your communications</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 gap-2">
          <MessageCircle className="w-4 h-4" />
          New Message
        </Button>
      </div>

      <div className="space-y-2">
        {messages.map((msg) => (
          <Card
            key={msg.id}
            className={`border-border cursor-pointer hover:shadow-md transition-shadow ${
              msg.unread ? 'bg-accent/5' : ''
            }`}
          >
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-5 gap-4 items-center">
                <div>
                  <p className={msg.unread ? 'font-bold text-foreground' : 'font-medium text-foreground'}>
                    {msg.from}
                  </p>
                </div>
                <div className="md:col-span-2">
                  <p className={msg.unread ? 'font-semibold text-foreground' : 'text-foreground'}>
                    {msg.subject}
                  </p>
                  <p className="text-sm text-muted-foreground truncate">
                    {msg.preview}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground text-right">{msg.date}</p>
                </div>
                {msg.unread && (
                  <div className="w-3 h-3 rounded-full bg-accent" />
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
