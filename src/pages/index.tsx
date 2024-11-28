import { ArrowRightIcon, GlobeAltIcon, BeakerIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Global Research',
    description: 'Conducting research expeditions in both Arctic and Antarctic regions.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Scientific Innovation',
    description: 'Using cutting-edge technology for polar research and monitoring.',
    icon: BeakerIcon,
  },
  {
    name: 'Education',
    description: 'Sharing knowledge and training the next generation of polar researchers.',
    icon: AcademicCapIcon,
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1517783999520-f068d7431a60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Arctic landscape"
          />
          <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:py-40 px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Advancing Polar Research
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Join us in our mission to explore and understand the Arctic and Antarctic regions through 
              scientific research and exploration. Together, we can make a difference in preserving 
              these crucial ecosystems.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="/donate"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Support Our Mission
              </a>
              <a href="/about" className="text-sm font-semibold leading-6 text-white">
                Learn More <ArrowRightIcon className="inline-block h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Our Impact</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Making a Difference in Polar Research
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Make an Impact?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Join our community of researchers, scientists, and supporters in protecting 
              and understanding Earth's polar regions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/donate"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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