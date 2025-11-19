import React from 'react'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_50%,rgba(99,102,241,0.12),transparent)]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.04] p-8 text-center backdrop-blur"
      >
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.25),transparent_60%)] blur-2xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.25),transparent_60%)] blur-2xl" />

        <h3 className="bg-gradient-to-b from-white to-blue-200 bg-clip-text text-3xl font-semibold text-transparent">
          Ready to activate agentic automation?
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300/90">
          Book a 30-minute discovery. We’ll assess high-ROI workflows and launch an agentic pilot.
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="mailto:hello@verxaco.com?subject=Verx%20ACO%20—%20Pilot%20Request"
            className="rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-400 px-6 py-3 text-white shadow-[0_0_30px_rgba(168,85,247,0.4)] transition hover:scale-[1.02]"
          >
            Book a pilot
          </a>
          <a
            href="#features"
            className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-slate-200 backdrop-blur transition hover:bg-white/10"
          >
            See capabilities
          </a>
        </div>
      </motion.div>
    </section>
  )
}
