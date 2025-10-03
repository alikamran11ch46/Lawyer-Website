"use client"

import React, { useState } from 'react'

interface Campaign {
  id: number
  title: string
  description: string
  date: string
  category: string
  images: string[]
  details: string[]
}

const campaigns: Campaign[] = [
  {
    id: 1,
    title: "Tree Plantation Drive",
    description: "District Bar Association organized a tree plantation drive to promote environmental awareness and combat climate change in our community.",
    date: "March 2024",
    category: "Environment",
    images: ["/campaigns/tree-plantation.jpg"],
    details: [
      "Over 200 trees planted across the district",
      "Active participation from bar members and law students",
      "Focus on native species for better survival rates",
      "Commitment to ongoing maintenance and care",
      "Partnership with local environmental organizations"
    ]
  },
  {
    id: 2,
    title: "Independence Day Celebration",
    description: "Commemorating Pakistan's Independence Day with special ceremonies, flag hoisting, and legal awareness sessions highlighting constitutional rights and freedoms.",
    date: "August 14, 2024",
    category: "National",
    images: ["/campaigns/independence-celebration.jpg"],
    details: [
      "Flag hoisting ceremony at Bar Association premises",
      "Speeches on importance of rule of law and justice",
      "Free legal aid camp for underprivileged citizens",
      "Distribution of national flags to members",
      "Cultural programs celebrating Pakistani heritage",
      "Tribute to founding fathers and constitutional framers"
    ]
  },
  {
    id: 3,
    title: "Legal Aid Awareness Campaign",
    description: "Educating the public about their legal rights and providing free legal consultation to those who cannot afford legal services.",
    date: "Ongoing",
    category: "Social Service",
    images: [],
    details: [
      "Free legal consultations every week",
      "Educational seminars in rural areas",
      "Pamphlets distributed in local language",
      "Focus on women's rights and child protection",
      "Collaboration with NGOs and social organizations"
    ]
  },
  {
    id: 4,
    title: "Anti-Corruption Awareness Drive",
    description: "Raising awareness about corruption in the justice system and promoting ethical legal practices among lawyers and the public.",
    date: "December 2024",
    category: "Ethics",
    images: [],
    details: [
      "Workshops on ethical legal practice",
      "Distribution of code of conduct materials",
      "Public awareness campaigns in courts",
      "Complaint mechanism for reporting corruption",
      "Training sessions for young lawyers"
    ]
  }
]

export default function Campaigns() {
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-amber-600 bg-clip-text text-transparent mb-4 px-4">
            Our Campaigns
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            District Bar Association's initiatives for social welfare, environmental protection, and community development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-teal-300"
            >
              {campaign.images.length > 0 && (
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <img
                    src={campaign.images[0]}
                    alt={campaign.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                          <svg class="w-24 h-24 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      `;
                    }}
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-xs font-semibold shadow-lg">
                      {campaign.category}
                    </span>
                  </div>
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {campaign.title}
                  </h3>
                  {campaign.images.length === 0 && (
                    <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {campaign.category}
                    </span>
                  )}
                </div>

                <p className="text-sm text-teal-600 font-medium mb-3">
                  {campaign.date}
                </p>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {campaign.description}
                </p>

                <button
                  onClick={() => setSelectedCampaign(campaign)}
                  className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedCampaign && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b z-10 flex items-center justify-between p-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedCampaign.title}</h3>
                  <p className="text-sm text-teal-600 font-medium mt-1">{selectedCampaign.date}</p>
                </div>
                <button
                  onClick={() => setSelectedCampaign(null)}
                  className="text-gray-500 hover:text-gray-700 text-3xl font-bold"
                >
                  ×
                </button>
              </div>

              <div className="p-6">
                {selectedCampaign.images.length > 0 && (
                  <div className="mb-6 rounded-lg overflow-hidden">
                    <img
                      src={selectedCampaign.images[0]}
                      alt={selectedCampaign.title}
                      className="w-full h-96 object-cover"
                    />
                  </div>
                )}

                <div className="mb-6">
                  <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">
                    {selectedCampaign.category}
                  </span>
                </div>

                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  {selectedCampaign.description}
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-4">Campaign Highlights</h4>
                <ul className="space-y-3">
                  {selectedCampaign.details.map((detail, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-teal-50 rounded-lg">
              <div className="text-4xl font-bold text-teal-600 mb-2">4+</div>
              <p className="text-gray-700 font-medium">Active Campaigns</p>
            </div>

            <div className="text-center p-6 bg-amber-50 rounded-lg">
              <div className="text-4xl font-bold text-amber-600 mb-2">200+</div>
              <p className="text-gray-700 font-medium">Trees Planted</p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-700 font-medium">People Helped</p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">12+</div>
              <p className="text-gray-700 font-medium">Events Organized</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-xl shadow-lg p-8 mt-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Join Our Campaigns</h2>
          <p className="mb-6 text-teal-100">
            Want to participate in our social initiatives? Get in touch with us to volunteer
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
