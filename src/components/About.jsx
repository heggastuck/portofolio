import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const tags = [
  'Software Engineering Student',
  'Backend Developer',
  'AI Engineer',
  'Cybersecurity',
  'Web Development',
  'Data Analysis',
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.7, ease: 'easeOut', delay: i * 0.12 },
    }),
  }

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          custom={0} variants={variants}
          initial="hidden" animate={inView ? 'visible' : 'hidden'}
        >
          <span className="section-tag">Who I Am</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-3">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-slate-400 max-w-xl">
            Belum kenal kan? Kenalan dulu yuk!
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 items-center">

          {/* Avatar — tampil di semua ukuran, tengah di mobile, normal di desktop */}
          <motion.div
            custom={1} variants={variants}
            initial="hidden" animate={inView ? 'visible' : 'hidden'}
            className="flex justify-center"
          >
            <div
              className="relative w-36 h-36 lg:w-48 lg:h-48 rounded-full overflow-hidden flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, rgba(34,211,238,0.15), rgba(59,130,246,0.1))',
                border: '2px solid rgba(34,211,238,0.3)',
                boxShadow: '0 0 50px rgba(34,211,238,0.1)',
                animation: 'float 5s ease-in-out infinite',
              }}
            >
              <img
                src="/foto.jpeg"
                alt="Hegga Avatar"
                className="w-full h-full object-cover"
              />

              {/* ring animasi */}
              <span
                className="absolute rounded-full border border-dashed border-cyan-400/20"
                style={{
                  inset: -16,
                  animation: 'spin 15s linear infinite',
                }}
              />
            </div>
          </motion.div>

          {/* Card */}
          <motion.div
            custom={2} variants={variants}
            initial="hidden" animate={inView ? 'visible' : 'hidden'}
            className="glass-card p-8 hover:-translate-y-1 transition-transform duration-300"
            style={{
              border: '1px solid rgba(34,211,238,0.15)',
              boxShadow: 'none',
              transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
            }}
            whileHover={{
              borderColor: 'rgba(34,211,238,0.3)',
              boxShadow: '0 0 30px rgba(34,211,238,0.07)',
            }}
          >
            <p className="text-slate-300 leading-relaxed mb-4">
              Hey! I'm{' '}
              <span className="text-cyan-400 font-semibold">Hegga Pria Junaedi</span>
              , pengembang perangkat lunak dengan fokus pada sistem web dan rekayasa perangkat lunak modern.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              Saya membangun aplikasi yang efisien, terstruktur, dan memiliki tujuan yang jelas, baik di sisi front-end maupun back-end. Saya terbiasa bekerja dengan pendekatan logis, sistematis, dan berorientasi pada solusi untuk setiap masalah yang saya hadapi dalam proses pengembangan.
            </p>
            <p className="text-slate-400 leading-relaxed mb-6">
              Dalam setiap proyek, saya tidak hanya fokus pada hasil akhir, tetapi juga pada bagaimana sistem tersebut dirancang, dioptimalkan, dan dikembangkan agar tetap scalable dan mudah dipelihara. Saya terus belajar dan mengasah kemampuan melalui praktik langsung dan eksplorasi teknologi baru.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold text-cyan-400 px-3 py-1 rounded-full"
                  style={{
                    background: 'rgba(34,211,238,0.08)',
                    border: '1px solid rgba(34,211,238,0.2)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}