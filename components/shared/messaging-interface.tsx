'use client';

import { useState } from 'react';
import { useMessages } from '@/lib/messages-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Trash2, MessageSquare } from 'lucide-react';

interface MessagingInterfaceProps {
  userId: string;
  userName: string;
}

export default function MessagingInterface({
  userId,
  userName,
}: MessagingInterfaceProps) {
  const { messages, sendMessage, deleteMessage, markAsRead } = useMessages();
  const [selectedMessageId, setSelectedMessageId] = useState<string | null>(null);
  const [newMessageTo, setNewMessageTo] = useState('');
  const [newMessageSubject, setNewMessageSubject] = useState('');
  const [newMessageBody, setNewMessageBody] = useState('');
  const [showCompose, setShowCompose] = useState(false);

  const userMessages = messages.filter((msg) => msg.toId === userId);
  const selectedMessage = messages.find((msg) => msg.id === selectedMessageId);

  const handleSendMessage = () => {
    if (newMessageTo && newMessageSubject && newMessageBody) {
      sendMessage({
        from: userName,
        fromId: userId,
        to: newMessageTo,
        toId: `user-${newMessageTo}`,
        subject: newMessageSubject,
        body: newMessageBody,
        read: false,
      });
      setNewMessageTo('');
      setNewMessageSubject('');
      setNewMessageBody('');
      setShowCompose(false);
    }
  };

  const handleSelectMessage = (messageId: string) => {
    setSelectedMessageId(messageId);
    markAsRead(messageId);
  };

  return (
    <div className="grid md:grid-cols-3 gap-6 h-96">
      {/* Message List */}
      <Card className="border-border md:col-span-1">
        <CardHeader className="pb-3">
          <CardTitle className="text-foreground flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            Messages
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 max-h-80 overflow-y-auto">
          <Button
            onClick={() => setShowCompose(!showCompose)}
            className="w-full bg-primary hover:bg-primary/90 mb-4"
          >
            Compose
          </Button>

          {userMessages.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-4">
              No messages
            </p>
          ) : (
            userMessages.map((msg) => (
              <div
                key={msg.id}
                onClick={() => handleSelectMessage(msg.id)}
                className={`p-3 rounded-lg cursor-pointer transition-colors ${
                  selectedMessageId === msg.id
                    ? 'bg-primary/10'
                    : 'hover:bg-accent/10'
                } ${!msg.read ? 'border-l-4 border-accent' : ''}`}
              >
                <p className={msg.read ? 'text-sm' : 'text-sm font-semibold'}>
                  {msg.from}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {msg.subject}
                </p>
              </div>
            ))
          )}
        </CardContent>
      </Card>

      {/* Message Detail / Compose */}
      <Card className="border-border md:col-span-2">
        <CardHeader className="pb-3">
          <CardTitle className="text-foreground">
            {showCompose ? 'Compose Message' : 'Message'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {showCompose ? (
            <>
              <div>
                <label className="text-sm font-medium text-foreground">
                  To
                </label>
                <Input
                  placeholder="Recipient name"
                  value={newMessageTo}
                  onChange={(e) => setNewMessageTo(e.target.value)}
                  className="mt-1 border-border"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">
                  Subject
                </label>
                <Input
                  placeholder="Message subject"
                  value={newMessageSubject}
                  onChange={(e) => setNewMessageSubject(e.target.value)}
                  className="mt-1 border-border"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  placeholder="Type your message..."
                  value={newMessageBody}
                  onChange={(e) => setNewMessageBody(e.target.value)}
                  rows={4}
                  className="w-full mt-1 p-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={handleSendMessage}
                  className="bg-primary hover:bg-primary/90 gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowCompose(false)}
                >
                  Cancel
                </Button>
              </div>
            </>
          ) : selectedMessage ? (
            <>
              <div>
                <p className="text-sm text-muted-foreground">From</p>
                <p className="font-semibold text-foreground">
                  {selectedMessage.from}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Subject</p>
                <p className="font-semibold text-foreground">
                  {selectedMessage.subject}
                </p>
              </div>
              <div className="bg-accent/5 p-3 rounded-lg">
                <p className="text-foreground">{selectedMessage.body}</p>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={() => deleteMessage(selectedMessage.id)}
                  variant="outline"
                  className="text-red-600 gap-2"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete
                </Button>
              </div>
            </>
          ) : (
            <p className="text-muted-foreground text-center py-8">
              Select a message to read
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
