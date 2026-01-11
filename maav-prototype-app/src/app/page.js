"use client"
import "./globals.css";
import Link from "next/link";
import { MainCanvas } from "@/components/three/mainCanvas";
import { DroneShowcase } from "@/components/three/DroneShowcase";
import { MainHeader } from "../components/ui/mainHeader";
import { MainFooter } from "../components/ui/mainFooter";
import { BackToTop } from "../components/ui/BackToTop";

const subteams = [
  {
    id: "structures",
    number: "01",
    title: "Structures",
    description: "Design, build, and test drone frames using SolidWorks for CAD/FEA. We utilize carbon fiber layups, CNC machining, and additive manufacturing.",
    image: "/images/structures-thumbnail.png",
    link: "/subteams#structures"
  },
  {
    id: "embedded",
    number: "02",
    title: "Embedded Systems",
    description: "Custom PCB design for flight controllers and safety systems. The bridge between hardware and software, integrating all electrical components.",
    image: "/images/embedded-thumbnail.png",
    link: "/subteams#embedded"
  },
  {
    id: "software",
    number: "03",
    title: "Software",
    description: "Computer vision, autonomous navigation, and flight control algorithms. We develop the intelligence that makes our drones fly themselves.",
    image: "/images/software-thumbnail.png",
    link: "/subteams#software"
  }
];

function SubteamCard({ team }) {
  return (
    <article className="team-card">
      <div className="team-card-media">
        <img src={team.image} alt={team.title} />
        <div className="team-card-overlay" />
      </div>
      <div className="team-card-body">
        <span className="team-card-number">{team.number}</span>
        <h3 className="team-card-title">{team.title}</h3>
        <p className="team-card-desc">{team.description}</p>
        <Link href={team.link} className="team-card-link">
          Explore
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </article>
  );
}

export default function App() {
  return (
    <div>
      <MainHeader />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <img
            src="/images/maav-mair.png"
            alt="MAAV team"
            className="hero-bg-image"
          />
          <div className="hero-bg-overlay" />
        </div>

        <div className="hero-content">
          <img
            src="/images/maav-logo-border.png"
            alt="MAAV Logo"
            className="hero-logo"
          />

          <h1 className="hero-title">MAAV</h1>
          <p className="hero-subtitle">Michigan Autonomous Aerial Vehicles</p>
          <p className="hero-university">University of Michigan</p>

          <div className="hero-cta-group">
            <Link href="/about" className="hero-cta-primary">
              Learn More
            </Link>
            <Link href="https://forms.gle/obSNekRc4Sh9njLc9" className="hero-cta-secondary" target="_blank">
              Join Us
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Drone Showcase */}
      <DroneShowcase />

      {/* About Section */}
      <MainCanvas />

      {/* Teams Section */}
      <section className="section">
        <div className="section-container">
          <header className="section-header">
            <div className="section-label">
              <span className="section-label-line" />
              <span className="section-label-text">Our Teams</span>
            </div>
            <h2 className="section-title">THREE SPECIALIZED ENGINEERING TEAMS</h2>
            <p className="section-subtitle">
              Working together to push the boundaries of autonomous flight technology
            </p>
          </header>

          <div className="teams-grid">
            {subteams.map((team) => (
              <SubteamCard key={team.id} team={team} />
            ))}
          </div>
        </div>
      </section>

      <MainFooter />
      <BackToTop />
    </div>
  );
}
