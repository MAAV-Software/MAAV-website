"use client"
import React, { useEffect, useRef } from 'react'
import { MainHeader } from "../../components/ui/mainHeader"
import { MainFooter } from "../../components/ui/mainFooter"
import { BackToTop } from "../../components/ui/BackToTop"

const subteams = [
  {
    id: "structures",
    number: "01",
    title: "Structures",
    color: "#00d4ff",
    image: "/images/structures-thumbnail.png",
    sections: [
      {
        title: "The Frame",
        content: "Our Structures subteam primarily handles all frame design and manufacturing for our competition drones. This involves material research, computer aided design, waterjetting, 3D printing, mounting tool selection, carbon fiber layups, and repetitive iteration of design chnages. Additionally, the structures team designs and manufactures test rigs needed by our embedded and software teams to test the drones."
      }
    ]
  },
  {
    id: "embedded",
    number: "02",
    title: "Embedded Systems",
    color: "#FFCB05",
    image: "/images/embedded-thumbnail.png",
    sections: [
      { title: "Circuitry", 
        content: "The Embedded Systems subteam designs and builds custom printed circuit boards (PCBs) to integrate the electrical components of our competition drones. We research components based on design constraints, develop electrical systems, and manage power distribution to ensure reliable and safe operation. Using tools such as Altium Designer and Eagle, we design custom boards, including our I/O board for the Raspberry Pi CM5, alongside integrating off-the-shelf components." 
      },
      {
        title: "Integration",
        content: "The Embedded Systems subteam serves as the bridge between hardware and software, bringing together the electrical systems and firmware that power our competition drones. We configure firmware, integrate hardware components, and debug system-level issues to ensure reliable communication between subsystems. Through soldering, testing, and system integration, we transform individual components into a cohesive, functional vehicle."
      }
    ]
  },
  {
    id: "software",
    number: "03",
    title: "Software",
    color: "#00ff88",
    image: "/images/software-thumbnail.png",
    sections: [
      {
        title: "Computer Vision",
        content: "Our software team leverages the Raspberry Pi Arducam to capture and analyze the surrounding environment. To meet the challenges of our new mission, we develop and refine state-of-the-art algorithms for tasks such as detection, autonomous flight, and tracking using images taken from the drone. These algorithms are executed on a Raspberry Pi with a Hailo AI hat to ensure high-performance processing in real-time."
      },
      {
        title: "Guidance, Navigation, and Control",
        content: "Guidance, navigation, and control is another critical focus of our team. We process inputs from the PX4 flight controller to determine the drone's position and generate precise flight paths to guide it to its destination. The Software subteam also develops a series of control states tailored to different mission phases, including landing/takeoff and waypoint navigation."
      },
      {
        title: "Utilities",
        content: "In addition to core mission tasks, our Software subteam develops tools to support and streamline the team's workflow and enhance the overall experience. The Software subteam has developed the team's website as well as the automated emailing system designed for prospective new members."
      }
    ]
  }
]

function SubteamSection({ team, index }) {
  return (
    <div id={team.id} className="subteam-full-section">
      <div className="subteam-full-header">
        <div className="subteam-full-image">
          <img src={team.image} alt={team.title} />
          <div className="subteam-full-image-overlay" />
        </div>
        <div className="subteam-full-title-block">
          <span className="subteam-full-number" style={{ color: team.color }}>{team.number}</span>
          <h2 className="subteam-full-title">{team.title}</h2>
        </div>
      </div>

      <div className="subteam-full-content">
        {team.sections.map((section, i) => (
          <div key={i} className="subteam-section">
            <h3 className="subteam-section-title">{section.title}</h3>
            <p className="subteam-section-body">{section.content}</p>
          </div>
        ))}

        {team.techStack && (
          <div className="subteam-section">
            <h3 className="subteam-section-title">Tech Stack</h3>
            <div className="tech-stack">
              {team.techStack.map((tech, i) => (
                <img key={i} src={tech.image} alt={tech.name} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Subteams() {
  const navRef = useRef(null)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' })
    }
  }

  return (
    <div>
      <MainHeader />

      <div
        className="page-hero"
        style={{ backgroundImage: "url(/images/subteams-thumbnail.png)" }}
      >
        <h1 className="page-hero-title">SUBTEAMS</h1>
      </div>

      <nav className="subteam-nav" ref={navRef}>
        <button onClick={() => scrollToSection('structures')} className="subteam-nav-link">
          Structures
        </button>
        <span className="subteam-nav-divider">|</span>
        <button onClick={() => scrollToSection('embedded')} className="subteam-nav-link">
          Embedded Systems
        </button>
        <span className="subteam-nav-divider">|</span>
        <button onClick={() => scrollToSection('software')} className="subteam-nav-link">
          Software
        </button>
      </nav>

      <section className="section">
        <div className="section-container">
          <p className="section-subtitle" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
            We've broken down our work into smaller groups, each focusing on one of three key parts
            of the project: software, structures, and embedded systems. Each group handles a specific part,
            led by a team lead who keeps their group on track to hit their goals.
          </p>

          {subteams.map((team, index) => (
            <SubteamSection key={team.id} team={team} index={index} />
          ))}
        </div>
      </section>

      <MainFooter />
      <BackToTop />
    </div>
  )
}
