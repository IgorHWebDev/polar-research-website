'use client'

import React from 'react'
import { Navbar } from '../components/ui/navbar'
import { Footer } from '../components/ui/footer'
import { ScrollToTop } from '../components/ui/scroll-to-top'
import { HeroSection } from '../components/sections/hero'
import { StatsSection } from '../components/sections/stats'
import { ProjectsSection } from '../components/sections/projects'
import { CollaborationSection } from '../components/sections/collaboration'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <section id="hero">
          <HeroSection />
        </section>
        <section id="stats">
          <StatsSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="collaboration">
          <CollaborationSection />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
