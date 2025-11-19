import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Features from './components/Features'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const controls = useAnimation()

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      controls.start({ opacity: Math.max(0, 1 - y / 400) })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [controls])

  return (
    <div className="min-h-screen scroll-smooth bg-[#0b0d12] text-slate-200">
      {/* Background grid */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.25]" />

      <Navbar />

      <main className="relative z-10">
        <motion.div animate={controls}>
          <Hero />
        </motion.div>
        <Problem />
        <Solution />
        <Features />
        <Pricing />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

export default App
