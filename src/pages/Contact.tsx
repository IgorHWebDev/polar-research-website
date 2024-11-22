import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const contactMethods = [
  {
    name: 'Email',
    description: 'Send us a message anytime',
    value: 'info@polarresearch.org',
    icon: EnvelopeIcon,
  },
  {
    name: 'Phone',
    description: 'Mon-Fri from 8AM to 6PM',
    value: '+1 (555) 123-4567',
    icon: PhoneIcon,
  },
  {
    name: 'Office',
    description: 'Visit us in person',
    value: '123 Research Avenue, Arctic City, AC 12345',
    icon: MapPinIcon,
  },
];

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Contact Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Get in Touch
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Have questions about our research? Want to get involved? We'd love to hear from you.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          {/* Contact Methods */}
          <div>
            <div className="mx-auto max-w-2xl">
              <h2 className="text-base font-semibold leading-7 text-blue-600">Our Details</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Connect With Us
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Choose the method that works best for you. We're here to help!
              </p>
            </div>
            <div className="mx-auto max-w-2xl mt-16 space-y-16">
              {contactMethods.map((method) => (
                <div key={method.name} className="flex gap-x-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600">
                    <method.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold leading-7 text-gray-900">{method.name}</h3>
                    <p className="mt-2 text-base leading-7 text-gray-600">{method.description}</p>
                    <p className="mt-4 text-base font-semibold leading-7 text-blue-600">{method.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form className="mx-auto max-w-xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-gray-900">
                  Subject
                </label>
                <div className="mt-2.5">
                  <select
                    id="subject"
                    name="subject"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  >
                    <option>General Inquiry</option>
                    <option>Research Collaboration</option>
                    <option>Volunteering</option>
                    <option>Donations</option>
                    <option>Media Inquiry</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}