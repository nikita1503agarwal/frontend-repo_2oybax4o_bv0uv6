import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden">
      {/* Glow gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[48rem] w-[48rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.25),transparent_60%)] blur-2xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.25),transparent_60%)] blur-2xl" />
        <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(251,146,60,0.18),transparent_60%)] blur-2xl" />
      </div>

      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center md:pt-40">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          <motion.span variants={item} className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-wide text-white/80 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Verx ACO • Cognitive Automation & Operational Intelligence
          </motion.span>

          <motion.h1
            variants={item}
            className="max-w-4xl bg-gradient-to-br from-white via-white to-blue-200 bg-clip-text text-5xl font-semibold leading-tight text-transparent sm:text-6xl md:text-7xl"
          >
            Agentic AI that runs your operations
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300"
          >
            Deploy autonomous AI agents that observe, reason, and act across your tools to automate workflows, reduce cost, and move with real-time intelligence.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#pricing" className="group rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-400 px-6 py-3 text-white shadow-[0_0_30px_rgba(168,85,247,0.4)] transition hover:scale-[1.02]">
              Get started in Botswana
            </a>
            <a href="#features" className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-slate-200 backdrop-blur transition hover:bg-white/10">
              Explore features
            </a>
          </motion.div>
        </motion.div>

        {/* Sub cards */}
        <div className="mt-20 grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { title: 'Autonomous Agents', desc: 'Task planning, tool use, and guardrailed execution' },
            { title: 'Cognitive Automation', desc: 'Observe → reason → act with continuous learning' },
            { title: 'Operational Intelligence', desc: 'Realtime analytics and decision optimization' },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-5 text-left text-slate-200 backdrop-blur-lg"
            >
              <div className="mb-2 h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 opacity-90" />
              <h3 className="text-base font-semibold text-white">{card.title}</h3>
              <p className="mt-1 text-sm text-slate-300/80">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
