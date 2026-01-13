"use client"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function AdminDashboard() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState(null)
  const router = useRouter()

  useEffect(() => {
    checkAuthAndFetch()
  }, [])

  const checkAuthAndFetch = async () => {
    try {
      const authRes = await fetch('/api/auth')
      if (!authRes.ok) {
        router.push('/admin')
        return
      }

      const res = await fetch('/api/blogs?all=true')
      const data = await res.json()
      setPosts(data.posts || [])
    } catch (error) {
      router.push('/admin')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    await fetch('/api/auth', { method: 'DELETE' })
    router.push('/admin')
  }

  const handleDelete = async (id, title) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return

    setDeleting(id)
    try {
      const res = await fetch(`/api/blogs/${id}`, { method: 'DELETE' })
      if (res.ok) {
        setPosts(posts.filter(p => p.id !== id))
      } else {
        alert('Failed to delete post')
      }
    } catch (error) {
      alert('Failed to delete post')
    } finally {
      setDeleting(null)
    }
  }

  const togglePublish = async (post) => {
    try {
      const res = await fetch(`/api/blogs/${post.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ published: !post.published })
      })

      if (res.ok) {
        setPosts(posts.map(p =>
          p.id === post.id ? { ...p, published: !p.published } : p
        ))
      }
    } catch (error) {
      alert('Failed to update post')
    }
  }

  if (loading) {
    return (
      <div className="admin-page">
        <div className="admin-container">
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-page">
      <header className="admin-header">
        <div className="admin-header-content">
          <h1>Blog Dashboard</h1>
          <div className="admin-header-actions">
            <Link href="/" className="admin-btn-secondary">View Site</Link>
            <button onClick={handleLogout} className="admin-btn-logout">Logout</button>
          </div>
        </div>
      </header>

      <div className="admin-container">
        <div className="admin-toolbar">
          <h2>All Posts ({posts.length})</h2>
          <Link href="/admin/blogs/new" className="admin-btn-primary">
            + New Post
          </Link>
        </div>

        {posts.length === 0 ? (
          <div className="admin-empty">
            <p>No blog posts yet.</p>
            <Link href="/admin/blogs/new" className="admin-btn-primary">
              Create your first post
            </Link>
          </div>
        ) : (
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map(post => (
                  <tr key={post.id}>
                    <td>
                      <div className="admin-post-title">
                        {post.title}
                        {post.image && (
                          <img src={post.image} alt="" className="admin-post-thumb" />
                        )}
                      </div>
                    </td>
                    <td>{post.author}</td>
                    <td>{new Date(post.date).toLocaleDateString()}</td>
                    <td>
                      <button
                        onClick={() => togglePublish(post)}
                        className={`admin-status ${post.published ? 'published' : 'draft'}`}
                      >
                        {post.published ? 'Published' : 'Draft'}
                      </button>
                    </td>
                    <td>
                      <div className="admin-actions">
                        <Link
                          href={`/admin/blogs/${post.id}/edit`}
                          className="admin-btn-edit"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(post.id, post.title)}
                          className="admin-btn-delete"
                          disabled={deleting === post.id}
                        >
                          {deleting === post.id ? '...' : 'Delete'}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
