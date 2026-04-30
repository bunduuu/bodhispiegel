'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { projectFilters, projects } from '@/data/site'

export function ProjectShowcase() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  return (
    <section id="projects" className="container-shell pb-24">
      <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">Project showcase</h2>
      <div className="mb-8 flex flex-wrap gap-2">
        {projectFilters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              activeFilter === filter ? 'bg-white text-black' : 'border border-white/20 text-white/80 hover:border-white/40'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project) => (
          <motion.article
            key={project.title}
            layout
            className="glass-panel overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
          >
            <div className="relative h-44 w-full">
              <Image src={project.image} alt={project.title} fill className="object-cover" />
            </div>
            <div className="p-5">
              <span className="rounded-full border border-indigo-200/40 px-3 py-1 text-xs text-indigo-100">{project.category}</span>
              <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-muted">{project.description}</p>
              <p className="mt-4 text-sm text-white/90">Role: {project.role}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-cyan-200">Skills</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span key={skill} className="rounded-full bg-white/5 px-2 py-1 text-xs text-white/80">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
