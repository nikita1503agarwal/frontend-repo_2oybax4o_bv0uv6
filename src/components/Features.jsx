import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Bot, Activity, Zap, Workflow, Database } from 'lucide-react'

const features = [
  {
    icon: Bot,
    title: 'Agentic workcells',
    desc: 'Specialized agents that collaborate to handle end-to-end processes.',
  },
  {
    icon: Workflow,
    title: 'Tool orchestration',
    desc: 'Native connectors or APIs: email, Slack, CRM, ERP, docs, dbs.',
  },
  { icon: Activity, title: 'Live ops intelligence', desc: 'Realtime dashboards, anomalies, and next-best-actions.' },
  { icon: Shield, title: 'Enterprise guardrails', desc: 'Policies, approvals, PII controls, and full audit logs.' },
  { icon: Database, title: 'Memory + context', desc: 'Long-horizon tasks with structured memory and retrieval.' },
  { icon: Zap, title: 'Fast deployment', desc: 'Start in days, not months. ROI in weeks.' },
]

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_100%_30%,rgba(59,130,246,0.12),transparent)]" />

      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-white to-slate-300 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl"
        >
          Features
        </motion.h2>
        <p className="mt-3 max-w-2xl text-slate-300/90">
          Everything you need to automate operations with confidence.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 * i, duration: 0.5 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:bg-white/[0.06]"
            >
              <div className="mb-3 text-white/90"><f.icon className="h-6 w-6" /></div>
              <h3 className="text-base font-semibold text-white">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-300/80">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
