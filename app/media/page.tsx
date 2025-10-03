import React from 'react'

export default function Media() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Media & Campaigns</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Latest news, press releases, and public awareness campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest News</h2>
              <div className="space-y-6">
                <article className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    New Guidelines for Professional Conduct Released
                  </h3>
                  <p className="text-gray-600 mb-2">March 10, 2025</p>
                  <p className="text-gray-700">
                    The Bar Council has released updated guidelines for professional conduct...
                  </p>
                  <button className="text-teal-600 font-medium hover:text-teal-700 mt-2">
                    Read more →
                  </button>
                </article>

                <article className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Digital Court System Implementation Update
                  </h3>
                  <p className="text-gray-600 mb-2">March 8, 2025</p>
                  <p className="text-gray-700">
                    Progress update on the implementation of digital court systems...
                  </p>
                  <button className="text-teal-600 font-medium hover:text-teal-700 mt-2">
                    Read more →
                  </button>
                </article>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Press Contacts</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Media Relations</h3>
                  <p className="text-gray-600">media@barcouncil.pk</p>
                  <p className="text-gray-600">+92 22 123 4567</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Press Office</h3>
                  <p className="text-gray-600">press@barcouncil.pk</p>
                  <p className="text-gray-600">+92 22 123 4568</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}