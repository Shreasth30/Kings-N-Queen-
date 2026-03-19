import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import s from './Hero.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Hero() {
  const bgRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return
      const y = window.scrollY
      if (y < window.innerHeight) {
        bgRef.current.style.transform = `scale(1.08) translateY(${y * 0.3}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className={s.hero} id="home">
      <div className={s.ring1} />
      <div className={s.ring2} />
      <div className={s.bg} />

      <div className={s.content}>
        <motion.div
          className={s.eyebrow}
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          ✦ EST. 2016 · GREATER NOIDA
        </motion.div>

        <motion.h1
          className={s.headline}
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <span style={{ color: 'var(--gold)' }}>Where</span> Royalty
          <br />
          Meets Community
        </motion.h1>

        <motion.p
          className={s.subtitle}
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Budget stays with 5-star vibes — Kings N Queens Hostel
        </motion.p>

        <motion.div
          className={s.buttons}
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <a href="#rooms" className={`${s.btn} ${s.btnGold}`}>
            Explore Rooms
          </a>
          <a href="#virtual-tour" className={`${s.btn} ${s.btnOutline}`}>
            Take a Virtual Tour
          </a>
        </motion.div>
      </div>

      <div className={s.scrollIndicator}>
        <span className={s.scrollText}>Scroll</span>
        <div className={s.scrollArrow} />
      </div>
    </section>
  )
}
