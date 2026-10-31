'use client';

import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      {/* Ambient Glowing Backgrounds */}
      <div className="ambient-glow glow-1" />
      <div className="ambient-glow glow-2" />
      <div className="ambient-glow glow-3" />

      {/* Gorgeous Left-to-Right Glowing Ambient Light Ray Sweep */}
      <div className="light-sweep-container">
        <div className="light-sweep-beam" />
      </div>

      {/* Centered Logo Navbar (Seamless body background match) */}
      <header className="navbar">
        <div className="nav-logo-wrapper">
          <Image
            src="/logo.jpeg"
            alt="Be-Youth Logo"
            width={180}
            height={46}
            priority
            className="logo-img"
          />
        </div>
      </header>

      {/* 1. Full-Width Video Showcase (Right after Nav) with Glowing Beam Line */}
      <section className="video-fullwidth-section">
        <div className="glowing-beam-line" />
        <div className="video-container">
          <Image
            src="/Cover.jpeg"
            alt="Be-Youth Cover"
            fill
            priority
            className="cover-image"
          />
        </div>
        <div className="glowing-beam-line" />
      </section>

      {/* 2. Content Section (Texts & Info Cards after Video) */}
      <main className="content-container">
        {/* Header / Coming Soon Texts with Left-to-Right Shimmer */}
        <div className="header-section">
          <div className="coming-soon-badge">
            <span className="pulse-dot" />
            <span>COMING SOON</span>
          </div>
          <h1 className="hero-title">Care for Your Skin, All Day Long.</h1>
        </div>

        <section className="info-card-container">
          <div className="glass-card">
            <div className="info-item">
              <div className="icon-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="info-content">
                <span className="info-label">Our Location</span>
                <p className="info-value">
                  Plot-33, Kallayanpur Main Road.
                  <br />
                  Mirpur, Dhaka -1207.
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="info-content">
                <span className="info-label">Direct Inquiries</span>
                <p className="info-value">
                  <a href="mailto:Info@aestheticventurebd.com">
                    Info@aestheticventurebd.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Be-Youth. All rights reserved.</p>
      </footer>
    </>
  );
}
