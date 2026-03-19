import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import s from './Rooms.module.css'

const ROOMS = [
  {
    img: '/images/room_three_seater.png',
    type: 'Shared · 3 Beds',
    name: 'Three Seater Room',
    desc: 'A spacious and bright shared room designed for comfort. Features three cozy beds, personal reading lights, and secure lockers.',
  },
  {
    img: '/images/room_two_seater.png',
    type: 'Shared · 2 Beds',
    name: 'Two Seater Room',
    desc: 'Perfect for friends traveling together. A comfortable two-bed setup with warm wood accents and plenty of natural light.',
  },
  {
    img: '/images/room_balcony.png',
    type: 'Private · Balcony',
    name: 'Balcony Room',
    desc: 'Enjoy your morning coffee with a view. A premium private room featuring a beautiful balcony overlooking the vibrant street.',
  },
  {
    img: '/images/room_no_balcony.png',
    type: 'Private · Window View',
    name: 'Standard Private Room',
    desc: 'A cozy retreat with a large bright window, comfortable bed, and clean modern aesthetic for a restful stay.',
  },
]

export default function Rooms() {
  const ref = useRef(null)
  const trackRef = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const scroll = (dir) => {
    if (!trackRef.current) return
    trackRef.current.scrollBy({ left: dir * 368, behavior: 'smooth' })
  }

  return (
    <section className={s.rooms} id="rooms" ref={ref}>
      <div className={s.header}>
        <div className="section-label">✦ OUR ACCOMMODATIONS</div>
        <motion.h2
            className={s.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            Choose Your Kingdom
          </motion.h2>
          <motion.p
            className={s.subtitle}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.25 }}
          >
            From shared dorms to private luxury — every room is crafted for comfort.
          </motion.p>
        </div>

      <div className={s.list}>
        {ROOMS.map((room, i) => (
          <motion.div
            key={room.name}
            className={s.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className={s.cardImg}>
              <img src={room.img} alt={room.name} loading="lazy" />
              <div className={s.cardImgOverlay} />
            </div>
            <div className={s.info}>
              <div className={s.ghostNum}>0{i + 1}</div>
              <h3>{room.name}</h3>
              <div className={s.amenities}>
                {room.type.split(' · ').map(tag => (
                  <span key={tag} className={s.amenity}>{tag}</span>
                ))}
              </div>
              <p>{room.desc}</p>
              <a href="#virtual-tour" className={s.bookBtn}>Book online tour</a>
            </div>
            {i < ROOMS.length - 1 && <div className={s.divider} />}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
