import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react'
import s from './Location.module.css'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
})

export default function Location() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className={s.location} id="location" ref={ref}>
      <div className={s.container}>
        <div className={s.header}>
          <div className="section-label">✦ LOCATION</div>
          <motion.h2
            className={s.title}
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            Find Us
          </motion.h2>
          <motion.p
            className={s.subtitle}
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            Located in the heart of Delhi's legendary backpacker hub.
          </motion.p>
        </div>

        <div className={s.mapWrap}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.020562895357!2d77.48698217529491!3d28.478927375748942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceb9459388191%3A0x62978dbb9c993cb5!2sKings%20and%20Queens%20Residency!5e0!3m2!1sen!2sin!4v1773932784291!5m2!1sen!2sin"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kings N Queens Hostel on Google Maps"
          />
        </div>

        <div className={s.gridInfo}>
          <motion.div
            className={s.infoCard}
            variants={fadeUp(0.3)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className={s.infoIcon}>
              <MapPin size={24} color="var(--gold)" />
            </div>
            <h3>Address</h3>
            <p>Kings and Queens Residency,<br />Greater Noida, UP — 201308, India</p>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Kings+and+Queens+Residency,+Greater+Noida"
              target="_blank"
              rel="noopener noreferrer"
              className={s.directionsBtn}
            >
              Get Directions <ExternalLink size={14} />
            </a>
          </motion.div>

          <motion.div
            className={s.infoCard}
            variants={fadeUp(0.4)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className={s.infoIcon}>
              <Clock size={24} color="var(--gold)" />
            </div>
            <h3>Gate Closing Time</h3>
            <p>Closing Time: 9:00 PM</p>
          </motion.div>

          <motion.div
            className={s.infoCard}
            variants={fadeUp(0.5)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className={s.infoIcon}>
              <Phone size={24} color="var(--gold)" />
            </div>
            <h3>Contact</h3>
            <p>09540557171<br />hello@kingsnqueens.in</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
