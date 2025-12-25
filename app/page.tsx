'use client'

import Hero from '@/components/Hero'
import Features from '@/components/Features'
import AboutPreview from '@/components/AboutPreview'
import CTA from '@/components/CTA'
import './page.css'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <AboutPreview />
      <CTA />
    </>
  )
}

