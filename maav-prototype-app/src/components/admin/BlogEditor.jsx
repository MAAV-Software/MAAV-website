"use client"
import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function BlogEditor({ post = null, isEdit = false }) {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const fileInputRef = useRef(null)

  const parseDate = (dateStr) => {
    if (!dateStr) return new Date()
    const [year, month, day] = dateStr.split('-').map(Number)
    return new Date(year, month - 1, day)
  }

  const [formData, setFormData] = useState({
    title: post?.title || '',
    excerpt: post?.excerpt || '',
    content: post?.content || '',
    author: post?.author || 'MAAV Team',
    date: parseDate(post?.date),
    image: post?.image || '',
    published: post?.published ?? false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleDateChange = (date) => {
    setFormData(prev => ({ ...prev, date }))
  }

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
  }

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    setError('')

    try {
      const uploadData = new FormData()
      uploadData.append('file', file)

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: uploadData
      })

      const data = await res.json()

      if (res.ok) {
        setFormData(prev => ({ ...prev, image: data.url }))
      } else {
        setError(data.error || 'Failed to upload image')
      }
    } catch (err) {
      setError('Failed to upload image. Please try again.')
    } finally {
      setUploading(false)
    }
  }

  const handleRemoveImage = () => {
    setFormData(prev => ({ ...prev, image: '' }))
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError('')

    try {
      const url = isEdit ? `/api/blogs/${post.id}` : '/api/blogs'
      const method = isEdit ? 'PUT' : 'POST'

      // Format date and generate slug
      const submitData = {
        ...formData,
        slug: generateSlug(formData.title),
        date: formData.date.toISOString().split('T')[0]
      }

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData)
      })

      if (res.ok) {
        router.push('/admin/dashboard')
      } else {
        const data = await res.json()
        setError(data.error || 'Failed to save post')
      }
    } catch (err) {
      setError('Failed to save post. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="admin-page">
      <header className="admin-header">
        <div className="admin-header-content">
          <h1>{isEdit ? 'Edit Post' : 'New Post'}</h1>
          <div className="admin-header-actions">
            <Link href="/admin/dashboard" className="admin-btn-secondary">
              Cancel
            </Link>
          </div>
        </div>
      </header>

      <div className="admin-container">
        <form onSubmit={handleSubmit} className="admin-editor-form">
          {error && <div className="admin-error">{error}</div>}

          <div className="admin-editor-grid">
            <div className="admin-editor-main">
              <div className="admin-field">
                <label htmlFor="title">Title *</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter post title"
                  required
                />
              </div>

              <div className="admin-field">
                <label htmlFor="excerpt">Excerpt</label>
                <textarea
                  id="excerpt"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  placeholder="Brief summary for blog listing..."
                  rows={3}
                />
              </div>

              <div className="admin-field">
                <label htmlFor="content">Content</label>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  placeholder="Write your blog post content here...

You can use multiple paragraphs by adding blank lines between them."
                  rows={15}
                />
              </div>
            </div>

            <div className="admin-editor-sidebar">
              <div className="admin-sidebar-card">
                <h3>Publish</h3>

                <div className="admin-field-inline">
                  <input
                    type="checkbox"
                    id="published"
                    name="published"
                    checked={formData.published}
                    onChange={handleChange}
                  />
                  <label htmlFor="published">Published</label>
                </div>

                <div className="admin-field">
                  <label>Date</label>
                  <DatePicker
                    selected={formData.date}
                    onChange={handleDateChange}
                    dateFormat="MMMM d, yyyy"
                    className="admin-datepicker-input"
                    calendarClassName="admin-datepicker-calendar"
                    showPopperArrow={false}
                  />
                </div>

                <button
                  type="submit"
                  className="admin-btn-primary admin-btn-full"
                  disabled={saving}
                >
                  {saving ? 'Saving...' : (isEdit ? 'Update Post' : 'Create Post')}
                </button>
              </div>

              <div className="admin-sidebar-card">
                <h3>Details</h3>

                <div className="admin-field">
                  <label htmlFor="author">Author</label>
                  <input
                    type="text"
                    id="author"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    placeholder="Author name"
                  />
                </div>

                <div className="admin-field">
                  <label>Featured Image</label>
                  <div className="admin-upload-zone">
                    {formData.image ? (
                      <div className="admin-image-preview">
                        <img src={formData.image} alt="Preview" />
                        <button
                          type="button"
                          onClick={handleRemoveImage}
                          className="admin-btn-remove-image"
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <div
                        className="admin-upload-placeholder"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{uploading ? 'Uploading...' : 'Click to upload image'}</span>
                        <span className="admin-upload-hint">JPG, PNG, GIF, WebP (max 5MB)</span>
                      </div>
                    )}
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/jpeg,image/png,image/gif,image/webp"
                      onChange={handleImageUpload}
                      className="admin-file-input"
                      disabled={uploading}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
