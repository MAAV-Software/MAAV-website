'use client'
import { useRef, useEffect, useState, useCallback } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { MainScene } from './mainScene'
import * as THREE from 'three'

const sections = [
  {
    id: 'overview',
    title: 'OUR DRONE',
    subtitle: 'Custom-built autonomous quadcopter',
    description: 'Every component designed, built, and programmed by MAAV students.',
    camera: { position: [6, 4, 10], target: [0, 1, 0] },
    color: '#00d4ff'
  },
  {
    id: 'software',
    title: 'SOFTWARE',
    number: '01',
    subtitle: 'The Brain',
    description: 'Jetson Xavier NX runs our computer vision and autonomous navigation algorithms. Real-time object detection, path planning, and flight control.',
    camera: { position: [2, 1.8, 0], target: [-0.3, 1.7, 0] },
    color: '#00ff88',
    highlight: 'jetson'
  },
  {
    id: 'structures',
    title: 'STRUCTURES',
    number: '02',
    subtitle: 'The Frame',
    description: 'Carbon fiber construction with custom CNC-machined components. Designed in SolidWorks, optimized through FEA analysis for strength and weight.',
    camera: { position: [-1, 3, 6], target: [-2, 1.9, 0] },
    color: '#00d4ff',
    highlight: 'frame'
  },
  {
    id: 'embedded',
    title: 'EMBEDDED',
    number: '03',
    subtitle: 'The Nervous System',
    description: 'Custom PCBs connect sensors, motors, and compute. PX4 flight controller with our safety systems and power distribution.',
    camera: { position: [0, 10, 0.1], target: [0, 1, 0] },
    color: '#FFCB05',
    highlight: 'pcb'
  }
]

function CameraController({ smoothProgress }) {
  const { camera } = useThree()
  const currentPos = useRef(new THREE.Vector3(6, 4, 10))
  const currentLookAt = useRef(new THREE.Vector3(0, 1, 0))

  useFrame(() => {
    const progress = smoothProgress.current

    // Map progress to a continuous value across all sections
    // 0 = start of first section, 3 = end of last section
    const totalProgress = progress * (sections.length - 1)

    // Find which two sections we're between
    const lowerIndex = Math.floor(totalProgress)
    const upperIndex = Math.min(lowerIndex + 1, sections.length - 1)
    const t = totalProgress - lowerIndex // 0-1 between the two sections

    // Smooth easing for the transition
    const eased = t * t * (3 - 2 * t) // smoothstep

    const fromSection = sections[lowerIndex]
    const toSection = sections[upperIndex]

    // Interpolate between the two sections
    const targetPos = new THREE.Vector3(...fromSection.camera.position)
    const toPos = new THREE.Vector3(...toSection.camera.position)
    targetPos.lerp(toPos, eased)

    const targetLookAt = new THREE.Vector3(...fromSection.camera.target)
    const toLookAt = new THREE.Vector3(...toSection.camera.target)
    targetLookAt.lerp(toLookAt, eased)

    // Silky smooth camera follow
    currentPos.current.lerp(targetPos, 0.08)
    currentLookAt.current.lerp(targetLookAt, 0.08)

    camera.position.copy(currentPos.current)
    camera.lookAt(currentLookAt.current)
  })

  return null
}

function Scene({ smoothProgress }) {
  return (
    <>
      <CameraController smoothProgress={smoothProgress} />
      <color attach="background" args={['#0a1020']} />
      <Environment files="/images/ashphalt.jpg" />
      <MainScene />
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
      <directionalLight position={[-10, 5, 5]} intensity={1} color="#00d4ff" />
      <pointLight position={[0, 10, 0]} intensity={1.5} color="#FFCB05" />
      <pointLight position={[0, -5, 10]} intensity={1} color="#ffffff" />
    </>
  )
}

export function DroneShowcase() {
  const containerRef = useRef(null)
  const [activeSection, setActiveSection] = useState(0)

  // Smooth scroll progress using refs for better performance
  const targetProgress = useRef(0)
  const smoothProgress = useRef(0)
  const rafId = useRef(null)

  // Animation loop for buttery smooth interpolation
  const animate = useCallback(() => {
    // Lerp towards target - this creates the Apple-like smoothness
    const diff = targetProgress.current - smoothProgress.current
    smoothProgress.current += diff * 0.08

    // Update active section - use same logic as camera
    const totalProgress = smoothProgress.current * (sections.length - 1)
    const newSection = Math.round(totalProgress) // Round to nearest section
    setActiveSection(Math.min(newSection, sections.length - 1))

    rafId.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    // Start animation loop
    rafId.current = requestAnimationFrame(animate)

    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const scrollableHeight = containerRef.current.offsetHeight - window.innerHeight
      const scrolled = -rect.top
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight))

      // Update target - the animation loop will smoothly interpolate
      targetProgress.current = progress
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [animate])

  return (
    <div ref={containerRef} className="drone-showcase">
      <div className="drone-showcase-canvas">
        <Canvas camera={{ fov: 50, position: [6, 4, 10] }}>
          <Scene smoothProgress={smoothProgress} />
        </Canvas>

        {/* Progress indicator */}
        <div className="showcase-progress">
          {sections.map((section, index) => (
            <button
              key={section.id}
              className={`progress-dot ${activeSection === index ? 'active' : ''}`}
              style={{ '--dot-color': section.color }}
              onClick={() => {
                const targetScroll = (index / sections.length) *
                  (containerRef.current.offsetHeight - window.innerHeight)
                window.scrollTo({
                  top: containerRef.current.offsetTop + targetScroll,
                  behavior: 'smooth'
                })
              }}
            >
              <span className="progress-dot-inner" />
              <span className="progress-dot-label">{section.title}</span>
            </button>
          ))}
        </div>

        {/* Section content overlays */}
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`showcase-overlay ${activeSection === index ? 'active' : ''}`}
            style={{ '--accent-color': section.color }}
          >
            {section.number && (
              <span className="showcase-number">{section.number}</span>
            )}
            <h2 className="showcase-title">{section.title}</h2>
            <p className="showcase-subtitle">{section.subtitle}</p>
            <p className="showcase-description">{section.description}</p>

            {section.id !== 'overview' && (
              <a href={`/subteams#${section.id}`} className="showcase-link">
                Learn More
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </a>
            )}
          </div>
        ))}

        {/* Scroll hint */}
        <div className={`scroll-hint ${activeSection > 0 ? 'hidden' : ''}`}>
          <span>Scroll to explore</span>
          <div className="scroll-hint-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
