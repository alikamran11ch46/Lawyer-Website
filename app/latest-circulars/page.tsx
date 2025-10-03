'use client';

import React from 'react';
import Image from 'next/image';

const circularImages = [
  { id: 1, src: '/circulars/1000252807.jpg', alt: 'Circular Document 1', date: '02-10-2025', isNew: true },
  { id: 2, src: '/circulars/1000252808.jpg', alt: 'Circular Document 2', date: '02-10-2025', isNew: true },
  { id: 3, src: '/circulars/1000252809.jpg', alt: 'Circular Document 3', date: '02-10-2025', isNew: true },
  { id: 4, src: '/circulars/1000252810.jpg', alt: 'Circular Document 4', date: '02-10-2025', isNew: true },
];

export default function LatestCirculars() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-teal-50">
      {/* Blinking Animation Styles */}
      <style jsx>{`
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0.3; }
        }
        .blink-animation {
          animation: blink 1.5s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Latest Circulars
            </h1>
            <p className="text-xl md:text-2xl opacity-95 font-medium">
              District Bar Association, Tando Muhammad Khan
            </p>
            <div className="mt-6 w-24 h-1 bg-teal-400 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Circular Documents
            </h2>
            <p className="text-gray-600">
              Click on any circular card to view full size image.
            </p>
          </div>

          {/* Circular Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {circularImages.map((circular, index) => (
              <div key={circular.id} className="relative">
                <a
                  href={circular.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-200"
                >
                  {/* Date Badge */}
                  <div className="absolute top-3 left-3 z-10 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {circular.date}
                  </div>

                  {/* New Badge - Blinking */}
                  {circular.isNew && (
                    <div className="absolute top-3 right-3 z-10 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold blink-animation">
                      NEW
                    </div>
                  )}

                  {/* Circular Image Thumbnail */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={circular.src}
                      alt={circular.alt}
                      width={600}
                      height={800}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Card Footer */}
                  <div className="p-4 bg-gray-50">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Circular Document {index + 1}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Click to view full document
                    </p>
                  </div>
                </a>

                {/* Download Button */}
                <div className="mt-3">
                  <a
                    href={circular.src}
                    download={`circular-${circular.date}-${index + 1}.jpg`}
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors shadow-md"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back to Circulars Link */}
        <div className="mt-8 text-center">
          <a
            href="/circular"
            className="text-teal-600 hover:text-teal-700 font-semibold inline-flex items-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Circulars
          </a>
        </div>
      </div>
    </div>
  );
}
