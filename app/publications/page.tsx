"use client"

import React, { useState } from 'react'

interface Publication {
  id: number
  title: string
  description: string
  date: string
  category: string
  pdfUrl: string
}

const publications: Publication[] = [
  {
    id: 1,
    title: "List of National Journals 2024-25",
    description: "Comprehensive list of recognized national legal journals and law reviews for the academic year 2024-25.",
    date: "2024-25",
    category: "Reference",
    pdfUrl: "/publications/national-journals-2024-25.pdf"
  },
  {
    id: 2,
    title: "Pakistan Journal of Applied Legal Jurisprudence - June 2022",
    description: "Legal research journal covering contemporary legal issues, case analyses, and jurisprudential developments in Pakistan.",
    date: "June 2022",
    category: "Journal",
    pdfUrl: "/publications/pjalj-june-2022.pdf"
  }
]

export default function Publications() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null)
  const [selectedPublication, setSelectedPublication] = useState<Publication | null>(null)

  const handleViewPublication = (publication: Publication) => {
    setSelectedPublication(publication)
    setSelectedPdf(publication.pdfUrl)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-amber-600 bg-clip-text text-transparent mb-4">
            Publications
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access legal journals, research papers, and official publications from District Bar Association Tando Muhammad Khan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {publications.map((publication) => (
            <div
              key={publication.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-teal-300"
            >
              <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white p-3 rounded-lg">
                      <svg className="w-10 h-10 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 2H5a2 2 0 00-2 2v16a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2zm-7 2h5v5h-5V4zm0 7h5v5h-5v-5zM5 4h5v5H5V4zm0 7h5v5H5v-5zm0 7h12v2H5v-2z"/>
                      </svg>
                    </div>
                    <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {publication.category}
                    </span>
                  </div>
                  <span className="text-white text-sm font-medium">{publication.date}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {publication.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {publication.description}
                </p>

                <div className="flex gap-4">
                  <button
                    onClick={() => handleViewPublication(publication)}
                    className="flex-1 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    View Online
                  </button>
                  <a
                    href={publication.pdfUrl}
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

        {selectedPdf && selectedPublication && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg w-full max-w-6xl h-[90vh] flex flex-col">
              <div className="flex items-center justify-between p-4 border-b">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{selectedPublication.title}</h3>
                  <p className="text-sm text-gray-600">{selectedPublication.category} - {selectedPublication.date}</p>
                </div>
                <button
                  onClick={() => {
                    setSelectedPdf(null)
                    setSelectedPublication(null)
                  }}
                  className="text-gray-500 hover:text-gray-700 text-3xl font-bold"
                >
                  ×
                </button>
              </div>
              <div className="flex-1 overflow-hidden">
                <iframe
                  src={selectedPdf}
                  className="w-full h-full"
                  title={selectedPublication.title}
                />
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Publication Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-teal-50 rounded-lg">
              <svg className="w-12 h-12 text-teal-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 className="font-bold text-gray-900 mb-2">Legal Research</h3>
              <p className="text-gray-600 text-sm">Access quality legal research and case studies</p>
            </div>

            <div className="text-center p-6 bg-amber-50 rounded-lg">
              <svg className="w-12 h-12 text-amber-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="font-bold text-gray-900 mb-2">Regular Updates</h3>
              <p className="text-gray-600 text-sm">New publications added regularly</p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <svg className="w-12 h-12 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <h3 className="font-bold text-gray-900 mb-2">Free Download</h3>
              <p className="text-gray-600 text-sm">All publications available for free download</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-xl shadow-lg p-8 mt-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Submit Your Research</h2>
          <p className="mb-6 text-teal-100">
            Have legal research or articles to publish? Contact us to submit your work
          </p>
          <a
            href="/contact-us"
            className="inline-block bg-white text-teal-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all shadow-md hover:shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}
