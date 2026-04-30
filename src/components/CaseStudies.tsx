'use client'

import { motion } from 'framer-motion'
import { caseStudies } from '@/data/site'

export function CaseStudies() {
  return (
    <section id="case-studies" className="container-shell pb-24">
      <h2 className="mb-8 text-3xl font-semibold sm:text-4xl">Case studies</h2>
      <div className="space-y-5">
        {caseStudies.map((study, idx) => (
          <motion.article
            key={study.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="glass-panel p-6 sm:p-8"
          >
            <h3 className="text-2xl font-semibold text-white">{study.title}</h3>
            <p className="mt-2 text-indigo-100/85">{study.subtitle}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Challenge</p>
                <p className="mt-2 text-sm text-muted">{study.challenge}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Approach</p>
                <p className="mt-2 text-sm text-muted">{study.approach}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Result</p>
                <p className="mt-2 text-sm text-muted">{study.result}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
