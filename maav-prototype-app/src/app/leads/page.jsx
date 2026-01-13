"use client"
import React, { useEffect, useRef } from 'react'
import { MainHeader } from "../../components/ui/mainHeader"
import { MainFooter } from "../../components/ui/mainFooter"

const leads = {
  executive: [
    { name: "Eli Goreta", role: "President", photo: "/images/headshots/IMG_2506.jpg", primary: true },
  ],
  vicePresident: [
    { name: "Ian Stough", role: "Vice President", photo: "/images/headshots/6V6A1219_Original.jpg" },
  ],
  operations: [
    { name: "Vishal Dattathreya", role: "Secretary", photo: "/images/headshots/iOS.jpg" },
    { name: "Rahil Bhavan", role: "Treasurer", photo: "/images/output-onlinepngtools.png" },
    { name: "Sandeep Sawhney", role: "Public Relations", photo: "/images/headshots/IMG_0233.jpg" },
  ],
  teamLeads: [
    { name: "Enrique Vezga", role: "Team Lead", team: "Structures", photo: "/images/output-onlinepngtools.png" },
    { name: "James Spielman", role: "Team Lead", team: "Embedded Systems", photo: "/images/headshots/DSC07973.jpg" },
    { name: "Dervin Tian", role: "Co-Lead", team: "Software", photo: "/images/headshots/dervin-photo.JPG" },
    { name: "Habib Shakour", role: "Co-Lead", team: "Software", photo: "/images/headshots/IMG_2629.jpg" },
  ],
}

function LeadCard({ lead, delay = 0 }) {
  return (
    <div
      className={`lead-card scroll-animate ${lead.primary ? 'lead-primary' : ''}`}
      style={{ transitionDelay: `${delay * 0.1}s` }}
    >
      <img className="lead-card-photo" src={lead.photo} alt={lead.name} />
      <h3 className="lead-card-name">{lead.name}</h3>
      <span className="lead-card-role">{lead.role}</span>
      {lead.team && <span className="lead-card-team">{lead.team}</span>}
    </div>
  )
}

export default function Leads() {
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = containerRef.current?.querySelectorAll('.scroll-animate')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div>
      <MainHeader />

      <div
        className="page-hero"
        style={{ backgroundImage: "url(/images/maav-mair.png)" }}
      >
        <h1 className="page-hero-title">LEADERSHIP</h1>
      </div>

      <section className="section" ref={containerRef}>
        <div className="section-container">
          <header className="section-header">
            <div className="section-label">
              <span className="section-label-line" />
              <span className="section-label-text">2025-2026</span>
            </div>
            <h2 className="section-title">CURRENT LEADERSHIP TEAM</h2>
          </header>

          <div className="leads-pyramid">
            {/* President - Top of pyramid */}
            <div className="leads-row">
              {leads.executive.map((lead, i) => (
                <LeadCard key={lead.name} lead={lead} delay={i} />
              ))}
            </div>

            {/* Vice President */}
            <div className="leads-row">
              {leads.vicePresident.map((lead, i) => (
                <LeadCard key={lead.name} lead={lead} delay={i + 1} />
              ))}
            </div>

            {/* Operations - Secretary, Treasurer, PR */}
            <div className="leads-row">
              {leads.operations.map((lead, i) => (
                <LeadCard key={lead.name} lead={lead} delay={i + 2} />
              ))}
            </div>

            {/* Team Leads - Bottom of pyramid */}
            <div className="leads-row">
              {leads.teamLeads.map((lead, i) => (
                <LeadCard key={lead.name} lead={lead} delay={i + 5} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <MainFooter />
    </div>
  )
}
