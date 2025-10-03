'use client'

import { useState, useEffect } from 'react'

type TabType = 'submissions' | 'ecards' | 'circulars' | 'team' | 'news' | 'books' | 'navbar'

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [activeTab, setActiveTab] = useState<TabType>('submissions')

  const ADMIN_PASSWORD = '123456'

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
    } else {
      alert('Incorrect password!')
      setPassword('')
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
              <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
              <p className="text-gray-600 mt-1">Complete Content Management System</p>
            </div>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition-all"
            >
              Logout
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 border-b border-gray-200 overflow-x-auto pb-2">
            <TabButton active={activeTab === 'submissions'} onClick={() => setActiveTab('submissions')} label="Contact Forms" />
            <TabButton active={activeTab === 'ecards'} onClick={() => setActiveTab('ecards')} label="E-Cards" />
            <TabButton active={activeTab === 'circulars'} onClick={() => setActiveTab('circulars')} label="Circulars" />
            <TabButton active={activeTab === 'team'} onClick={() => setActiveTab('team')} label="Team Members" />
            <TabButton active={activeTab === 'news'} onClick={() => setActiveTab('news')} label="News Ticker" />
            <TabButton active={activeTab === 'books'} onClick={() => setActiveTab('books')} label="Law Books" />
            <TabButton active={activeTab === 'navbar'} onClick={() => setActiveTab('navbar')} label="Navbar" />
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'submissions' && <SubmissionsTab />}
        {activeTab === 'ecards' && <ECardsTab />}
        {activeTab === 'circulars' && <CircularsTab />}
        {activeTab === 'team' && <TeamTab />}
        {activeTab === 'news' && <NewsTickerTab />}
        {activeTab === 'books' && <BooksTab />}
        {activeTab === 'navbar' && <NavbarTab />}
      </div>
    </div>
  )
}

