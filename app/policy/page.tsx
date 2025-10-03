"use client"

import React, { useState } from 'react'

interface PolicyDocument {
  id: number
  title: string
  description: string
  pdfUrl: string
  date: string
  category: string
}

const policyDocuments: PolicyDocument[] = [
  {
    id: 1,
    title: "Election Bye-Laws (Updated 2023)",
    description: "Updated election bye-laws governing the election procedures and regulations for Bar Council elections in 2023.",
    pdfUrl: "/policy/election-bye-laws-2023.pdf",
    date: "2023",
    category: "Election"
  },
  {
    id: 2,
    title: "Bar Council Policy Document",
    description: "Comprehensive policy document outlining the administrative and operational guidelines of the Bar Council.",
    pdfUrl: "/policy/policy-document.pdf",
    date: "2024",
    category: "Administration"
  }
]

export default function Policy() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null)
  const [selectedPolicy, setSelectedPolicy] = useState<PolicyDocument | null>(null)

  const handleViewPolicy = (policy: PolicyDocument) => {
    setSelectedPolicy(policy)
    setSelectedPdf(policy.pdfUrl)
  }

  return (
    <div className="min-h-screen">
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: 'url(/policy-bg.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-white/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-amber-600 bg-clip-text text-transparent mb-4">
                Bar Council Policies
              </h1>
              <p className="text-xl text-gray-800 max-w-3xl mx-auto font-medium">
                Official policies, bye-laws, and regulations governing the District Bar Association Tando Muhammad Khan
              </p>
            </div>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {policyDocuments.map((policy) => (
            <div
              key={policy.id}
              className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-teal-300"
            >
              <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white p-3 rounded-lg">
                      <svg className="w-10 h-10 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                        <path d="M8 10h8v2H8zm0 4h8v2H8zm0 4h5v2H8z"/>
                      </svg>
                    </div>
                    <div>
                      <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {policy.category}
                      </span>
                    </div>
                  </div>
                  <span className="text-white text-sm font-medium">{policy.date}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {policy.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {policy.description}
                </p>

                <div className="flex gap-4">
                  <button
                    onClick={() => handleViewPolicy(policy)}
                    className="flex-1 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    View Online
                  </button>
                  <a
                    href={policy.pdfUrl}
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

        {selectedPdf && selectedPolicy && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg w-full max-w-6xl h-[90vh] flex flex-col">
              <div className="flex items-center justify-between p-4 border-b">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{selectedPolicy.title}</h3>
                  <p className="text-sm text-gray-600">{selectedPolicy.category} Policy - {selectedPolicy.date}</p>
                </div>
                <button
                  onClick={() => {
                    setSelectedPdf(null)
                    setSelectedPolicy(null)
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
                  title={selectedPolicy.title}
                />
              </div>
            </div>
          </div>
        )}

        <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Policy Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-teal-50 rounded-lg">
              <svg className="w-12 h-12 text-teal-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="font-bold text-gray-900 mb-2">Official Documents</h3>
              <p className="text-gray-600 text-sm">All policies are officially approved and authenticated</p>
            </div>

            <div className="text-center p-6 bg-amber-50 rounded-lg">
              <svg className="w-12 h-12 text-amber-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-bold text-gray-900 mb-2">Up to Date</h3>
              <p className="text-gray-600 text-sm">Regularly updated with latest amendments</p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <svg className="w-12 h-12 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <h3 className="font-bold text-gray-900 mb-2">Free Access</h3>
              <p className="text-gray-600 text-sm">Download and share freely</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-xl shadow-lg p-8 mt-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Need Policy Clarification?</h2>
          <p className="mb-6 text-teal-100">
            Contact our office for detailed information about any policy or regulation
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
    </div>
  )
}