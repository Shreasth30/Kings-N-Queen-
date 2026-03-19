import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import s from './About.module.css'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
})

function Counter({ target, decimal = false, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 2200
    const start = performance.now()

    function animate(now) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(eased * target)
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [inView, target])

  return (
    <span ref={ref} className={s.statNum}>
      {decimal ? value.toFixed(1) : Math.floor(value)}
      {suffix}
    </span>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className={s.about} id="about" ref={ref}>
      <div className={s.grid}>
        <div>
          <motion.div
            className={s.goldLine}
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'left' }}
          />
          <motion.h2
            className={s.title}
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            Our Story
          </motion.h2>
          <motion.p
            className={s.text}
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            Kings N Queens was born from a simple belief: every traveler deserves
            comfort without compromise. Nestled in the vibrant heart of New Delhi,
            we've created a space where the charm of a boutique hotel meets the
            warmth of a backpacker community.
          </motion.p>
          <motion.p
            className={s.text}
            variants={fadeUp(0.3)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            Whether you're a solo adventurer seeking stories or a group looking
            for a royal retreat on a budget, our doors — and hearts — are always
            open. Every corner is designed with modern aesthetics and curated
            experiences.
          </motion.p>

          <motion.div
            className={s.stats}
            variants={fadeUp(0.4)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className={s.stat}>
              <Counter target={500} suffix="+" />
              <span className={s.statLabel}>Happy Guests</span>
            </div>
            <div className={s.statDivider} />
            <div className={s.stat}>
              <Counter target={15} />
              <span className={s.statLabel}>Rooms</span>
            </div>
            <div className={s.statDivider} />
            <div className={s.stat}>
              <Counter target={4.8} decimal />
              <span className={s.statLabel}>★ Rating</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className={s.imgWrap}
          variants={fadeUp(0.3)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <img src="/images/about.png" alt="Kings N Queens lounge" loading="lazy" />
          <div className={s.imgFrame} />
        </motion.div>
      </div>

      <div className={s.marqueeWrap}>
        <div className={s.marquee}>
          <div className={s.marqueeInner}>
            <span>PREMIUM STAYS · ROYAL COMFORT · NEW DELHI · COMMUNITY LIVING · KINGS N QUEENS · BOOK YOUR STAY ·</span>
            <span>PREMIUM STAYS · ROYAL COMFORT · NEW DELHI · COMMUNITY LIVING · KINGS N QUEENS · BOOK YOUR STAY ·</span>
            <span>PREMIUM STAYS · ROYAL COMFORT · NEW DELHI · COMMUNITY LIVING · KINGS N QUEENS · BOOK YOUR STAY ·</span>
            <span>PREMIUM STAYS · ROYAL COMFORT · NEW DELHI · COMMUNITY LIVING · KINGS N QUEENS · BOOK YOUR STAY ·</span>
          </div>
        </div>
      </div>
    </section>
  )
}
