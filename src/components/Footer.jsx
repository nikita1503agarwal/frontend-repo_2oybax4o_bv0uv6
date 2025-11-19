import React from 'react'

export default function Footer() {
  return (
    <footer className="mx-auto mt-12 max-w-7xl px-6 py-12 text-center text-sm text-slate-400/80">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <p className="mt-6">© {new Date().getFullYear()} Verx ACO. Cognitive Automation & Operational Intelligence.</p>
    </footer>
  )
}
