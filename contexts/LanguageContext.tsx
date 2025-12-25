'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { Language, translations } from '@/lib/translations'

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof translations.ru
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ru')

  useEffect(() => {
    // Проверяем сохраненный язык или определяем по браузеру
    const savedLang = localStorage.getItem('language') as Language
    if (savedLang && (savedLang === 'ru' || savedLang === 'en' || savedLang === 'uz')) {
      setLanguageState(savedLang)
    } else {
      const browserLang = navigator.language.split('-')[0]
      if (browserLang === 'uz') {
        setLanguageState('uz')
      } else if (browserLang === 'en') {
        setLanguageState('en')
      } else {
        setLanguageState('ru')
      }
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