function TabButton({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 font-semibold whitespace-nowrap transition-all rounded-t-lg ${
        active
          ? 'text-teal-600 border-b-2 border-teal-600 bg-teal-50'
          : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
      }`}
    >
      {label}
    </button>
  )
}

// Submissions Tab (existing contact forms)
function SubmissionsTab() {
  const [submissions, setSubmissions] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadSubmissions()
  }, [])

  const loadSubmissions = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/get-submissions')
      const data = await res.json()
      setSubmissions(data.submissions || [])
    } catch (error) {
      console.error(error)
    }
    setLoading(false)
  }

  if (loading) return <div className="text-center py-12">Loading...</div>

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Form Submissions</h2>
      {submissions.length === 0 ? (
        <p className="text-gray-600 text-center py-8">No submissions yet</p>
      ) : (
        <div className="grid gap-4">
          {submissions.map((sub) => (
            <div key={sub.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg">{sub.fullName}</h3>
                  <p className="text-sm text-gray-600">{sub.email} | {sub.phone}</p>
                  <p className="text-sm text-teal-600 mt-1">{sub.legalArea}</p>
                  <p className="font-semibold mt-2">{sub.subject}</p>
                  <p className="text-gray-700 mt-1">{sub.message}</p>
                </div>
                <span className="text-xs text-gray-500">{new Date(sub.submittedAt).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// E-Cards Tab (existing)
function ECardsTab() {
  const [requests, setRequests] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadRequests()
  }, [])

  const loadRequests = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/get-ecards')
      const data = await res.json()
      setRequests(data.requests || [])
    } catch (error) {
      console.error(error)
    }
    setLoading(false)
  }

  const updateStatus = async (id: string, status: string) => {
    try {
      await fetch('/api/update-ecard-status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status, issueDate: new Date().toISOString().split('T')[0], expiryDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] })
      })
      loadRequests()
    } catch (error) {
      console.error(error)
    }
  }

  if (loading) return <div className="text-center py-12">Loading...</div>

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">E-Card Requests</h2>
      {requests.length === 0 ? (
        <p className="text-gray-600 text-center py-8">No requests yet</p>
      ) : (
        <div className="grid gap-4">
          {requests.map((req) => (
            <div key={req.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{req.fullName}</h3>
                  <p className="text-sm text-gray-600">Enrollment: {req.enrollment} | CNIC: {req.cnic}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-2 ${
                    req.status === 'pending' ? 'bg-amber-100 text-amber-700' :
                    req.status === 'approved' ? 'bg-green-100 text-green-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {req.status.toUpperCase()}
                  </span>
                </div>
                {req.status === 'pending' && (
                  <div className="flex gap-2">
                    <button onClick={() => updateStatus(req.id, 'approved')} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                      Approve
                    </button>
                    <button onClick={() => updateStatus(req.id, 'rejected')} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                      Reject
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// Circulars Management Tab
function CircularsTab() {
  const [circulars, setCirculars] = useState<any[]>([])
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({ title: '', date: '', category: '', file: null as File | null })

  useEffect(() => {
    loadCirculars()
  }, [])

  const loadCirculars = async () => {
    try {
      const res = await fetch('/api/admin/circulars')
      const data = await res.json()
      setCirculars(data.circulars || [])
    } catch (error) {
      console.error(error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.file) return alert('Please select a file')

    try {
      // Upload file
      const reader = new FileReader()
      reader.onload = async () => {
        const fileData = reader.result as string
        const uploadRes = await fetch('/api/upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ file: fileData, fileName: formData.file!.name, folder: 'circulars' })
        })
        const uploadData = await uploadRes.json()

        if (uploadData.success) {
          // Add circular
          await fetch('/api/admin/circulars', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...formData, fileUrl: uploadData.url, file: undefined })
          })
          setFormData({ title: '', date: '', category: '', file: null })
          setShowForm(false)
          loadCirculars()
        }
      }
      reader.readAsDataURL(formData.file)
    } catch (error) {
      console.error(error)
      alert('Error uploading file')
    }
  }

  const deleteCircular = async (id: string) => {
    if (!confirm('Delete this circular?')) return
    try {
      await fetch(`/api/admin/circulars?id=${id}`, { method: 'DELETE' })
      loadCirculars()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Manage Circulars</h2>
        <button onClick={() => setShowForm(!showForm)} className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-semibold">
          {showForm ? 'Cancel' : '+ Add Circular'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="mb-6 p-4 border border-gray-200 rounded-lg">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="Title" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} className="px-4 py-2 border border-gray-300 rounded-lg" required />
            <input type="date" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} className="px-4 py-2 border border-gray-300 rounded-lg" required />
            <select value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} className="px-4 py-2 border border-gray-300 rounded-lg" required>
              <option value="">Select Category</option>
              <option value="General">General</option>
              <option value="Urgent">Urgent</option>
              <option value="Notice">Notice</option>
            </select>
            <input type="file" accept=".pdf" onChange={(e) => setFormData({...formData, file: e.target.files?.[0] || null})} className="px-4 py-2 border border-gray-300 rounded-lg" required />
          </div>
          <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold">
            Upload Circular
          </button>
        </form>
      )}

      <div className="grid gap-4">
        {circulars.map((circular) => (
          <div key={circular.id} className="border border-gray-200 rounded-lg p-4 flex justify-between items-center">
            <div>
              <h3 className="font-bold">{circular.title}</h3>
              <p className="text-sm text-gray-600">{circular.category} | {new Date(circular.date).toLocaleDateString()}</p>
            </div>
            <button onClick={() => deleteCircular(circular.id)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

// Team Members Tab
function TeamTab() {
  const [members, setMembers] = useState<any[]>([])
  const [showForm, setShowForm] = useState(false)
  const [editingMember, setEditingMember] = useState<any>(null)
  const [formData, setFormData] = useState({ id: '', name: '', position: '', email: '', phone: '', message: '', photo: null as File | null, photoUrl: '' })

  useEffect(() => {
    loadMembers()
  }, [])

  const loadMembers = async () => {
    try {
      const res = await fetch('/api/admin/team')
      const data = await res.json()
      setMembers(data.members || [])
    } catch (error) {
      console.error(error)
    }
  }

  const startEdit = (member: any) => {
    setEditingMember(member)
    setFormData({
      id: member.id,
      name: member.name,
      position: member.position,
      email: member.email || '',
      phone: member.phone || '',
      message: member.message || '',
      photo: null,
      photoUrl: member.photo
    })
    setShowForm(true)
  }

  const cancelEdit = () => {
    setEditingMember(null)
    setFormData({ id: '', name: '', position: '', email: '', phone: '', message: '', photo: null, photoUrl: '' })
    setShowForm(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      let photoUrl = formData.photoUrl

      // If new photo selected, upload it
      if (formData.photo) {
        const reader = new FileReader()
        reader.onload = async () => {
          const photoData = reader.result as string
          const uploadRes = await fetch('/api/upload', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ file: photoData, fileName: formData.photo!.name, folder: 'team' })
          })
          const uploadData = await uploadRes.json()

          if (uploadData.success) {
            photoUrl = uploadData.url
            await saveTeamMember(photoUrl)
          }
        }
        reader.readAsDataURL(formData.photo)
      } else {
        // No new photo, save with existing photo
        await saveTeamMember(photoUrl)
      }
    } catch (error) {
      console.error(error)
      alert('Error saving team member')
    }
  }

  const saveTeamMember = async (photoUrl: string) => {
    try {
      await fetch('/api/admin/team', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: formData.id || undefined,
          name: formData.name,
          position: formData.position,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          photo: photoUrl
        })
      })
      cancelEdit()
      loadMembers()
      alert(editingMember ? 'Member updated successfully!' : 'Member added successfully!')
    } catch (error) {
      console.error(error)
      alert('Error saving member')
    }
  }

  const deleteMember = async (id: string) => {
    if (!confirm('Delete this member?')) return
    try {
      await fetch(`/api/admin/team?id=${id}`, { method: 'DELETE' })
      loadMembers()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Manage Team Members</h2>
        <button onClick={() => { cancelEdit(); setShowForm(!showForm); }} className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-semibold">
          {showForm ? 'Cancel' : '+ Add Member'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="mb-6 p-4 border-2 border-teal-200 rounded-lg bg-teal-50">
          <h3 className="text-lg font-bold text-gray-800 mb-4">{editingMember ? 'Edit Member' : 'Add New Member'}</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="px-4 py-2 border border-gray-300 rounded-lg" required />
            <input type="text" placeholder="Position" value={formData.position} onChange={(e) => setFormData({...formData, position: e.target.value})} className="px-4 py-2 border border-gray-300 rounded-lg" required />
            <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="px-4 py-2 border border-gray-300 rounded-lg" />
            <input type="tel" placeholder="Phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="px-4 py-2 border border-gray-300 rounded-lg" />
            <div className="col-span-2">
              <textarea placeholder="Message/Description" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg" rows={3} />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Photo {editingMember && '(Leave empty to keep current photo)'}
              </label>
              {formData.photoUrl && !formData.photo && (
                <div className="mb-2">
                  <img src={formData.photoUrl} alt="Current" className="w-20 h-20 rounded-full object-cover border-2 border-gray-300" />
                  <p className="text-xs text-gray-500 mt-1">Current photo</p>
                </div>
              )}
              <input type="file" accept="image/*" onChange={(e) => setFormData({...formData, photo: e.target.files?.[0] || null})} className="px-4 py-2 border border-gray-300 rounded-lg w-full" required={!editingMember} />
            </div>
          </div>
          <div className="flex gap-2">
            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold">
              {editingMember ? 'Update Member' : 'Add Member'}
            </button>
            <button type="button" onClick={cancelEdit} className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold">
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="grid gap-4">
        {members.length === 0 ? (
          <p className="text-center text-gray-500 py-8">No team members yet. Add your first member!</p>
        ) : (
          members.map((member) => (
            <div key={member.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <img src={member.photo} alt={member.name} className="w-20 h-20 rounded-full object-cover border-2 border-gray-200" />
                  <div>
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-sm text-teal-600 font-semibold">{member.position}</p>
                    {member.email && <p className="text-xs text-gray-500">{member.email}</p>}
                    {member.phone && <p className="text-xs text-gray-500">{member.phone}</p>}
                    {member.message && <p className="text-sm text-gray-600 mt-1 line-clamp-2">{member.message}</p>}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => startEdit(member)} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                    Edit
                  </button>
                  <button onClick={() => deleteMember(member.id)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

// News Ticker Tab
function NewsTickerTab() {
  const [news, setNews] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadNews()
  }, [])

  const loadNews = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/news-ticker')
      const data = await res.json()
      setNews(data.news || '')
    } catch (error) {
      console.error(error)
    }
    setLoading(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await fetch('/api/admin/news-ticker', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: news })
      })
      alert('News ticker updated!')
    } catch (error) {
      console.error(error)
    }
  }

  if (loading) return <div className="text-center py-12">Loading...</div>

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Edit News Ticker</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={news}
          onChange={(e) => setNews(e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg mb-4"
          rows={4}
          placeholder="Enter news ticker text (Urdu supported)"
          required
        />
        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold">
          Update News Ticker
        </button>
      </form>
    </div>
  )
}

// Law Books Tab
function BooksTab() {
  const [books, setBooks] = useState<any[]>([])
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({ title: '', author: '', category: '', description: '', file: null as File | null, cover: null as File | null })

  useEffect(() => {
    loadBooks()
  }, [])

  const loadBooks = async () => {
    try {
      const res = await fetch('/api/admin/law-books')
      const data = await res.json()
      setBooks(data.books || [])
    } catch (error) {
      console.error(error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.file || !formData.cover) return alert('Please select both PDF and cover image')

    try {
      // Upload PDF
      const pdfReader = new FileReader()
      pdfReader.onload = async () => {
        const pdfData = pdfReader.result as string
        const pdfUpload = await fetch('/api/upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ file: pdfData, fileName: formData.file!.name, folder: 'law-books' })
        })
        const pdfResult = await pdfUpload.json()

        // Upload cover
        const coverReader = new FileReader()
        coverReader.onload = async () => {
          const coverData = coverReader.result as string
          const coverUpload = await fetch('/api/upload', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ file: coverData, fileName: formData.cover!.name, folder: 'law-books/covers' })
          })
          const coverResult = await coverUpload.json()

          if (pdfResult.success && coverResult.success) {
            await fetch('/api/admin/law-books', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ ...formData, fileUrl: pdfResult.url, coverImage: coverResult.url, file: undefined, cover: undefined })
            })
            setFormData({ title: '', author: '', category: '', description: '', file: null, cover: null })
            setShowForm(false)
            loadBooks()
          }
        }
        coverReader.readAsDataURL(formData.cover!)
      }
      pdfReader.readAsDataURL(formData.file)
    } catch (error) {
      console.error(error)
    }
  }

  const deleteBook = async (id: string) => {
    if (!confirm('Delete this book?')) return
    try {
      await fetch(`/api/admin/law-books?id=${id}`, { method: 'DELETE' })
      loadBooks()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Manage Law Books</h2>
        <button onClick={() => setShowForm(!showForm)} className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-semibold">
          {showForm ? 'Cancel' : '+ Add Book'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="mb-6 p-4 border border-gray-200 rounded-lg">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="Book Title" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} className="px-4 py-2 border border-gray-300 rounded-lg" required />
            <input type="text" placeholder="Author" value={formData.author} onChange={(e) => setFormData({...formData, author: e.target.value})} className="px-4 py-2 border border-gray-300 rounded-lg" required />
            <select value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} className="px-4 py-2 border border-gray-300 rounded-lg" required>
              <option value="">Select Category</option>
              <option value="Civil Law">Civil Law</option>
              <option value="Criminal Law">Criminal Law</option>
              <option value="Constitutional Law">Constitutional Law</option>
              <option value="Family Law">Family Law</option>
            </select>
            <input type="file" accept=".pdf" onChange={(e) => setFormData({...formData, file: e.target.files?.[0] || null})} className="px-4 py-2 border border-gray-300 rounded-lg" required />
            <input type="file" accept="image/*" onChange={(e) => setFormData({...formData, cover: e.target.files?.[0] || null})} className="px-4 py-2 border border-gray-300 rounded-lg" required />
            <textarea placeholder="Description" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} className="px-4 py-2 border border-gray-300 rounded-lg col-span-2" rows={3} required />
          </div>
          <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold">
            Upload Book
          </button>
        </form>
      )}

      <div className="grid gap-4">
        {books.map((book) => (
          <div key={book.id} className="border border-gray-200 rounded-lg p-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              {book.coverImage && <img src={book.coverImage} alt={book.title} className="w-16 h-20 object-cover rounded" />}
              <div>
                <h3 className="font-bold">{book.title}</h3>
                <p className="text-sm text-gray-600">{book.author} | {book.category}</p>
              </div>
            </div>
            <button onClick={() => deleteBook(book.id)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

// Navbar Links Tab
function NavbarTab() {
  const [links, setLinks] = useState<any[]>([
    { label: 'Home', href: '/' },
    { label: 'About Bar', href: '/about-bar' },
    { label: 'Team', href: '/team' },
    { label: 'Find Lawyer', href: '/find-lawyer' },
    { label: 'E-Cards', href: '/e-cards' },
    { label: 'Circulars', href: '/latest-circulars' },
    { label: 'Law Books', href: '/law-books' },
    { label: 'Contact', href: '/contact-submission-form' },
  ])

  useEffect(() => {
    loadLinks()
  }, [])

  const loadLinks = async () => {
    try {
      const res = await fetch('/api/admin/navbar')
      const data = await res.json()
      if (data.links && data.links.length > 0) {
        setLinks(data.links)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await fetch('/api/admin/navbar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ links })
      })
      alert('Navbar updated!')
    } catch (error) {
      console.error(error)
    }
  }

  const addLink = () => {
    setLinks([...links, { label: '', href: '' }])
  }

  const removeLink = (index: number) => {
    setLinks(links.filter((_, i) => i !== index))
  }

  const updateLink = (index: number, field: string, value: string) => {
    const newLinks = [...links]
    newLinks[index] = { ...newLinks[index], [field]: value }
    setLinks(newLinks)
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Edit Navbar Links</h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-3 mb-4">
          {links.map((link, index) => (
            <div key={index} className="flex gap-3 items-center">
              <input
                type="text"
                placeholder="Label"
                value={link.label}
                onChange={(e) => updateLink(index, 'label', e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
              <input
                type="text"
                placeholder="Link (e.g., /about)"
                value={link.href}
                onChange={(e) => updateLink(index, 'href', e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
              <button type="button" onClick={() => removeLink(index)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="flex gap-3">
          <button type="button" onClick={addLink} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
            + Add Link
          </button>
          <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold">
            Save Navbar
          </button>
        </div>
      </form>
    </div>
  )
}
