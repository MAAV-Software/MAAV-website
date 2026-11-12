"use client"
import React, { useEffect, useRef } from 'react'
import { MainHeader } from "../../components/ui/mainHeader"
import { MainFooter } from "../../components/ui/mainFooter"

const leads = {
  executive: [
    { name: "Ian Stough", role: "President", photo: "/images/headshots/ian-photo.png",
      linkedin: "https://www.linkedin.com/in/ian-stough-8336a6322/" },
  ],
  vicePresident: [
    { name: "Vishal Dattathreya", role: "Vice President", photo: "/images/headshots/vishal-photo.jpg",
      linkedin: "https://www.linkedin.com/in/vishal-dattathreya/" },
  ],
  operations: [
    { name: "Tiffany Cheung", role: "Secretary", photo: "/images/headshots/tiffany-photo.png",
      github: "https://github.com/tiiff-c", linkedin: "https://www.linkedin.com/in/tiffany-cheung1858/"  },
    { name: "Amit Sail", role: "Treasurer", photo: "/images/headshots/amit-photo.png",
      linkedin: "https://www.linkedin.com/in/amit-sail/", website: "https://sail-nautica.github.io/" },
    { name: "Sandeep Sawhney", role: "Public Relations", photo: "/images/headshots/sandeep-photo.jpg",
      github: "https://github.com/SandeepSawhney2015", linkedin: "https://www.linkedin.com/in/sandeep-sawhney-894b12301?utm_source=share_via&utm_content=profile&utm_medium=member_ios", website: "http://sandeepsawhney.dev/" },
  ],
  teamLeads: [
    { name: "Enrique Vezga", role: "Team Lead", team: "Structures", photo: "/images/headshots/enrique-photo.JPG",
      linkedin: "https://www.linkedin.com/in/enrique-vezga-530118356/" },
    { name: "James Spielman", role: "Team Lead", team: "Embedded Systems", photo: "/images/headshots/jamie-photo.jpg",
      linkedin: "https://www.linkedin.com/in/james-spielman/" },
    { name: "Dervin Tian", role: "Team Lead", team: "Software", photo: "/images/headshots/dervin-photo.JPG",
      website: "https://dervintian.github.io/" },
    { name: "Vincent Chung", role: "Team Lead", team: "Perception", photo: "/images/output-onlinepngtools.png",
      linkedin: "https://www.linkedin.com/in/vincent-c-59b33b234/" },
  ],
}

// Display order of the icons + where each icon file lives
const SOCIALS = [
  { key: "website",  label: "Personal website", icon: "/images/icons/website.svg" },
  { key: "github",   label: "GitHub",           icon: "/images/icons/github.svg" },
  { key: "linkedin", label: "LinkedIn",         icon: "/images/icons/linkedin.svg" },
]

function LeadCard({ lead, delay = 0 }) {
  const available = SOCIALS.filter((s) => lead[s.key])

  return (
    <div
      className={`lead-card scroll-animate ${lead.primary ? 'lead-primary' : ''}`}
      style={{ transitionDelay: `${delay * 0.1}s` }}
    >
      <img className="lead-card-photo" src={lead.photo} alt={lead.name} />
      <h3 className="lead-card-name">{lead.name}</h3>
      <span className="lead-card-role">{lead.role}</span>
      {lead.team && <span className="lead-card-team">{lead.team}</span>}

      {available.length > 0 && (
        <div className="lead-card-socials">
          {available.map((s) => (
            <a
              key={s.key}
              href={lead[s.key]}
              target="_blank"
              rel="noopener noreferrer"
              className="lead-social-link"
              aria-label={`${lead.name}'s ${s.label}`}
              title={s.label}
            >
              <span className="lead-social-icon" style={{ '--icon': `url(${s.icon})` }} />
            </a>
          ))}
        </div>
      )}
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
