import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react'

const socials = [
  {
    icon: Github,
    label: 'GitHub',
    sub: 'github.com/egaavict',
    href: 'https://github.com/egaavict',
    color: 'rgba(255,255,255,0.08)',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    sub: 'sorry i dont have, because i not legal',
    href: '#',
    color: 'rgba(59,130,246,0.15)',
  },
  {
    icon: Mail,
    label: 'Email',
    sub: 'heggaganzz@gmail.com',
    href: 'mailto:heggaganzz@gmail.com',
    color: 'rgba(34,211,238,0.12)',
  },
]

export default function Contact() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm]       = useState({ name: '', email: '', message: '' })
  const [success, setSuccess] = useState(false)
  const [errors, setErrors]   = useState({})

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.email.trim())   e.email   = 'Email is required'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setSuccess(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSuccess(false), 5000)
  }

  const fieldClass = (err) =>
    `w-full bg-white/[0.04] border rounded-xl text-slate-200 placeholder-slate-600 text-sm px-4 py-3 outline-none font-[inherit] transition-all duration-250 resize-none ${
      err
        ? 'border-red-400/60 focus:border-red-400 focus:shadow-[0_0_0_3px_rgba(248,113,113,0.1)]'
        : 'border-cyan-400/15 hover:border-cyan-400/30 focus:border-cyan-400 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.1)] focus:bg-cyan-400/[0.03]'
    }`

  return (
    <section
      id="contact"
      className="section-padding"
      style={{ background: 'linear-gradient(180deg, transparent, rgba(34,211,238,0.025), transparent)' }}
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <span className="section-tag">Get In Touch</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-3">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-slate-400 max-w-xl">
            Have a project in mind? I'd love to hear about it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass-card p-8"
          >
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                  Your Name
                </label>
                <input
                  type="text" name="name"
                  className={fieldClass(errors.name)}
                  placeholder="Hegga Pria Junaedi"
                  value={form.name} onChange={handleChange}
                />
                {errors.name && <span className="text-xs text-red-400">{errors.name}</span>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                  Email Address
                </label>
                <input
                  type="email" name="email"
                  className={fieldClass(errors.email)}
                  placeholder="heggaganzz@gmail.com"
                  value={form.email} onChange={handleChange}
                />
                {errors.email && <span className="text-xs text-red-400">{errors.email}</span>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  name="message" rows={5}
                  className={fieldClass(errors.message)}
                  placeholder="Tell me about your project..."
                  value={form.message} onChange={handleChange}
                />
                {errors.message && <span className="text-xs text-red-400">{errors.message}</span>}
              </div>

              <button
                type="submit"
                className="btn-glow w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-[#020617] font-bold text-sm py-3.5 rounded-xl"
              >
                Send Message <ArrowRight size={16} />
              </button>

              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm font-semibold text-cyan-400 border border-cyan-400/25 rounded-lg px-4 py-3"
                  style={{ background: 'rgba(34,211,238,0.08)' }}
                >
                  ✓ Message sent! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Info + Socials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-slate-100 mb-2">Let's connect</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Open to freelance work, collaborations, and full-time opportunities. Don't hesitate to reach out!
            </p>

            <div className="flex flex-col gap-3">
              {socials.map(({ icon: Icon, label, sub, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-4 p-4 rounded-xl text-slate-200 no-underline group"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(34,211,238,0.12)',
                    transition: 'border-color 0.25s, background 0.25s',
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: color }}
                  >
                    <Icon size={18} className="text-cyan-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold">{label}</div>
                    <div className="text-xs text-slate-500 truncate">{sub}</div>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-slate-600 group-hover:text-cyan-400 transition-colors duration-200"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
