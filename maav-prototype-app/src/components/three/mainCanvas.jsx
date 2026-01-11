'use client'
import { useEffect } from "react";

export function InstagramEmbed() {
  useEffect(() => {
    if (!window.instgrm) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink="https://www.instagram.com/umichmaav/"
      data-instgrm-version="14"
      style={{
        width: "100%",
        maxWidth: "400px",
        minHeight: "450px",
        margin: 0,
        background: "transparent",
        border: "none"
      }}
    />
  );
}

export function MainCanvas() {
  return (
    <section className="section">
      <div className="section-container">
        {/* About Section */}
        <div className="section-header" style={{ textAlign: 'left' }}>
          <div className="section-label">
            <span className="section-label-line" />
            <span className="section-label-text">About MAAV</span>
          </div>
          <h2 className="section-title">BUILDING THE FUTURE OF AUTONOMOUS FLIGHT</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              <strong>Michigan Autonomous Aerial Vehicles (MAAV)</strong> is a student-run
              project team at the University of Michigan that annually competes with teams
              internationally in the International Aerial Robotics Competition (IARC).
            </p>
            <p>
              MAAV strives to provide practical, hands-on experience to students by competing
              annually in the IARC Competition. Members engage in the design, building, and
              testing of an autonomous unmanned aerial system (UAS) while furthering multiple
              areas of research.
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

          <div className="instagram-card">
            <div className="instagram-card-header">
              <div className="instagram-card-label">
                <svg viewBox="0 0 24 24" fill="currentColor" className="instagram-icon">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                </svg>
                <span>@umichmaav</span>
              </div>
              <a
                href="https://www.instagram.com/umichmaav/"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-follow-btn"
              >
                Follow
              </a>
            </div>
            <div className="instagram-embed-wrapper">
              <InstagramEmbed />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
