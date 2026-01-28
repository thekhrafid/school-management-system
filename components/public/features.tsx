'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Users,
  BookMarked,
  Award,
  Laptop,
  Heart,
  Globe,
} from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Expert Faculty',
    description:
      'Highly qualified and experienced teachers committed to student success',
  },
  {
    icon: BookMarked,
    title: 'Comprehensive Curriculum',
    description:
      'Well-designed academic programs following national standards',
  },
  {
    icon: Award,
    title: 'Academic Excellence',
    description:
      'Consistent track record of high achievement and student success',
  },
  {
    icon: Laptop,
    title: 'Modern Infrastructure',
    description:
      'State-of-the-art facilities and technology-enabled learning',
  },
  {
    icon: Heart,
    title: 'Student Wellbeing',
    description:
      'Holistic development focusing on physical and mental health',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description:
      'Preparing students for success in an interconnected world',
  },
];

export default function Features() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Why Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover what makes Chandanpur Secondary High School the preferred choice for quality education
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
