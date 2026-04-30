'use client'

import { motion } from 'framer-motion'
import { about } from '@/data/site'

export function About() {
  return (
    <section id="about" className="container-shell pb-24">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-panel p-8"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-indigo-200">About</p>
        <p className="mt-4 max-w-4xl text-xl leading-relaxed text-white/90">{about}</p>
      </motion.article>
    </section>
  )
}
