'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  Menu,
  X,
  ChevronDown,
  ExternalLink,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Download,
  Award
} from 'lucide-react'

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedCert, setSelectedCert] = useState<typeof certificates[number] | null>(null)
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All')


  // Smooth automatic scrolling function
  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()
    setIsMenuOpen(false)

    const targetId = href.replace('#', '')
    const elem = document.getElementById(targetId)

    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Designs', href: '#designs' },
    { name: 'Certificates', href: '#certificates' },
  ]

  const skills = [
    { name: 'HTML', level: '95%', type: 'dev', icon: '/html-5.png' },
    { name: 'CSS', level: '90%', type: 'dev', icon: '/css-3.png' },
    { name: 'JavaScript', level: '55%', type: 'dev', icon: '/java-script.png' },
    { name: 'Python', level: '75%', type: 'dev', icon: '/python.png' },
    { name: 'C++', level: '50%', type: 'dev', icon: '/c-.png' },
    { name: 'PHP', level: '65%', type: 'dev', icon: '/php.png' },
    { name: 'Figma', level: '100%', type: 'design', icon: '/figma.png' },
    { name: 'Adobe XD', level: '85%', type: 'design', icon: '/xd.png' },
    { name: 'Canva', level: '100%', type: 'design', icon: '/palette.png' },
  ]
  const aboutQuotes = [
  'Design with purpose.',
  'Create. Design. Inspire.',
  'Turning ideas into experiences.',
  'Where creativity meets technology.',
  'Building meaningful digital experiences.',
  ]


  const designs = [
  {
    title: 'Ad Creatives & AI Image Generation',
    description:
      'Creative advertising visuals and AI-generated imagery designed for digital campaigns, promotional content, and brand storytelling.',
    image: '/AD1.png',
    category: 'Ad Creatives',
    tags: ['Ad Creative', 'AI Image Generation', 'Visual Design'],
  },

    {
    title: 'Ad Creatives & AI Image Generation',
    description:
      'Creative advertising visuals and AI-generated imagery designed for digital campaigns, promotional content, and brand storytelling.',
    image: '/AD2.png',
    category: 'Ad Creatives',
    tags: ['Ad Creative', 'AI Image Generation', 'Visual Design'],
  },

    {
    title: 'Ad Creatives & AI Image Generation',
    description:
      'Creative advertising visuals and AI-generated imagery designed for digital campaigns, promotional content, and brand storytelling.',
    image: '/AD3.png',
    category: 'Ad Creatives',
    tags: ['Ad Creative', 'AI Image Generation', 'Visual Design'],
  },

    {
    title: 'Ad Creatives & AI Image Generation',
    description:
      'Creative advertising visuals and AI-generated imagery designed for digital campaigns, promotional content, and brand storytelling.',
    image: '/AD4.png',
    category: 'Ad Creatives',
    tags: ['Ad Creative', 'AI Image Generation', 'Visual Design'],
  },

    {
    title: 'Ad Creatives & AI Image Generation',
    description:
      'Creative advertising visuals and AI-generated imagery designed for digital campaigns, promotional content, and brand storytelling.',
    image: '/AD5.png',
    category: 'Ad Creatives',
    tags: ['Ad Creative', 'AI Image Generation', 'Visual Design'],
  },

    {
    title: 'Ad Creatives & AI Image Generation',
    description:
      'Creative advertising visuals and AI-generated imagery designed for digital campaigns, promotional content, and brand storytelling.',
    image: '/AD6.png',
    category: 'Ad Creatives',
    tags: ['Ad Creative', 'AI Image Generation', 'Visual Design'],
  },
    
  {
    title: 'CLOTH',
    description:
      'Creative fashion and clothing visuals designed to showcase products through engaging compositions and modern visual direction.',
    image: '/design-cloth.png',
    category: 'CLOTH',
    tags: ['Fashion', 'Creative Design', 'Visual Design'],
  },
  {
    title: 'Social Media',
    description:
      'Social media graphics and promotional content created to strengthen brand presence and communicate ideas through visually engaging designs.',
    image: '/design-social-media.png',
    category: 'Social Media',
    tags: ['Social Media', 'Content Design', 'Branding'],
  },
  {
    title: 'Logo Design',
    description:
      'Custom logo concepts and visual identities designed to create memorable and recognizable brand experiences.',
    image: '/design-logo.png',
    category: 'Logo',
    tags: ['Logo Design', 'Brand Identity', 'Visual Identity'],
  },
  {
    title: 'Meta',
    description:
      'Digital creatives and advertising visuals designed for Meta platforms, focusing on clear messaging, visual impact, and audience engagement.',
    image: '/design-meta.png',
    category: 'Meta',
    tags: ['Meta Ads', 'Digital Advertising', 'Creative Design'],
  },
  {
    title: 'Product Label & Visual Design',
    description:
      'Product labels and visual assets designed to communicate product identity, enhance shelf appeal, and maintain a cohesive brand presentation.',
    image: '/design-product-label.png',
    category: 'Product Design',
    tags: ['Product Label', 'Packaging', 'Visual Design'],
  },
]
  
  const projects = [
    {
      title: 'Onlook - Thesis Project',
      description: 'A web-based collaborative system designed to monitor, report, and assist missing and cognitively impaired individuals. Features include case management, incident mapping, real-time reporting, and data-driven analytics to support faster response and community collaboration.',
      tags: ['Figma', 'UI/UX', 'Design System'],
      image: '/onlook.png',
      website: 'https://onlook-livid.vercel.app/',
      figma: 'https://www.figma.com/design/1j21q7Ymp2J8F1kNFUiET7/Onlook?t=9Y2YU2dMUX2gJL7T-0',
      category: 'Web',
    },
    {
      title: 'Bank System',
      description: 'A modern banking application system featuring secure account management, transaction processing, fund transfers, balance tracking, and financial reporting with a focus on usability, security, and efficient banking operations.',
      tags: ['System ', 'Finance', 'UI/UX'],
      image: '/bank-system.png',
      link: 'https://www.figma.com//8QRjN35QVqnhSKuUdcRgpn/BANK-SYSTEM?node-id=0-1&p=f&t=jLGr8ymNClQSHL72-0',
      category: 'System',
    },
    {
      title: 'Converter System',
      description: 'A multi-purpose converter application that provides real-time currency conversion and supports various unit conversions, including length, weight, temperature, and volume, with a clean and intuitive user experience.',
      tags: ['System Design', 'Utility', 'Mobile'],
      image: '/converter.jpg',
      link: 'https://www.figma.com/design/HTviG6YNluJ5W8Uc1N5QxL/CONVERTER-SYSTEM?node-id=0-1&p=f&t=4H0fPzfBfzBv1hOp-0',
      category: 'System',
    },
    {
      title: 'Freshly Dropped',
      description: 'A comprehensive food delivery and marketplace platform designed to streamline online ordering, vendor management, product discovery, and real-time delivery tracking through an intuitive and user-friendly interface.',
      tags: ['E-Commerce', 'Mobile', 'Food Delivery'],
      image: '/freshly-dropped.png',
      link: 'https://www.figma.com/design/RJqXQCecjVqomkvtOgvUfx/Freshly-Dropped?t=jLGr8ymNClQSHL72-0',
      category: 'Mobile',
    },
    {
      title: 'Flutter Mobile App',
      description: 'A modern cross-platform mobile application built with a focus on usability, accessibility, and performance, providing a consistent and engaging experience across multiple mobile devices.',
      tags: ['Flutter', 'Mobile', 'UI Design'],
      image: '/fluttermobile.png',
      link: 'https://www.figma.com/design/PkV6mrlKLDxl1Ny3HPUZW1/Flutter-mobile-app?node-id=0-1&p=f&t=iSvAJasEP321GKaj-0',
      category: 'Mobile',
    },
    {
      title: 'Aura Co. Website',
      description: 'A professional corporate website featuring modern design principles, responsive layouts, service presentation, company information, and user-focused navigation to enhance the overall digital experience.',
      tags: ['Web Design', 'UI/UX', 'Figma'],
      image: '/auroandco.png',
      link: 'https://www.figma.com/design/58HwSxAIXk6U9hnIUc4NFc/Aura---Co.-Website?node-id=0-1&p=f&t=jCM8KGTrnHvm9W19-0',
      category: 'Web',
    },
    {
      title: 'LifeHaven iOS App',
      description: 'A comprehensive health and wellness platform that promotes healthy lifestyles by providing fitness tracking, wellness monitoring, personalized goals, and easy access to health-related information.',
      tags: ['iOS', 'Mobile', 'Health App'],
      image: '/lifehaven.png',
      link: 'https://www.figma.com/design/lcpe4JHUmionm4yfgHjnZ0/LIFEHAVEN-IOS-APP?node-id=0-1&p=f&t=JaCsUwDSOA9bcute-0',
      category: 'Mobile',
    },
    {
      title: 'Pizza Mobile App',
      description: 'A user-friendly food delivery platform that streamlines the ordering process by providing restaurant browsing, menu management, order tracking, and fast delivery services through a responsive mobile interface.',
      tags: ['Mobile App', 'E-Commerce', 'UI/UX'],
      image: '/pizza.png',
      link: 'https://www.figma.com/design/32TNLdaicalexwMrWKmWra/PIZZA-MOBILE-APP?node-id=0-1&p=f&t=RqTLXYmj0jULqNZZ-0',
      category: 'Mobile',
    },
    {
      title: 'Digi Academia Website',
      description: 'A modern educational web platform that supports digital learning through course management, student engagement tools, educational resources, and an intuitive interface designed to improve the learning experience.',
      tags: ['Web Design', 'Education', 'UI/UX'],
      image: '/digiacademia.png',
      link: 'https://www.figma.com/design/9uQZnejw6o8yXbFgYxBLyU/DIGI-ACADEMIA-WEBSITE?node-id=0-1&p=f&t=MDYmfWXRw2fz8TBD-0',
      category: 'Web',
    },
    {
      title: 'Skincare Mobile App',
      description: 'A modern skincare and beauty platform that offers personalized product recommendations, skincare tracking, beauty tips, and a seamless shopping experience through an intuitive mobile interface.',
      tags: ['Mobile', 'Beauty', 'UI Design'],
      image: '/skincare.png',
      link: 'https://www.figma.com/design/HnbGL83GBrmEbUxXdlDTzY/SKINCARE-MOBILE-APP?node-id=0-1&p=f&t=ayOWQcWdiaMiR1C0-0',
      category: 'Mobile',
    },
    {
      title: 'FilmTrack Website',
      description: 'A modern movie tracking platform that allows users to browse films, maintain personal watchlists, share reviews, rate content, and stay updated with the latest movie releases.',
      tags: ['PHP', 'Web App', 'UI/UX'],
      image: '/filmtrack.png',
      link: 'https://www.figma.com/design/bLes37eN9u3aa13n4X2n4b/FILMTRACK-WEBSITE-PHP?node-id=0-1&p=f&t=xNK21DHHM5u1Y183-0',
      category: 'Web',
    },
    {
      title: 'Travel Mobile App',
      description: 'A comprehensive travel platform that simplifies trip planning by offering destination exploration, itinerary management, accommodation booking, and travel recommendations in a modern and intuitive interface.',
      tags: ['Mobile', 'Travel', 'UI Design'],
      image: '/travel.png',
      link: 'https://www.figma.com/design/pPCwRmSdrq87AmdbtKWzv2/TRAVEL-MOBILE-APP?node-id=0-1&p=f&t=wP5c9EjzJ7jOpFxn-0',
      category: 'Mobile'
    },
    {
      title: 'Saint Matthew System',
      description: 'A comprehensive educational management platform that enhances school operations by providing efficient student information management, academic monitoring, faculty coordination, and administrative support in a user-friendly environment.',
      tags: ['System Design', 'Education', 'UI/UX'],
      image: '/saintmatthew.png',
      link: 'https://www.figma.com/design/XmyRcz7gL3ekjjWBP5Qhh1/SAINT-MATTHEW-SYSTEM?node-id=0-1&p=f&t=gCr3fSVO0kAjYZ7p-0',
      category: 'System',
    },
    {
      title: 'Book E-Commerce',
      description: 'An e-commerce website concept designed for browsing and purchasing books through a clean, modern, and user-friendly online shopping experience.',
      tags: ['Web Design', 'E-Commerce', 'UI/UX'],
      image: '/book-ecom.png',
      link: 'https://www.figma.com/design/ncu16eexK4XUHavfcXDfcx/BOOK-ECOM?node-id=0-1&p=f&t=xxif6hGaBjYqnyjQ-0',
      category: 'Web',
    },
    {
      title: 'Aicelle Naomi',
      description: 'A modern and visually engaging website design focused on creating a polished digital experience with intuitive navigation and user-centered interface design.',
      tags: ['Web Design', 'UI/UX', 'Figma'],
      image: '/aicelle-naomi.png',
      link: 'https://www.figma.com/design/VqQnqxrZGLtEoaihetBCXC/Aicelle-Naomi?node-id=0-1&p=f&t=AC86TVrVxcMeEeG4-0',
      category: 'Web',
    },
    {
      title: 'E-Commerce Website',
      description: 'A modern e-commerce website concept designed to provide an intuitive online shopping experience with product browsing, organized categories, and user-friendly navigation.',
      tags: ['Web Design', 'E-Commerce', 'UI/UX'],
      image: '/ecommerce-website.png',
      link: 'https://www.figma.com/design/qdXZXMKLUHG7Aslk3HliK0/E-COMMERCE-WEBSITE?node-id=0-1&p=f&t=US3ria2yltkMHbLp-0',
      category: 'Web',
    },
  ]

  // UPDATED: Added TikTok with customized native SVG path
  const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/seikii08/', icon: <Facebook size={20} /> },
    { name: 'Instagram', url: 'https://www.instagram.com/aicelleeeeee_/', icon: <Instagram size={20} /> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aicelle-r-66298537b/', icon: <Linkedin size={20} /> },
    { 
      name: 'TikTok', 
      url: 'https://www.tiktok.com/@aicelleeeeee_', 
      icon: (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.94 1.15 2.25 1.96 3.69 2.32v3.9c-1.52-.13-3.01-.71-4.24-1.66-.46-.35-.88-.75-1.25-1.19v7.19c.04 2.22-.92 4.38-2.58 5.82-1.74 1.51-4.14 2.14-6.42 1.69-2.56-.51-4.71-2.43-5.55-4.89-.9-2.65-.18-5.7 1.83-7.65 1.66-1.61 4.07-2.31 6.34-1.84v3.9c-1.21-.33-2.53-.05-3.51.72-.94.75-1.42 1.96-1.3 3.16.14 1.34.99 2.51 2.24 3.03 1.25.53 2.73.32 3.77-.52.82-.67 1.25-1.7 1.23-2.76V0z"/>
        </svg>
      ) 
    },
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
    <div className="min-h-screen bg-white text-gray-900 scroll-smooth">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-lg">A</span>
            </div>
          
            <div className="hidden sm:block">
              <p className="font-semibold text-sm">Aicelle</p>
              <p className="text-xs text-gray-500">
                UI/UX · Web Dev · Creative Design
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-sm font-medium text-gray-600 hover:text-purple-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="mailto:aicellerosales08@gmail.com" 
              className="px-6 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Popdown */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="block text-sm font-medium text-gray-600 hover:text-purple-500 transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="mailto:aicellerosales08@gmail.com"
              className="block text-center w-full px-6 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Contact Me
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="max-w-6xl mx-auto px-6 py-4 md:py-8 flex flex-col md:flex-row items-center gap-12 relative">
        <div className="absolute inset-0 -z-10 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="flex-1 space-y-8">
          <div className="space-y-3">
            <p className="text-pink-500 font-medium text-sm">Hello, I&apos;m</p>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight">
              Aicelle
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Rosales
              </span>
            </h1>
            <p className="text-xl text-gray-600">Web Designer & Developer | UI/UX & Creative Designer</p>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
           I’m a Web Designer, Frontend Developer, and UI/UX Designer with experience creating responsive websites, intuitive user interfaces, and functional digital solutions. I combine creative design and development skills to transform ideas into engaging, user-friendly digital experiences.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a 
              href="/rosales_aicelle_resume.pdf" 
              download="rosales_aicelle_resume.pdf"
              className="px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center gap-2 group"
            >
              <span>Download CV</span>
              <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a 
              href="#projects"
              onClick={(e) => handleScrollTo(e, '#projects')}
              className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-full font-medium hover:bg-gray-50 transition-colors"
            >
              View Work →
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 pt-4">
            <p className="text-sm text-gray-500 font-medium tracking-wider">FOLLOW ME</p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition-colors flex items-center justify-center"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-1">
          <div className="relative w-full max-w-md mx-auto group">
        
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse"></div>
        
            {/* Circular Profile Container */}
            <div className="relative z-10 w-[400px] h-[400px] max-w-full mx-auto rounded-full overflow-hidden border-8 border-white shadow-2xl bg-white animate-[float_6s_ease-in-out_infinite] group-hover:scale-[1.02] transition-transform duration-500">
        
              <Image
                src="/aicelle-illustration.png"
                alt="Aicelle Rosales"
                width={400}
                height={400}
                className="w-full h-auto aspect-square object-cover object-top"
                priority
              />
        
            </div>
        
            {/* Experience Badge */}
            <div 
              className="absolute top-8 right-0 z-20 bg-white rounded-2xl px-5 py-2.5 shadow-md border border-gray-100 text-center min-w-[110px] animate-[float_6s_ease-in-out_infinite]"
              style={{ animationDelay: '1.5s' }}
            >
              <p className="font-bold text-xl text-gray-900 leading-none">4+</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold mt-1">
                Experiences
              </p>
            </div>
        
            {/* Projects Badge */}
            <div 
              className="absolute bottom-12 left-0 z-20 bg-gray-900 text-white rounded-2xl px-5 py-2.5 shadow-md border border-gray-800 text-center min-w-[125px] animate-[float_6s_ease-in-out_infinite]"
              style={{ animationDelay: '3s' }}
            >
              <p className="font-bold text-xl leading-none">20+</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mt-1">
                Projects Done
              </p>
            </div>
        
          </div>
        </div>

      </section>

      {/* Scroll Indicator */}
      <div className="flex justify-center pb-8">
        <ChevronDown className="text-gray-400 animate-bounce" size={24} />
      </div>

      {/* Quote Section */}
      <section className="bg-gradient-to-r from-purple-50 to-pink-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-2xl md:text-3xl font-serif text-gray-800 italic mb-6">
            &ldquo;Design is not just what it looks like and feels like. Design is how it works.&rdquo;
          </p>
          <p className="text-gray-600 font-medium">
            — Steve Jobs
          </p>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-16 md:py-20">
      
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
      
          {/* ================= LEFT SIDE ================= */}
          <div className="min-w-0 flex flex-col">
      
            {/* About Me Badge */}
            <div className="inline-flex self-start items-center gap-2 px-4 py-2 rounded-full border border-purple-200 bg-white mb-6">
              <span className="text-purple-600 text-sm">♙</span>
              <span className="text-xs font-semibold tracking-wide text-purple-600">
                ABOUT ME
              </span>
            </div>
      
            {/* Name + Nice to meet you */}
            <div className="flex items-baseline gap-4 mb-3 whitespace-nowrap">
              <h2 className="text-4xl md:text-[40px] font-bold text-gray-900 tracking-[-0.04em] leading-none">
                Hi, I&apos;m Aicelle
              </h2>
      
              <p className="text-xl md:text-[18px] italic font-medium text-pink-500">
                Nice to meet you! ♡
              </p>
            </div>
      
            {/* Main Title */}
            <h3 className="text-2xl md:text-[25px] font-bold leading-[1.15] mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                Web Designer &amp; Developer
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                UI/UX Designer
              </span>
            </h3>
      
            {/* About Text */}
            <div className="max-w-[560px] space-y-4">
      
              <p className="text-gray-600 text-sm md:text-[14px] leading-[1.6]">
                I&apos;m an Information Technology professional with experience in
                web development, UI/UX design, and creative digital solutions.
                I&apos;m passionate about creating beautiful, functional, and
                user-centered digital experiences that combine thoughtful design
                with practical technology.
              </p>
      
              {/* Divider */}
              <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
      
              <p className="text-gray-600 text-sm md:text-[14px] leading-[1.6]">
                I combine creativity and technical skills to design and build
                responsive websites, intuitive interfaces, and interactive
                prototypes that solve real-world problems and deliver meaningful
                user experiences.
              </p>
      
              <p className="text-gray-600 text-sm md:text-[14px] leading-[1.6]">
                My experience includes working on real-world projects,
                collaborating with clients and teams, and applying modern tools
                and technologies to create effective digital solutions. I&apos;m
                continuously improving my skills and exploring new technologies
                to deliver high-quality work and better experiences for users.
              </p>
      
            </div>
      
            {/* ================= STATS ================= */}
            <div className="mt-7 w-full max-w-[560px] p-4 md:p-5 rounded-2xl border border-purple-100 bg-gradient-to-r from-purple-50/70 to-pink-50/70">
      
              <div className="grid grid-cols-2 divide-x divide-purple-100">
      
                {/* 50+ */}
                <div className="flex items-center gap-4 px-2">
      
                  <div className="w-12 h-12 shrink-0 rounded-full bg-white border border-purple-100 flex items-center justify-center shadow-sm">
                    <span className="text-xl text-purple-600">
                      ♧
                    </span>
                  </div>
      
                  <div>
                    <p className="text-2xl font-bold text-purple-600 leading-none">
                      50+
                    </p>
      
                    <p className="text-sm font-semibold text-gray-800 mt-1">
                      Design Components
                    </p>
      
                    <p className="text-xs text-gray-500 mt-1 leading-snug">
                      Reusable UI elements
                      <br />
                      created in Figma
                    </p>
                  </div>
      
                </div>
      
                {/* 20+ */}
                <div className="flex items-center gap-4 px-4">
      
                  <div className="w-12 h-12 shrink-0 rounded-full bg-white border border-pink-100 flex items-center justify-center shadow-sm">
                    <span className="text-xl text-pink-500">
                      ▣
                    </span>
                  </div>
      
                  <div>
                    <p className="text-2xl font-bold text-pink-500 leading-none">
                      20+
                    </p>
      
                    <p className="text-sm font-semibold text-gray-800 mt-1">
                      Created Layouts
                    </p>
      
                    <p className="text-xs text-gray-500 mt-1 leading-snug">
                      Web &amp; mobile layouts
                      <br />
                      designed
                    </p>
                  </div>
      
                </div>
      
              </div>
            </div>
      
          </div>
      
      
          {/* ================= RIGHT SIDE ================= */}
          <div className="relative min-w-0 flex">
      
            {/* Glow */}
            <div className="absolute -inset-3 bg-gradient-to-r from-purple-100/50 to-pink-100/50 rounded-[28px] blur-2xl -z-10" />
      
            <div className="relative w-full bg-white rounded-[24px] border border-purple-100 shadow-sm overflow-hidden">
      
              {/* Decorative Dots */}
              <div className="absolute top-0 right-0 w-56 h-48 opacity-50 pointer-events-none">
                <div className="grid grid-cols-10 gap-2.5 p-5">
                  {Array.from({ length: 100 }).map((_, i) => (
                    <span
                      key={i}
                      className="w-1 h-1 rounded-full bg-pink-200"
                    />
                  ))}
                </div>
              </div>
      
              <div className="relative p-7 md:p-8">
      
                {/* What I Do Header */}
                <div className="flex items-center gap-4 mb-5">
      
                  <div className="w-14 h-14 shrink-0 rounded-full bg-purple-50 flex items-center justify-center">
                    <span className="text-3xl text-purple-600 leading-none">
                      ☆
                    </span>
                  </div>
      
                  <div>
                    <h3 className="text-2xl md:text-[26px] font-bold text-gray-900">
                      What I Do
                    </h3>
      
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-12 h-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full" />
                      <div className="w-2 h-2 rounded-full bg-pink-500" />
                    </div>
                  </div>
      
                </div>
      
      
                {/* ================= SERVICES ================= */}
                <div>
      
                  {/* Web Development */}
                  <div className="flex gap-6 py-5 border-b border-gray-100">
      
                    <div className="w-16 h-16 shrink-0 rounded-2xl bg-purple-50 flex items-center justify-center">
                      <span className="text-2xl font-medium text-purple-600">
                        &lt;/&gt;
                      </span>
                    </div>
      
                    <div className="pt-0.5 min-w-0">
                      <h4 className="text-base md:text-[17px] font-bold text-gray-900 mb-1.5">
                        Web Development
                      </h4>
      
                      <p className="text-sm text-gray-600 leading-[1.5]">
                        Develop responsive, fast, and clean websites
                        <br />
                        using modern technologies.
                      </p>
                    </div>
      
                  </div>
      
      
                  {/* UI/UX Design */}
                  <div className="flex gap-6 py-5 border-b border-gray-100">
      
                    <div className="w-16 h-16 shrink-0 rounded-2xl bg-pink-50 flex items-center justify-center">
                      <span className="text-3xl text-pink-500">
                        ✧
                      </span>
                    </div>
      
                    <div className="pt-0.5 min-w-0">
                      <h4 className="text-base md:text-[17px] font-bold text-gray-900 mb-1.5">
                        UI/UX Design
                      </h4>
      
                      <p className="text-sm text-gray-600 leading-[1.5]">
                        Design intuitive and visually appealing interfaces
                        <br />
                        that provide great user experiences.
                      </p>
                    </div>
      
                  </div>
      
      
                  {/* Wireframing & Prototyping */}
                  <div className="flex gap-6 py-5 border-b border-gray-100">
      
                    <div className="w-16 h-16 shrink-0 rounded-2xl bg-purple-50 flex items-center justify-center">
                      <span className="text-2xl text-purple-600">
                        ▣
                      </span>
                    </div>
      
                    <div className="pt-0.5 min-w-0">
                      <h4 className="text-base md:text-[17px] font-bold text-gray-900 mb-1.5">
                        Wireframing &amp; Prototyping
                      </h4>
      
                      <p className="text-sm text-gray-600 leading-[1.5]">
                        Build interactive wireframes and prototypes
                        <br />
                        to visualize ideas and test user flows.
                      </p>
                    </div>
      
                  </div>
      
      
                  {/* Design Systems */}
                  <div className="flex gap-6 py-5">
      
                    <div className="w-16 h-16 shrink-0 rounded-2xl bg-pink-50 flex items-center justify-center">
                      <span className="text-2xl text-pink-500">
                        ◫
                      </span>
                    </div>
      
                    <div className="pt-0.5 min-w-0">
                      <h4 className="text-base md:text-[17px] font-bold text-gray-900 mb-1.5">
                        Design Systems
                      </h4>
      
                      <p className="text-sm text-gray-600 leading-[1.5]">
                        Create consistent and scalable design systems
                        <br />
                        for efficient and cohesive digital products.
                      </p>
                    </div>
      
                  </div>
      
                </div>
              </div>
      
            </div>
          </div>
      
        </div>
      
      
        {/* ================= ANIMATED QUOTE ================= */}
        <div className="mt-8 w-full rounded-2xl border border-purple-100 bg-gradient-to-r from-purple-50/60 to-pink-50/60 px-6 py-5 overflow-hidden">
      
          <div className="flex items-center justify-center min-h-[70px]">
      
            <p className="text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 text-center">
              Creating with purpose, designing with passion. ♡
            </p>
      
          </div>
      
        </div>
      
      </section>
     {/* ================= EXPERIENCE SECTION ================= */}
      <section id="experience" className="bg-gray-50 py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
      
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
              Experience
            </span>
      
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              My Experience
            </h2>
      
            <p className="text-gray-500 text-sm md:text-base">
              My professional experience in web development, UI/UX design,
              AI data annotation, and IT technical support.
            </p>
          </div>
      
          {/* Experience Timeline */}
          <div className="max-w-4xl mx-auto">
      
            {/* ================= MALAMA ================= */}
            <div className="relative pl-8 md:pl-12 pb-10 border-l-2 border-purple-200">
              <div className="absolute -left-[10px] top-0 w-5 h-5 rounded-full bg-purple-600 border-4 border-white shadow-sm" />
      
              <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300">
      
                <div className="flex flex-col sm:flex-row gap-5">
      
                  {/* Company Logo */}
                  <div className="w-16 h-16 shrink-0 rounded-xl border border-gray-100 bg-white shadow-sm flex items-center justify-center overflow-hidden">
                    <Image
                      src="/malama-logo.png"
                      alt="Malama Co. logo"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
      
                  {/* Experience Details */}
                  <div className="flex-1">
      
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          Web Designer & Developer
                        </h3>
      
                        <p className="text-purple-600 font-semibold mt-1">
                          Malama Co. · Part-time
                        </p>
                      </div>
      
                      <span className="text-xs font-semibold text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full self-start">
                        Jul 2026 – Present · 1 mo
                      </span>
                    </div>
      
                    <p className="text-sm text-gray-500 mt-2">
                      Australia · Remote
                    </p>
      
                    <ul className="mt-5 space-y-2 text-sm text-gray-600 leading-relaxed list-disc pl-5">
                      <li>
                        Manage and maintain Wix websites for Australian clients,
                        ensuring responsive, user-friendly, and visually consistent
                        web experiences.
                      </li>
      
                      <li>
                        Design, build, and optimize service landing pages using Wix
                        Editor based on client and business requirements.
                      </li>
      
                      <li>
                        Organize and manage website structures, content, and page
                        layouts to improve usability and overall site performance.
                      </li>
      
                      <li>
                        Implement Wix CMS features, dynamic pages, collections, and
                        URL redirects to support scalable and well-structured websites.
                      </li>
      
                      <li>
                        Update website content, layouts, booking systems, and
                        interactive elements while maintaining brand consistency
                        across client websites.
                      </li>
      
                      <li>
                        Collaborate with the marketing team to develop and launch
                        new website features, pages, and digital experiences aligned
                        with campaign and business goals.
                      </li>
      
                      <li>
                        Apply responsive web design principles to ensure websites
                        deliver a seamless experience across desktop, tablet, and
                        mobile devices.
                      </li>
                    </ul>
      
                    <div className="flex flex-wrap gap-2 mt-6">
                      {[
                        "Wix Website Builder",
                        "Responsive Web Design",
                        "Web Development",
                        "UI/UX Design",
                        "Wix CMS",
                        "Website Management",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-semibold rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
      
                  </div>
                </div>
              </div>
            </div>
      
      
            {/* ================= OUTLIER ================= */}
            <div className="relative pl-8 md:pl-12 pb-10 border-l-2 border-purple-200">
              <div className="absolute -left-[10px] top-0 w-5 h-5 rounded-full bg-pink-500 border-4 border-white shadow-sm" />
      
              <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300">
      
                <div className="flex flex-col sm:flex-row gap-5">
      
                  {/* Company Logo */}
                  <div className="w-16 h-16 shrink-0 rounded-xl border border-gray-100 bg-white shadow-sm flex items-center justify-center overflow-hidden">
                    <Image
                      src="/outlier-logo.png"
                      alt="Outlier logo"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
      
                  <div className="flex-1">
      
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          AI Training Data Contributor
                        </h3>
      
                        <p className="text-pink-500 font-semibold mt-1">
                          Outlier · Part-time
                        </p>
                      </div>
      
                      <span className="text-xs font-semibold text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full self-start">
                        May 2026 – Jul 2026 · 3 mos
                      </span>
                    </div>
      
                    <p className="text-sm text-gray-500 mt-2">
                      Remote
                    </p>
      
                    <ul className="mt-5 space-y-2 text-sm text-gray-600 leading-relaxed list-disc pl-5">
                      <li>
                        Contribute high-quality voice and video datasets used for AI
                        model training and evaluation.
                      </li>
      
                      <li>
                        Follow project guidelines to record, review, and submit data
                        while maintaining accuracy and quality standards.
                      </li>
      
                      <li>
                        Support the development of AI systems by providing diverse
                        and reliable training data.
                      </li>
      
                      <li>
                        Participate in AI data collection and validation projects,
                        ensuring compliance with project requirements and quality
                        assurance processes.
                      </li>
      
                      <li>
                        Collaborate with project teams and adapt to evolving AI
                        training workflows and data collection tasks.
                      </li>
                    </ul>
      
                    <div className="flex flex-wrap gap-2 mt-6">
                      {[
                        "AI Training",
                        "Data Collection",
                        "Data Validation",
                        "Quality Assurance",
                        "Voice Data",
                        "Video Data",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-pink-50 text-pink-600 text-xs font-semibold rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
      
                  </div>
                </div>
              </div>
            </div>
      
      
            {/* ================= TORRES TECHNOLOGY ================= */}
            <div className="relative pl-8 md:pl-12 pb-10 border-l-2 border-purple-200">
              <div className="absolute -left-[10px] top-0 w-5 h-5 rounded-full bg-purple-600 border-4 border-white shadow-sm" />
      
              <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300">
      
                <div className="flex flex-col sm:flex-row gap-5">
      
                  {/* Company Logo */}
                  <div className="w-16 h-16 shrink-0 rounded-xl border border-gray-100 bg-white shadow-sm flex items-center justify-center overflow-hidden">
                    <Image
                      src="/torres-logo.png"
                      alt="Torres Technology Center Corp. logo"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
      
                  <div className="flex-1">
      
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          Front-End Developer / IT Technical Support
                        </h3>
      
                        <p className="text-purple-600 font-semibold mt-1">
                          Torres Technology Center Corp. · Internship
                        </p>
                      </div>
      
                      <span className="text-xs font-semibold text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full self-start">
                        Feb 2026 – May 2026 · 4 mos
                      </span>
                    </div>
      
                    <p className="text-sm text-gray-500 mt-2">
                      Calamba, Calabarzon, Philippines · On-site
                    </p>
      
                    <ul className="mt-5 space-y-2 text-sm text-gray-600 leading-relaxed list-disc pl-5">
                      <li>
                        Assisted in the development and maintenance of responsive web
                        applications using HTML, CSS, JavaScript, and modern web
                        development practices.
                      </li>
      
                      <li>
                        Provided technical support to end-users by troubleshooting
                        hardware, software, network, and system-related issues.
                      </li>
      
                      <li>
                        Installed, configured, and maintained computer systems,
                        software applications, and peripheral devices.
                      </li>
      
                      <li>
                        Collaborated with team members to identify and resolve
                        technical problems, ensuring minimal downtime and improved
                        user experience.
                      </li>
      
                      <li>
                        Participated in testing, debugging, and optimizing web
                        applications to enhance performance and usability.
                      </li>
      
                      <li>
                        Documented technical procedures, support solutions, and system
                        configurations for future reference.
                      </li>
      
                      <li>
                        Gained hands-on experience in frontend development, technical
                        troubleshooting, customer support, and IT operations within a
                        professional work environment.
                      </li>
                    </ul>
      
                    {/* OJT Certificate */}
                    <div className="mt-6 p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-4">
                      <div className="w-12 h-12 shrink-0 rounded-lg bg-white border border-gray-200 flex items-center justify-center overflow-hidden">
                        <Image
                          src="/ojt-certificate.png"
                          alt="On-the-Job Training Certificate"
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
      
                      <div>
                        <p className="text-sm font-bold text-gray-900">
                          On-the-Job Training (OJT) Certificate
                        </p>
      
                        <p className="text-xs text-gray-500 mt-1">
                          Certificate of Completion for successfully completing my
                          On-the-Job Training as part of my Bachelor of Science in
                          Information Technology program.
                        </p>
                      </div>
                    </div>
      
                    <div className="flex flex-wrap gap-2 mt-6">
                      {[
                        "Front-End Development",
                        "Technical Support",
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "IT Operations",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-semibold rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
      
                  </div>
                </div>
              </div>
            </div>
      
      
            {/* ================= CROWDGEN PRO ================= */}
            <div className="relative pl-8 md:pl-12 border-l-2 border-transparent">
              <div className="absolute -left-[10px] top-0 w-5 h-5 rounded-full bg-pink-500 border-4 border-white shadow-sm" />
      
              <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300">
      
                <div className="flex flex-col sm:flex-row gap-5">
      
                  {/* Company Logo */}
                  <div className="w-16 h-16 shrink-0 rounded-xl border border-gray-100 bg-white shadow-sm flex items-center justify-center overflow-hidden">
                    <Image
                      src="/crowdgen-logo.png"
                      alt="CrowdGen Pro logo"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
      
                  <div className="flex-1">
      
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          Data Annotator / Data Labelling
                        </h3>
      
                        <p className="text-pink-500 font-semibold mt-1">
                          CrowdGen Pro · Part-time
                        </p>
                      </div>
      
                      <span className="text-xs font-semibold text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full self-start">
                        Sep 2025 – Nov 2025 · 3 mos
                      </span>
                    </div>
      
                    <p className="text-sm text-gray-500 mt-2">
                      Remote
                    </p>
      
                    <ul className="mt-5 space-y-2 text-sm text-gray-600 leading-relaxed list-disc pl-5">
                      <li>
                        Annotated and reviewed datasets for AI model training.
                      </li>
      
                      <li>
                        Ensured accuracy and compliance with project guidelines.
                      </li>
      
                      <li>
                        Performed quality checks and data validation.
                      </li>
      
                      <li>
                        Worked with image, text, and AI-related annotation tasks.
                      </li>
                    </ul>
      
                    <div className="flex flex-wrap gap-2 mt-6">
                      {[
                        "Data Annotation",
                        "Data Labeling",
                        "AI Data",
                        "Quality Control",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-pink-50 text-pink-600 text-xs font-semibold rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
      
                  </div>
                </div>
              </div>
            </div>
      
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="bg-gray-50 py-20 md:py-32 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-3xl -z-10" />

        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
              Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Technical Skills & Tools
            </h2>
            <p className="text-gray-500 text-sm">
              My proficiency in various programming languages, frameworks, and design software tools.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex justify-between items-center mb-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center p-2 border border-gray-100 group-hover:scale-110 group-hover:bg-white transition-all duration-300 relative">
                      <Image 
                        src={skill.icon} 
                        alt={`${skill.name} logo`} 
                        width={28} 
                        height={28}
                        className="object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-200">
                        {skill.name}
                      </p>
                      <span className="text-[10px] uppercase font-semibold tracking-wider text-gray-400">
                        {skill.type === 'design' ? 'UI/UX Design' : 'Development'}
                      </span>
                    </div>
                  </div>
                  <span className="text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                    {skill.level}
                  </span>
                </div>

                <div className="w-full bg-gray-100 rounded-full h-2 p-[2px] overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-purple-500 via-purple-600 to-pink-500 h-full rounded-full w-0 group-hover:w-full transition-all duration-1000 ease-out relative"
                    style={{ width: skill.level }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Featured Projects
          </h2>
      
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            Explore my selected work across web, mobile, and system design.
          </p>
        </div>
      
        {/* Category Tabs */}
        <div className="flex justify-center items-center gap-2 sm:gap-3 mb-12 flex-wrap">
          {['All', 'Web', 'Mobile', 'System'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gray-900 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-purple-100 hover:text-purple-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .filter(
              (project) =>
                activeCategory === 'All' ||
                project.category === activeCategory
            )
            .map((project) => (
              <div
                key={project.title}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-purple-300 hover:shadow-xl transition-all flex flex-col h-full"
              >
                {/* Project Image */}
                <div className="aspect-video relative overflow-hidden bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
      
                {/* Project Content */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-lg font-bold text-gray-900">
                        {project.title}
                      </h3>
      
                      <span className="shrink-0 text-[10px] uppercase font-bold tracking-wider text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
      
                    <p className="text-gray-600 text-sm mb-4 line-clamp-4">
                      {project.description}
                    </p>
      
                    {/* Tags */}
                    <div className="flex gap-2 flex-wrap mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-semibold rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
      
                  {/* Project Link */}
                  <div>
                    {'website' in project ? (
                      <div className="flex gap-4 border-t border-gray-100 pt-4">
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 font-semibold text-sm inline-flex items-center gap-1 hover:underline"
                        >
                          Live Site <ExternalLink size={14} />
                        </a>
      
                        <a
                          href={project.figma}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pink-600 font-semibold text-sm inline-flex items-center gap-1 hover:underline"
                        >
                          Figma <ExternalLink size={14} />
                        </a>
                      </div>
                    ) : (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 font-semibold text-sm inline-flex items-center gap-2 hover:text-purple-700 border-t border-gray-100 pt-4 w-full"
                      >
                        View Project Design <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
      {/* ================= DESIGNS SECTION ================= */}
      <section
        id="designs"
        className="bg-gray-50 py-20 md:py-32"
      >
        <div className="max-w-6xl mx-auto px-6">
      
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
      
            <span className="text-xs font-bold uppercase tracking-widest text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
              Creative Work
            </span>
      
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Designs & Creative Work
            </h2>
      
            <p className="text-gray-500 text-sm md:text-base">
              A collection of creative designs, digital advertising visuals,
              branding, social media content, AI-generated imagery, and product
              visual designs.
            </p>
      
          </div>
      
      
          {/* Category Tabs */}
          <div className="flex justify-center items-center gap-2 sm:gap-3 mb-12 flex-wrap">
      
            {[
              'All',
              'Ad Creatives',
              'CLOTH',
              'Social Media',
              'Logo',
              'Meta',
              'Product Design',
            ].map((category) => (
      
              <button
                key={category}
                onClick={() => setActiveDesignCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeDesignCategory === category
                    ? 'bg-gray-900 text-white shadow-md'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-purple-100 hover:text-purple-600 hover:border-purple-200'
                }`}
              >
                {category}
              </button>
      
            ))}
      
          </div>
      
      
          {/* Designs Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      
            {designs
              .filter(
                (design) =>
                  activeDesignCategory === 'All' ||
                  design.category === activeDesignCategory
              )
              .map((design, index) => (
      
                <div
                  key={`${design.title}-${design.image}-${index}`}
                  className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-purple-300 hover:shadow-2xl transition-all duration-300"
                >
      
                  {/* Design Image */}
                  <div
                    className="aspect-[4/3] relative overflow-hidden bg-gray-100 cursor-pointer"
                    onClick={() => setSelectedDesign(design)}
                  >
      
                    <Image
                      src={design.image}
                      alt={design.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
      
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
      
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-gray-900 px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg">
                        Click to View
                      </div>
      
                    </div>
      
                    {/* Category */}
                    <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
      
                      <span className="inline-block text-[10px] uppercase font-bold tracking-wider text-white bg-purple-600 px-3 py-1 rounded-full">
                        {design.category}
                      </span>
      
                    </div>
      
                  </div>
      
      
                  {/* Design Information */}
                  <div className="p-6">
      
                    <div className="flex items-start justify-between gap-3 mb-3">
      
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                        {design.title}
                      </h3>
      
                    </div>
      
                    <p className="text-sm text-gray-600 leading-relaxed mb-5">
                      {design.description}
                    </p>
      
      
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
      
                      {design.tags.map((tag) => (
      
                        <span
                          key={tag}
                          className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-semibold rounded-full"
                        >
                          {tag}
                        </span>
      
                      ))}
      
                    </div>
      
                  </div>
      
                </div>
      
              ))}
      
          </div>
      
        </div>
      
      
        {/* ================= IMAGE MODAL ================= */}
        {selectedDesign && (
      
          <div
            className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedDesign(null)}
          >
      
            {/* Close Button */}
            <button
              onClick={() => setSelectedDesign(null)}
              className="absolute top-5 right-5 md:top-8 md:right-8 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl flex items-center justify-center transition"
              aria-label="Close image"
            >
              ×
            </button>
      
      
            {/* Full Image Container */}
            <div
              className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
      
              <Image
                src={selectedDesign.image}
                alt={selectedDesign.title}
                fill
                className="object-contain"
                sizes="100vw"
              />
      
            </div>
      
          </div>
      
        )}
      
      </section>
      {/* Certificates Section */}
      <section id="certificates" className="bg-gradient-to-b from-white via-pink-50/30 to-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center tracking-tight">
            Certifications & Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert) => (
              <div
                key={cert.title}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between group cursor-pointer"
                onClick={() => setSelectedCert(cert)}
              >
                {/* Certificate BADGE Display */}
                <div className="aspect-[4/3] w-full relative bg-gray-50 flex items-center justify-center border-b border-gray-100 p-8">
                  <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-500">
                    <Image
                      src={cert.badge}
                      alt={`${cert.title} badge`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute inset-0 bg-purple-950/10 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <span className="bg-white/90 text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full shadow flex items-center gap-1">
                      View Certificate <ExternalLink size={12} />
                    </span>
                  </div>
                </div>

                {/* Info Text block */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-purple-600 bg-purple-50 px-2 py-0.5 rounded">
                        {cert.issuer}
                      </span>
                      <span className="text-[11px] text-gray-400 font-medium">{cert.issueDate}</span>
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-purple-600 transition-colors">
                      {cert.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-50 text-xs font-semibold text-gray-500 group-hover:text-purple-600 transition-colors">
                    <span>Enlarge Document</span>
                    <Award size={14} className="text-gray-400 group-hover:text-purple-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal View */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden flex flex-col shadow-2xl transition-all transform max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{selectedCert.title}</h3>
                <p className="text-xs text-gray-500 mt-0.5">Issued by {selectedCert.issuer} • {selectedCert.issueDate}</p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 bg-gray-50 flex items-center justify-center min-h-[300px]">
              <div className="relative w-full h-full max-h-[60vh] aspect-[4/3]">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="border-t border-gray-100 p-4 flex gap-3 justify-end bg-white">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-5 py-2 text-sm bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                Close
              </button>
              <a
                href={selectedCert.image}
                download
                className="px-5 py-2 text-sm bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors flex items-center gap-1.5"
              >
                <Download size={16} />
                Download
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Contact Banner */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Let&apos;s Create Something Amazing
          </h2>
          <p className="text-lg text-white/90 max-w-xl mx-auto">
            I&apos;m always open to discussing web development initiatives, UI/UX design opportunities, or collaborative projects.
          </p>
          <a 
            href="mailto:aicellerosales08@gmail.com?subject=Project%20Inquiry%20-%20UI/UX%20%26%20Frontend&body=Hi%20Aicelle,%0D%0A%0D%0AI%20saw%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project%20with%20you."
            className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold hover:bg-gray-50 transition-colors inline-flex items-center gap-2 shadow-lg"
          >
            Get In Touch
            <Mail size={18} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="font-bold text-lg mb-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 inline-block">
                Aicelle Rosales
              </p>
              <p className="text-gray-400 text-sm">Frontend Developer & UI/UX Designer</p>
            </div>
            <div>
              <p className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-3">Links</p>
              <ul className="space-y-2 text-sm text-gray-400">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      onClick={(e) => handleScrollTo(e, link.href)}
                      className="hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-3">Connect</p>
              {/* UPDATED: Added TikTok icon integration wrapper inside footer as well */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-purple-600 transition-all flex items-center justify-center" 
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-xs space-y-1">
            <p>© {new Date().getFullYear()} Aicelle Rosales. All rights reserved.</p>
            <p>Designed with ❤️ in the Philippines</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
