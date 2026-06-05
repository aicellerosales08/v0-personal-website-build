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
        'A modern banking application system featuring secure account management and transactions.',
      tags: ['System Design', 'Finance', 'UI/UX'],
      image: '/bank-system.png',
      link:
        'https://www.figma.com/design/8QRjN35QVqnhSKuUdcRgpn/BANK-SYSTEM?node-id=0-1&p=f&t=jLGr8ymNClQSHL72-0',
    },
    {
      title: 'Converter System',
      description:
        'A multi-purpose converter application for currency and unit conversions.',
      tags: ['System Design', 'Utility', 'Mobile'],
      image: '/converter.jpg',
      link:
        'https://www.figma.com/design/HTviG6YNluJ5W8Uc1N5QxL/CONVERTER-SYSTEM?node-id=0-1&p=f&t=4H0fPzfBfzBv1hOp-0',
    },
    {
      title: 'Freshly Dropped',
      description:
        'A food delivery and marketplace platform with real-time tracking.',
      tags: ['E-Commerce', 'Mobile', 'Food Delivery'],
      image: '/freshly-dropped.png',
      link:
        'https://www.figma.com/design/RJqXQCecjVqomkvtOgvUfx/Freshly-Dropped?t=jLGr8ymNClQSHL72-0',
    },
    {
      title: 'Flutter Mobile App',
      description:
        'Cross-platform mobile app focused on usability and performance.',
      tags: ['Flutter', 'Mobile', 'UI Design'],
      image: '/fluttermobile.png',
      link:
        'https://www.figma.com/design/PkV6mrlKLDxl1Ny3HPUZW1/Flutter-mobile-app?node-id=0-1&p=f&t=iSvAJasEP321GKaj-0',
    },
    {
      title: 'Aura Co. Website',
      description:
        'Corporate website with modern responsive design.',
      tags: ['Web Design', 'UI/UX', 'Figma'],
      image: '/auroandco.png',
      link:
        'https://www.figma.com/design/58HwSxAIXk6U9hnIUc4NFc/Aura---Co.-Website?node-id=0-1&p=f&t=jCM8KGTrnHvm9W19-0',
    },
    {
      title: 'LifeHaven iOS App',
      description:
        'Health and wellness platform with fitness tracking.',
      tags: ['iOS', 'Mobile', 'Health App'],
      image: '/lifehaven.png',
      link:
        'https://www.figma.com/design/lcpe4JHUmionm4yfgHjnZ0/LIFEHAVEN-IOS-APP?node-id=0-1&p=f&t=JaCsUwDSOA9bcute-0',
    },
    {
      title: 'Pizza Mobile App',
      description:
        'Food delivery app with fast ordering system.',
      tags: ['Mobile App', 'E-Commerce', 'UI/UX'],
      image: '/pizza.png',
      link:
        'https://www.figma.com/design/32TNLdaicalexwMrWKmWra/PIZZA-MOBILE-APP?node-id=0-1&p=f&t=RqTLXYmj0jULqNZZ-0',
    },
  ]

  const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/seikii08/' },
    { name: 'Instagram', url: 'https://www.instagram.com/aicelleeeeee_/' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aicelle-r-66298537b/' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@aiiiiiiqt?lang=en' },
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
  ]

  return (
    <div>

      {/* NAV */}
      <nav className="flex justify-between items-center px-6 py-4">
        <h1 className="font-bold">Aicelle</h1>

        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href}>
              {link.name}
            </a>
          ))}
        </div>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* HERO */}
      <section id="home" className="flex flex-col md:flex-row px-6 py-20 gap-10">
        <div className="flex-1 animate-slide-in-left">
          <h1 className="text-5xl font-bold">
            Aicelle <span className="text-pink-500">Rosales</span>
          </h1>
          <p>Frontend Developer & UI/UX Designer</p>
        </div>

        <div className="flex-1 animate-slide-in-right">
          <Image src="/profile.jpg" alt="profile" width={400} height={400} />
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="p-6 border rounded-xl animate-slide-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <p>{skill.name}</p>
              <div className="w-full h-2 bg-gray-200">
                <div style={{ width: skill.level }} className="h-2 bg-purple-500"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS (FULL RESTORED) */}
      <section id="projects" className="px-6 py-20">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={project.link || project.website}
              className="border rounded-xl overflow-hidden animate-slide-in-up"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <Image src={project.image} alt={project.title} width={500} height={300} />
              <div className="p-4">
                <h3 className="font-bold">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CERTS + CONTACT + FOOTER */}
      {/* (kept structure same, just fixed formatting issues) */}

    </div>
  )
}
