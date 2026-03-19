import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Wifi, BellRing, UtensilsCrossed, Sunrise, WashingMachine, Lock } from 'lucide-react'
import s from './Facilities.module.css'

const FACILITIES = [
  { icon: Wifi, title: 'Free High-Speed WiFi', desc: 'Blazing-fast internet throughout the hostel. Stream, work, or share — no buffering.' },
  { icon: BellRing, title: '24/7 Reception', desc: 'Our friendly team is always here no matter when you arrive, day or night.' },
  { icon: UtensilsCrossed, title: 'Common Kitchen', desc: 'A fully equipped kitchen for whipping up your own meals and sharing recipes.' },
  { icon: Sunrise, title: 'Rooftop Lounge', desc: 'Unwind with panoramic city views, fairy lights, and good conversations above the skyline.' },
  { icon: WashingMachine, title: 'Laundry Service', desc: 'Wash and fold service so you can travel light and stay fresh on the road.' },
  { icon: Lock, title: 'Secure Lockers', desc: 'Personal lockers with digital locks for every guest. Your belongings, always safe.' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.1,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export default function Facilities() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className={s.facilities} id="facilities" ref={ref}>
      <div className={s.header}>
        <div className="section-label">✦ FACILITIES</div>
        <h2
          className={s.title}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7 }}
        >
          World-Class Facilities
        </h2>
        <motion.p
          className={s.subtitle}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          Everything you need for a comfortable, connected, and memorable stay.
        </motion.p>
      </div>

      <div className={s.grid}>
        {FACILITIES.map((fac, i) => {
          const Icon = fac.icon
          return (
            <motion.div
              key={fac.title}
              className={s.card}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <span className={s.cardIcon}>
                <Icon size={24} strokeWidth={1.5} color="var(--gold)" />
              </span>
              <h3 className={s.cardTitle}>{fac.title}</h3>
              <p className={s.cardText}>{fac.desc}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
