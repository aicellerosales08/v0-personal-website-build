'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  Menu,
  X,
  ChevronDown,
  ExternalLink,
  Mail,
  Music
} from 'lucide-react'

import {
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react'

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
      description: 'A web-based collaborative system designed to monitor, report, and assist missing and cognitively impaired individuals. Features include case management, incident mapping, real-time reporting, and analytics.',
      tags: ['Figma', 'UI/UX', 'Design System'],
      image: '/onlook.png',
      website: 'https://onlook-livid.vercel.app/',
      figma: 'https://www.figma.com/design/1j21q7Ymp2J8F1kNFUiET7/Onlook',
    },
    {
      title: 'Bank System',
      description: 'A modern banking application system featuring secure account management and transactions.',
      tags: ['System Design', 'Finance', 'UI/UX'],
      image: '/bank-system.png',
      link: 'https://www.figma.com/design/8QRjN35QVqnhSKuUdcRgpn/BANK-SYSTEM',
    },
    {
      title: 'Converter System',
      description: 'A multi-purpose converter application with real-time conversion features.',
      tags: ['System Design', 'Utility', 'Mobile'],
      image: '/converter.jpg',
      link: 'https://www.figma.com/design/HTviG6YNluJ5W8Uc1N5QxL/CONVERTER-SYSTEM',
    },
    {
      title: 'Freshly Dropped',
      description: 'A food delivery and marketplace platform with real-time tracking.',
      tags: ['E-Commerce', 'Mobile', 'Food Delivery'],
      image: '/freshly-dropped.png',
      link: 'https://www.figma.com/design/RJqXQCecjVqomkvtOgvUfx/Freshly-Dropped',
    },
    {
      title: 'Flutter Mobile App',
      description: 'A cross-platform mobile app focusing on usability and performance.',
      tags: ['Flutter', 'Mobile', 'UI Design'],
      image: '/fluttermobile.png',
      link: 'https://www.figma.com/design/PkV6mrlKLDxl1Ny3HPUZW1/Flutter-mobile-app',
    },
    {
      title: 'Aura Co. Website',
      description: 'A professional corporate website with modern UI/UX design.',
      tags: ['Web Design', 'UI/UX', 'Figma'],
      image: '/auroandco.png',
      link: 'https://www.figma.com/design/58HwSxAIXk6U9hnIUc4NFc/Aura---Co.-Website',
    },
    {
      title: 'LifeHaven iOS App',
      description: 'A health and wellness mobile application for tracking and lifestyle improvement.',
      tags: ['iOS', 'Mobile', 'Health App'],
      image: '/lifehaven.png',
      link: 'https://www.figma.com/design/lcpe4JHUmionm4yfgHjnZ0/LIFEHAVEN-IOS-APP',
    },
    {
      title: 'Pizza Mobile App',
      description: 'A food ordering mobile app with smooth UI and order tracking.',
      tags: ['Mobile App', 'E-Commerce', 'UI/UX'],
      image: '/pizza.png',
      link: 'https://www.figma.com/design/32TNLdaicalexwMrWKmWra/PIZZA-MOBILE-APP',
    },
    {
      title: 'Digi Academia Website',
      description: 'An educational platform for digital learning and course management.',
      tags: ['Web Design', 'Education', 'UI/UX'],
      image: '/digiacademia.png',
      link: 'https://www.figma.com/design/9uQZnejw6o8yXbFgYxBLyU/DIGI-ACADEMIA-WEBSITE',
    },
    {
      title: 'Skincare Mobile App',
      description: 'A beauty app with personalized skincare recommendations.',
      tags: ['Mobile', 'Beauty', 'UI Design'],
      image: '/skincare.png',
      link: 'https://www.figma.com/design/HnbGL83GBrmEbUxXdlDTzY/SKINCARE-MOBILE-APP',
    },
    {
      title: 'FilmTrack Website',
      description: 'A movie tracking web app for reviews, watchlists, and ratings.',
      tags: ['PHP', 'Web App', 'UI/UX'],
      image: '/filmtrack.png',
      link: 'https://www.figma.com/design/bLes37eN9u3aa13n4X2n4b/FILMTRACK-WEBSITE-PHP',
    },
    {
      title: 'Travel Mobile App',
      description: 'A travel planning app with itinerary and booking features.',
      tags: ['Mobile', 'Travel', 'UI Design'],
      image: '/travel.png',
      link: 'https://www.figma.com/design/pPCwRmSdrq87AmdbtKWzv2/TRAVEL-MOBILE-APP',
    },
    {
      title: 'Saint Matthew System',
      description: 'A school management system for academic and admin tasks.',
      tags: ['System Design', 'Education', 'UI/UX'],
      image: '/saintmatthew.png',
      link: 'https://www.figma.com/design/XmyRcz7gL3ekjjWBP5Qhh1/SAINT-MATTHEW-SYSTEM',
    },
  ]

  const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/seikii08/', icon: 'facebook' },
    { name: 'Instagram', url: 'https://www.instagram.com/aicelleeeeee_/', icon: 'instagram' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aicelle-r-66298537b/', icon: 'linkedin' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@aiiiiiiqt?lang=en', icon: 'tiktok' },
  ]

  const icons = {
    facebook: Facebook,
    instagram: Instagram,
    linkedin: Linkedin,
    tiktok: Music,
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* SOCIAL ICONS FIXED */}
      <div className="flex gap-4">
        {socialLinks.map((social) => {
          const Icon = icons[social.icon]
          if (!Icon) return null

          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-full hover:bg-purple-100 transition"
            >
              <Icon size={20} />
            </a>
          )
        })}
      </div>

    </div>
  )
}
