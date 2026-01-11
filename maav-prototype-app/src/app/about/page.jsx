"use client"
import React from 'react'
import { MainHeader } from "../../components/ui/mainHeader"
import { MainFooter } from "../../components/ui/mainFooter"

export default function About() {
  return (
    <div>
      <MainHeader />

      <div
        className="page-hero"
        style={{ backgroundImage: "url(/images/team-pic.png)" }}
      >
        <h1 className="page-hero-title">ABOUT</h1>
      </div>

      <section className="section">
        <div className="section-container">
          <header className="section-header" style={{ textAlign: 'left' }}>
            <div className="section-label">
              <span className="section-label-line" />
              <span className="section-label-text">Our Story</span>
            </div>
            <h2 className="section-title">WHO WE ARE</h2>
          </header>

          <div className="about-text">
            <p>
              <strong>Michigan Autonomous Aerial Vehicles (MAAV)</strong> is a student-run group at the University of Michigan
              that is participating in the IARC Competition. Members of MAAV engage in the design, building, and testing
              of an autonomous unmanned aerial system (UAS) while furthering multiple areas of
              Computer Science and Aerospace Engineering research.
            </p>
            <p>
              MAAV as an organization has existed at U-M for nearly 15 years. However, post-COVID we went through a
              period of major knowledge loss and therefore last year we attempted to attend the SUAS competition
              but were unable to get a working flight demo with autonomous control. Going to competition this year was our main focus;
              we are thrilled with our progress the past few years and are excited to compete!
            </p>

            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-value">15+</span>
                <span className="stat-label">Years Active</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">50+</span>
                <span className="stat-label">Members</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">3</span>
                <span className="stat-label">Subteams</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">IARC</span>
                <span className="stat-label">Competition</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MainFooter />
    </div>
  )
}
