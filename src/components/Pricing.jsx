import React from 'react'
import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Starter',
    price: 'P2,900/mo',
    blurb: 'For small teams proving value',
    features: ['1 agentic workflow', 'Up to 3 integrations', 'Email + Slack support', 'Standard guardrails'],
    highlight: false,
  },
  {
    name: 'Growth',
    price: 'P8,900/mo',
    blurb: 'Scale across functions',
    features: ['Up to 5 workflows', 'Priority support', 'Human-in-the-loop approvals', 'Ops intelligence dashboard'],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    blurb: 'Security-first at scale',
    features: ['Unlimited workflows', 'SAML/SSO & RBAC', 'Private cloud / VPC', 'Dedicated success engineer'],
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_100%,rgba(251,146,60,0.12),transparent)]" />

      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-white to-slate-300 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl"
        >
          Pricing (Botswana)
        </motion.h2>
        <p className="mt-3 max-w-2xl text-slate-300/90">Simple plans in Pula (BWP) to get you operational quickly.</p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              className={`relative rounded-2xl border ${t.highlight ? 'border-violet-400/40' : 'border-white/10'} bg-white/[0.04] p-6 backdrop-blur`}
            >
              {t.highlight && (
                <div className="absolute -top-3 right-4 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-3 py-1 text-xs font-medium text-white shadow-[0_0_20px_rgba(139,92,246,0.6)]">
                  Most Popular
                </div>
              )}
              <h3 className="text-lg font-semibold text-white">{t.name}</h3>
              <p className="mt-1 text-sm text-slate-300/80">{t.blurb}</p>
              <div className="mt-4 text-3xl font-semibold text-white">{t.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-300/80">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-blue-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#cta" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-sm font-medium text-white transition ${t.highlight ? 'bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-400' : 'bg-white/10 hover:bg-white/20'}`}>
                Start now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
