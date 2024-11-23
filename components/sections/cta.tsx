import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Join Us in Shaping the Future
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Together, we can create innovative solutions that make a lasting impact on the world.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              Start Collaborating
            </Button>
            <Button variant="ghost" size="lg" className="text-white hover:bg-gray-800">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}