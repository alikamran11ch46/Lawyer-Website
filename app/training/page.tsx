import React from 'react'

export default function Training() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Training and Events</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional development opportunities and educational events.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-teal-600 pl-6">
              <h3 className="text-lg font-semibold text-gray-900">Legal Ethics Workshop</h3>
              <p className="text-gray-600">March 15, 2025 | 9:00 AM - 5:00 PM</p>
              <p className="text-gray-700 mt-2">Comprehensive workshop on professional ethics and conduct.</p>
            </div>

            <div className="border-l-4 border-teal-600 pl-6">
              <h3 className="text-lg font-semibold text-gray-900">Criminal Law Update</h3>
              <p className="text-gray-600">March 22, 2025 | 2:00 PM - 6:00 PM</p>
              <p className="text-gray-700 mt-2">Latest developments in criminal law and procedure.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}