"use client"

import React, { useState } from 'react'

interface LawBook {
  id: number
  title: string
  author: string
  description: string
  pdfUrl: string
  category: string
  pages?: string
}

const lawBooks: LawBook[] = [
  {
    id: 1,
    title: "Fundamental Law of Pakistan",
    author: "A. K. Brohi",
    description: "A comprehensive guide to the fundamental laws governing Pakistan, covering constitutional principles and legal frameworks.",
    pdfUrl: "/law-books/fundamental-law-pakistan.pdf",
    category: "Constitutional Law",
    pages: "Multiple"
  },
  {
    id: 2,
    title: "Constitutional and Political History of Pakistan",
    author: "Hamid Khan",
    description: "An in-depth analysis of Pakistan's constitutional development and political evolution from inception to modern times.",
    pdfUrl: "/law-books/constitutional-history-pakistan.pdf",
    category: "Constitutional Law",
    pages: "Multiple"
  },
  {
    id: 3,
    title: "Pakistan Penal Code (PPC)",
    author: "Government of Pakistan",
    description: "The complete Pakistan Penal Code containing criminal laws and offenses applicable throughout Pakistan.",
    pdfUrl: "/law-books/ppc.pdf",
    category: "Criminal Law",
    pages: "Multiple"
  }
]

export default function LawBooks() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null)
  const [selectedBook, setSelectedBook] = useState<LawBook | null>(null)

  const handleViewBook = (book: LawBook) => {
    setSelectedBook(book)
    setSelectedPdf(book.pdfUrl)
  }

  return (
    <div className="min-h-screen">
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: 'url(/law-books-bg.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-white/75"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-amber-600 bg-clip-text text-transparent mb-4">
                Important Law Books
              </h1>
              <p className="text-xl text-gray-800 max-w-3xl mx-auto font-medium">
                Essential legal literature for law students and practicing advocates in Pakistan
              </p>
            </div>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {lawBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-6">
                <div className="flex items-center justify-center">
                  <svg
                    className="w-20 h-20 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"/>
                  </svg>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-2">
                  <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {book.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {book.title}
                </h3>
                <p className="text-sm text-teal-600 font-medium mb-3">
                  By {book.author}
                </p>

                <p className="text-gray-600 mb-4 text-sm">
                  {book.description}
                </p>

                {book.pages && (
                  <p className="text-xs text-gray-500 mb-4">
                    Pages: {book.pages}
                  </p>
                )}

                <div className="flex gap-3">
                  <button
                    onClick={() => handleViewBook(book)}
                    className="flex-1 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                  >
                    View Online
                  </button>
                  <a
                    href={book.pdfUrl}
                    download
                    className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-center text-sm"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedPdf && selectedBook && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg w-full max-w-6xl h-[90vh] flex flex-col">
              <div className="flex items-center justify-between p-4 border-b">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{selectedBook.title}</h3>
                  <p className="text-sm text-gray-600">by {selectedBook.author}</p>
                </div>
                <button
                  onClick={() => {
                    setSelectedPdf(null)
                    setSelectedBook(null)
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
                  title={selectedBook.title}
                />
              </div>
            </div>
          </div>
        )}

        <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">About These Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-teal-50 rounded-lg">
              <svg className="w-12 h-12 text-teal-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 className="font-bold text-gray-900 mb-2">Free Access</h3>
              <p className="text-gray-600 text-sm">All books available for free viewing and download</p>
            </div>

            <div className="text-center p-6 bg-amber-50 rounded-lg">
              <svg className="w-12 h-12 text-amber-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="font-bold text-gray-900 mb-2">Authentic Sources</h3>
              <p className="text-gray-600 text-sm">Verified and reliable legal texts</p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <svg className="w-12 h-12 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <h3 className="font-bold text-gray-900 mb-2">Download Anytime</h3>
              <p className="text-gray-600 text-sm">Save PDFs for offline reading</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-xl shadow-lg p-8 mt-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Need More Resources?</h2>
          <p className="mb-6 text-teal-100">
            Contact us if you need additional legal resources or have book recommendations
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
