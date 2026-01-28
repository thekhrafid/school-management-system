'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const news = [
  {
    id: 1,
    title: 'Annual Science Fair 2025 - A Showcase of Innovation',
    category: 'Events',
    date: 'January 28, 2025',
    excerpt:
      'Our students presented groundbreaking science projects demonstrating exceptional research and innovation skills.',
  },
  {
    id: 2,
    title: 'Board Examination Results Released',
    category: 'Academic',
    date: 'January 25, 2025',
    excerpt:
      'Excellent results with 96% pass rate. Congratulations to all our students on their outstanding performance.',
  },
  {
    id: 3,
    title: 'Sports Championship Victory',
    category: 'Sports',
    date: 'January 20, 2025',
    excerpt:
      'Our sports team won the regional championship with outstanding performances across all categories.',
  },
];

export default function News() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Latest News & Updates
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest happenings at our school
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {news.map((item) => (
            <Card key={item.id} className="border-border hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="outline">{item.category}</Badge>
                </div>
                <CardTitle className="text-foreground line-clamp-2">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {item.excerpt}
                </p>
                <div className="flex items-center text-muted-foreground text-sm mt-auto">
                  <Calendar className="w-4 h-4 mr-2" />
                  {item.date}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="gap-2 bg-transparent">
            View All News
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
