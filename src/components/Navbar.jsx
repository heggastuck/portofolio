import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu } from 'lucide-react'

const navLinks = [
  { label: 'Home',     href: '#hero' },
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleLink = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-10 py-4 transition-all duration-300 ${
          scrolled
            ? 'bg-[#020617]/80 backdrop-blur-xl border-b border-cyan-400/15 shadow-lg shadow-cyan-400/5'
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <span className="text-xl font-extrabold gradient-text tracking-tight select-none">
          
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <button
                onClick={() => handleLink(href)}
                className="relative text-slate-400 text-sm font-medium hover:text-cyan-400 transition-colors duration-200 group pb-0.5"
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-cyan-400 to-sky-400 group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleLink('#contact') }}
          className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 border border-cyan-400/30 px-4 py-2 rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400/60 transition-all duration-200"
        >
          Hire Me
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden text-slate-300 hover:text-cyan-400 transition-colors"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[99] bg-[#020617]/97 backdrop-blur-xl flex flex-col items-center justify-center gap-10"
          >
            <button
              className="absolute top-6 right-6 text-slate-400 hover:text-cyan-400 transition-colors"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>

            {navLinks.map(({ label, href }, i) => (
              <motion.button
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => handleLink(href)}
                className="text-3xl font-bold text-slate-200 hover:text-cyan-400 transition-colors duration-200"
              >
                {label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
