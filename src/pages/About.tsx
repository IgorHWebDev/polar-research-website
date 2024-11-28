import { GlobeAltIcon } from '@heroicons/react/24/outline';

const team = [
  {
    name: 'Dr. Emily Thompson',
    role: 'Founder & Chief Scientist',
    bio: 'With over 20 years of experience in glaciology and climate science, Dr. Thompson leads our research initiatives with a focus on ice-sheet dynamics and sea-level rise.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Michael Chen',
    role: 'Director of Operations',
    bio: 'An expert in project management and logistics, Michael ensures our expeditions run smoothly and efficiently, even in the most challenging environments.',
    imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Sarah Patel',
    role: 'Education and Outreach Coordinator',
    bio: 'Sarah develops educational programs and partnerships, fostering connections between scientists, students, and the broader community.',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

const partners = [
  'International Arctic Research Center',
  'Antarctic Conservation Alliance',
  'Global Climate Change Initiative',
  'Universities and Research Institutions Worldwide',
];

export default function About() {
  return (
    <div className="bg-white">
      {/* Mission Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Our Mission</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Dedicated to Polar Research and Conservation
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our mission is to advance scientific understanding of the Arctic and Antarctic regions 
              to promote environmental stewardship, inform policy, and inspire global action against 
              climate change.
            </p>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Our Vision</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Building a Sustainable Future
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We envision a world where the polar regions are preserved, and their crucial role in 
            Earth's climate system is understood and respected by all. By fostering collaboration 
            and innovation, we aim to mitigate the impacts of climate change and ensure a 
            sustainable future.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Meet the dedicated professionals working to advance polar research and conservation.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {team.map((person) => (
              <li key={person.name}>
                <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-base leading-7 text-blue-600">{person.role}</p>
                <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Partners Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Partners</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We collaborate with leading institutions worldwide to advance polar research and conservation.
            </p>
          </div>
          <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {partners.map((partner) => (
              <li key={partner} className="flex items-center gap-x-3">
                <GlobeAltIcon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                <span className="text-base leading-7 text-gray-900">{partner}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-blue-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Join Us in Making a Difference
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Support our mission to protect and understand Earth's polar regions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/donate"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Support Our Mission
              </a>
              <a href="/contact" className="text-sm font-semibold leading-6 text-white">
                Contact Us <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}