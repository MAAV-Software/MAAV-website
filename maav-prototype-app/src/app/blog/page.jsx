"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { MainHeader } from "../../components/ui/mainHeader"
import { MainFooter } from "../../components/ui/mainFooter"
import { BackToTop } from "../../components/ui/BackToTop"

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/blogs')
      .then(res => res.json())
      .then(data => {
        setPosts(data.posts || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const featuredPost = posts[0]
  const otherPosts = posts.slice(1)

  return (
    <div>
      <MainHeader />

      <div
        className="page-hero"
        style={{ backgroundImage: "url(/images/maav-mair.png)" }}
      >
        <h1 className="page-hero-title">BLOG</h1>
      </div>

      <div className="blog-content">
        {loading ? (
          <div className="blog-loading">Loading posts...</div>
        ) : posts.length === 0 ? (
          <div className="blog-empty">
            <p>No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <>
            {/* Featured Post */}
            {featuredPost && (
              <article className="blog-featured">
                <img
                  className="blog-featured-image"
                  src={featuredPost.image}
                  alt={featuredPost.title}
                />
                <div className="blog-featured-body">
                  <div className="blog-featured-label">
                    <span className="blog-featured-dot" />
                    <span className="blog-featured-tag">Latest Post</span>
                  </div>
                  <h2 className="blog-featured-title">{featuredPost.title}</h2>
                  <p className="blog-featured-excerpt">{featuredPost.excerpt}</p>
                  <div className="blog-meta">
                    <span>{featuredPost.author}</span>
                    <span className="blog-meta-divider">|</span>
                    <span>{new Date(featuredPost.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                  </div>
                  <Link href={`/blog/${featuredPost.slug}`} className="blog-read-more">
                    Read More
                    <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </article>
            )}

            {/* Other Posts Grid */}
            {otherPosts.length > 0 && (
              <div className="blog-grid">
                {otherPosts.map(post => (
                  <article key={post.id} className="blog-card">
                    <div className="blog-card-image">
                      <img src={post.image} alt={post.title} />
                    </div>
                    <div className="blog-card-body">
                      <h3 className="blog-card-title">{post.title}</h3>
                      <p className="blog-card-excerpt">{post.excerpt}</p>
                      <div className="blog-card-footer">
                        <span className="blog-card-date">
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                        <Link href={`/blog/${post.slug}`} className="blog-card-link">
                          Read
                          <svg viewBox="0 0 20 20" fill="currentColor" width="12" height="12">
                            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      <MainFooter />
      <BackToTop />
    </div>
  )
}
