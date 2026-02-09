'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center banner">
      <div className="overly w-full h-full  text-center px-4 py-12">
        <div className="">
          <h1 className="text-5xl md:text-7xl font-bold text-white md:px-50">
            <span className='text-green-500'>Chandanpur</span> Secondary High School
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto py-4 text-balance">
            Excellence in Education • <span className='text-green-500'>Nurturing Leaders</span> • Building Futures
          </p>
        </div>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
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
            <Button size="lg" className='gap-2 bg-primary hover:bg-primary/90'>
              Learn About Admissions
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-16 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">500+</div>
            <p className="text-sm text-muted-foreground">Students Enrolled</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">45+</div>
            <p className="text-sm text-muted-foreground">Expert Teachers</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">25+</div>
            <p className="text-sm text-muted-foreground">Years of Excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
}
