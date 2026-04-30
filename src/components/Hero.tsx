'use client'

import { motion } from 'framer-motion'
import { hero } from '@/data/site'

export function Hero() {
  return (
    <section id="top" className="container-shell pt-20 pb-24 sm:pt-28">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4 text-sm uppercase tracking-[0.3em] text-indigo-200/80"
      >
        {hero.role}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl"
      >
        {hero.name}
        <span className="mt-4 block bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
          {hero.headline}
        </span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 max-w-2xl text-lg text-muted"
      >
        {hero.supporting}
      </motion.p>
      <div className="mt-10 flex flex-wrap gap-4">
        <a href="#work" className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:scale-[1.03]">
          View Work
        </a>
        <a href="#contact" className="rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white transition hover:border-white">
          Contact
        </a>
      </div>
      <div className="mt-12 grid gap-2 text-xs uppercase tracking-[0.25em] text-white/50 sm:flex sm:gap-6">
        {hero.rotatingWords.map((word) => (
          <span key={word} className="rounded-full border border-white/15 px-4 py-2">
            {word}
          </span>
        ))}
      </div>
      <div className="pointer-events-none mt-12 grid grid-cols-8 gap-2 opacity-50">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="h-2 rounded bg-gradient-to-r from-indigo-300/10 to-cyan-300/20" />
        ))}
      </div>
    </section>
  )
}
