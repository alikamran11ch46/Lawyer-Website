'use client'

import React from 'react'

interface MediaContact {
  name: string
  position: string
  organization: string
  email: string
  phone: string
  image: string
}

const mediaContacts: MediaContact[] = [
  {
    name: "M. Nadeem Qureshi",
    position: "General Secretary",
    organization: "District Bar Association Tando M Khan",
    email: "generalsecretary@dbatmk.pk",
    phone: "+92 300 1234567",
    image: "/team/general-secretary.jpg"
  },
  {
    name: "Muzaffar H. Brohi",
    position: "Joint Secretary",
    organization: "District Bar Association Tando M Khan",
    email: "jointsecretary@dbatmk.pk",
    phone: "+92 300 7654321",
    image: "/team/joint-secretary.jpg"
  }
]

export default function MediaContacts() {
  return (
    <div className="min-h-screen">
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: 'url(/media-contact-bg.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-white/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-amber-600 bg-clip-text text-transparent mb-4">
                Media Contacts
              </h1>
              <p className="text-xl text-gray-800 max-w-3xl mx-auto font-medium">
                Connect with our media relations team for press inquiries, interviews, and official statements
              </p>
            </div>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {mediaContacts.map((contact, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row items-center p-8">
                <div className="flex-none rounded-full overflow-hidden h-32 w-32 mb-6 lg:mb-0 border-4 border-teal-100 shadow-lg">
                  <img
                    src={contact.image}
                    alt={contact.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-center scale-105"
                    style={{
                      imageRendering: 'crisp-edges',
                      filter: 'contrast(1.05) brightness(1.05) saturate(1.1)'
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                          <svg class="w-16 h-16 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                          </svg>
                        </div>
                      `;
                    }}
                  />
                </div>

                <div className="flex flex-col ms-0 me-0 lg:ms-8 lg:me-2 items-center lg:items-start">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    {contact.name}
                  </h3>

                  <div className="text-sm text-center lg:text-start text-teal-700 font-semibold mb-1">
                    {contact.organization}
                  </div>

                  <div className="text-base text-center lg:text-start text-gray-700 font-medium mb-4">
                    {contact.position}
                  </div>

                  <div className="mt-2 text-sm space-y-2">
                    <a
                      href={`mailto:${contact.email}`}
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
                      title={contact.email}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>{contact.email}</span>
                    </a>

                    <a
                      href={`tel:${contact.phone}`}
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
                      title={contact.phone}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>{contact.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Media Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-teal-50 rounded-lg">
              <svg className="w-12 h-12 text-teal-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <h3 className="font-bold text-gray-900 mb-2">Press Releases</h3>
              <p className="text-gray-600 text-sm">Latest news and official announcements</p>
            </div>

            <div className="text-center p-6 bg-amber-50 rounded-lg">
              <svg className="w-12 h-12 text-amber-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <h3 className="font-bold text-gray-900 mb-2">Interview Requests</h3>
              <p className="text-gray-600 text-sm">Contact us for media interviews</p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <svg className="w-12 h-12 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="font-bold text-gray-900 mb-2">Official Statements</h3>
              <p className="text-gray-600 text-sm">Access official bar association statements</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-xl shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Need Additional Information?</h2>
          <p className="mb-6 text-teal-100">
            For general inquiries or additional media resources, please contact our main office
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <a
              href="tel:+922212345678"
              className="inline-flex items-center space-x-2 bg-white text-teal-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+92 22 123 4567</span>
            </a>
            <a
              href="mailto:media@dbatmk.pk"
              className="inline-flex items-center space-x-2 bg-white text-teal-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>media@dbatmk.pk</span>
            </a>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
