'use client';

import React, { createContext, useContext, useState } from 'react';

export interface Message {
  id: string;
  from: string;
  fromId: string;
  to: string;
  toId: string;
  subject: string;
  body: string;
  timestamp: Date;
  read: boolean;
  attachments?: string[];
}

interface MessagesContextType {
  messages: Message[];
  sendMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void;
  markAsRead: (messageId: string) => void;
  deleteMessage: (messageId: string) => void;
  getConversation: (userId: string) => Message[];
  getUnreadCount: () => number;
}

const MessagesContext = createContext<MessagesContextType | undefined>(undefined);

// Initial mock messages
const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    from: 'Admin',
    fromId: 'admin-1',
    to: 'John Smith',
    toId: 'teacher-1',
    subject: 'Important Notice',
    body: 'Please submit your grades by Friday. The deadline is important for our records.',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    read: false,
  },
  {
    id: '2',
    from: 'Principal',
    fromId: 'principal-1',
    to: 'John Smith',
    toId: 'teacher-1',
    subject: 'Staff Meeting',
    body: 'There will be a staff meeting on Thursday at 3:00 PM in the conference room.',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
    read: true,
  },
  {
    id: '3',
    from: 'John Smith',
    fromId: 'teacher-1',
    to: 'Admin',
    toId: 'admin-1',
    subject: 'Re: Important Notice',
    body: 'Thank you for the reminder. I will submit all grades by Friday end of day.',
    timestamp: new Date(Date.now() - 20 * 60 * 60 * 1000),
    read: true,
  },
];

export function MessagesProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);

  const sendMessage = (message: Omit<Message, 'id' | 'timestamp'>) => {
    const newMessage: Message = {
      ...message,
      id: String(Date.now()),
      timestamp: new Date(),
    };
    setMessages([newMessage, ...messages]);
  };

  const markAsRead = (messageId: string) => {
    setMessages(
      messages.map((msg) =>
        msg.id === messageId ? { ...msg, read: true } : msg
      )
    );
  };

  const deleteMessage = (messageId: string) => {
    setMessages(messages.filter((msg) => msg.id !== messageId));
  };

  const getConversation = (userId: string): Message[] => {
    return messages.filter(
      (msg) => msg.fromId === userId || msg.toId === userId
    );
  };

  const getUnreadCount = (): number => {
    return messages.filter((msg) => !msg.read).length;
  };

  return (
    <MessagesContext.Provider
      value={{
        messages,
        sendMessage,
        markAsRead,
        deleteMessage,
        getConversation,
        getUnreadCount,
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
}

export function useMessages() {
  const context = useContext(MessagesContext);
  if (context === undefined) {
    throw new Error('useMessages must be used within a MessagesProvider');
  }
  return context;
}
