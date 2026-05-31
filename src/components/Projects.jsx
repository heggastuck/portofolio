import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, ExternalLink } from 'lucide-react'
import { projects } from '../data/projects'

function ProjectCard({ project, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className="group flex flex-col rounded-2xl overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(34,211,238,0.15)',
        transition: 'border-color 0.35s, box-shadow 0.35s',
      }}
    >
      {/* Image placeholder */}
      <div
  className={`h-44 relative overflow-hidden bg-gradient-to-br ${project.color}`}
>
  <img
    src={project.image}
    alt={project.title}
    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
  />

  {/* overlay biar text tetap kebaca */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/70 to-transparent" />
</div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-semibold text-cyan-400 px-2.5 py-1 rounded-md"
              style={{
                background: 'rgba(34,211,238,0.1)',
                border: '1px solid rgba(34,211,238,0.2)',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={project.github}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold text-slate-300 hover:text-white transition-all duration-200"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <Github size={15} />
            GitHub
          </a>
          <a
            href={project.demo}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-all duration-200 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
            style={{
              background: 'linear-gradient(135deg, rgba(34,211,238,0.15), rgba(59,130,246,0.1))',
              border: '1px solid rgba(34,211,238,0.3)',
            }}
          >
            <ExternalLink size={15} />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <span className="section-tag">What I've Built</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-xl">
            A selection of projects that showcase my skills and passion for building.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
