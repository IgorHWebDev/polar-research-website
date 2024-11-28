import { BeakerIcon, ChartBarIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Arctic Ice Melt Monitoring',
    description: 'Using satellite imagery and on-site observations to measure and model ice melt rates in the Arctic region.',
    goals: [
      'Assess annual ice loss rates',
      'Model future climate scenarios',
      'Inform policy decisions',
    ],
    image: 'https://images.unsplash.com/photo-1534551767192-78b8dd45b51b?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=2070',
    icon: BeakerIcon,
  },
  {
    name: 'Antarctic Wildlife Conservation',
    description: 'Studying habitats and migration patterns of key Antarctic species to understand environmental impact on biodiversity.',
    goals: [
      'Monitor population dynamics',
      'Identify critical habitats',
      'Develop protection strategies',
    ],
    image: 'https://images.unsplash.com/photo-1551415923-a2297c7fda79?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=2070',
    icon: UserGroupIcon,
  },
  {
    name: 'Climate Data Analysis',
    description: 'Processing and analyzing climate data to understand long-term trends and their implications for polar regions.',
    goals: [
      'Process historical data',
      'Identify climate patterns',
      'Project future trends',
    ],
    image: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1974',
    icon: ChartBarIcon,
  },
];

export default function Projects() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Our Projects</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Current Research Initiatives
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore our ongoing research projects aimed at understanding and protecting Earth's polar regions.
            </p>
          </div>
        </div>
      </div>

      {/* Projects List */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className={`grid grid-cols-1 gap-8 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center gap-x-3">
                    <project.icon className="h-6 w-6 text-blue-600" />
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">{project.name}</h3>
                  </div>
                  <p className="mt-6 text-lg leading-8 text-gray-600">{project.description}</p>
                  <ul className="mt-8 space-y-3">
                    {project.goals.map((goal) => (
                      <li key={goal} className="flex gap-x-3">
                        <svg className="mt-1 h-5 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`flex items-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full rounded-2xl object-cover shadow-xl ring-1 ring-gray-400/10"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-32">
          <div className="relative isolate overflow-hidden bg-blue-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Support Our Research
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Help us continue our vital research by contributing to our projects.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/donate"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Donate Now
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