import React from 'react';
import Logo from '@/components/Logo/Logo';
import styles from './Footer.module.scss';

const LINKS = {
  Product: [
    { label: 'Features',        href: '#features'    },
    { label: 'How It Works',    href: '#how-it-works' },
    { label: 'Languages',       href: '#languages'   },
    { label: 'Integrations',    href: '#'            },
    { label: 'VS Code Plugin',  href: '#'            },
    { label: 'CLI Tool',        href: '#'            },
  ],
  Developers: [
    { label: 'Documentation',   href: '#' },
    { label: 'API Reference',   href: '#' },
    { label: 'GitHub',          href: '#' },
    { label: 'Changelog',       href: '#' },
    { label: 'Status',          href: '#' },
  ],
  Company: [
    { label: 'About',           href: '#' },
    { label: 'Blog',            href: '#' },
    { label: 'Careers',         href: '#' },
    { label: 'Privacy Policy',  href: '#' },
    { label: 'Terms of Service',href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer} id="company">
      {/* Background video from Neuralyn specification */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.bgVideo}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
      />
      <div className={styles.videoOverlay} aria-hidden="true" />
      <div className={styles.topGradient} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        {/* Top row */}
        <div className={styles.top}>
          {/* Brand column */}
          <div className={styles.brand}>
            <Logo size="md" />
            <p className={styles.tagline}>
              AI-powered code review and bug explanation for modern development teams.
            </p>
            <div className={styles.socials} aria-label="Social media links">
              <a href="#" className={styles.socialLink} aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter / X">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className={styles.linkCols}>
            {Object.entries(LINKS).map(([group, links]) => (
              <div key={group} className={styles.linkCol}>
                <div className={styles.colHeading}>{group}</div>
                <ul>
                  {links.map((l, i) => (
                    <li key={i}>
                      <a href={l.href} className={styles.footLink}>{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Refyn. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <a href="#" className={styles.bottomLink}>Privacy</a>
            <a href="#" className={styles.bottomLink}>Terms</a>
            <a href="#" className={styles.bottomLink}>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

