import { Instagram, Facebook, MessageCircle } from 'lucide-react'
import s from './Footer.module.css'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Rooms & Pricing', href: '#rooms' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Virtual Tour', href: '#virtual-tour' },
  { label: 'Location', href: '#location' },
]

export default function Footer() {
  return (
    <footer className={s.footer} id="footer">
      <div className={s.container}>
        <div className={s.grid}>
          <div>
            <span className={s.logo}>Kings N Queens</span>
            <p className={s.tagline}>
              Where Royalty Meets Community
            </p>
          </div>

          <div>
            <h4 className={s.colTitle}>Quick Links</h4>
            <ul className={s.links}>
              {LINKS.map(link => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={s.colTitle}>Connect With Us</h4>
            <div className={s.socials}>
              <a href="#" className={s.socialIcon} aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className={s.socialIcon} aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a
                href="https://wa.me/919876543210"
                className={s.socialIcon}
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className={s.bottom}>
          © 2026 Kings N Queens Hostel. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
