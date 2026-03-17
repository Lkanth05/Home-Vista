import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubscribe(e) {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setTimeout(() => {
      setSubscribed(false)
      setEmail('')
    }, 3000)
  }

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col about">
          <Link to="/" className="footer-brand" aria-label="HomeVista home">
            <svg className="logo-mark" width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-8.5z" fill="currentColor" opacity="0.95"/>
            </svg>
            <div className="brand-text">
              <div className="brand-title">HomeVista</div>
              <div className="brand-sub">Real Estate Demo</div>
            </div>
          </Link>

          <p className="footer-desc">
            HomeVista is a demo real estate UI showcasing modern listing experiences, trusted agents, and property details — built with React + Vite.
          </p>

          <div className="socials" aria-label="Social links">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M20 7.5c-.6.3-1.1.4-1.8.5.7-.4 1.1-1.1 1.3-1.9-.7.4-1.5.6-2.3.8C16.6 6 15.4 5.5 14 5.5c-2 0-3.5 1.7-3.5 3.8 0 .3 0 .6.1.9-2.9-.1-5.5-1.6-7.3-3.8-.3.6-.5 1.2-.5 1.9 0 1.3.7 2.5 1.8 3.2-.6 0-1.2-.2-1.7-.5v.1c0 1.9 1.3 3.6 3 3.9-.4.1-.8.1-1.3.1-.3 0-.6 0-.9-.1.6 1.9 2.4 3.3 4.4 3.3-1.6 1.3-3.6 2.1-5.8 2.1H6c2 1.3 4.3 2 6.8 2 8.1 0 12.5-6.7 12.5-12.5v-.6c.9-.6 1.6-1.4 2.2-2.3-.8.4-1.6.6-2.4.7z"/></svg>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4zM8.5 8h3.8v2.2h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V24h-4v-6.2c0-1.5 0-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V24h-4z"/></svg>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 3c2.7 0 3 .01 4.1.06 1 .05 1.5.2 1.8.34.5.2.9.4 1.3.8.4.4.6.8.8 1.3.14.3.29.8.34 1.8.05 1.1.06 1.4.06 4.1s-.01 3-.06 4.1c-.05 1-.2 1.5-.34 1.8-.2.5-.4.9-.8 1.3-.4.4-.8.6-1.3.8-.3.14-.8.29-1.8.34-1.1.05-1.4.06-4.1.06s-3-.01-4.1-.06c-1-.05-1.5-.2-1.8-.34-.5-.2-.9-.4-1.3-.8-.4-.4-.6-.8-.8-1.3-.14-.3-.29-.8-.34-1.8C3.01 15 3 14.7 3 12s.01-3 .06-4.1c.05-1 .2-1.5.34-1.8.2-.5.4-.9.8-1.3.4-.4.8-.6 1.3-.8.3-.14.8-.29 1.8-.34C9 3.01 9.3 3 12 3zm0 2.2c-2.6 0-2.9.01-3.9.06-.9.04-1.4.19-1.7.32-.4.18-.7.4-1 .7-.3.3-.6.6-.7 1-.13.3-.28.8-.32 1.7-.05 1-.06 1.3-.06 3.9s.01 2.9.06 3.9c.04.9.19 1.4.32 1.7.18.4.4.7.7 1 .3.3.6.6 1 0.7.3.13.8.28 1.7.32 1 .05 1.3.06 3.9.06s2.9-.01 3.9-.06c.9-.04 1.4-.19 1.7-.32.4-.18.7-.4 1-.7.3-.3.6-.6.7-1 .13-.3.28-.8.32-1.7.05-1 .06-1.3.06-3.9s-.01-2.9-.06-3.9c-.04-.9-.19-1.4-.32-1.7-.18-.4-.4-.7-.7-1-.3-.3-.6-.6-1-.7-.3-.13-.8-.28-1.7-.32-1-.05-1.3-.06-3.9-.06zM12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6zm0 2.2a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2zm5.2-3.1a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z"/></svg>
            </a>
          </div>
        </div>

        <div className="footer-col links">
          <h4 className="col-title">Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/listings">Listings</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col support">
          <h4 className="col-title">Support</h4>
          <ul>
            <li><a href="/faq" onClick={(e)=>e.preventDefault()}>FAQ</a></li>
            <li><a href="/help" onClick={(e)=>e.preventDefault()}>Help Center</a></li>
            <li><a href="/terms" onClick={(e)=>e.preventDefault()}>Terms &amp; Privacy</a></li>
          </ul>

          <div className="subscribe">
            <form onSubmit={handleSubscribe} className="subscribe-form" aria-label="Subscribe to updates">
              <label htmlFor="subscribe-email" className="sr-only">Email</label>
              <input
                id="subscribe-email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className="btn small" type="submit">{subscribed ? 'Subscribed' : 'Subscribe'}</button>
            </form>
            <div className="muted" style={{marginTop:8, fontSize:13}}>Get new listings and market insights.</div>
          </div>
        </div>

        <div className="footer-col office">
          <h4 className="col-title">Office</h4>
          <address className="office-info">
            123 Demo Street<br/>
            Cityville, Country 12345
          </address>
          <div className="office-contact">
            <a href="tel:+15554441212" className="office-link">Phone: (555) 444-1212</a>
            <a href="mailto:hello@homevista.example" className="office-link">hello@homevista.example</a>
          </div>

          <div className="office-hours">
            <h5 className="hours-title">Hours</h5>
            <div className="muted">Mon–Fri: 9:00 — 18:00</div>
            <div className="muted">Sat: 10:00 — 14:00</div>
            <div className="muted">Sun: Closed</div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <div className="muted">© {new Date().getFullYear()} HomeVista — Demo project. All content is sample data.</div>
          <div className="bottom-links muted">
            <a href="/sitemap" onClick={(e)=>e.preventDefault()}>Sitemap</a>
            <span>•</span>
            <a href="/security" onClick={(e)=>e.preventDefault()}>Security</a>
          </div>
        </div>
      </div>
    </footer>
  )
}