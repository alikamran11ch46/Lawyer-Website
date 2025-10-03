'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

interface ECardRequest {
  id: string;
  fullName: string;
  fatherName: string;
  cnic: string;
  enrollment: string;
  dob: string;
  issueDate: string;
  expiryDate: string;
  address: string;
  practiceAreas: string;
  phone: string;
  email: string;
  photo: string;
  signature: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
}

export default function ECardStatusPage() {
  const params = useParams();
  const id = params?.id as string;
  const [request, setRequest] = useState<ECardRequest | null>(null);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    loadStatus();
  }, [id]);

  const loadStatus = async () => {
    try {
      const response = await fetch(`/api/ecard-status?id=${id}`);
      const data = await response.json();
      setRequest(data.request);
    } catch (error) {
      console.error('Error loading status:', error);
    }
    setLoading(false);
  };

  const downloadCard = async () => {
    setDownloading(true);
    try {
      const response = await fetch('/api/generate-ecard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `ecard-${request?.enrollment}.pdf`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }
    } catch (error) {
      console.error('Error downloading card:', error);
      alert('Error downloading card. Please try again.');
    }
    setDownloading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center">
        <div className="text-gray-600 text-xl">Loading...</div>
      </div>
    );
  }

  if (!request) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-12 text-center">
          <svg className="w-24 h-24 mx-auto text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Request Not Found</h1>
          <p className="text-gray-600">The E-Card request you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">E-Card Request Status</h1>
            <p className="text-gray-600">Request ID: {id}</p>
          </div>

          {/* Status Badge */}
          <div className="flex justify-center mb-8">
            {request.status === 'pending' && (
              <div className="bg-amber-100 text-amber-700 px-8 py-4 rounded-full text-xl font-bold flex items-center">
                <svg className="w-6 h-6 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Pending Approval
              </div>
            )}
            {request.status === 'approved' && (
              <div className="bg-green-100 text-green-700 px-8 py-4 rounded-full text-xl font-bold flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Approved
              </div>
            )}
            {request.status === 'rejected' && (
              <div className="bg-red-100 text-red-700 px-8 py-4 rounded-full text-xl font-bold flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Rejected
              </div>
            )}
          </div>

          {/* Request Details */}
          <div className="space-y-4 mb-8">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-500">Full Name</p>
                <p className="text-gray-800">{request.fullName}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500">Enrollment Number</p>
                <p className="text-gray-800">{request.enrollment}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500">CNIC</p>
                <p className="text-gray-800">{request.cnic}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500">Phone</p>
                <p className="text-gray-800">{request.phone}</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500">Submitted At</p>
              <p className="text-gray-800">{new Date(request.submittedAt).toLocaleString()}</p>
            </div>
          </div>

          {/* Action Buttons */}
          {request.status === 'pending' && (
            <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 text-center">
              <p className="text-amber-800 text-lg">
                Your E-Card request is pending approval. You will be able to download your card once it's approved by the admin.
              </p>
            </div>
          )}

          {request.status === 'approved' && (
            <div className="space-y-4">
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center mb-4">
                <p className="text-green-800 text-lg font-semibold mb-2">
                  Congratulations! Your E-Card has been approved.
                </p>
                <p className="text-green-700">Click the button below to download your E-Card.</p>
              </div>
              <button
                onClick={downloadCard}
                disabled={downloading}
                className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {downloading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating PDF...
                  </>
                ) : (
                  <>
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download E-Card (PDF)
                  </>
                )}
              </button>
            </div>
          )}

          {request.status === 'rejected' && (
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 text-center">
              <p className="text-red-800 text-lg">
                Unfortunately, your E-Card request has been rejected. Please contact the admin for more information.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
