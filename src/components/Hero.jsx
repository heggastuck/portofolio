import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut', delay },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center section-padding pt-28"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ── Visual: tampil di mobile (atas teks) & desktop (kanan) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          className="flex items-center justify-center lg:order-last"
        >
          <div
            className="relative flex items-center justify-center"
            style={{
              width: 'clamp(220px, 55vw, 420px)',
              height: 'clamp(220px, 55vw, 420px)',
            }}
          >
            {/* Hex grid background */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.07]" viewBox="0 0 420 420">
              <defs>
                <pattern id="hex" x="0" y="0" width="56" height="49" patternUnits="userSpaceOnUse">
                  <polygon points="28,0 56,14 56,35 28,49 0,35 0,14" fill="none" stroke="#22d3ee" strokeWidth="0.6"/>
                </pattern>
              </defs>
              <rect width="420" height="420" fill="url(#hex)" />
            </svg>

            {/* Outer spinning ring */}
            <div
              className="absolute rounded-full border border-cyan-400/10"
              style={{ width: '90%', height: '90%', animation: 'spin 20s linear infinite' }}
            />

            {/* Middle dashed ring */}
            <div
              className="absolute rounded-full"
              style={{
                width: '71%', height: '71%',
                border: '1px dashed rgba(56,189,248,0.15)',
                animation: 'spin 15s linear infinite reverse',
              }}
            />

            {/* Inner ring */}
            <div
              className="absolute rounded-full border border-cyan-400/20"
              style={{ width: '52%', height: '52%', animation: 'spin 12s linear infinite' }}
            />

            {/* Core orb */}
            <div
              className="absolute rounded-full flex items-center justify-center overflow-hidden p-1"
              style={{
                width: '38%',
                height: '38%',
                background:
                  'radial-gradient(circle at 35% 35%, rgba(56,189,248,0.3), rgba(6,182,212,0.15), transparent 70%)',
                border: '1px solid rgba(34,211,238,0.3)',
                boxShadow:
                  '0 0 60px rgba(34,211,238,0.2), inset 0 0 40px rgba(34,211,238,0.1)',
                animation: 'float 5s ease-in-out infinite',
              }}
            >
              <img
                src="/foto2.jpeg"
                alt="Hegga"
                className="w-full h-full object-cover rounded-full"
              />
              <span className="scan-line" />
            </div>

            {/* Floating particles */}
            {[
              { size: 6, color: '#22d3ee', top: '14%', left: '18%',   delay: '0s'   },
              { size: 4, color: '#38bdf8', top: '18%', right: '16%',  delay: '0.8s' },
              { size: 5, color: '#22d3ee', bottom: '18%', left: '22%',delay: '1.5s' },
              { size: 3, color: '#3b82f6', bottom: '14%', right: '20%',delay: '0.4s'},
              { size: 4, color: '#22d3ee', top: '50%',  left: '6%',   delay: '1s'   },
              { size: 5, color: '#38bdf8', top: '50%',  right: '4%',  delay: '2s'   },
            ].map((p, i) => (
              <span
                key={i}
                className="absolute rounded-full"
                style={{
                  width: p.size, height: p.size,
                  background: p.color,
                  boxShadow: `0 0 8px ${p.color}`,
                  top: p.top, left: p.left,
                  bottom: p.bottom, right: p.right,
                  animation: `float ${3.5 + i * 0.2}s ease-in-out infinite ${p.delay}`,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* ── Left: Content ── */}
        <div>
          {/* Badge */}
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 mb-6">
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 border border-cyan-400/25 px-4 py-1.5 rounded-full"
              style={{ background: 'rgba(34,211,238,0.07)' }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                style={{ animation: 'pulseDot 1.8s ease-in-out infinite' }}
              />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.p {...fadeUp(0.1)} className="text-sm font-semibold tracking-widest text-slate-400 uppercase mb-2">
            Hegga Pria Junaedi
          </motion.p>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.15)}
            className="text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight mb-4"
          >
            <span className="gradient-text">Building Intelligent<br/>Systems & Secure<br/>Digital Experiences</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p {...fadeUp(0.22)} className="text-cyan-400 font-semibold tracking-widest text-sm mb-4">
            Backend Developer · AI Engineer · Cybersecurity
          </motion.p>

          {/* Description */}
          <motion.p {...fadeUp(0.28)} className="text-slate-400 text-base leading-relaxed max-w-md mb-8">
            Passionate about building scalable web systems, exploring artificial intelligence, and understanding how secure and efficient software is designed. Always learning, experimenting, and improving every line of code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div {...fadeUp(0.35)} className="flex flex-wrap gap-4 mb-10">
            <a
              href="#projects"
              className="btn-glow inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-[#020617] font-bold text-sm px-6 py-3 rounded-lg"
            >
              View Projects ↗
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-cyan-400/40 text-cyan-400 font-bold text-sm px-6 py-3 rounded-lg hover:bg-cyan-400/8 hover:border-cyan-400/70 transition-all duration-250"
            >
              Contact Me →
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeUp(0.42)} className="flex gap-8">
            {[
              { num: '3+',   label: 'Projects' },
              { num: '7+',   label: 'Tech Skills' },
              { num: '100%', label: 'Dedication' },
            ].map(({ num, label }) => (
              <div key={label} className="flex flex-col">
                <span className="text-2xl font-extrabold gradient-text">{num}</span>
                <span className="text-xs text-slate-500 font-medium uppercase tracking-widest mt-0.5">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-cyan-400/50 to-transparent animate-pulse" />
      </motion.div>
    </section>
  )
}