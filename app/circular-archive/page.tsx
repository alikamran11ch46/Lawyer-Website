'use client';

import React from 'react';
import Image from 'next/image';

const circularImages = [
  { id: 1, src: '/circulars/1000252807.jpg', alt: 'Circular Document 1' },
  { id: 2, src: '/circulars/1000252808.jpg', alt: 'Circular Document 2' },
  { id: 3, src: '/circulars/1000252809.jpg', alt: 'Circular Document 3' },
  { id: 4, src: '/circulars/1000252810.jpg', alt: 'Circular Document 4' },
];

export default function CircularArchive() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-teal-50">
      {/* Hero Section */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Circular Archive
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
              All Circular Documents
            </h2>
            <p className="text-gray-600">
              Browse through our complete archive of circulars. Click on any image to view full size.
            </p>
          </div>

          {/* Circular Images */}
          <div className="space-y-12">
            {circularImages.map((circular, index) => (
              <div key={circular.id} className="border-b border-gray-200 pb-12 last:border-0 last:pb-0">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  Document {index + 1}
                </h3>
                <div className="flex justify-center">
                  <div className="w-full max-w-4xl">
                    <a
                      href={circular.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:opacity-90 transition-opacity cursor-zoom-in"
                    >
                      <Image
                        src={circular.src}
                        alt={circular.alt}
                        width={1200}
                        height={1600}
                        className="w-full h-auto rounded-lg shadow-lg border border-gray-200"
                      />
                    </a>
                    <p className="text-center text-sm text-gray-500 mt-4">
                      Click on the image to view full size
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Download Buttons */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Download individual documents:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {circularImages.map((circular, index) => (
                <a
                  key={circular.id}
                  href={circular.src}
                  download={`circular-archive-${index + 1}.jpg`}
                  className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
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
                  Document {index + 1}
                </a>
              ))}
            </div>
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
