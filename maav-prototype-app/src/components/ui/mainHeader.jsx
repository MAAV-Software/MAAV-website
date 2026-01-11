"use client"

import Link from "next/link"
import { useState } from "react"

export function MainHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <nav className="nav-bar">
        <div className="nav-container">
          <Link href="/" className="nav-logo">
            <img src="/images/maav-word.png" alt="MAAV" />
          </Link>

          <div className="nav-links">
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/subteams" className="nav-link">Teams</Link>
            <Link href="/leads" className="nav-link">Leadership</Link>
            <Link href="/sponsors" className="nav-link">Sponsors</Link>
            <Link href="/blog" className="nav-link">Blog</Link>
          </div>

          <Link
            href="https://forms.gle/obSNekRc4Sh9njLc9"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
          >
            Join MAAV
          </Link>

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="toggle-bar" />
            <span className="toggle-bar" />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <Link href="/about" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>About</Link>
        <Link href="/subteams" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Teams</Link>
        <Link href="/leads" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Leadership</Link>
        <Link href="/sponsors" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Sponsors</Link>
        <Link href="/blog" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
        <Link
          href="https://forms.gle/obSNekRc4Sh9njLc9"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-cta"
          onClick={() => setMobileMenuOpen(false)}
        >
          Join MAAV
        </Link>
      </div>
    </>
  )
}
