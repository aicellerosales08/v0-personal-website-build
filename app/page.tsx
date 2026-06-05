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
    { name: 'HTML', level: '95%',  image: '/html-5.png' },
    { name: 'CSS', level: '90%', image: '/CSS-3.png'},
    { name: 'JavaScript', level: '55%' },
    { name: 'Python', level: '75%' },
    { name: 'C++', level: '50%' },
    { name: 'PHP', level: '65%' },
    { name: 'Figma', level: '100%' },
    { name: 'Adobe XD', level: '85%' },
    { name: 'Canva', level: '100%' },
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
@@ -396,261 +396,276 @@
                style={{ animationDelay: `${i * 100}ms` }}
                className="bg-white p-6 rounded-xl border border-gray-100 hover:border-purple-300 hover:shadow-lg transition-all animate-slide-in-up"
              >
                <div className="flex justify-between items-center mb-3">
                  <p className="font-semibold text-gray-900">{skill.name}</p>
                  <span className="text-sm font-bold text-purple-600">{skill.level}</span>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
              
                  <p className="font-semibold text-gray-900">
                    {skill.name}
                  </p>
                </div>
              
                <span className="text-sm font-bold text-purple-600">
                  {skill.level}
                </span>
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
                {project.title === 'Onlook - Thesis Project' ? (
                  <div className="flex gap-2 mt-4">
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 font-medium text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Website
                    </a>

                    <a
                      href={project.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 font-medium text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Figma
                    </a>
                  </div>
                ) : (
                  <div className="text-purple-600 font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    View Project <ExternalLink size={16} />
                  </div>
                )}
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
                  <div className="relative w-24 h-24 transform group-hover:scale-110 transition-transform">
                    <Image
                      src={cert.badge}
                      alt={cert.title}
                      fill
                      className="object-contain"
                    />
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
            <p>© 2026 Aicelle Rosales. All rights reserved.</p>
            <p>Designed with ♥ in the Philippines</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
