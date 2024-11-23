import React from 'react'
import { Button } from '../ui/button'

export function HeroSection() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Transform Your Vision Into Reality
        </h1>
        <p className="text-xl mb-8 text-muted-foreground">
          Harnessing innovative thinking and cutting-edge technology to create impactful solutions for a better tomorrow.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg">Get Started</Button>
          <Button variant="outline" size="lg">Learn More</Button>
        </div>
      </div>
    </div>
  )
}