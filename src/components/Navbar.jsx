import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'
import s from './Navbar.module.css'

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Virtual Tour', href: '#virtual-tour' },
  { label: 'Location', href: '#location' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleMenu = () => setMenuOpen(prev => !prev)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`${s.navbar} ${scrolled ? s.scrolled : ''}`}>
        <div className={s.inner}>
          <a href="#home" className={s.logo}>
            <span className={s.logoMonogram}>K&Q</span>
            <span className={s.logoText}>Kings N Queens</span>
          </a>
          <ul className={`${s.links} ${menuOpen ? s.linksOpen : ''}`}>
            {NAV_ITEMS.map(item => (
              <li key={item.href}>
                <a href={item.href} className={s.link} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className={`${s.hamburger} ${menuOpen ? s.hamburgerActive : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <ThemeToggle />
            <a href="#rooms" className={s.bookBtn}>Book Now</a>
          </div>
        </div>
      </nav>
      <div
        className={`${s.overlay} ${menuOpen ? s.overlayOpen : ''}`}
        onClick={closeMenu}
      />
    </>
  )
}
