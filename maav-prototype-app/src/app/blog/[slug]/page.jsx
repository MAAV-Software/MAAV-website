"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { MainHeader } from "../../../components/ui/mainHeader"
import { MainFooter } from "../../../components/ui/mainFooter"
import { BackToTop } from "../../../components/ui/BackToTop"

export default function BlogPost() {
  const params = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (params.slug) {
      fetch(`/api/blogs/slug/${params.slug}`)
        .then(res => {
          if (!res.ok) throw new Error('Post not found')
          return res.json()
        })
        .then(data => {
          setPost(data.post)
          setLoading(false)
        })
        .catch(err => {
          setError(err.message)
          setLoading(false)
        })
    }
  }, [params.slug])

  // Convert content paragraphs
  const renderContent = (content) => {
    if (!content) return null
    return content.split('\n\n').map((paragraph, index) => {
      // Check if it's a list
      if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\n').filter(line => line.startsWith('- '))
        return (
          <ul key={index} className="blog-post-list">
            {items.map((item, i) => (
              <li key={i}>{item.substring(2)}</li>
            ))}
          </ul>
        )
      }
      return <p key={index}>{paragraph}</p>
    })
  }

  if (loading) {
    return (
      <div>
        <MainHeader />
        <div className="blog-post-container">
          <div className="blog-loading">Loading...</div>
        </div>
        <MainFooter />
      </div>
    )
  }

  if (error || !post) {
    return (
      <div>
        <MainHeader />
        <div className="blog-post-container">
          <div className="blog-not-found">
            <h1>Post Not Found</h1>
            <p>The blog post you're looking for doesn't exist or has been removed.</p>
            <Link href="/blog" className="blog-back-link">
              Back to Blog
            </Link>
          </div>
        </div>
        <MainFooter />
      </div>
    )
  }

  return (
    <div>
      <MainHeader />

      <article className="blog-post-container">
        <Link href="/blog" className="blog-back-nav">
          <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
            <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
          </svg>
          Back to Blog
        </Link>

        <header className="blog-post-header">
          <h1 className="blog-post-title">{post.title}</h1>
          <div className="blog-post-meta">
            <span className="blog-post-author">{post.author}</span>
            <span className="blog-post-divider">|</span>
            <time className="blog-post-date">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
        </header>

        {post.image && (
          <div className="blog-post-image">
            <img src={post.image} alt={post.title} />
          </div>
        )}

        <div className="blog-post-content">
          {renderContent(post.content)}
        </div>

        <footer className="blog-post-footer">
          <Link href="/blog" className="blog-back-link">
            <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
              <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
            </svg>
            Back to All Posts
          </Link>
        </footer>
      </article>

      <MainFooter />
      <BackToTop />
    </div>
  )
}
