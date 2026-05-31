import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { skills } from '../data/skills'

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="skills"
      className="section-padding"
      style={{ background: 'linear-gradient(180deg, transparent, rgba(34,211,238,0.025), transparent)' }}
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="section-tag">What I Know</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-3">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Grid — 2 cols mobile / 4 tablet / 7 desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              whileHover={{ y: -6, scale: 1.04 }}
              className="group relative flex flex-col items-center gap-2 p-5 rounded-xl text-center cursor-default overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(34,211,238,0.15)',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
            >
              {/* Gradient border glow on hover (pseudo via box-shadow) */}
              <motion.div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(34,211,238,0.12), rgba(59,130,246,0.08))',
                  pointerEvents: 'none',
                }}
              />

              <skill.icon className="text-3xl text-cyan-400 relative z-10 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-bold text-slate-200 relative z-10 group-hover:text-cyan-400 transition-colors duration-200">
                {skill.name}
              </span>
              <span className="text-xs text-slate-500 relative z-10">{skill.desc}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
