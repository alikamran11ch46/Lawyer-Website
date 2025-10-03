'use client';

import React from 'react';
import Image from 'next/image';

export default function AboutTheBar() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-teal-50">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden about-hero">
        {/* Background Image with responsive positioning */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: 'url(/about-history.png)',
            backgroundPosition: 'center 35%', // Moved down to show upper part
            filter: 'brightness(0.75) contrast(1.15) saturate(1.1)',
          }}
        ></div>

        {/* Responsive background positioning styles */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @media (min-width: 768px) {
              .about-hero .bg-cover {
                background-position: center 40% !important;
              }
            }
            @media (min-width: 1024px) {
              .about-hero .bg-cover {
                background-position: center 45% !important;
              }
            }
          `
        }} />

        {/* Overlay for better text readability - 50% opacity */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/50"></div>

        {/* Content - Moved up */}
        <div className="relative z-10 flex items-start justify-center h-full pt-16">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-lg drop-shadow-2xl">
              About the Bar
            </h1>
            <p className="text-xl md:text-2xl opacity-95 font-medium drop-shadow-lg">
              District Bar Association, Tando Muhammad Khan
            </p>
            <div className="mt-6 w-24 h-1 bg-teal-400 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Decorative overlay pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">

        {/* History Section */}
        <section className="mb-16">
          <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-lg p-8 border border-blue-100 overflow-hidden">
            {/* Background Image with Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{
                backgroundImage: 'url(/history-bg.jpg)',
              }}
            ></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Our History</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-900 font-bold">
                <p className="mb-4">
                  The District Bar Association of Tando Muhammad Khan was established with the noble purpose of promoting justice,
                  protecting the rights of legal practitioners, and serving the community with unwavering dedication. Our association
                  has been a cornerstone of the legal fraternity in the region for decades.
                </p>
                <p className="mb-4">
                  Founded on the principles of justice, integrity, and professional excellence, our bar association has grown from
                  a small group of dedicated lawyers to a prominent legal institution serving the district and surrounding areas.
                  Over the years, we have witnessed the evolution of the legal system and have adapted to meet the changing needs
                  of our members and the community.
                </p>
                <p>
                  Our rich heritage is built upon the contributions of countless distinguished lawyers who have practiced with honor
                  and have made significant contributions to the field of law. Today, we continue to uphold these traditions while
                  embracing modern legal practices and technologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="relative bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg shadow-lg p-8 border border-indigo-100 overflow-hidden">
            {/* Background Image with Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{
                backgroundImage: 'url(/mission-bg.jpg)',
              }}
            ></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-900 font-bold">
                <p className="mb-4">
                  Our mission is to serve as the voice of the legal profession in Tando Muhammad Khan district,
                  advocating for justice, professional excellence, and the rule of law.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide professional support and guidance to our members in their legal practice</li>
                  <li>To promote continuous legal education and professional development</li>
                  <li>To ensure access to justice for all members of society, regardless of their economic status</li>
                  <li>To maintain the highest standards of legal ethics and professional conduct</li>
                  <li>To collaborate with the judiciary and other legal institutions to improve the administration of justice</li>
                  <li>To protect the rights and interests of legal practitioners</li>
                  <li>To contribute to law reform and legal policy development</li>
                  <li>To serve the community through various legal aid and awareness programs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="mb-16">
          <div className="relative bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg shadow-lg p-8 border border-teal-100 overflow-hidden">
            {/* Background Image with Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{
                backgroundImage: 'url(/vision-bg.jpg)',
              }}
            ></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-900 font-bold">
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border-l-4 border-purple-600">
                  <p className="text-lg font-bold text-gray-900 mb-4">
                    "To be the leading bar association in Sindh province, recognized for our commitment to excellence,
                    integrity, and service to the legal profession and society."
                  </p>
                </div>
                <p className="mt-6 mb-4">
                  We envision a future where:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Every citizen has equal access to quality legal representation</li>
                  <li>The legal profession is held in the highest regard for its ethical standards and competence</li>
                  <li>Our bar association serves as a model for other legal institutions</li>
                  <li>Technology and innovation enhance the delivery of legal services</li>
                  <li>Legal education and training prepare lawyers for the challenges of tomorrow</li>
                  <li>Justice is swift, accessible, and fair for all</li>
                  <li>Our members are empowered to make meaningful contributions to society</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <div className="relative bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg shadow-lg p-8 border border-cyan-100 overflow-hidden">
            {/* Background Image with Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{
                backgroundImage: 'url(/values-bg.jpg)',
              }}
            ></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Our Values</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3 flex items-center">
                    <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Integrity
                  </h3>
                  <p className="text-gray-900 font-bold">
                    We conduct ourselves with honesty, transparency, and ethical behavior in all our professional and personal dealings.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-xl font-semibold text-green-800 mb-3 flex items-center">
                    <span className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Justice
                  </h3>
                  <p className="text-gray-900 font-bold">
                    We are committed to upholding the principles of justice, fairness, and equality for all members of society.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-lg border border-purple-200">
                  <h3 className="text-xl font-semibold text-purple-800 mb-3 flex items-center">
                    <span className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    Excellence
                  </h3>
                  <p className="text-gray-900 font-bold">
                    We strive for the highest standards of professional competence and continuous improvement in legal practice.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg border border-orange-200">
                  <h3 className="text-xl font-semibold text-orange-800 mb-3 flex items-center">
                    <span className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                      </svg>
                    </span>
                    Service
                  </h3>
                  <p className="text-gray-900 font-bold">
                    We are dedicated to serving our members, the legal profession, and the broader community with commitment and compassion.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-lg border border-teal-200">
                  <h3 className="text-xl font-semibold text-teal-800 mb-3 flex items-center">
                    <span className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Innovation
                  </h3>
                  <p className="text-gray-900 font-bold">
                    We embrace new technologies and modern practices to enhance the efficiency and effectiveness of legal services.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-lg border border-red-200">
                  <h3 className="text-xl font-semibold text-red-800 mb-3 flex items-center">
                    <span className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Collaboration
                  </h3>
                  <p className="text-gray-900 font-bold">
                    We believe in working together with our members, the judiciary, and other stakeholders to achieve common goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Join Our Legal Community</h2>
            <p className="text-lg mb-6 opacity-90">
              Be part of a prestigious legal institution committed to excellence, justice, and professional growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-us"
                className="bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/find-lawyer"
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors"
              >
                Find a Lawyer
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}