'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, GitBranch, AtSign, Mail, ExternalLink, Heart } from 'lucide-react'

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [selectedCert, setSelectedCert] = useState(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Skills', href: '#skills' },
  ]

  const skills = [
    { name: 'HTML', level: '95%' },
    { name: 'CSS', level: '90%' },
    { name: 'JavaScript', level: '85%' },
    { name: 'Python', level: '75%' },
    { name: 'C++', level: '70%' },
    { name: 'PHP', level: '65%' },
    { name: 'Figma', level: '90%' },
    { name: 'Adobe XD', level: '85%' },
    { name: 'Canva', level: '95%' },
  ]

  const projects = [
    {
      title: 'Onlook - Thesis Project',
      description: 'Comprehensive design system and UI/UX framework',
      tags: ['Figma', 'UI/UX', 'Design System'],
      image: '/onlook.png',
      website: 'https://onlook-livid.vercel.app/',
      figma: 'https://www.figma.com/design/1j21q7Ymp2J8F1kNFUiET7/Onlook',
    }
    {
      title: 'Bank System',
      description: 'Complete banking application system design with transaction management',
      tags: ['System Design', 'Finance', 'UI/UX'],
      image: '/bank-system.png',
      link: 'https://www.figma.com/design/8QRjN35QVqnhSKuUdcRgpn/BANK-SYSTEM?node-id=0-1&p=f&t=jLGr8ymNClQSHL72-0',
    },
    {
      title: 'Converter System',
      description: 'Multi-purpose converter application with currency and unit conversion',
      tags: ['System Design', 'Utility', 'Mobile'],
      image: '/converter.jpg',
      link: 'https://www.figma.com/design/HTviG6YNluJ5W8Uc1N5QxL/CONVERTER-SYSTEM?node-id=0-1&p=f&t=4H0fPzfBfzBv1hOp-0',
    },
    {
      title: 'Freshly Dropped',
      description: 'Food delivery and marketplace application design',
      tags: ['E-Commerce', 'Mobile', 'Food Delivery'],
      image: '/freshly-dropped.png',
      link: 'https://www.figma.com/design/RJqXQCecjVqomkvtOgvUfx/Freshly-Dropped?t=jLGr8ymNClQSHL72-0',
    },
    {
      title: 'Flutter Mobile App',
      description: 'Cross-platform mobile application design',
      tags: ['Flutter', 'Mobile', 'UI Design'],
      image: '/fluttermobile.png',
      link: 'https://www.figma.com/design/PkV6mrlKLDxl1Ny3HPUZW1/Flutter-mobile-app?node-id=0-1&p=f&t=iSvAJasEP321GKaj-0',
    },
    {
      title: 'Aura Co. Website',
      description: 'Modern corporate website design',
      tags: ['Web Design', 'UI/UX', 'Figma'],
      image: '/auroandco.png',
      link: 'https://www.figma.com/design/58HwSxAIXk6U9hnIUc4NFc/Aura---Co.-Website?node-id=0-1&p=f&t=jCM8KGTrnHvm9W19-0',
    },
    {
      title: 'LifeHaven iOS App',
      description: 'Health and wellness mobile application',
      tags: ['iOS', 'Mobile', 'Health App'],
      image: '/lifehaven.png',
      link: 'https://www.figma.com/design/lcpe4JHUmionm4yfgHjnZ0/LIFEHAVEN-IOS-APP?node-id=0-1&p=f&t=JaCsUwDSOA9bcute-0',
    },
    {
      title: 'Pizza Mobile App',
      description: 'Food delivery application design',
      tags: ['Mobile App', 'E-Commerce', 'UI/UX'],
      image: '/pizza.png',
      link: 'https://www.figma.com/design/32TNLdaicalexwMrWKmWra/PIZZA-MOBILE-APP?node-id=0-1&p=f&t=RqTLXYmj0jULqNZZ-0',
    },
    {
      title: 'Digi Academia Website',
      description: 'Educational platform web design',
      tags: ['Web Design', 'Education', 'UI/UX'],
      image: '/digiacademia.png',
      link: 'https://www.figma.com/design/9uQZnejw6o8yXbFgYxBLyU/DIGI-ACADEMIA-WEBSITE?node-id=0-1&p=f&t=MDYmfWXRw2fz8TBD-0',
    },
    {
      title: 'Skincare Mobile App',
      description: 'Beauty and skincare product application',
      tags: ['Mobile', 'Beauty', 'UI Design'],
      image: '/skincare.png',
      link: 'https://www.figma.com/design/HnbGL83GBrmEbUxXdlDTzY/SKINCARE-MOBILE-APP?node-id=0-1&p=f&t=ayOWQcWdiaMiR1C0-0',
    },
    {
      title: 'FilmTrack Website',
      description: 'Movie tracking and review platform',
      tags: ['PHP', 'Web App', 'UI/UX'],
      image: '/filmtrack.png',
      link: 'https://www.figma.com/design/bLes37eN9u3aa13n4X2n4b/FILMTRACK-WEBSITE-PHP?node-id=0-1&p=f&t=xNK21DHHM5u1Y183-0',
    },
    {
      title: 'Travel Mobile App',
      description: 'Travel planning and booking application',
      tags: ['Mobile', 'Travel', 'UI Design'],
      image: '/travel.png',
      link: 'https://www.figma.com/design/pPCwRmSdrq87AmdbtKWzv2/TRAVEL-MOBILE-APP?node-id=0-1&p=f&t=wP5c9EjzJ7jOpFxn-0',
    },
    {
      title: 'Saint Matthew System',
      description: 'Educational management system design',
      tags: ['System Design', 'Education', 'UI/UX'],
      image: '/saintmatthew.png',
      link: 'https://www.figma.com/design/XmyRcz7gL3ekjjWBP5Qhh1/SAINT-MATTHEW-SYSTEM?node-id=0-1&p=f&t=gCr3fSVO0kAjYZ7p-0',
    },
  ]

  const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/seikii08/', icon: 'facebook' },
    { name: 'Instagram', url: 'https://www.instagram.com/aicelleeeeee_/', icon: 'instagram' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aicelle-r-66298537b/', icon: 'linkedin' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@aiiiiiiqt?lang=en', icon: 'tiktok' },
  ]

  const certificates = [
    {
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
      issueDate: 'Oct 18, 2025',
      badgeColor: 'from-green-400 to-green-600',
      image: '/cert-cybersecurity.png',
    },
    {
      title: 'Introduction to Cybersecurity (I2CS)',
      issuer: 'Cisco Networking Academy',
      issueDate: 'Oct 18, 2025',
      badgeColor: 'from-green-400 to-green-600',
      image: '/cert-cybersecurity.png',
    },
    {
      title: 'Operating Systems Basics',
      issuer: 'Cisco Networking Academy',
      issueDate: 'Oct 18, 2025',
      badgeColor: 'from-blue-400 to-blue-600',
      image: '/cert-operating-systems.png',
    },
    {
      title: 'Linux Essentials',
      issuer: 'Cisco Networking Academy',
      issueDate: 'Dec 14, 2025',
      badgeColor: 'from-blue-400 to-blue-600',
      image: '/cert-linux.png',
    },
    {
      title: 'IT Specialist - Cybersecurity',
      issuer: 'Pearson',
      issueDate: 'Apr 30, 2026',
      badgeColor: 'from-indigo-400 to-indigo-600',
      image: '/cert-it-specialist.png',
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
      <section id="home" className="max-w-6xl mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-400 rounded-full blur-3xl"></div>
        </div>
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
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition-colors"
                  title={social.name}
                >
                  <AtSign size={20} />
                </a>
              ))}
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
            My Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, i) => (
              <div
                key={skill.name}
                style={{ animationDelay: `${i * 100}ms` }}
                className="bg-white p-6 rounded-xl border border-gray-100 hover:border-purple-300 hover:shadow-lg transition-all animate-slide-in-up"
              >
                <div className="flex justify-between items-center mb-3">
                  <p className="font-semibold text-gray-900">{skill.name}</p>
                  <span className="text-sm font-bold text-purple-600">{skill.level}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: skill.level }}
                  ></div>
                </div>
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `${i * 150}ms` }}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-purple-300 hover:shadow-xl transition-all animate-slide-in-up"
            >
              <div className="aspect-video relative overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
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
                  <div className="text-purple-600 font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    View Project <ExternalLink size={16} />
                  </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="bg-gradient-to-b from-white via-pink-50 to-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center animate-slide-in-up">
            Certifications & Achievements
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, i) => (
              <div
                key={cert.title}
                style={{ animationDelay: `${i * 100}ms` }}
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all animate-slide-in-up group cursor-pointer border border-gray-100"
                onClick={() => setSelectedCert(cert)}
              >
                {/* Certificate Badge */}
                <div className="flex justify-center mb-6">
                  <div className={`w-24 h-24 bg-gradient-to-br ${cert.badgeColor} rounded-lg flex items-center justify-center text-white text-3xl font-bold shadow-lg transform group-hover:scale-110 transition-transform`}>
                    ✓
                  </div>
                </div>

                {/* Date Badge */}
                <div className="flex justify-center mb-4">
                  <span className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {cert.issueDate}
                  </span>
                </div>

                {/* Certificate Info */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 text-balance">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Issued by {cert.issuer}
                  </p>
                  <p className="text-xs text-purple-600 font-medium mt-3">Click to view certificate</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">{selectedCert.title}</h3>
              <button
                onClick={() => setSelectedCert(null)}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <X size={28} />
              </button>
            </div>

            {/* Certificate Image */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  width={1000}
                  height={700}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 p-6 flex gap-3 justify-end">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-6 py-2 bg-gray-200 text-gray-900 rounded-lg font-medium hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
              <a
                href={selectedCert.image}
                download
                className="px-6 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center gap-2"
              >
                <ExternalLink size={18} />
                Download
              </a>
            </div>
          </div>
        </div>
      )}
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
                <a href="https://www.facebook.com/seikii08/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Facebook">
                  <AtSign size={20} />
                </a>
                <a href="https://www.instagram.com/aicelleeeeee_/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Instagram">
                  <AtSign size={20} />
                </a>
                <a href="https://www.linkedin.com/in/aicelle-r-66298537b/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="LinkedIn">
                  <AtSign size={20} />
                </a>
                <a href="https://www.tiktok.com/@aiiiiiiqt?lang=en" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="TikTok">
                  <GitBranch size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm space-y-2">
            <p>© 2024 Aicelle Rosales. All rights reserved.</p>
            <p>Designed with ♥ in the Philippines</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
