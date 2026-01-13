"use client"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import BlogEditor from '@/components/admin/BlogEditor'

export default function NewBlogPost() {
  const [authorized, setAuthorized] = useState(false)
  const router = useRouter()

  useEffect(() => {
    fetch('/api/auth')
      .then(res => {
        if (res.ok) {
          setAuthorized(true)
        } else {
          router.push('/admin')
        }
      })
      .catch(() => router.push('/admin'))
  }, [router])

  if (!authorized) {
    return (
      <div className="admin-page">
        <div className="admin-container">
          <p>Checking authorization...</p>
        </div>
      </div>
    )
  }

  return <BlogEditor isEdit={false} />
}
