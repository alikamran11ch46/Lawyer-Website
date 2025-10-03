'use client'

import React, { useState, useEffect } from 'react'

interface Advocate {
  "Serial Number": number
  "Specialization of Lawyer": string
  "Name": string
  "Father Name": string
  "Mobile No": string
  "Years of Experience": number
}

export default function FindLawyer() {
  const [advocates, setAdvocates] = useState<Advocate[]>([])
  const [filteredAdvocates, setFilteredAdvocates] = useState<Advocate[]>([])
  const [filters, setFilters] = useState({
    areaOfLaw: '',
    location: '',
    experience: ''
  })
  const [hasSearched, setHasSearched] = useState(false)

  useEffect(() => {
    fetch('/advocates-data.json')
      .then(res => res.json())
      .then(data => {
        setAdvocates(data)
      })
  }, [])

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/lawyer-directory.pdf'
    link.download = 'Lawyer_Directory.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFilters(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSearch = () => {
    let filtered = advocates

    if (filters.areaOfLaw) {
      filtered = filtered.filter(advocate =>
        advocate["Specialization of Lawyer"].toLowerCase().includes(filters.areaOfLaw.toLowerCase())
      )
    }

    if (filters.location) {
      filtered = filtered.filter(advocate =>
        advocate.Name.toLowerCase().includes(filters.location.toLowerCase()) ||
        advocate["Father Name"].toLowerCase().includes(filters.location.toLowerCase())
      )
    }

    if (filters.experience) {
      if (filters.experience === '1-5') {
        filtered = filtered.filter(advocate => advocate["Years of Experience"] >= 1 && advocate["Years of Experience"] <= 5)
      } else if (filters.experience === '5-10') {
        filtered = filtered.filter(advocate => advocate["Years of Experience"] > 5 && advocate["Years of Experience"] <= 10)
      } else if (filters.experience === '10+') {
        filtered = filtered.filter(advocate => advocate["Years of Experience"] > 10)
      }
    }

    setFilteredAdvocates(filtered)
    setHasSearched(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50">
      {/* Background Image Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-24"
        style={{
          backgroundImage: 'url(/find-lawyer-bg.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-white/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-amber-600 bg-clip-text text-transparent mb-4 drop-shadow-sm">
              Find a Lawyer
            </h1>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto font-medium drop-shadow-sm">
              Search our directory of qualified lawyers to find legal representation for your case.
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Lawyer Directory</h2>
              <p className="text-gray-700 mb-6">Download our complete directory with contact information of all registered advocates</p>
              <button
                onClick={handleDownload}
                className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold px-8 py-3 rounded-lg transition-all shadow-md hover:shadow-lg"
              >
                Download Lawyer Directory (PDF)
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Search Lawyers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Area of Law
              </label>
              <select
                name="areaOfLaw"
                value={filters.areaOfLaw}
                onChange={handleFilterChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="">All Areas</option>
                <option value="Criminal Law">Criminal Law</option>
                <option value="Civil Law">Civil Law</option>
                <option value="Family Law">Family Law</option>
                <option value="Commercial Law">Commercial Law</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Search by Name
              </label>
              <input
                type="text"
                name="location"
                value={filters.location}
                onChange={handleFilterChange}
                placeholder="Enter lawyer name"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Experience Level
              </label>
              <select
                name="experience"
                value={filters.experience}
                onChange={handleFilterChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="">Any</option>
                <option value="1-5">1-5 years</option>
                <option value="5-10">5-10 years</option>
                <option value="10+">10+ years</option>
              </select>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleSearch}
              className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-bold px-12 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              Search Lawyers
            </button>
          </div>
        </div>

        {hasSearched && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Search Results ({filteredAdvocates.length} lawyers found)
            </h2>
            {filteredAdvocates.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No lawyers found matching your criteria. Please try different filters.</p>
              </div>
            ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAdvocates.map((advocate) => (
                <div
                  key={advocate["Serial Number"]}
                  className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 rounded-lg p-6 hover:shadow-lg transition-all hover:border-teal-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-teal-100 p-3 rounded-full">
                      <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {advocate["Years of Experience"]} years
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">{advocate.Name}</h3>

                  <div className="border-t border-gray-200 pt-3 space-y-2">
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm font-semibold text-teal-700">
                        {advocate["Specialization of Lawyer"]}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href={`tel:${advocate["Mobile No"]}`} className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors">
                        {advocate["Mobile No"]}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}