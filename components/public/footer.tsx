'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-green-700 text-sidebar-foreground">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-sidebar-primary flex items-center justify-center text-sidebar-primary-foreground font-bold">
                CS
              </div>
              <span className="font-bold">Chandanpur High School</span>
            </div>
            <p className="text-sm text-sidebar-foreground/70 mb-4">
              Committed to excellence in education and student development
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="hover:text-sidebar-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-sidebar-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-sidebar-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-sidebar-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/academics"
                  className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors"
                >
                  Academics
                </Link>
              </li>
              <li>
                <Link
                  href="/admissions"
                  className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* For Students */}
          <div>
            <h3 className="font-semibold mb-4">For Students</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/login"
                  className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors"
                >
                  Student Portal
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors"
                >
                  Exam Results
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors"
                >
                  Calendar
                </Link>
              </li>
            </ul>
          </div>

          {/* For Teachers */}
          <div>
            <h3 className="font-semibold mb-4">For Teachers</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/login"
                  className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors"
                >
                  Teacher Portal
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors"
                >
                  Curriculum
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors"
                >
                  Professional Development
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sidebar-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-sidebar-foreground/70">
            <p>&copy; 2025 Chandanpur Secondary High School. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link
                href="#"
                className="hover:text-sidebar-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="hover:text-sidebar-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
