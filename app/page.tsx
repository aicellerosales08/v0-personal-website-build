'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, GitBranch, AtSign, Mail, ExternalLink } from 'lucide-react'

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
  ]

  const skills = [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'UI/UX Design',
    'Figma',
    'Web Development',
    'System Design',
  ]

  const projects = [
    {
      title: 'Modern Web Application',
      description: 'Responsive web app with React and Next.js',
      tags: ['React', 'Next.js', 'Tailwind'],
    },
    {
      title: 'UI/UX Design System',
      description: 'Comprehensive design system for digital products',
      tags: ['Figma', 'Design', 'Components'],
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution',
      tags: ['Next.js', 'Database', 'Payment Integration'],
    },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 animate-fade-in">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
              AR
            </div>
            <div className="hidden sm:block">
              <p className="font-semibold text-sm">Aicelle</p>
              <p className="text-xs text-gray-500">Designer</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-purple-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="px-6 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
              Contact Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3 animate-slide-in-down">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-sm font-medium text-gray-600 hover:text-purple-500 transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
            <button className="w-full px-6 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
              Contact Me
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="max-w-6xl mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8 animate-slide-in-left">
          <div className="space-y-3">
            <p className="text-pink-500 font-medium text-sm">Hello, I&apos;m</p>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 text-balance">
              Aicelle
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Rosales
              </span>
            </h1>
            <p className="text-xl text-gray-600">Frontend Developer & UI/UX Designer</p>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
            Information Technology graduate with experience in web development, UI/UX design, system development, and technical support. Passionate about creating beautiful digital experiences.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center gap-2 group">
              <span>Download CV</span>
              <span className="group-hover:translate-y-1 transition-transform">↓</span>
            </button>
            <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-full font-medium hover:bg-gray-50 transition-colors">
              View Work →
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 pt-4">
            <p className="text-sm text-gray-500 font-medium">FOLLOW ME</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition-colors"
              >
                <AtSign size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition-colors"
              >
                <GitBranch size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-1 animate-slide-in-right">
          <div className="relative w-full max-w-md mx-auto">
            {/* Decorative glow background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-pink-200 to-transparent rounded-full blur-3xl opacity-60 animate-glow"></div>

            {/* Profile image container */}
            <div className="relative z-10 rounded-full overflow-hidden border-8 border-white shadow-2xl animate-float">
              <Image
                src="/profile.jpg"
                alt="Aicelle Rosales"
                width={400}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Stat badges */}
            <div className="absolute top-8 right-0 z-20 bg-white rounded-full px-4 py-3 shadow-lg animate-slide-in-right border border-gray-100">
              <p className="font-bold text-lg text-gray-900">4+</p>
              <p className="text-xs text-gray-600">Years</p>
            </div>

            <div className="absolute bottom-12 left-0 z-20 bg-gray-900 text-white rounded-full px-4 py-3 shadow-lg animate-fade-in border border-gray-800">
              <p className="font-bold text-lg">20+</p>
              <p className="text-xs">Projects Done</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <div className="flex justify-center pb-8 animate-fade-in">
        <div className="animate-bounce">
          <ChevronDown className="text-gray-400" size={24} />
        </div>
      </div>

      {/* Quote Section */}
      <section className="bg-gradient-to-r from-purple-50 to-pink-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-2xl md:text-3xl font-serif text-gray-800 italic text-balance mb-6">
            "Design is not just what it looks like and feels like. Design is how it works."
          </p>
          <p className="text-gray-600">— Steve Jobs</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">About Me</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              I&apos;m an Information Technology graduate with a passion for creating beautiful and functional digital experiences. With expertise in web development and UI/UX design, I transform ideas into elegant solutions that users love.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              My journey includes work on academic projects, internship experiences, and collaborative team environments. I&apos;m continuously learning modern web technologies and best practices in design and development.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="flex-1">
                <p className="text-3xl font-bold text-purple-600">50+</p>
                <p className="text-gray-600">Components</p>
              </div>
              <div className="flex-1">
                <p className="text-3xl font-bold text-pink-600">20+</p>
                <p className="text-gray-600">Projects</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-slide-in-right">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What I Do</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <span className="text-purple-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">Develop responsive web applications</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-pink-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">Design user-friendly interfaces</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-purple-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">Collaborate with teams</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-pink-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">Create design systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-50 py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center animate-slide-in-up">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, i) => (
              <div
                key={skill}
                style={{ animationDelay: `${i * 100}ms` }}
                className="bg-white p-6 rounded-xl border border-gray-100 text-center hover:border-purple-300 hover:shadow-lg transition-all cursor-pointer animate-slide-in-up"
              >
                <p className="font-semibold text-gray-900">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 animate-slide-in-up">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              style={{ animationDelay: `${i * 150}ms` }}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-purple-300 hover:shadow-xl transition-all cursor-pointer animate-slide-in-up"
            >
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center group-hover:from-purple-200 group-hover:to-pink-200 transition-colors">
                <div className="text-6xl">🚀</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="text-purple-600 font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  View Project <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white animate-slide-in-up">
            Let&apos;s Create Something Amazing
          </h2>
          <p className="text-xl text-white/90 animate-slide-in-up">
            I&apos;m always interested in hearing about new projects and opportunities.
          </p>
          <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2 animate-slide-in-up">
            Get In Touch
            <Mail size={20} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="font-bold mb-2">Aicelle Rosales</p>
              <p className="text-gray-400 text-sm">Frontend Developer & UI/UX Designer</p>
            </div>
            <div>
              <p className="font-bold mb-3">Links</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Skills
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-3">Connect</p>
            <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <AtSign size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <GitBranch size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 Aicelle Rosales. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
