import React from 'react'
import { Button } from '../ui/button'

export function ProjectsSection() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Our Featured Projects</h2>
        <p className="text-muted-foreground">
          Discover how we're making a difference through technology and innovation.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 border rounded-lg">
          <div className="text-4xl mb-4">🤖</div>
          <h3 className="text-xl font-bold mb-2">AI for Social Good</h3>
          <p className="text-muted-foreground mb-4">
            Leveraging artificial intelligence to solve pressing social challenges.
          </p>
          <Button variant="link">Learn more</Button>
        </div>
        <div className="p-6 border rounded-lg">
          <div className="text-4xl mb-4">🌱</div>
          <h3 className="text-xl font-bold mb-2">Sustainable Futures</h3>
          <p className="text-muted-foreground mb-4">
            Creating eco-friendly technology solutions for a better tomorrow.
          </p>
          <Button variant="link">Learn more</Button>
        </div>
        <div className="p-6 border rounded-lg">
          <div className="text-4xl mb-4">📚</div>
          <h3 className="text-xl font-bold mb-2">Educational Empowerment</h3>
          <p className="text-muted-foreground mb-4">
            Making quality education accessible through innovative technology.
          </p>
          <Button variant="link">Learn more</Button>
        </div>
      </div>
    </div>
  )
}