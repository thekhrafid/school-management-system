'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 px-4 py-20">
      <div className="max-w-4xl w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground text-balance">
            Chandanpur Secondary High School
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Excellence in Education • Nurturing Leaders • Building Futures
          </p>
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Dedicated to providing quality education and fostering academic excellence through innovative teaching methods and student-centered learning approaches.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link href="/login">
            <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
              <BookOpen className="w-5 h-5" />
              Access Portal
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="/admissions">
            <Button size="lg" variant="outline">
              Learn About Admissions
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-16 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-accent">500+</div>
            <p className="text-sm text-muted-foreground">Students Enrolled</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-accent">45+</div>
            <p className="text-sm text-muted-foreground">Expert Teachers</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-accent">25+</div>
            <p className="text-sm text-muted-foreground">Years of Excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
}
