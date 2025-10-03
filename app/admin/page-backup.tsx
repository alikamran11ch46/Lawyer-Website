'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface Submission {
  id: string
  fullName: string
  email: string
  phone: string
  subject: string
  legalArea: string
  message: string
  preferredContact: string
  submittedAt: string
}

interface ECardRequest {
  id: string
  fullName: string
  fatherName: string
  cnic: string
  enrollment: string
  dob: string
  issueDate?: string
  expiryDate?: string
  address: string
  practiceAreas: string
  phone: string
  email: string
  photo: string
  signature: string
  status: 'pending' | 'approved' | 'rejected'
  submittedAt: string
}

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [ecardRequests, setEcardRequests] = useState<ECardRequest[]>([])
  const [loading, setLoading] = useState(false)
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null)
  const [selectedEcard, setSelectedEcard] = useState<ECardRequest | null>(null)
  const [activeTab, setActiveTab] = useState<'submissions' | 'ecards'>('submissions')
  const [issueDate, setIssueDate] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const router = useRouter()

  const ADMIN_PASSWORD = '123456' // Simple password - you can change this

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      loadSubmissions()
      loadEcardRequests()
    } else {
      alert('Incorrect password!')
      setPassword('')
    }
  }

  const loadSubmissions = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/get-submissions')
      const data = await response.json()
      setSubmissions(data.submissions || [])
    } catch (error) {
      console.error('Error loading submissions:', error)
    }
    setLoading(false)
  }

  const loadEcardRequests = async () => {
    try {
      const response = await fetch('/api/get-ecards')
      const data = await response.json()
      setEcardRequests(data.requests || [])
    } catch (error) {
      console.error('Error loading E-Card requests:', error)
    }
  }

  const updateEcardStatus = async (id: string, status: 'approved' | 'rejected') => {
    if (status === 'approved' && (!issueDate || !expiryDate)) {
      alert('Please enter Issue Date and Expiry Date before approving!')
      return
    }

    try {
      const response = await fetch('/api/update-ecard-status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status, issueDate, expiryDate })
      })

      if (response.ok) {
        loadEcardRequests()
        setSelectedEcard(null)
        setIssueDate('')
        setExpiryDate('')
      }
    } catch (error) {
      console.error('Error updating E-Card status:', error)
    }
  }

  const deleteSubmission = async (id: string) => {
    if (!confirm('Are you sure you want to delete this submission?')) return

    try {
      const response = await fetch('/api/delete-submission', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      })

      if (response.ok) {
        loadSubmissions()
        setSelectedSubmission(null)
      }
    } catch (error) {
      console.error('Error deleting submission:', error)
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Panel</h1>
            <p className="text-gray-600">District Bar Association TMK</p>
          </div>
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Admin Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter admin password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white font-bold py-3 rounded-lg hover:from-teal-700 hover:to-teal-800 transition-all"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Admin Panel</h1>
              <p className="text-gray-600 mt-1">Manage submissions and E-Card requests</p>
            </div>
            <button
              onClick={() => {
                setIsAuthenticated(false)
                setPassword('')
              }}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition-all"
            >
              Logout
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('submissions')}
              className={`px-6 py-3 font-semibold transition-all ${
                activeTab === 'submissions'
                  ? 'text-teal-600 border-b-2 border-teal-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Contact Submissions ({submissions.length})
            </button>
            <button
              onClick={() => setActiveTab('ecards')}
              className={`px-6 py-3 font-semibold transition-all ${
                activeTab === 'ecards'
                  ? 'text-teal-600 border-b-2 border-teal-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              E-Card Requests ({ecardRequests.length})
            </button>
          </div>
        </div>

        {/* Contact Submissions Tab */}
        {activeTab === 'submissions' && (
          <>
            {loading ? (
              <div className="text-center py-12">
                <div className="text-gray-600">Loading submissions...</div>
              </div>
            ) : submissions.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
                <p className="text-gray-600 text-lg">No submissions yet</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {submissions.map((submission) => (
              <div
                key={submission.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all cursor-pointer"
                onClick={() => setSelectedSubmission(submission)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{submission.fullName}</h3>
                    <p className="text-sm text-teal-600">{submission.email}</p>
                  </div>
                  <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {submission.legalArea}
                  </span>
                </div>
                <p className="text-gray-700 font-semibold mb-2">{submission.subject}</p>
                <p className="text-gray-600 text-sm line-clamp-2 mb-3">{submission.message}</p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>{new Date(submission.submittedAt).toLocaleString()}</span>
                  <span>{submission.phone}</span>
                </div>
              </div>
            ))}
              </div>
            )}
          </>
        )}

        {/* E-Card Requests Tab */}
        {activeTab === 'ecards' && (
          <>
            {ecardRequests.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
                <p className="text-gray-600 text-lg">No E-Card requests yet</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {ecardRequests.map((request) => (
                  <div
                    key={request.id}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all cursor-pointer"
                    onClick={() => setSelectedEcard(request)}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{request.fullName}</h3>
                        <p className="text-sm text-teal-600">{request.email}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        request.status === 'pending' ? 'bg-amber-100 text-amber-700' :
                        request.status === 'approved' ? 'bg-green-100 text-green-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {request.status.toUpperCase()}
                      </span>
                    </div>
                    <div className="space-y-1 text-sm">
                      <p className="text-gray-700"><span className="font-semibold">Enrollment:</span> {request.enrollment}</p>
                      <p className="text-gray-700"><span className="font-semibold">CNIC:</span> {request.cnic}</p>
                      <p className="text-gray-700"><span className="font-semibold">Phone:</span> {request.phone}</p>
                    </div>
                    <div className="flex justify-between items-center text-xs text-gray-500 mt-3">
                      <span>{new Date(request.submittedAt).toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* Contact Submission Modal */}
        {selectedSubmission && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-gradient-to-r from-teal-600 to-teal-700 text-white p-6 rounded-t-2xl">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold">{selectedSubmission.fullName}</h2>
                    <p className="text-teal-100 mt-1">{new Date(selectedSubmission.submittedAt).toLocaleString()}</p>
                  </div>
                  <button
                    onClick={() => setSelectedSubmission(null)}
                    className="text-white hover:bg-white/20 rounded-full p-2"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-500">Email</p>
                    <p className="text-gray-800">{selectedSubmission.email}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500">Phone</p>
                    <p className="text-gray-800">{selectedSubmission.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500">Area of Law</p>
                    <p className="text-gray-800">{selectedSubmission.legalArea}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500">Preferred Contact</p>
                    <p className="text-gray-800">{selectedSubmission.preferredContact}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-500 mb-2">Subject</p>
                  <p className="text-gray-800 font-semibold">{selectedSubmission.subject}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-500 mb-2">Message</p>
                  <p className="text-gray-800 whitespace-pre-wrap">{selectedSubmission.message}</p>
                </div>

                <div className="flex gap-3 pt-4">
                  <a
                    href={`mailto:${selectedSubmission.email}`}
                    className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold text-center transition-all"
                  >
                    Reply via Email
                  </a>
                  <a
                    href={`tel:${selectedSubmission.phone}`}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-center transition-all"
                  >
                    Call
                  </a>
                  <button
                    onClick={() => deleteSubmission(selectedSubmission.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* E-Card Request Modal */}
        {selectedEcard && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-gradient-to-r from-teal-600 to-teal-700 text-white p-6 rounded-t-2xl">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold">{selectedEcard.fullName}</h2>
                    <p className="text-teal-100 mt-1">{new Date(selectedEcard.submittedAt).toLocaleString()}</p>
                  </div>
                  <button
                    onClick={() => setSelectedEcard(null)}
                    className="text-white hover:bg-white/20 rounded-full p-2"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-4">
                {/* Status Badge */}
                <div className="flex justify-center">
                  <span className={`px-6 py-2 rounded-full text-sm font-bold ${
                    selectedEcard.status === 'pending' ? 'bg-amber-100 text-amber-700' :
                    selectedEcard.status === 'approved' ? 'bg-green-100 text-green-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {selectedEcard.status.toUpperCase()}
                  </span>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-500">Full Name</p>
                    <p className="text-gray-800">{selectedEcard.fullName}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500">Father's Name</p>
                    <p className="text-gray-800">{selectedEcard.fatherName}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500">CNIC</p>
                    <p className="text-gray-800">{selectedEcard.cnic}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500">Enrollment Number</p>
                    <p className="text-gray-800">{selectedEcard.enrollment}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500">Date of Birth</p>
                    <p className="text-gray-800">{selectedEcard.dob}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500">Phone</p>
                    <p className="text-gray-800">{selectedEcard.phone}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm font-semibold text-gray-500">Email</p>
                    <p className="text-gray-800">{selectedEcard.email}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm font-semibold text-gray-500">Practice Areas</p>
                    <p className="text-gray-800">{selectedEcard.practiceAreas}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm font-semibold text-gray-500">Address</p>
                    <p className="text-gray-800">{selectedEcard.address}</p>
                  </div>
                </div>

                {/* Photo and Signature */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-2">Photo</p>
                    <img src={selectedEcard.photo} alt="Photo" className="w-32 h-32 object-cover rounded-lg border-2 border-gray-200" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-2">Signature</p>
                    <img src={selectedEcard.signature} alt="Signature" className="w-48 h-24 object-contain rounded-lg border-2 border-gray-200 bg-white" />
                  </div>
                </div>

                {/* Action Buttons */}
                {selectedEcard.status === 'pending' && (
                  <div className="space-y-4 pt-4">
                    {/* Date Input Fields */}
                    <div className="grid grid-cols-2 gap-4 p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Issue Date *
                        </label>
                        <input
                          type="date"
                          required
                          value={issueDate}
                          onChange={(e) => setIssueDate(e.target.value)}
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Expiry Date *
                        </label>
                        <input
                          type="date"
                          required
                          value={expiryDate}
                          onChange={(e) => setExpiryDate(e.target.value)}
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => updateEcardStatus(selectedEcard.id, 'approved')}
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Approve
                      </button>
                      <button
                        onClick={() => updateEcardStatus(selectedEcard.id, 'rejected')}
                        className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Reject
                      </button>
                    </div>
                  </div>
                )}

                {selectedEcard.status === 'approved' && (
                  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 text-center">
                    <p className="text-green-800 font-semibold">This E-Card has been approved</p>
                  </div>
                )}

                {selectedEcard.status === 'rejected' && (
                  <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 text-center">
                    <p className="text-red-800 font-semibold">This E-Card has been rejected</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
