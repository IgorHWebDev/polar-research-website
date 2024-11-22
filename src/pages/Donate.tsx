import { CreditCardIcon, BanknotesIcon, BuildingLibraryIcon } from '@heroicons/react/24/outline';

const donationOptions = [
  {
    name: 'One-Time Donation',
    description: 'Make a single contribution to support our research initiatives.',
    icon: BanknotesIcon,
  },
  {
    name: 'Monthly Giving',
    description: 'Provide steady support through recurring monthly donations.',
    icon: CreditCardIcon,
  },
  {
    name: 'Corporate Sponsorship',
    description: 'Partner with us through corporate giving programs.',
    icon: BuildingLibraryIcon,
  },
];

const impactAreas = [
  'Field Research Equipment',
  'Data Collection & Analysis',
  'Educational Programs',
  'Conservation Initiatives',
  'Technology & Innovation',
  'Community Outreach',
];

export default function Donate() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Support Our Mission</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Make a Difference Today
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Your support enables us to conduct vital research, protect fragile ecosystems, and 
              educate future leaders in polar science.
            </p>
          </div>
        </div>
      </div>

      {/* Donation Options */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Ways to Give</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Choose Your Impact
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {donationOptions.map((option) => (
              <div key={option.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <option.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {option.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{option.description}</p>
                  <p className="mt-6">
                    <a href="#" className="text-sm font-semibold leading-6 text-blue-600">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Impact Section */}
        <div className="mx-auto mt-32 max-w-7xl sm:mt-40">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Your Impact</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How Your Donation Helps
            </p>
          </div>

          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {impactAreas.map((area) => (
              <div key={area} className="flex items-center gap-x-3">
                <svg className="h-5 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                <span className="text-base leading-7 text-gray-900">{area}</span>
              </div>
            ))}
          </dl>
        </div>

        {/* Donation Form */}
        <div className="mt-32">
          <div className="relative isolate overflow-hidden bg-white shadow-2xl sm:rounded-3xl">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Ready to Contribute?
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Choose your donation amount and payment method below.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Donate Now
                  </a>
                  <a href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
                    Contact Us <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}