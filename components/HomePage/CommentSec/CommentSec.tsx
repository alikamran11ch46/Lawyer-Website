'use client'
import React, { useState } from 'react'
import Image from 'next/image'

export default function CommentSec() {
  const [isLiveChatOpen, setIsLiveChatOpen] = useState(false)

  return (
    <section className='relative w-full py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden'>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37] rounded-full transform translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-white rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">

          {/* Join Sindh Bar Council Card */}
          <div className="group relative">
            <div className="relative bg-white p-8 shadow-lg transform transition-all duration-300 hover:scale-105 w-[350px] md:w-[400px] h-[250px] flex flex-col justify-center items-center" style={{borderRadius: '20px 0px 20px 0px'}}>
              <div className="text-center">
                <h2 className="text-3xl font-bold text-[#040F35] mb-6">
                  Join Sindh Bar Council
                </h2>
                <p className="text-gray-600 mb-6 text-sm">
                  Become a member of our prestigious legal community
                </p>
                <button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                  Join Now
                </button>
              </div>
            </div>
          </div>

          {/* Advocate Verification Card */}
          <div className="group relative">
            <div className="relative bg-[#2563eb] p-8 shadow-lg transform transition-all duration-300 hover:scale-105 w-[350px] md:w-[400px] h-[250px] flex flex-col justify-center items-center" style={{borderRadius: '20px 0px 20px 0px'}}>
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Advocate Verification
                </h2>
                <p className="text-white/90 mb-6 text-sm">
                  Access your member portal and resources
                </p>
                <button className="bg-white hover:bg-gray-100 text-[#2563eb] font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                  Advocate Verification
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsLiveChatOpen(!isLiveChatOpen)}
          className="bg-[#040F35] hover:bg-blue-800 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center gap-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="font-medium">Live Chat</span>
        </button>
      </div>

      {/* Live Chat Window */}
      {isLiveChatOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200">
          <div className="bg-[#040F35] text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Live Chat Support</h3>
            <button
              onClick={() => setIsLiveChatOpen(false)}
              className="text-white hover:text-gray-300"
            >
              ×
            </button>
          </div>
          <div className="p-4 h-full flex flex-col">
            <div className="flex-1 mb-4">
              <div className="bg-gray-100 p-3 rounded-lg mb-3">
                <p className="text-sm text-gray-700">Hello! How can we help you today?</p>
              </div>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 p-2 border border-gray-300 rounded-lg text-sm"
              />
              <button className="bg-[#D4AF37] hover:bg-yellow-600 text-white p-2 rounded-lg">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
