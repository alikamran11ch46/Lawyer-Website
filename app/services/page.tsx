import React from 'react'

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Bar Council Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive services and support for the legal community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Registration Services</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                Lawyer Registration
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                Practice License Renewal
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                Chambers Registration
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Standards</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                Code of Conduct
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                Ethics Guidelines
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                Disciplinary Procedures
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}