import React from 'react'
import { motion } from 'framer-motion'

export default function Solution() {
  return (
    <section id="solution" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_0%_50%,rgba(168,85,247,0.12),transparent)]" />

      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-white to-slate-300 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl"
        >
          The solution
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-3 max-w-3xl text-slate-300/90"
        >
          Verx ACO deploys autonomous AI agents that perceive your operations, plan actions, and execute across your tools with human-level reasoning and enterprise guardrails.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { title: 'Observe', desc: 'Connect to email, CRM, chat, docs, data pipelines', color: 'from-violet-500 to-blue-500' },
            { title: 'Reason', desc: 'Multi-agent planning, memory, constraints, approvals', color: 'from-blue-500 to-cyan-400' },
            { title: 'Act', desc: 'Execute workflows safely with full auditability', color: 'from-fuchsia-500 to-orange-400' },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
            >
              <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${f.color} mb-3`} />
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-300/80">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
