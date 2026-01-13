"use client"
import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import BlogEditor from '@/components/admin/BlogEditor'

export default function EditBlogPost() {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const router = useRouter()
  const params = useParams()

  useEffect(() => {
    const checkAuthAndFetch = async () => {
      try {
        const authRes = await fetch('/api/auth')
        if (!authRes.ok) {
          router.push('/admin')
          return
        }

        const res = await fetch(`/api/blogs/${params.id}`)
        if (res.ok) {
          const data = await res.json()
          setPost(data.post)
        } else {
          setError('Post not found')
        }
      } catch (err) {
        setError('Failed to load post')
      } finally {
        setLoading(false)
      }
    }

    checkAuthAndFetch()
  }, [params.id, router])

  if (loading) {
    return (
      <div className="admin-page">
        <div className="admin-container">
          <p>Loading post...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="admin-page">
        <div className="admin-container">
          <div className="admin-error">{error}</div>
          <a href="/admin/dashboard" className="admin-btn-secondary">
            Back to Dashboard
          </a>
        </div>
      </div>
    )
  }

  return <BlogEditor post={post} isEdit={true} />
}
