import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#020617]">
      {/* Floating background lights */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <span
          className="absolute rounded-full opacity-[0.18]"
          style={{
            width: 500, height: 500,
            background: 'radial-gradient(circle, #06b6d4, transparent)',
            top: -100, left: -100,
            filter: 'blur(80px)',
            animation: 'drift 14s ease-in-out infinite',
          }}
        />
        <span
          className="absolute rounded-full opacity-[0.15]"
          style={{
            width: 400, height: 400,
            background: 'radial-gradient(circle, #3b82f6, transparent)',
            top: '40%', right: -80,
            filter: 'blur(80px)',
            animation: 'drift 18s ease-in-out infinite -4s',
          }}
        />
        <span
          className="absolute rounded-full opacity-[0.13]"
          style={{
            width: 350, height: 350,
            background: 'radial-gradient(circle, #0284c7, transparent)',
            bottom: -80, left: '30%',
            filter: 'blur(80px)',
            animation: 'drift 16s ease-in-out infinite -8s',
          }}
        />
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
