'use client'

import { motion } from 'framer-motion'
import { metrics } from '@/data/site'

export function Metrics() {
  return (
    <section id="work" className="container-shell pb-24">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Proof, not promises.</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {metrics.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
            className="glass-panel p-5"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-indigo-200/80">{item.title}</p>
            <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
            <p className="mt-2 text-sm text-muted">{item.detail}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
