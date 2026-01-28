'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'es' | 'hi';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.academics': 'Academics',
    'nav.admissions': 'Admissions',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    'nav.portal': 'Portal',
    'hero.title': 'Chandanpur Secondary High School',
    'hero.subtitle': 'Excellence in Education • Nurturing Leaders • Building Futures',
    'hero.description':
      'Dedicated to providing quality education and fostering academic excellence through innovative teaching methods and student-centered learning approaches.',
    'hero.accessPortal': 'Access Portal',
    'hero.learnAdmissions': 'Learn About Admissions',
    'hero.students': 'Students Enrolled',
    'hero.teachers': 'Expert Teachers',
    'hero.yearsExcellence': 'Years of Excellence',
    'teacher.dashboard': 'Teacher Dashboard',
    'teacher.classes': 'Classes',
    'teacher.attendance': 'Attendance',
    'teacher.marks': 'Marks',
    'teacher.messages': 'Messages',
    'admin.dashboard': 'Admin Dashboard',
    'admin.users': 'Users',
    'admin.classes': 'Classes',
    'admin.reports': 'Reports',
    'admin.settings': 'Settings',
    'student.dashboard': 'Student Portal',
    'footer.quickLinks': 'Quick Links',
    'footer.forStudents': 'For Students',
    'footer.forTeachers': 'For Teachers',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.academics': 'Académicos',
    'nav.admissions': 'Admisiones',
    'nav.contact': 'Contacto',
    'nav.login': 'Iniciar sesión',
    'nav.portal': 'Portal',
    'hero.title': 'Escuela Secundaria Chandanpur',
    'hero.subtitle': 'Excelencia en Educación • Nutriendo Líderes • Construyendo Futuros',
    'hero.description':
      'Dedicado a proporcionar educación de calidad y fomentar la excelencia académica a través de métodos de enseñanza innovadores.',
    'hero.accessPortal': 'Acceder al Portal',
    'hero.learnAdmissions': 'Más sobre Admisiones',
    'hero.students': 'Estudiantes Matriculados',
    'hero.teachers': 'Maestros Expertos',
    'hero.yearsExcellence': 'Años de Excelencia',
    'teacher.dashboard': 'Panel de Profesor',
    'teacher.classes': 'Clases',
    'teacher.attendance': 'Asistencia',
    'teacher.marks': 'Calificaciones',
    'teacher.messages': 'Mensajes',
    'admin.dashboard': 'Panel de Admin',
    'admin.users': 'Usuarios',
    'admin.classes': 'Clases',
    'admin.reports': 'Reportes',
    'admin.settings': 'Configuración',
    'student.dashboard': 'Portal de Estudiante',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.forStudents': 'Para Estudiantes',
    'footer.forTeachers': 'Para Maestros',
  },
  hi: {
    'nav.home': 'होम',
    'nav.about': 'के बारे में',
    'nav.academics': 'शिक्षाविद्',
    'nav.admissions': 'प्रवेश',
    'nav.contact': 'संपर्क',
    'nav.login': 'लॉगिन',
    'nav.portal': 'पोर्टल',
    'hero.title': 'चंदनपुर सेकेंडरी हाई स्कूल',
    'hero.subtitle': 'शिक्षा में उत्कृष्टता • नेताओं का पोषण • भविष्य निर्माण',
    'hero.description':
      'गुणवत्तापूर्ण शिक्षा प्रदान करने और नवीन शिक्षण विधियों के माध्यम से शैक्षणिक उत्कृष्टता को बढ़ावा देने के लिए समर्पित।',
    'hero.accessPortal': 'पोर्टल तक पहुंचें',
    'hero.learnAdmissions': 'प्रवेश के बारे में जानें',
    'hero.students': 'नामांकित छात्र',
    'hero.teachers': 'विशेषज्ञ शिक्षक',
    'hero.yearsExcellence': 'उत्कृष्टता के वर्ष',
    'teacher.dashboard': 'शिक्षक डैशबोर्ड',
    'teacher.classes': 'कक्षाएं',
    'teacher.attendance': 'उपस्थिति',
    'teacher.marks': 'अंक',
    'teacher.messages': 'संदेश',
    'admin.dashboard': 'प्रशासन डैशबोर्ड',
    'admin.users': 'उपयोगकर्ता',
    'admin.classes': 'कक्षाएं',
    'admin.reports': 'रिपोर्ट',
    'admin.settings': 'सेटिंग्स',
    'student.dashboard': 'छात्र पोर्टल',
    'footer.quickLinks': 'त्वरित लिंक',
    'footer.forStudents': 'छात्रों के लिए',
    'footer.forTeachers': 'शिक्षकों के लिए',
  },
};

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('language') as Language;
      if (stored && ['en', 'es', 'hi'].includes(stored)) {
        return stored;
      }
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  const t = (key: string): string => {
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
