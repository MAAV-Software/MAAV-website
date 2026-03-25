"use client"
import React from 'react'
import { MainHeader } from "../../components/ui/mainHeader"
import { MainFooter } from "../../components/ui/mainFooter"

export default function Sponsors() {
  return (
    <div>
      <MainHeader />

      <div
        className="page-hero"
        style={{ backgroundImage: "url(/images/maav-mair.png)" }}
      >
        <h1 className="page-hero-title">SPONSORS</h1>
      </div>

      <section className="section">
        <div className="section-container">
          <header className="section-header">
            <div className="section-label">
              <span className="section-label-line" />
              <span className="section-label-text">Our Partners</span>
            </div>
            <h2 className="section-title">THANK YOU TO OUR SPONSORS</h2>
            <p className="section-subtitle">
              Our work would not be possible without the generous support of our various sponsors.
              If you would like to become a sponsor of our team, please reach out at{' '}
              <a href="mailto:maav-leads@umich.edu" style={{ color: 'var(--color-accent)' }}>
                maav-leads@umich.edu
              </a>
            </p>
          </header>

          <div className="sponsor-pics">
            <img className="sponsor-pic" src="/images/Ford_logo_flat.svg.png" alt="Ford" />
            <img className="sponsor-pic" src="/images/lockheed-martin-logo.png" alt="Lockheed Martin" />
            <img className="sponsor-pic" src="/images/Northrop-Grumman-Logo-1994.png" alt="Northrop Grumman" />
            <img className="sponsor-pic" src="/images/Raytheon-Logo.png" alt="Raytheon" />
            <img className="sponsor-pic" src="/images/onshape-logo.svg" alt="Onshape" />
          </div>
        </div>
      </section>

      <MainFooter />
    </div>
  )
}
