import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import s from './VirtualTour.module.css'

export default function VirtualTour() {
  const ref = useRef(null)
  const panRef = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const pannellumInitialized = useRef(false)

  useEffect(() => {
    if (!inView || pannellumInitialized.current) return
    if (typeof window.pannellum === 'undefined') return

    // Small delay to ensure the DOM element is rendered
    const timeout = setTimeout(() => {
      if (panRef.current && !pannellumInitialized.current) {
        pannellumInitialized.current = true
        window.pannellum.viewer(panRef.current, {
          type: 'equirectangular',
          panorama: 'https://pannellum.org/images/alma.jpg',
          autoLoad: true,
          autoRotate: -2,
          compass: false,
          showControls: true,
          hfov: 100,
        })
      }
    }, 300)

    return () => clearTimeout(timeout)
  }, [inView])

  return (
    <section className={s.tour} id="virtual-tour" ref={ref}>
      <div className={s.header}>
        <div className="section-label">✦ IMMERSIVE EXPERIENCE</div>
        <motion.h2
          className={s.title}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7 }}
        >
          Step Inside
          <br />
          Kings N Queens
        </motion.h2>
        <motion.p
          className={s.subtitle}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.25 }}
        >
          Explore our spaces before you even arrive. Drag to look around in 360°.
        </motion.p>
      </div>

      <div className={s.grid}>
        <motion.div
          className={s.card}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <div className={s.cardHeader}>
            🏠 Inside the Hostel — Drag to Explore
          </div>
          <div className={s.viewer}>
            <div ref={panRef} className={s.panorama} />
          </div>
        </motion.div>

        <motion.div
          className={s.card}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.7 }}
        >
          <div className={s.cardHeader}>
            🌍 Outside the Hostel — Google Street View
          </div>
          <div className={s.viewer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1773933503583!6m8!1m7!1s0KuIl1xu7NQcysD9Bp4qsw!2m2!1d28.47919060134928!2d77.48938073613192!3f141.5499697229097!4f-8.077596864444331!5f0.7820865974627469"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Street View outside Kings N Queens"
            />
          </div>
        </motion.div>
      </div>

      <div className={s.instructionRow}>
        <div className={s.instructionIcon}><span>⟲</span></div>
        <p className={s.instruction}>
          Drag to explore · Pinch to zoom · Double-click to enter fullscreen
        </p>
      </div>
    </section>
  )
}
