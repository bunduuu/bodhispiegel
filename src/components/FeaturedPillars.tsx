'use client'

import { motion } from 'framer-motion'
import { Play, Radio, Scissors, Workflow } from 'lucide-react'
import { pillars } from '@/data/site'

const iconMap = {
  Play,
  Broadcast: Radio,
  ScissorsSquare: Scissors,
  Workflow,
}

export function FeaturedPillars() {
  return (
    <section className="container-shell pb-24">
      <h2 className="mb-8 text-3xl font-semibold sm:text-4xl">Featured work pillars</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {pillars.map((pillar, index) => {
          const Icon = iconMap[pillar.icon as keyof typeof iconMap]
          return (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              viewport={{ once: true }}
              className="group glass-panel p-7 transition hover:-translate-y-1 hover:border-indigo-300/40"
            >
              <Icon className="h-6 w-6 text-indigo-200" />
              <h3 className="mt-4 text-xl font-semibold">{pillar.title}</h3>
              <p className="mt-3 text-muted">{pillar.copy}</p>
              <span className="mt-6 inline-block text-sm text-cyan-200 transition group-hover:translate-x-1">Explore →</span>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
