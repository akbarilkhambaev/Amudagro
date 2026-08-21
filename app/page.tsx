'use client'

import Hero from '@/components/Hero'
import Features from '@/components/Features'
import MafRodaProcess from '@/components/MafRodaProcess'
import Shorts from '@/components/Shorts'
import AboutPreview from '@/components/AboutPreview'
import CTA from '@/components/CTA'
import './page.css'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <MafRodaProcess />
      <Shorts />
      <AboutPreview />
      <CTA />
    </>
  )
}

