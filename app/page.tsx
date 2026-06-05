'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  Menu,
  X,
  ChevronDown,
  GitBranch,
  AtSign,
  Mail,
  ExternalLink
} from 'lucide-react'

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedCert, setSelectedCert] = useState(null)

  useEffect(() => {
    const handleScroll = () => {}
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
    { name: 'HTML', level: '95%', image: '/html-5.png' },
    { name: 'CSS', level: '90%', image: '/css-3.png' },
    { name: 'JavaScript', level: '85%', image: '/java-script.png' },
    { name: 'Python', level: '75%', image: '/python.png' },
    { name: 'C++', level: '70%', image: '/c-.png' },
    { name: 'PHP', level: '65%', image: '/php.png' },
    { name: 'Figma', level: '90%', image: '/figma.png' },
    { name: 'Adobe XD', level: '85%', image: '/xd.png' },
    { name: 'Canva', level: '95%', image: '/palette.png' },
  ]

  const projects = [
    {
      title: 'Onlook - Thesis Project',
      description:
        'A web-based collaborative system designed to monitor, report, and assist missing and cognitively impaired individuals.',
      tags: ['Figma', 'UI/UX', 'Design System'],
      image: '/onlook.png',
      website: 'https://onlook-livid.vercel.app/',
      figma:
        'https://www.figma.com/design/1j21q7Ymp2J8F1kNFUiET7/Onlook?t=9Y2YU2dMUX2gJL7T-0',
    },
    {
      title: 'Bank System',
      description:
        'A modern banking application system featuring secure account management.',
      tags: ['System Design', 'Finance', 'UI/UX'],
      image: '/bank-system.png',
      link: 'https://www.figma.com/design/8QRjN35QVqnhSKuUdcRgpn/BANK-SYSTEM',
    },
    {
      title: 'Converter System',
      description:
        'A multi-purpose converter application with real-time conversion tools.',
      tags: ['System Design', 'Utility', 'Mobile'],
      image: '/converter.jpg',
      link: 'https://www.figma.com/design/HTviG6YNluJ5W8Uc1N5QxL/CONVERTER-SYSTEM',
    },
    {
      title: 'Freshly Dropped',
      description: 'A food delivery and marketplace platform design.',
      tags: ['E-Commerce', 'Mobile', 'Food Delivery'],
      image: '/freshly-dropped.png',
      link: 'https://www.figma.com/design/RJqXQCecjVqomkvtOgvUfx/Freshly-Dropped',
    },
    {
      title: 'Flutter Mobile App',
      description: 'Cross-platform mobile application UI design.',
      tags: ['Flutter', 'Mobile', 'UI Design'],
      image: '/fluttermobile.png',
      link: 'https://www.figma.com/design/PkV6mrlKLDxl1Ny3HPUZW1/Flutter-mobile-app',
    },
  ]

  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com', icon: 'facebook' },
    { name: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
    { name: 'TikTok', url: 'https://tiktok.com', icon: 'tiktok' },
  ]

  const certificates = [
    {
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
      issueDate: 'Oct 18, 2025',
      image: '/cert-cybersecurity.png',
      badge: '/INTRO_CYBER.png',
    },
    {
      title: 'Operating Systems Basics',
      issuer: 'Cisco Networking Academy',
      issueDate: 'Oct 18, 2025',
      image: '/cert-operating-systems.png',
      badge: '/OSB.png',
    },
    {
      title: 'Linux Essentials',
      issuer: 'Cisco Networking Academy',
      issueDate: 'Dec 14, 2025',
      image: '/cert-linux.png',
      badge: '/LINUX.png',
    },
    {
      title: 'IT Specialist - Cybersecurity',
      issuer: 'Pearson',
      issueDate: 'Apr 30, 2026',
      image: '/cert-it-specialist.png',
      badge: '/ITS-Badges-Cybersecurity.png',
    },
  ]

  return (
    <div className="min-h-screen bg-white">

      {/* NAV */}
      <nav className="flex justify-between items-center px-6 py-4 border-b">
        <h1 className="font-bold">Aicelle</h1>

        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-600">
              {link.name}
            </a>
          ))}
        </div>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* HERO */}
      <section id="home" className="p-10 text-center">
        <h1 className="text-5xl font-bold">
          Aicelle <span className="text-pink-500">Rosales</span>
        </h1>
        <p className="text-gray-600 mt-2">
          Frontend Developer & UI/UX Designer
        </p>
      </section>

      {/* ABOUT */}
      <section id="about" className="p-10">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-gray-600 mt-2">
          IT graduate passionate about UI/UX and web development.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="p-10">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>

        <div className="grid md:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div key={skill.name} className="border p-4 rounded">
              <p className="font-bold">{skill.name}</p>
              <p className="text-sm text-gray-500">{skill.level}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS (NO REMOVED CONTENT) */}
      <section id="projects" className="p-10">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link || project.website}
              className="border p-4 rounded block"
            >
              <h3 className="font-bold">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certificates" className="p-10">
        <h2 className="text-3xl font-bold mb-6">Certificates</h2>

        <div className="grid md:grid-cols-3 gap-4">
          {certificates.map((cert) => (
            <div
              key={cert.title}
              className="border p-4 rounded cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              <p className="font-bold">{cert.title}</p>
              <p className="text-sm text-gray-500">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="p-10 bg-gray-50">
        <h2 className="text-3xl font-bold">Contact</h2>
        <a href="mailto:aicellerosales08@gmail.com" className="text-blue-500">
          Send Email
        </a>
      </section>

      {/* FOOTER */}
      <footer className="p-6 text-center text-gray-500">
        © 2026 Aicelle Rosales
      </footer>

      {/* MODAL */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center"
          onClick={() => setSelectedCert(null)}
        >
          <div className="bg-white p-6 rounded">
            <h2 className="font-bold">{selectedCert.title}</h2>
            <button onClick={() => setSelectedCert(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}
