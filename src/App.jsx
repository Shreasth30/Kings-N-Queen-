import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Facilities from './components/Facilities'
import Rooms from './components/Rooms'
import VirtualTour from './components/VirtualTour'
import Location from './components/Location'
import Footer from './components/Footer'

function CustomCursor() {
  const cursorRef = useRef(null)
  
  useEffect(() => {
    let targetX = -100
    let targetY = -100
    let currX = -100
    let currY = -100
    
    const move = (e) => {
      targetX = e.clientX
      targetY = e.clientY
    }
    window.addEventListener('mousemove', move)
    
    let rafId
    const loop = () => {
      currX += (targetX - currX) * 0.12
      currY += (targetY - currY) * 0.12
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${currX}px, ${currY}px) translate(-50%, -50%)`
      }
      rafId = requestAnimationFrame(loop)
    }
    rafId = requestAnimationFrame(loop)
    
    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div 
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        background: 'var(--gold)',
        pointerEvents: 'none',
        zIndex: 99999,
      }}
    />
  )
}

export default function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Facilities />
      <Rooms />
      <VirtualTour />
      <Location />
      <Footer />
    </>
  )
}
