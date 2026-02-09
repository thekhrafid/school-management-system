'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { useI18n } from '@/lib/i18n-context';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, X, LogOut, User } from 'lucide-react';
import LanguageSwitcher from '@/components/language-switcher';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const { t } = useI18n();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const getDashboardLink = () => {
    switch (user?.role) {
      case 'admin':
        return '/admin';
      case 'teacher':
        return '/teacher';
      case 'student':
        return '/student';
      default:
        return '/';
    }
  };

  return (
    <nav className="border-b border-border bg-card sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold">
              CS
            </div>
            <span className="hidden sm:inline font-bold text-lg text-foreground">
              Chandanpur High School
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              {t('nav.home')}
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              {t('nav.about')}
            </Link>
            <Link href="/academics" className="text-foreground hover:text-primary transition-colors">
              {t('nav.academics')}
            </Link>
            <Link href="/admissions" className="text-foreground hover:text-primary transition-colors">
              {t('nav.admissions')}
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              {t('nav.contact')}
            </Link>
          </div>

          {/* Auth Section */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            {isAuthenticated && user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2 bg-primary">
                    <User className="w-4 h-4" />
                    {user.name}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href={getDashboardLink()}>
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="outline">{t('nav.login')}</Button>
                </Link>
                <Link href="/login">
                  <Button className="bg-primary hover:bg-primary/90">{t('nav.portal')}</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center rounded-md text-foreground hover:bg-accent p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block px-3 py-2 text-foreground hover:bg-accent rounded-md"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-foreground hover:bg-accent rounded-md"
            >
              About
            </Link>
            <Link
              href="/academics"
              className="block px-3 py-2 text-foreground hover:bg-accent rounded-md"
            >
              Academics
            </Link>
            <Link
              href="/admissions"
              className="block px-3 py-2 text-foreground hover:bg-accent rounded-md"
            >
              Admissions
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-foreground hover:bg-accent rounded-md"
            >
              Contact
            </Link>
            {!isAuthenticated ? (
              <>
                <Link href="/login" className="block">
                  <Button variant="outline" className="w-full bg-transparent">
                    Login
                  </Button>
                </Link>
                <Link href="/login" className="block">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Portal
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link href={getDashboardLink()} className="block">
                  <Button variant="outline" className="w-full bg-transparent">
                    Dashboard
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="w-full text-red-600 bg-transparent"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
