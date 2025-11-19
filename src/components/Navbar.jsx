import React from 'react'

export default function Navbar() {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#problem', label: 'Problem' },
    { href: '#solution', label: 'Solution' },
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
  ]
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <nav className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-2 backdrop-blur">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-violet-500 to-blue-500" />
          <span className="text-sm font-semibold tracking-wide text-white">Verx ACO</span>
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-slate-300 hover:text-white">
              {l.label}
            </a>
          ))}
        </div>
        <a href="#pricing" className="hidden rounded-lg bg-white/10 px-3 py-2 text-sm text-white backdrop-blur hover:bg-white/20 md:block">
          Get started
        </a>
      </nav>
    </header>
  )
}
