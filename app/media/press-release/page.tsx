"use client"

import React, { useState } from 'react'

interface PressRelease {
  id: number
  title: string
  date: string
  description: string
  pdfUrl: string
}

const pressReleases: PressRelease[] = [
  {
    id: 1,
    title: "Hyderabad Lawyers Protest - Part 1",
    date: "March 2025",
    description: "Press release regarding the lawyers' protest in Hyderabad",
    pdfUrl: "/press-release/hyderabad_lawyers_protest_1.pdf"
  },
  {
    id: 2,
    title: "Hyderabad Lawyers Protest - Part 2",
    date: "March 2025",
    description: "Continuation of press release regarding the lawyers' protest",
    pdfUrl: "/press-release/hyderabad_lawyers_protest_2.pdf"
  },
  {
    id: 3,
    title: "Hyderabad Lawyers Protest - Part 3",
    date: "March 2025",
    description: "Final part of the press release on lawyers' protest",
    pdfUrl: "/press-release/hyderabad_lawyers_protest_3.pdf"
  }
]

export default function PressRelease() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null)

  return (
    <div className="min-h-screen">
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: 'url(/press-release-bg.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-white/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-amber-600 bg-clip-text text-transparent mb-4">
                Press Releases
              </h1>
              <p className="text-xl text-gray-800 max-w-3xl mx-auto font-medium">
                Official press releases and announcements from District Bar Association Tando Muhammad Khan
              </p>
            </div>
          </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {pressReleases.map((release) => (
            <div
              key={release.id}
              className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {release.title}
                    </h3>
                    <p className="text-sm text-teal-600 font-medium mb-3">
                      {release.date}
                    </p>
                  </div>
                  <svg
                    className="w-12 h-12 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                    <path d="M8 10h8v2H8zm0 4h8v2H8zm0 4h5v2H8z"/>
                  </svg>
                </div>

                <p className="text-gray-600 mb-6">
                  {release.description}
                </p>

                <div className="flex gap-4">
                  <button
                    onClick={() => setSelectedPdf(release.pdfUrl)}
                    className="flex-1 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    View Online
                  </button>
                  <a
                    href={release.pdfUrl}
                    download
                    className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-center"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedPdf && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg w-full max-w-6xl h-[90vh] flex flex-col">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-xl font-bold text-gray-900">Press Release Document</h3>
                <button
                  onClick={() => setSelectedPdf(null)}
                  className="text-gray-500 hover:text-gray-700 text-3xl font-bold"
                >
                  ×
                </button>
              </div>
              <div className="flex-1 overflow-hidden">
                <iframe
                  src={selectedPdf}
                  className="w-full h-full"
                  title="Press Release PDF"
                />
              </div>
            </div>
          </div>
        )}

        <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Media Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="bg-teal-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">media@dbatmk.pk</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600">+92 22 123 4567</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
