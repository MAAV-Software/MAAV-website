"use client"
import React from 'react'
import Link from 'next/link'
import { MainHeader } from "../../components/ui/mainHeader"
import { MainFooter } from "../../components/ui/mainFooter"

export default function Blog() {
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
        <article className="blog-featured">
          <img
            className="blog-featured-image"
            src="/images/blog-images/cv-post-thumnail.jpg"
            alt="Computer Vision Detection Progress"
          />
          <div className="blog-featured-body">
            <div className="blog-featured-label">
              <span className="blog-featured-dot" />
              <span className="blog-featured-tag">Latest Post</span>
            </div>
            <h2 className="blog-featured-title">Computer Vision Detection Progress</h2>
            <p className="blog-featured-excerpt">
              An update on our computer vision detection system and the progress we've made
              in developing autonomous navigation capabilities for our drone.
            </p>
            <Link href="/posts/cv-progress/" className="blog-read-more">
              Read More
              <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </article>
      </div>

      <MainFooter />
    </div>
  )
}
