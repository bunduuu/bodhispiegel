'use client'

import { motion } from 'framer-motion'
import { skills } from '@/data/site'

export function Skills() {
  return (
    <section id="skills" className="container-shell pb-24">
      <h2 className="mb-8 text-3xl font-semibold sm:text-4xl">Skills, organized for execution</h2>
      <div className="grid gap-5 lg:grid-cols-3">
        {Object.entries(skills).map(([group, list], idx) => (
          <motion.article
            key={group}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="glass-panel p-6"
          >
            <h3 className="text-lg font-semibold text-white">{group}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {list.map((skill) => (
                <span key={skill} className="rounded-full border border-white/20 bg-white/[0.02] px-3 py-1.5 text-sm text-white/85">
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
