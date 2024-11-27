import React from 'react'
import { Button } from '../ui/button'

export function CollaborationSection() {
  return (
    <section className="py-24 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Let&apos;s Collaborate
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We&apos;re excited to work with you
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}