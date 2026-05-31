import { motion } from 'framer-motion'

const links = ['Home', 'About', 'Skills', 'Projects', 'Contact']

export default function Footer() {
  const handleNav = (id) => {
    document.querySelector(`#${id.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer
      className="relative z-10 border-t px-6 py-10 text-center"
      style={{ borderColor: 'rgba(34,211,238,0.1)' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-extrabold gradient-text mb-6 select-none"
        >
          HEGGA PRIA JUNAEDI
        </motion.div>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-6 mb-6">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link === 'Home' ? 'hero' : link)}
              className="text-sm text-slate-500 hover:text-cyan-400 transition-colors duration-200 font-medium"
            >
              {link}
            </button>
          ))}
        </nav>

        {/* Divider */}
        <div
          className="w-24 h-px mx-auto mb-6"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.4), transparent)' }}
        />

        {/* Copy */}
        <p className="text-slate-600 text-sm">
          © 2026{' '}
          <span className="text-slate-400 font-medium">Hegga Pria Junaedi</span>
          {' · '}Built with{' '}
          <span className="text-cyan-400 font-medium">React</span>
          {' & '}
          <span className="text-cyan-400 font-medium">Tailwind CSS</span>
        </p>
        <p className="text-slate-700 text-xs mt-1">
          Designed with passion in the digital frontier
        </p>
      </div>
    </footer>
  )
}
