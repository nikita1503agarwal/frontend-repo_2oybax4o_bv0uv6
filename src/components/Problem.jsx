import React from 'react'
import { motion } from 'framer-motion'

export default function Problem() {
  const items = [
    {
      title: 'Fragmented workflows',
      desc: 'Data and processes live across emails, sheets, CRMs, and human handoffs — slowing teams down.',
    },
    {
      title: 'Manual, repetitive work',
      desc: 'Operators spend hours triaging, copy-pasting, and following playbooks by hand.',
    },
    {
      title: 'No real-time intelligence',
      desc: 'Leaders can’t see what’s happening now, and systems don’t adapt on the fly.',
    },
  ]

  return (
    <section id="problem" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(99,102,241,0.12),transparent)]" />

      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-white to-slate-300 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl"
        >
          The problem
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-3 max-w-2xl text-slate-300/90"
        >
          Modern teams drown in tools and toil. Your business moves fast — but your operations stay manual.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {items.map((i, idx) => (
            <motion.div
              key={i.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx, duration: 0.6 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
            >
              <h3 className="text-lg font-semibold text-white">{i.title}</h3>
              <p className="mt-2 text-sm text-slate-300/80">{i.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
