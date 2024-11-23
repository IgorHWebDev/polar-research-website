import { HeroSection } from './components/sections/hero'
import { StatsSection } from './components/sections/stats'
import { ProjectsSection } from './components/sections/projects'

export default function App() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <StatsSection />
        <ProjectsSection />
      </main>
    </div>
  )
}