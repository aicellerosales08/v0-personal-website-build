'use client'

import { useState, useEffect, useRef } from 'react'
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
  Award,
  Heart,
  Sparkles,
  Star,
  Sparkle,
  Github,
  Check,
  Quote,
  Briefcase,
  GitBranch,
  Triangle,
  Bot,
  Gem,
  Search,
  Database,
  Wind,
  Globe,
  MonitorSmartphone,
  Wrench,
  Layers,
  FileText,
  Zap,
  Bug,
  LayoutGrid,
  TrendingUp,
  Layout,
  Users,
  PenTool,
  Workflow,
  Component,
  Smartphone,
  Monitor,
  ThumbsUp,
  Image as ImageIcon,
  Palette,
  Paintbrush,
  LayoutTemplate,
  Crop,
  Share2,
  Cpu,
  Wand2,
  BookOpen,
  PenLine,
  MessageSquare,
  Plug,
  Accessibility,
  Terminal,
  Shield,
  Network,
  Package,
  Lightbulb,
  Code2,
  Folder,
  FolderOpen,
  ArrowLeft,
  GraduationCap,
  MessageCircle,
  Send
} from 'lucide-react'

// ================= SCROLL REVEAL HOOK =================
// Uses the existing keyframe utilities defined in globals.css
// (animate-fade-in, animate-slide-in-up/left/right) and only
// applies them once an element scrolls into view.
type RevealDirection = 'up' | 'left' | 'right' | 'fade'

function useScrollReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

const directionClass: Record<RevealDirection, string> = {
  up: 'animate-slide-in-up',
  left: 'animate-slide-in-left',
  right: 'animate-slide-in-right',
  fade: 'animate-fade-in',
}

function Reveal({
  children,
  className = '',
  as: Tag = 'div',
  direction = 'up',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'section'
  direction?: RevealDirection
  delay?: number
}) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()
  const Comp = Tag as any
  return (
    <Comp
      ref={ref}
      style={isVisible ? { animationDelay: `${delay}ms` } : undefined}
      className={`${isVisible ? directionClass[direction] : 'opacity-0'} ${className}`}
    >
      {children}
    </Comp>
  )
}

function CountUp({ end, suffix = '', duration = 1200 }: { end: number; suffix?: string; duration?: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLSpanElement>(0.5)
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    let start: number | null = null
    let frameId: number

    const step = (timestamp: number) => {
      if (start === null) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * end))
      if (progress < 1) frameId = requestAnimationFrame(step)
    }

    frameId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frameId)
  }, [isVisible, end, duration])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

const categoryIcons: Record<string, any> = {
  'Development': Code2,
  'Web Design & Development': Globe,
  'UI/UX Design': Layout,
  'Graphic & Visual Design': Palette,
  'AI Tools & Workflows': Bot,
  'Technical & IT': Shield,
  'Tools & Workflow': Wrench,
}

function SkillGroupBlock({
  group,
  groupIndex,
}: {
  group: { category: string; accent: string; skills: Array<{ name: string; level: string; icon?: string; lucideIcon?: any }> }
  groupIndex: number
}) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>(0.15)
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>(0.5)
  const isPink = group.accent === 'pink'
  const CategoryIcon = categoryIcons[group.category] ?? Sparkle

  return (
    <div className="relative">
      {/* Ambient floating sparkle per category */}
      <Sparkle
        size={14}
        fill="currentColor"
        className={`hidden lg:block absolute -top-4 right-4 animate-float ${isPink ? 'text-pink-300' : 'text-purple-300'}`}
        style={{ animationDelay: `${groupIndex * 0.4}s` }}
      />

      <div
        ref={headerRef}
        className={`flex items-center gap-3 mb-6 ${headerVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
      >
        <div
          className={`w-9 h-9 shrink-0 rounded-xl flex items-center justify-center transition-transform duration-300 hover:rotate-12 hover:scale-110 ${
            isPink ? 'bg-pink-50 text-pink-500' : 'bg-purple-50 text-purple-600'
          }`}
        >
          <CategoryIcon size={18} />
        </div>
        <h3 className="text-lg font-bold text-gray-800">{group.category}</h3>
        <span
          className={`w-1.5 h-1.5 rounded-full animate-pulse ${isPink ? 'bg-pink-500' : 'bg-purple-500'}`}
        />
        <span className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent" />
      </div>

      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {group.skills.map((skill, i) => {
          const LucideIcon = skill.lucideIcon
          const levelNum = parseInt(skill.level, 10) || 0
          const isExpert = levelNum >= 90

          return (
            <div
              key={skill.name}
              style={isVisible ? { animationDelay: `${i * 90}ms` } : undefined}
              className={`group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-purple-200 transition-all duration-300 relative overflow-hidden ${
                isVisible ? 'animate-slide-in-up' : 'opacity-0'
              }`}
            >
              {/* Hover glow wash */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Diagonal shine sweep on hover */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -inset-y-4 -left-1/2 w-1/3 bg-white/40 rotate-12 -translate-x-[200%] group-hover:translate-x-[500%] transition-transform duration-[1200ms] ease-out" />
              </div>

              {/* Expert sparkle badge */}
              {isExpert && (
                <Sparkle
                  size={14}
                  fill="currentColor"
                  className={`absolute top-3 right-3 animate-pulse ${isPink ? 'text-pink-400' : 'text-purple-400'}`}
                />
              )}

              <div className="flex justify-between items-center mb-4 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center p-2 border border-gray-100 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-white transition-all duration-300 relative">
                    {LucideIcon ? (
                      <LucideIcon size={20} className={isPink ? 'text-pink-500' : 'text-purple-600'} />
                    ) : (
                      <Image
                        src={skill.icon as string}
                        alt={`${skill.name} logo`}
                        width={28}
                        height={28}
                        className="object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    )}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-200">
                      {skill.name}
                    </p>
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-gray-400">
                      {group.category}
                    </span>
                  </div>
                </div>
                <span className="text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  <CountUp end={levelNum} suffix="%" duration={1000} />
                </span>
              </div>

              <div className="w-full bg-gray-100 rounded-full h-2 p-[2px] overflow-hidden">
                <div
                  className="bg-gradient-to-r from-purple-500 via-purple-600 to-pink-500 h-full rounded-full transition-all duration-1000 ease-out relative"
                  style={{ width: isVisible ? skill.level : '0%', transitionDelay: `${i * 90 + 200}ms` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ================= CHAT WIDGET ================= //
// A friendly floating chatbot that answers common questions about Aicelle
// using simple keyword matching — no external API required.
type ChatAction = { label: string; href: string }
type ChatMessage = { id: number; sender: 'bot' | 'user'; text: string; action?: ChatAction }

const chatKnowledgeBase: Array<{ keywords: string[]; reply: string; action?: ChatAction }> = [
  {
    keywords: ['hello', 'hi', 'hey', 'kumusta', 'kamusta'],
    reply: "Hi there! 👋 I'm Aicelle's little assistant. Ask me about her skills, experience, projects, or how to get in touch!",
  },
  {
    keywords: ['skill', 'stack', 'tech', 'technology', 'language', 'tool'],
    reply: "Aicelle works across Development (HTML, CSS, JS, React, Next.js), UI/UX Design (Figma, Adobe XD), Graphic Design (Canva, Photoshop, Illustrator), and she's also big on AI-assisted workflows (ChatGPT, Claude, Gemini). Check out the 'Skills & Tools' section above for the full breakdown! ✨",
    action: { label: 'View Skills & Tools', href: '#skills' },
  },
  {
    keywords: ['experience', 'work', 'job', 'career', 'company'],
    reply: "She's currently a Web Designer & Developer at Malama Co., and has previously worked with Outlier, Torres Technology Center Corp., and CrowdGen Pro — with 4+ roles across web dev, UI/UX, and AI data annotation. Scroll up to the Experience timeline for the full story! 💼",
    action: { label: 'View Experience', href: '#experience' },
  },
  {
    keywords: ['project', 'portfolio', 'work sample', 'built', 'made'],
    reply: "Aicelle has 20+ projects done — web apps, mobile app designs, and system designs! Some highlights include Onlook (her thesis project), a Bank System, and a Travel Mobile App. Check the 'Featured Projects' section for live sites and Figma files! 🚀",
    action: { label: 'View Projects', href: '#projects' },
  },
  {
    keywords: ['design', 'creative', 'graphic', 'ad', 'branding', 'logo'],
    reply: "She's also done tons of creative work — ad creatives, social media designs, logos, and product visuals. Head to the 'Designs & Creative Work' section and click a folder to browse! 🎨",
    action: { label: 'Browse Designs', href: '#designs' },
  },
  {
    keywords: ['certificate', 'certification', 'cert', 'education', 'study', 'school'],
    reply: "Aicelle holds certifications in Introduction to Cybersecurity, Operating Systems Basics, and Linux Essentials (Cisco Networking Academy), plus an IT Specialist – Cybersecurity certification from Pearson. Check the Certifications section! 🎓",
    action: { label: 'View Certifications', href: '#certificates' },
  },
  {
    keywords: ['contact', 'email', 'hire', 'reach', 'connect', 'touch', 'collab', 'collaborate'],
    reply: "You can reach her at aicellerosales08@gmail.com, or hit the 'Get In Touch' button below! She's always open to web dev, UI/UX, and collaborative projects. 💌",
    action: { label: 'Get In Touch', href: 'mailto:aicellerosales08@gmail.com?subject=Project%20Inquiry%20-%20UI/UX%20%26%20Frontend&body=Hi%20Aicelle,%0D%0A%0D%0AI%20saw%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project%20with%20you.' },
  },
  {
    keywords: ['social', 'instagram', 'tiktok', 'facebook', 'linkedin', 'github', 'discord'],
    reply: "She's on Instagram, Facebook, TikTok, LinkedIn, GitHub, and Discord — you'll find all the links in the hero section up top or the footer below! 🔗",
    action: { label: 'View Socials', href: '#home' },
  },
  {
    keywords: ['location', 'based', 'where', 'live', 'philippines', 'country'],
    reply: "Aicelle is based in the Philippines and open to remote work! 🇵🇭",
  },
  {
    keywords: ['who', 'about', 'aicelle', 'introduce'],
    reply: "Aicelle Rosales is a Web Designer, Frontend Developer, and UI/UX Designer who loves turning ideas into clean, functional, and delightful digital experiences! Check out the About section for more. 💜",
    action: { label: 'View About', href: '#about' },
  },
  {
    keywords: ['cv', 'resume', 'download'],
    reply: "You can download her CV right from the hero section — look for the 'Download CV' button near the top of the page! 📄",
    action: { label: 'Download CV', href: '/Aicelle_R_Resume.pdf'},
  },
  {
    keywords: ['thank', 'thanks', 'salamat'],
    reply: "You're so welcome! 🌸 Feel free to ask me anything else, or reach out to Aicelle directly!",
  },
]

const chatFallbackReplies = [
  "Hmm, I'm not totally sure about that one — but you can ask about her skills, experience, projects, or how to contact her! 🌷",
  "Good question! I might not have the exact answer, but Aicelle would love to chat directly — try the 'Get In Touch' button! 💕",
]

function getBotReply(userText: string): { text: string; action?: ChatAction } {
  const lower = userText.toLowerCase()
  for (const entry of chatKnowledgeBase) {
    if (entry.keywords.some((kw) => lower.includes(kw))) {
      return { text: entry.reply, action: entry.action }
    }
  }
  return { text: chatFallbackReplies[Math.floor(Math.random() * chatFallbackReplies.length)] }
}

const chatQuickReplies = [
  'What are your skills?',
  'Tell me about your experience',
  'How can I contact you?',
  'Show me your projects',
]

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false)
  const [showTeaser, setShowTeaser] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 0,
      sender: 'bot',
      text: "Hiii! 💕 I'm Aicelle's assistant. Ask me anything about her skills, experience, or projects!",
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const t = setTimeout(() => setShowTeaser(true), 2500)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const sendMessage = (text: string) => {
    const trimmed = text.trim()
    if (!trimmed) return

    setMessages((prev) => [...prev, { id: prev.length, sender: 'user', text: trimmed }])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const reply = getBotReply(trimmed)
      setMessages((prev) => [...prev, { id: prev.length, sender: 'bot', text: reply.text, action: reply.action }])
      setIsTyping(false)
    }, 700 + Math.random() * 500)
  }

  const handleActionClick = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.getElementById(href.slice(1))
      el?.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    } else if (href.startsWith('mailto:')) {
      window.location.href = href
    } else {
      window.open(href, '_blank', 'noopener,noreferrer')
    }
  }

  const handleToggle = () => {
    setIsOpen((prev) => !prev)
    setHasOpenedOnce(true)
    setShowTeaser(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
      {/* Chat window */}
      {isOpen && (
        <div className="w-[92vw] max-w-sm h-[70vh] max-h-[520px] bg-white rounded-3xl shadow-2xl border border-purple-100 flex flex-col overflow-hidden animate-slide-in-up">
          {/* Header */}
          <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-4 flex items-center justify-between overflow-hidden">
            <Sparkle size={14} fill="currentColor" className="absolute top-2 right-16 text-white/30 animate-float" />
            <Sparkle size={10} fill="currentColor" className="absolute bottom-2 right-24 text-white/20 animate-float" style={{ animationDelay: '1s' }} />

            <div className="flex items-center gap-3 relative">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/40">
                <Bot size={20} className="text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight">Aicelle's Assistant</p>
                <p className="text-white/80 text-[11px] flex items-center gap-1">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
                  </span>
                  Online
                </p>
              </div>
            </div>
            <button
              onClick={handleToggle}
              className="text-white/80 hover:text-white hover:rotate-90 transition-all duration-300 p-1"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gradient-to-b from-purple-50/40 to-pink-50/20">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col animate-fade-in ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-br-md'
                      : 'bg-white text-gray-700 border border-gray-100 rounded-bl-md'
                  }`}
                >
                  {msg.text}
                </div>

                {msg.action && (
                  <button
                    onClick={() => handleActionClick(msg.action!.href)}
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 px-3.5 py-2 rounded-full shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 animate-slide-in-up"
                  >
                    {msg.action.label}
                    <ExternalLink size={12} />
                  </button>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm inline-flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies */}
          {messages.length <= 2 && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {chatQuickReplies.map((q, i) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  style={{ animationDelay: `${i * 80}ms` }}
                  className="text-[11px] font-semibold text-purple-600 bg-purple-50 hover:bg-purple-100 hover:scale-105 active:scale-95 px-3 py-1.5 rounded-full transition-all duration-200 animate-fade-in"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              sendMessage(input)
            }}
            className="border-t border-gray-100 p-3 flex items-center gap-2 bg-white"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something about Aicelle..."
              className="flex-1 text-sm px-4 py-2.5 rounded-full bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all duration-200"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="w-10 h-10 shrink-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center hover:scale-110 active:scale-90 disabled:opacity-40 disabled:hover:scale-100 transition-all duration-200"
              aria-label="Send"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      {/* Teaser bubble */}
      {showTeaser && !isOpen && !hasOpenedOnce && (
        <div className="mr-1 mb-1 bg-white rounded-2xl rounded-br-sm shadow-lg border border-purple-100 px-4 py-2.5 max-w-[220px] animate-slide-in-up relative">
          <button
            onClick={() => setShowTeaser(false)}
            className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
            aria-label="Dismiss"
          >
            <X size={10} className="text-gray-600" />
          </button>
          <p className="text-xs text-gray-700 font-medium">
            💬 Got questions about me? Ask my assistant!
          </p>
        </div>
      )}

      {/* Floating toggle button */}
      <button
        onClick={handleToggle}
        className="relative w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 shadow-xl flex items-center justify-center text-white hover:scale-110 active:scale-90 transition-all duration-300 group"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {/* Glow pulse ring */}
        {!isOpen && <span className="absolute inset-0 rounded-full bg-purple-400/50 blur-md animate-glow" />}

        <span className="relative">
          {isOpen ? (
            <X size={24} className="animate-fade-in" />
          ) : (
            <MessageCircle size={24} className="group-hover:rotate-12 transition-transform duration-300" />
          )}
        </span>

        {/* Notification dot */}
        {!isOpen && !hasOpenedOnce && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-300 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-pink-500 items-center justify-center text-[9px] font-bold">1</span>
          </span>
        )}
      </button>
    </div>
  )
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedCert, setSelectedCert] = useState<typeof certificates[number] | null>(null)
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeDesignCategory, setActiveDesignCategory] = useState<string | null>(null)
  const [heroLoaded, setHeroLoaded] = useState(false)
  const [quoteIndex, setQuoteIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % aboutQuotes.length)
    }, 2600)
    return () => clearInterval(interval)
  }, [])
  const [copiedDiscord, setCopiedDiscord] = useState(false)

  const DISCORD_USERNAME = 'prettyyyyyyyyy_'

  const handleCopyDiscord = async () => {
    try {
      await navigator.clipboard.writeText(DISCORD_USERNAME)
      setCopiedDiscord(true)
      setTimeout(() => setCopiedDiscord(false), 2000)
    } catch {
      // Clipboard not available — fail silently
    }
  }

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 50)
    return () => clearTimeout(t)
  }, [])

  
  // ================= ACTIVE SECTION (scroll-spy) =================
  const [activeSection, setActiveSection] = useState('home')
  const [pressedLink, setPressedLink] = useState<string | null>(null)

  useEffect(() => {
    const sectionIds = ['home', 'about', 'experience', 'skills', 'projects', 'designs', 'certificates']
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

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

  // Full breakdown based on the "Skills & Tools" progress chart on your GitHub profile.
  // Entries with an `icon` string use a local /public logo image (same as before).
  // Entries with a `lucideIcon` use a lucide-react icon as a placeholder —
  // swap these for real logo PNGs in /public anytime by adding an `icon` path instead.
  const skillGroups = [
    {
      category: 'Development',
      accent: 'purple',
      skills: [
        { name: 'HTML', level: '95%', icon: '/html-5.png' },
        { name: 'CSS', level: '90%', icon: '/css-3.png' },
        { name: 'JavaScript', level: '65%', icon: '/java-script.png' },
        { name: 'Python', level: '75%', icon: '/python.png' },
        { name: 'PHP', level: '70%', icon: '/php.png' },
        { name: 'C++', level: '50%', icon: '/c-.png' },
        { name: 'SQL', level: '70%', lucideIcon: Database },
        { name: 'MySQL', level: '70%', lucideIcon: Database },
        { name: 'React', level: '60%', lucideIcon: Component },
        { name: 'Next.js', level: '60%', lucideIcon: Layers },
        { name: 'Tailwind CSS', level: '75%', lucideIcon: Wind },
        { name: 'Git', level: '70%', lucideIcon: GitBranch },
        { name: 'GitHub', level: '75%', lucideIcon: Github },
        { name: 'Vercel', level: '75%', lucideIcon: Triangle },
      ],
    },
    {
      category: 'Web Design & Development',
      accent: 'pink',
      skills: [
        { name: 'Wix', level: '90%', lucideIcon: Globe },
        { name: 'Wix Classic Editor', level: '90%', lucideIcon: Globe },
        { name: 'Responsive Web Design', level: '95%', lucideIcon: MonitorSmartphone },
        { name: 'Website Development', level: '90%', lucideIcon: Zap },
        { name: 'Website Maintenance', level: '85%', lucideIcon: Wrench },
        { name: 'CMS', level: '80%', lucideIcon: Layers },
        { name: 'Website Content Management', level: '85%', lucideIcon: FileText },
        { name: 'Website Optimization', level: '75%', lucideIcon: Zap },
        { name: 'Website Troubleshooting', level: '85%', lucideIcon: Bug },
        { name: 'Page Management', level: '90%', lucideIcon: LayoutGrid },
        { name: 'SEO Fundamentals', level: '65%', lucideIcon: TrendingUp },
        { name: 'Google Search Console', level: '60%', lucideIcon: Search },
      ],
    },
    {
      category: 'UI/UX Design',
      accent: 'purple',
      skills: [
        { name: 'Figma', level: '100%', icon: '/figma.png' },
        { name: 'Adobe XD', level: '85%', icon: '/xd.png' },
        { name: 'UI Design', level: '95%', lucideIcon: Layout },
        { name: 'UX Design', level: '90%', lucideIcon: Users },
        { name: 'Wireframing', level: '95%', lucideIcon: PenTool },
        { name: 'Prototyping', level: '90%', lucideIcon: Workflow },
        { name: 'User Flow', level: '85%', lucideIcon: Workflow },
        { name: 'Design Systems', level: '80%', lucideIcon: Component },
        { name: 'Responsive Design', level: '95%', lucideIcon: MonitorSmartphone },
        { name: 'Mobile App Design', level: '85%', lucideIcon: Smartphone },
        { name: 'Web App Design', level: '90%', lucideIcon: Monitor },
        { name: 'Usability', level: '85%', lucideIcon: ThumbsUp },
      ],
    },
    {
      category: 'Graphic & Visual Design',
      accent: 'pink',
      skills: [
        { name: 'Canva', level: '100%', icon: '/palette.png' },
        { name: 'Adobe Photoshop', level: '80%', lucideIcon: ImageIcon },
        { name: 'Adobe Illustrator', level: '80%', lucideIcon: PenTool },
        { name: 'Graphic Design', level: '90%', lucideIcon: Paintbrush },
        { name: 'Layout Design', level: '90%', lucideIcon: LayoutTemplate },
        { name: 'Image Editing', level: '90%', lucideIcon: Crop },
        { name: 'Branding & Visual Design', level: '80%', lucideIcon: Palette },
        { name: 'Social Media Design', level: '85%', lucideIcon: Share2 },
      ],
    },
    {
      category: 'AI Tools & Workflows',
      accent: 'purple',
      skills: [
        { name: 'ChatGPT', level: '95%', lucideIcon: Sparkles },
        { name: 'Claude', level: '90%', lucideIcon: Bot },
        { name: 'Gemini', level: '90%', lucideIcon: Gem },
        { name: 'Perplexity', level: '85%', lucideIcon: Search },
        { name: 'AI-Assisted Development', level: '85%', lucideIcon: Cpu },
        { name: 'AI-Assisted Design', level: '90%', lucideIcon: Wand2 },
        { name: 'AI-Powered Research', level: '85%', lucideIcon: BookOpen },
        { name: 'AI Content Generation', level: '85%', lucideIcon: PenLine },
        { name: 'AI Image Generation', level: '80%', lucideIcon: ImageIcon },
        { name: 'Prompt Engineering', level: '80%', lucideIcon: MessageSquare },
      ],
    },
    {
      category: 'Technical & IT',
      accent: 'pink',
      skills: [
        { name: 'Debugging', level: '80%', lucideIcon: Bug },
        { name: 'Technical Troubleshooting', level: '85%', lucideIcon: Wrench },
        { name: 'Database Management', level: '70%', lucideIcon: Database },
        { name: 'API Fundamentals', level: '60%', lucideIcon: Plug },
        { name: 'Web Accessibility', level: '65%', lucideIcon: Accessibility },
        { name: 'Linux', level: '65%', lucideIcon: Terminal },
        { name: 'Operating Systems', level: '75%', lucideIcon: Monitor },
        { name: 'Cybersecurity Fundamentals', level: '70%', lucideIcon: Shield },
        { name: 'Computer Networking Fundamentals', level: '60%', lucideIcon: Network },
      ],
    },
    {
      category: 'Tools & Workflow',
      accent: 'purple',
      skills: [
        { name: 'Visual Studio Code', level: '90%', lucideIcon: Terminal },
        { name: 'Git & Version Control', level: '70%', lucideIcon: GitBranch },
        { name: 'GitHub', level: '75%', lucideIcon: Github },
        { name: 'Figma-to-Code Workflow', level: '90%', lucideIcon: Workflow },
        { name: 'Vercel', level: '75%', lucideIcon: Triangle },
        { name: 'pnpm', level: '70%', lucideIcon: Package },
        { name: 'Project Collaboration', level: '85%', lucideIcon: Users },
        { name: 'Problem Solving', level: '90%', lucideIcon: Lightbulb },
        { name: 'Documentation', level: '80%', lucideIcon: FileText },
      ],
    },
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
    image: '/AD1.png',
    category: 'Ad Creatives',
  },
  {
    image: '/AD2.png',
    category: 'Ad Creatives',
  },
  {
    image: '/AD3.png',
    category: 'Ad Creatives',
  },
  {
    image: '/AD4.png',
    category: 'Ad Creatives',
  },
  {
    image: '/AD5.png',
    category: 'Ad Creatives',
  },
  {
    image: '/AD6.png',
    category: 'Ad Creatives',
  },



  
  {
    image: '/Cloth1.png',
    category: 'CLOTH',
  },
    {
    image: '/Cloth2.png',
    category: 'CLOTH',
  },
    {
    image: '/Cloth3.png',
    category: 'CLOTH',
  },
    {
    image: '/Cloth4.png',
    category: 'CLOTH',
  },
    {
    image: '/Cloth5.png',
    category: 'CLOTH',
  },
    {
    image: '/Cloth9.png',
    category: 'CLOTH',
  },
    {
    image: '/Cloth10.png',
    category: 'CLOTH',
  },
    {
    image: '/Cloth11.png',
    category: 'CLOTH',
  },
    {
    image: '/Cloth12.png',
    category: 'CLOTH',
  },
    {
    image: '/Cloth13.png',
    category: 'CLOTH',
  },







  
  {
    image: '/design-social-media.png',
    category: 'Social Media',
  },




  
  {
    image: '/design-logo.png',
    category: 'Logo',
  },



  
  {
    image: '/Meta1.png',
    category: 'Meta',
  },
   {
    image: '/Meta2.png',
    category: 'Meta',
  },
   {
    image: '/Meta3.png',
    category: 'Meta',
  },
   {
    image: '/Meta4.png',
    category: 'Meta',
  },







  
  {
    image: '/Product2.png',
    category: 'Product Design',
  },
    {
    image: '/Product3.png',
    category: 'Product Design',
  },
    {
    image: '/Product4.png',
    category: 'Product Design',
  },
    {
    image: '/Product5.png',
    category: 'Product Design',
  },
    {
    image: '/Product6.png',
    category: 'Product Design',
  },
    {
    image: '/Product7.png',
    category: 'Product Design',
  },
    {
    image: '/Product8.png',
    category: 'Product Design',
  },
    {
    image: '/Product9.png',
    category: 'Product Design',
  },
    {
    image: '/Product10.png',
    category: 'Product Design',
  },
    {
    image: '/Product11.png',
    category: 'Product Design',
  },
    {
    image: '/Product12.png',
    category: 'Product Design',
  },
    {
    image: '/Product13.png',
    category: 'Product Design',
  },
    {
    image: '/Product14.png',
    category: 'Product Design',
  },
]
  const designCategoryList = designs
    .map((d) => d.category)
    .filter((cat, idx, arr) => arr.indexOf(cat) === idx)
  const designCategoryBlurbs: Record<string, string> = {
    'Ad Creatives': 'Eye-catching ad visuals designed to grab attention and drive engagement across digital campaigns.',
    'CLOTH': 'Fashion and apparel visual concepts blending clean layouts with a strong sense of style.',
    'Social Media': 'Scroll-stopping social content crafted for feeds, stories, and everyday brand presence.',
    'Logo': 'Brand identity marks built to be simple, memorable, and versatile across platforms.',
    'Meta': 'Ad and content designs tailored for Meta platforms like Facebook and Instagram.',
    'Product Design': 'Clean, detail-oriented visuals showcasing products in their best light.',
  }
  const projects = [
    {
      title: 'Onlook - Thesis Project',
      description: 'A web-based collaborative system designed to monitor, report, and assist missing and cognitively impaired individuals. Features include case management, incident mapping, real-time reporting, and data-driven analytics to support faster response and community collaboration.',
      tags: ['Figma', 'UI/UX', 'Design System'],
      image: '/newonlookbg.png',
      website: 'https://onlook-livid.vercel.app/',
      figma: 'https://www.figma.com/design/1j21q7Ymp2J8F1kNFUiET7/Onlook?t=9Y2YU2dMUX2gJL7T-0',
      category: 'Web',
    },
    {
      title: 'Bank System',
      description: 'A modern banking application system featuring secure account management, transaction processing, fund transfers, balance tracking, and financial reporting with a focus on usability, security, and efficient banking operations.',
      tags: ['System ', 'Finance', 'UI/UX'],
      image: '/banknewbg (2).png',
      link: 'https://www.figma.com/design/8QRjN35QVqnhSKuUdcRgpn/BANK-SYSTEM?node-id=0-1&t=A3LZYwdV0pN0An9C-1',
      category: 'System',
    },
    {
      title: 'Converter System',
      description: 'A multi-purpose converter application that provides real-time currency conversion and supports various unit conversions, including length, weight, temperature, and volume, with a clean and intuitive user experience.',
      tags: ['System Design', 'Utility', 'Mobile'],
      image: '/converternew.png',
      link: 'https://www.figma.com/design/HTviG6YNluJ5W8Uc1N5QxL/CONVERTER-SYSTEM?node-id=0-1&p=f&t=4H0fPzfBfzBv1hOp-0',
      category: 'System',
    },
    {
      title: 'Freshly Dropped',
      description: 'A comprehensive food delivery and marketplace platform designed to streamline online ordering, vendor management, product discovery, and real-time delivery tracking through an intuitive and user-friendly interface.',
      tags: ['E-Commerce', 'Mobile', 'Food Delivery'],
      image: '/freshlydropnew.png',
      link: 'https://www.figma.com/design/RJqXQCecjVqomkvtOgvUfx/Freshly-Dropped?t=jLGr8ymNClQSHL72-0',
      category: 'Mobile',
    },
    {
      title: 'Flutter Mobile App',
      description: 'A modern cross-platform mobile application built with a focus on usability, accessibility, and performance, providing a consistent and engaging experience across multiple mobile devices.',
      tags: ['Flutter', 'Mobile', 'UI Design'],
      image: '/busybeenew.png',
      link: 'https://www.figma.com/design/PkV6mrlKLDxl1Ny3HPUZW1/Flutter-mobile-app?node-id=0-1&p=f&t=iSvAJasEP321GKaj-0',
      category: 'Mobile',
    },
    {
      title: 'Aura Co. Website',
      description: 'A professional corporate website featuring modern design principles, responsive layouts, service presentation, company information, and user-focused navigation to enhance the overall digital experience.',
      tags: ['Web Design', 'UI/UX', 'Figma'],
      image: '/aura&conewbg.png',
      link: 'https://www.figma.com/design/58HwSxAIXk6U9hnIUc4NFc/Aura---Co.-Website?node-id=0-1&p=f&t=jCM8KGTrnHvm9W19-0',
      category: 'Web',
    },
    {
      title: 'LifeHaven iOS App',
      description: 'A comprehensive health and wellness platform that promotes healthy lifestyles by providing fitness tracking, wellness monitoring, personalized goals, and easy access to health-related information.',
      tags: ['iOS', 'Mobile', 'Health App'],
      image: '/lifehavennew.png',
      link: 'https://www.figma.com/design/lcpe4JHUmionm4yfgHjnZ0/LIFEHAVEN-IOS-APP?node-id=0-1&p=f&t=JaCsUwDSOA9bcute-0',
      category: 'Mobile',
    },
    {
      title: 'Pizza Mobile App',
      description: 'A user-friendly food delivery platform that streamlines the ordering process by providing restaurant browsing, menu management, order tracking, and fast delivery services through a responsive mobile interface.',
      tags: ['Mobile App', 'E-Commerce', 'UI/UX'],
      image: '/newpizza.png',
      link: 'https://www.figma.com/design/32TNLdaicalexwMrWKmWra/PIZZA-MOBILE-APP?node-id=0-1&p=f&t=RqTLXYmj0jULqNZZ-0',
      category: 'Mobile',
    },
    {
      title: 'Digi Academia Website',
      description: 'A modern educational web platform that supports digital learning through course management, student engagement tools, educational resources, and an intuitive interface designed to improve the learning experience.',
      tags: ['Web Design', 'Education', 'UI/UX'],
      image: '/loginpagenewbg.jpg',
      link: 'https://www.figma.com/design/9uQZnejw6o8yXbFgYxBLyU/DIGI-ACADEMIA-WEBSITE?node-id=0-1&p=f&t=MDYmfWXRw2fz8TBD-0',
      category: 'Web',
    },
    {
      title: 'Skincare Mobile App',
      description: 'A modern skincare and beauty platform that offers personalized product recommendations, skincare tracking, beauty tips, and a seamless shopping experience through an intuitive mobile interface.',
      tags: ['Mobile', 'Beauty', 'UI Design'],
      image: '/skincarenew.png',
      link: 'https://www.figma.com/design/HnbGL83GBrmEbUxXdlDTzY/SKINCARE-MOBILE-APP?node-id=0-1&p=f&t=ayOWQcWdiaMiR1C0-0',
      category: 'Mobile',
    },
    {
      title: 'FilmTrack Website',
      description: 'A modern movie tracking platform that allows users to browse films, maintain personal watchlists, share reviews, rate content, and stay updated with the latest movie releases.',
      tags: ['PHP', 'Web App', 'UI/UX'],
      image: '/filmtracknewbg.png',
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
      image: '/saintmatthewnewbg.png',
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
    {
      title: 'Codekeeper - About Us Redesign',
      description: 'A modern About Us page redesign created for Codekeeper, focused on improving visual hierarchy, brand presentation, and user experience through a clean and professional web design.',
      tags: ['Web Design', 'UI/UX', 'Website Redesign'],
      image: '/codekeeper-about-us.png',
      link: 'https://www.figma.com/design/8ozBiDxdouvCTCwCs07Nr7/CODEKEEPER-ABOUT-US-REDESIGN-TRIAL?node-id=0-1&p=f&t=2XmRObcCFuYf0EkN-0',
      category: 'Trial',
    },
    {
      title: 'BusyBee',
      description: 'A modern web design concept for BusyBee, focused on creating a clean, engaging, and user-friendly digital experience with clear visual hierarchy and intuitive navigation.',
      tags: ['Web Design', 'UI/UX', 'Website Design'],
      image: '',
      link: 'https://www.figma.com/design/upS0KtTGWiYRcYSo2nA4AA/BusyBee?t=2XmRObcCFuYf0EkN-0',
      category: 'Trial',
    },
    
  ]

  // UPDATED: Added TikTok, GitHub, and Discord
  const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/seikii08/', icon: <Facebook size={20} /> },
    { name: 'Instagram', url: 'https://www.instagram.com/aicelleeeeee_/', icon: <Instagram size={20} /> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aicelle-r-66298537b/', icon: <Linkedin size={20} /> },
    { 
      name: 'TikTok', 
      url: 'https://www.tiktok.com/@sunflowershoppp_', 
      icon: (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.94 1.15 2.25 1.96 3.69 2.32v3.9c-1.52-.13-3.01-.71-4.24-1.66-.46-.35-.88-.75-1.25-1.19v7.19c.04 2.22-.92 4.38-2.58 5.82-1.74 1.51-4.14 2.14-6.42 1.69-2.56-.51-4.71-2.43-5.55-4.89-.9-2.65-.18-5.7 1.83-7.65 1.66-1.61 4.07-2.31 6.34-1.84v3.9c-1.21-.33-2.53-.05-3.51.72-.94.75-1.42 1.96-1.3 3.16.14 1.34.99 2.51 2.24 3.03 1.25.53 2.73.32 3.77-.52.82-.67 1.25-1.7 1.23-2.76V0z"/>
        </svg>
      ) 
    },
    { name: 'GitHub', url: 'https://github.com/aicellerosales08', icon: <Github size={20} /> },
    {
      name: 'Discord',
      url: '',
      isDiscord: true,
      icon: (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.076.076 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.673-3.549-13.66a.06.06 0 0 0-.031-.028ZM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.955 2.418-2.157 2.418Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z"/>
        </svg>
      ),
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
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, '#home')}
            className="flex items-center gap-3 active:scale-90 transition-transform duration-150 ease-out"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center shadow-sm hover:shadow-md hover:rotate-6 transition-all duration-300">
              <span className="text-white font-bold text-lg">A</span>
            </div>
          
            <div className="hidden sm:block">
              <p className="font-semibold text-sm">Aicelle</p>
              <p className="text-xs text-gray-500">
                UI/UX · Web Dev · Creative Design
              </p>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  onPointerDown={() => setPressedLink(link.name)}
                  onPointerUp={() => setPressedLink(null)}
                  onPointerLeave={() => setPressedLink(null)}
                  className={`relative px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-200 ease-out group
                    ${pressedLink === link.name ? 'scale-90' : 'scale-100'}
                  `}
                >
                  {link.name}
                  <span
                    className={`absolute left-4 right-4 -bottom-0.5 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-transform duration-300 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </a>
              )
            })}
            <a 
              href="mailto:aicellerosales08@gmail.com" 
              onPointerDown={() => setPressedLink('contact-desktop')}
              onPointerUp={() => setPressedLink(null)}
              onPointerLeave={() => setPressedLink(null)}
              className={`ml-2 px-6 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-200 ease-out ${
                pressedLink === 'contact-desktop' ? 'scale-90' : 'hover:scale-105 scale-100'
              }`}
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative p-2.5 rounded-full hover:bg-gray-100 active:bg-purple-100 active:scale-90 transition-all duration-150 ease-out"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="relative w-6 h-6 block">
              <X
                size={24}
                className={`absolute inset-0 text-purple-600 transition-all duration-300 ease-out ${
                  isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
                }`}
              />
              <Menu
                size={24}
                className={`absolute inset-0 text-gray-700 transition-all duration-300 ease-out ${
                  isMenuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile Menu Popdown */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-1 animate-slide-in-up">
            {navLinks.map((link, i) => {
              const sectionId = link.href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  onPointerDown={() => setPressedLink(link.name)}
                  onPointerUp={() => setPressedLink(null)}
                  onPointerLeave={() => setPressedLink(null)}
                  style={{ animationDelay: `${i * 40}ms` }}
                  className={`flex items-center justify-between text-sm font-medium rounded-xl px-3 py-2.5 transition-all duration-150 ease-out animate-slide-in-up origin-left
                    ${isActive ? 'text-purple-600 bg-purple-50' : 'text-gray-600'}
                    ${pressedLink === link.name ? 'scale-95 bg-purple-100' : 'scale-100'}
                  `}
                >
                  {link.name}
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />}
                </a>
              )
            })}
            <a 
              href="mailto:aicellerosales08@gmail.com"
              onPointerDown={() => setPressedLink('contact-mobile')}
              onPointerUp={() => setPressedLink(null)}
              onPointerLeave={() => setPressedLink(null)}
              className={`block text-center w-full px-6 py-2.5 mt-2 bg-gray-900 text-white rounded-full text-sm font-medium transition-all duration-150 ease-out ${
                pressedLink === 'contact-mobile' ? 'scale-95 bg-gray-800' : 'scale-100'
              }`}
            >
              Contact Me
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="max-w-6xl mx-auto px-6 py-4 md:py-8 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-400 rounded-full blur-3xl"></div>
        </div>
        
        {heroLoaded && (
          <div className="flex-1 space-y-8 animate-slide-in-left">
            <div className="space-y-3">
              <p className="text-pink-500 font-medium text-sm animate-fade-in flex items-center gap-1.5">
                <span className="inline-block animate-bounce origin-[70%_70%]">👋</span>
                Hello, I&apos;m
                <Sparkle size={14} className="text-purple-400 animate-[spin_5s_linear_infinite]" fill="currentColor" />
              </p>

              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight relative">
                <span className="inline-flex flex-wrap">
                  {'Aicelle'.split('').map((letter, i) => (
                    <span
                      key={`a-${i}`}
                      className="inline-block animate-slide-in-up hover:-translate-y-2 hover:text-pink-500 hover:rotate-6 transition-all duration-300 cursor-default"
                      style={{ animationDelay: `${i * 60}ms` }}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
                <br />
                <span className="inline-flex flex-wrap text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  {'Rosales'.split('').map((letter, i) => (
                    <span
                      key={`r-${i}`}
                      className="inline-block animate-slide-in-up hover:-translate-y-2 hover:scale-110 transition-all duration-300 cursor-default"
                      style={{ animationDelay: `${420 + i * 60}ms` }}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
                <Heart
                  size={22}
                  fill="currentColor"
                  className="hidden sm:inline-block text-pink-400 ml-2 align-top mt-2 animate-float"
                  style={{ animationDelay: '0.5s' }}
                />
              </h1>

              <p className="text-xl text-gray-600">Web Designer & Developer | UI/UX & Creative Designer</p>

              {/* Rotating cute tagline */}
              <div className="h-6 overflow-hidden">
                <p
                  key={quoteIndex}
                  className="text-sm font-semibold text-purple-500 flex items-center gap-1.5 animate-slide-in-up"
                >
                  <Sparkles size={14} className="text-pink-400" fill="currentColor" />
                  {aboutQuotes[quoteIndex]}
                </p>
              </div>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
             I’m a Web Designer, Frontend Developer, and UI/UX Designer with experience creating responsive websites, intuitive user interfaces, and functional digital solutions. I combine creative design and development skills to transform ideas into engaging, user-friendly digital experiences.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a 
                href="/rosales_aicelle_resume.pdf" 
                download="rosales_aicelle_resume.pdf"
                className="px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 group"
              >
                <span>Download CV</span>
                <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a 
                href="#projects"
                onClick={(e) => handleScrollTo(e, '#projects')}
                className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-full font-medium hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                View Work →
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4">
              <p className="text-sm text-gray-500 font-medium tracking-wider">FOLLOW ME</p>
              <div className="flex gap-3">
                {socialLinks.map((social) =>
                  (social as any).isDiscord ? (
                    <button
                      key={social.name}
                      type="button"
                      onClick={handleCopyDiscord}
                      className="relative p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-purple-100 hover:text-purple-600 hover:-translate-y-1 hover:shadow-md active:scale-90 transition-all duration-300 flex items-center justify-center"
                      title={copiedDiscord ? 'Copied!' : `Discord: ${DISCORD_USERNAME} (click to copy)`}
                    >
                      {copiedDiscord ? <Check size={20} className="text-green-500" /> : social.icon}
                      {copiedDiscord && (
                        <span className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-[10px] font-semibold px-2 py-1 rounded-md animate-fade-in">
                          Copied!
                        </span>
                      )}
                    </button>
                  ) : (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-purple-100 hover:text-purple-600 hover:-translate-y-1 hover:shadow-md active:scale-90 transition-all duration-300 flex items-center justify-center"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        )}

        {/* Profile Image */}
        <div className={`flex-1 ${heroLoaded ? 'animate-slide-in-right' : 'opacity-0'}`}>
          <div className="relative w-full max-w-lg mx-auto group">

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-glow"></div>

            {/* Rotating dashed girly frame */}
            <div className="absolute -inset-4 rounded-full border-2 border-dashed border-pink-300/70 animate-[spin_18s_linear_infinite] pointer-events-none" />
            <div className="absolute -inset-8 rounded-full border border-dotted border-purple-200/60 animate-[spin_26s_linear_infinite_reverse] pointer-events-none" />

            {/* Twinkling dot accents */}
            <span className="absolute top-2 left-10 w-2 h-2 rounded-full bg-pink-400 animate-ping [animation-duration:2.5s]" />
            <span className="absolute bottom-6 right-6 w-2.5 h-2.5 rounded-full bg-purple-400 animate-ping [animation-duration:3.2s]" style={{ animationDelay: '0.6s' }} />
            <span className="absolute top-1/3 -right-2 w-1.5 h-1.5 rounded-full bg-pink-300 animate-ping [animation-duration:2s]" style={{ animationDelay: '1.1s' }} />

            {/* Floating Sparkles */}
            <div
              className="absolute -top-3 left-6 z-20 text-pink-500 animate-float drop-shadow-sm"
              style={{ animationDelay: '0.3s' }}
            >
              <Sparkles size={30} className="animate-[spin_7s_linear_infinite]" fill="currentColor" strokeWidth={1} />
            </div>

            <div
              className="absolute top-1/4 -left-6 z-20 text-purple-400 animate-float"
              style={{ animationDelay: '1.8s' }}
            >
              <Sparkle size={20} fill="currentColor" strokeWidth={1} />
            </div>

            {/* Floating Heart */}
            <div
              className="absolute bottom-1/4 -right-5 z-20 text-pink-500 animate-float"
              style={{ animationDelay: '0.9s' }}
            >
              <Heart size={26} fill="currentColor" className="drop-shadow-sm" />
            </div>

            {/* Floating Star */}
            <div
              className="absolute -bottom-2 right-16 z-20 text-purple-400 animate-float"
              style={{ animationDelay: '2.2s' }}
            >
              <Star size={22} fill="currentColor" className="animate-[spin_10s_linear_infinite]" />
            </div>

            {/* Small pink heart bottom-left */}
            <div
              className="absolute bottom-1/3 -left-4 z-20 text-pink-300 animate-float"
              style={{ animationDelay: '1.4s' }}
            >
              <Heart size={16} fill="currentColor" />
            </div>

            {/* Circular Profile Container */}
            <div className="relative z-10 w-[480px] h-[480px] max-w-full mx-auto rounded-full overflow-hidden border-2 border-white shadow-2xl bg-white animate-float group-hover:scale-[1.02] transition-transform duration-500">

              <Image
                src="/newprofile.png"
                alt="Aicelle Rosales"
                width={480}
                height={480}
                className="w-full h-auto aspect-square object-cover object-top"
                priority
              />

            </div>

            {/* Experience Badge */}
            <div 
              className="absolute top-8 right-0 z-20 bg-white rounded-2xl px-5 py-2.5 shadow-md border border-gray-100 text-center min-w-[110px] animate-float hover:scale-110 transition-transform duration-300"
              style={{ animationDelay: '1.5s' }}
            >
              <p className="font-bold text-xl text-gray-900 leading-none">4+</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold mt-1">
                Experiences
              </p>
            </div>
        
            {/* Projects Badge */}
            <div 
              className="absolute bottom-12 left-0 z-20 bg-gray-900 text-white rounded-2xl px-5 py-2.5 shadow-md border border-gray-800 text-center min-w-[125px] animate-float hover:scale-110 transition-transform duration-300"
              style={{ animationDelay: '1s' }}
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
      <Reveal as="section" direction="fade" className="relative bg-gradient-to-r from-purple-50 to-pink-50 py-16 md:py-24 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-pink-200/30 rounded-full blur-3xl -z-0 animate-glow" />

        {/* Floating decorative sparkles around the quote */}
        <Sparkles
          size={26}
          className="absolute top-8 left-[15%] text-purple-300 animate-float"
          style={{ animationDelay: '0.4s' }}
        />
        <Sparkle
          size={18}
          fill="currentColor"
          className="absolute bottom-10 right-[18%] text-pink-300 animate-float"
          style={{ animationDelay: '1.6s' }}
        />
        <Star
          size={16}
          fill="currentColor"
          className="absolute top-12 right-[20%] text-pink-300 animate-[spin_9s_linear_infinite]"
        />
        <Heart
          size={16}
          fill="currentColor"
          className="absolute bottom-8 left-[18%] text-purple-300 animate-float"
          style={{ animationDelay: '1s' }}
        />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          {/* Big decorative quote mark */}
          <Quote
            size={64}
            fill="currentColor"
            className="mx-auto mb-2 text-purple-200 animate-float"
            strokeWidth={0}
          />

          <p className="text-2xl md:text-3xl font-serif text-gray-800 italic mb-6">
            &ldquo;Design is not just what it looks like and feels like. Design is how it works.&rdquo;
          </p>

          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-pink-400 animate-fade-in" style={{ animationDelay: '0.3s' }} />
            <p className="text-gray-600 font-medium animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Steve Jobs
            </p>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-purple-400 animate-fade-in" style={{ animationDelay: '0.3s' }} />
          </div>
        </div>
      </Reveal>

      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-16 md:py-20">
      
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
      
          {/* ================= LEFT SIDE ================= */}
          <Reveal direction="left" className="min-w-0 flex flex-col relative">

            {/* Floating decorative accents for this side */}
            <Sparkle
              size={16}
              fill="currentColor"
              className="hidden md:block absolute -top-2 left-1/3 text-pink-300 animate-float"
              style={{ animationDelay: '0.8s' }}
            />
            <Heart
              size={14}
              fill="currentColor"
              className="hidden md:block absolute top-24 -left-2 text-purple-200 animate-float"
              style={{ animationDelay: '1.6s' }}
            />

            {/* About Me Badge */}
            <div className="inline-flex self-start items-center gap-2 px-4 py-2 rounded-full border border-purple-200 bg-white mb-6 hover:shadow-md hover:-translate-y-0.5 hover:border-purple-300 transition-all duration-300 group cursor-default">
              <Sparkles size={14} className="text-purple-500 group-hover:rotate-180 transition-transform duration-500" fill="currentColor" />
              <span className="text-xs font-semibold tracking-wide text-purple-600">
                ABOUT ME
              </span>
            </div>

            {/* Name + Nice to meet you */}
            <div className="flex items-baseline gap-4 mb-3 flex-wrap">
              <h2 className="text-4xl md:text-[40px] font-bold text-gray-900 tracking-[-0.04em] leading-none">
                Hi, I&apos;m Aicelle
              </h2>

              <p className="text-xl md:text-[18px] italic font-medium text-pink-500 flex items-center gap-1">
                Nice to meet you!
                <Heart size={16} fill="currentColor" className="animate-pulse text-pink-500" />
              </p>
            </div>

            {/* Main Title */}
            <h3 className="text-2xl md:text-[25px] font-bold leading-[1.15] mb-6 relative inline-block w-fit">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                Web Designer &amp; Developer
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                UI/UX Designer
              </span>
              <Star
                size={18}
                fill="currentColor"
                className="absolute -right-6 top-0 text-pink-300 animate-[spin_6s_linear_infinite] hidden md:block"
              />
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
              <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full relative overflow-hidden">
                <span className="absolute inset-0 bg-white/40 animate-pulse" />
              </div>

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
            <div className="mt-7 w-full max-w-[560px] p-4 md:p-5 rounded-2xl border border-purple-100 bg-gradient-to-r from-purple-50/70 to-pink-50/70 hover:shadow-lg hover:border-purple-200 transition-all duration-300 relative overflow-hidden">

              <Sparkle
                size={14}
                fill="currentColor"
                className="absolute top-2 right-3 text-pink-300 animate-float"
              />

              <div className="grid grid-cols-2 divide-x divide-purple-100">

                {/* 50+ */}
                <div className="flex items-center gap-4 px-2 group">

                  <div className="w-12 h-12 shrink-0 rounded-full bg-white border border-purple-100 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    <span className="text-xl text-purple-600">
                      ♧
                    </span>
                  </div>

                  <div>
                    <p className="text-2xl font-bold text-purple-600 leading-none">
                      <CountUp end={50} suffix="+" />
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
                <div className="flex items-center gap-4 px-4 group">

                  <div className="w-12 h-12 shrink-0 rounded-full bg-white border border-pink-100 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                    <span className="text-xl text-pink-500">
                      ▣
                    </span>
                  </div>

                  <div>
                    <p className="text-2xl font-bold text-pink-500 leading-none">
                      <CountUp end={20} suffix="+" />
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

          </Reveal>
      
      
          {/* ================= RIGHT SIDE ================= */}
          <Reveal direction="right" className="relative min-w-0 flex">
      
            {/* Glow */}
            <div className="absolute -inset-3 bg-gradient-to-r from-purple-100/50 to-pink-100/50 rounded-[28px] blur-2xl -z-10" />
      
            <div className="relative w-full bg-white rounded-[24px] border border-purple-100 shadow-sm overflow-hidden">
      
              {/* Decorative Dots */}
              <div className="absolute top-0 right-0 w-56 h-48 opacity-50 pointer-events-none">
                <div className="grid grid-cols-10 gap-2.5 p-5">
                  {Array.from({ length: 100 }).map((_, i) => (
                    <span
                      key={i}
                      className="w-1 h-1 rounded-full bg-pink-200 animate-pulse"
                      style={{ animationDelay: `${(i % 10) * 100}ms`, animationDuration: '3s' }}
                    />
                  ))}
                </div>
              </div>
      
              <div className="relative p-7 md:p-8">
      
                {/* What I Do Header */}
                <div className="flex items-center gap-4 mb-5">
      
                  <div className="w-14 h-14 shrink-0 rounded-full bg-purple-50 flex items-center justify-center hover:scale-110 hover:rotate-12 transition-transform duration-300">
                    <Star size={26} fill="currentColor" className="text-purple-600 animate-[spin_8s_linear_infinite]" />
                  </div>
      
                  <div>
                    <h3 className="text-2xl md:text-[26px] font-bold text-gray-900">
                      What I Do
                    </h3>
      
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-12 h-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full" />
                      <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                    </div>
                  </div>
      
                </div>
      
      
                {/* ================= SERVICES ================= */}
                <div>
      
                  {/* Web Development */}
                  <div className="flex gap-6 py-5 border-b border-gray-100 group hover:bg-purple-50/40 rounded-xl px-2 -mx-2 transition-colors duration-300">
      
                    <div className="w-16 h-16 shrink-0 rounded-2xl bg-purple-50 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
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
                  <div className="flex gap-6 py-5 border-b border-gray-100 group hover:bg-pink-50/40 rounded-xl px-2 -mx-2 transition-colors duration-300">
      
                    <div className="w-16 h-16 shrink-0 rounded-2xl bg-pink-50 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
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
                  <div className="flex gap-6 py-5 border-b border-gray-100 group hover:bg-purple-50/40 rounded-xl px-2 -mx-2 transition-colors duration-300">
      
                    <div className="w-16 h-16 shrink-0 rounded-2xl bg-purple-50 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
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
                  <div className="flex gap-6 py-5 group hover:bg-pink-50/40 rounded-xl px-2 -mx-2 transition-colors duration-300">
      
                    <div className="w-16 h-16 shrink-0 rounded-2xl bg-pink-50 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
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
          </Reveal>
      
        </div>
      
      
        {/* ================= ANIMATED QUOTE ================= */}
        <Reveal direction="up" className="mt-8 w-full rounded-2xl border border-purple-100 bg-gradient-to-r from-purple-50/60 to-pink-50/60 px-6 py-5 overflow-hidden relative">

          <Sparkle
            size={16}
            fill="currentColor"
            className="absolute top-3 left-[12%] text-pink-300 animate-float hidden sm:block"
          />
          <Sparkle
            size={14}
            fill="currentColor"
            className="absolute bottom-3 right-[12%] text-purple-300 animate-float hidden sm:block"
            style={{ animationDelay: '1.2s' }}
          />

          <div className="flex items-center justify-center gap-2 min-h-[70px]">

            <Heart size={16} fill="currentColor" className="text-pink-400 animate-pulse hidden sm:block" />
            <p className="text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 text-center">
              Creating with purpose, designing with passion. ♡
            </p>
            <Heart size={16} fill="currentColor" className="text-pink-400 animate-pulse hidden sm:block" />

          </div>

        </Reveal>

      </section>
     {/* ================= EXPERIENCE SECTION ================= */}
      <section id="experience" className="bg-gray-50 py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
      
          {/* Section Header */}
          <Reveal direction="up" className="text-center max-w-2xl mx-auto mb-16 space-y-3 relative">
            <Sparkle
              size={18}
              fill="currentColor"
              className="hidden md:block absolute -top-2 left-[28%] text-pink-300 animate-float"
            />
            <Sparkle
              size={14}
              fill="currentColor"
              className="hidden md:block absolute top-4 right-[28%] text-purple-300 animate-float"
              style={{ animationDelay: '1s' }}
            />

            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
              <Briefcase size={12} />
              Experience
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              My Experience
            </h2>

            <p className="text-gray-500 text-sm md:text-base">
              My professional experience in web development, UI/UX design,
              AI data annotation, and IT technical support.
            </p>
          </Reveal>
      
          {/* Experience Timeline */}
          <div className="max-w-4xl mx-auto">
      
            {/* ================= MALAMA ================= */}
            <Reveal direction="left" className="relative pl-8 md:pl-12 pb-10 border-l-2 border-purple-200">
              <div className="absolute -left-[10px] top-0 w-5 h-5 rounded-full bg-purple-600 border-4 border-white shadow-sm">
                <span className="absolute inset-0 rounded-full bg-purple-400 animate-ping opacity-75" />
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-purple-200 transition-all duration-300">

                <div className="flex flex-col sm:flex-row gap-5">

                  {/* Company Logo */}
                  <div className="w-16 h-16 shrink-0 rounded-xl border border-gray-100 bg-white shadow-sm flex items-center justify-center overflow-hidden hover:scale-110 hover:rotate-3 hover:shadow-md transition-all duration-300">
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

                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full self-start">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                        </span>
                        Jul 2026 – Present · 2 mos
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
                      ].map((skill, i) => (
                        <span
                          key={skill}
                          style={{ animationDelay: `${i * 60}ms` }}
                          className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-semibold rounded-full hover:bg-purple-100 hover:scale-105 transition-all duration-200 animate-fade-in"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
      
                  </div>
                </div>
              </div>
            </Reveal>
      
      
            {/* ================= OUTLIER ================= */}
            <Reveal direction="left" className="relative pl-8 md:pl-12 pb-10 border-l-2 border-purple-200">
              <div className="absolute -left-[10px] top-0 w-5 h-5 rounded-full bg-pink-500 border-4 border-white shadow-sm hover:scale-125 transition-transform duration-300" />
      
              <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-purple-200 transition-all duration-300">
      
                <div className="flex flex-col sm:flex-row gap-5">
      
                  {/* Company Logo */}
                  <div className="w-16 h-16 shrink-0 rounded-xl border border-gray-100 bg-white shadow-sm flex items-center justify-center overflow-hidden hover:scale-110 hover:rotate-3 hover:shadow-md transition-all duration-300">
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
                      ].map((skill, i) => (
                        <span
                          key={skill}
                          style={{ animationDelay: `${i * 60}ms` }}
                          className="px-3 py-1 bg-pink-50 text-pink-600 text-xs font-semibold rounded-full hover:bg-pink-100 hover:scale-105 transition-all duration-200 animate-fade-in"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
      
                  </div>
                </div>
              </div>
            </Reveal>
      
      
            {/* ================= TORRES TECHNOLOGY ================= */}
            <Reveal direction="left" className="relative pl-8 md:pl-12 pb-10 border-l-2 border-purple-200">
              <div className="absolute -left-[10px] top-0 w-5 h-5 rounded-full bg-purple-600 border-4 border-white shadow-sm hover:scale-125 transition-transform duration-300" />
      
              <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-purple-200 transition-all duration-300">
      
                <div className="flex flex-col sm:flex-row gap-5">
      
                  {/* Company Logo */}
                  <div className="w-16 h-16 shrink-0 rounded-xl border border-gray-100 bg-white shadow-sm flex items-center justify-center overflow-hidden hover:scale-110 hover:rotate-3 hover:shadow-md transition-all duration-300">
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
                    <div className="mt-6 p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-4 hover:bg-purple-50/50 transition-colors duration-300">
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
                      ].map((skill, i) => (
                        <span
                          key={skill}
                          style={{ animationDelay: `${i * 60}ms` }}
                          className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-semibold rounded-full hover:bg-purple-100 hover:scale-105 transition-all duration-200 animate-fade-in"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
      
                  </div>
                </div>
              </div>
            </Reveal>
      
      
            {/* ================= CROWDGEN PRO ================= */}
            <Reveal direction="left" className="relative pl-8 md:pl-12 border-l-2 border-transparent">
              <div className="absolute -left-[10px] top-0 w-5 h-5 rounded-full bg-pink-500 border-4 border-white shadow-sm hover:scale-125 transition-transform duration-300" />
      
              <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-purple-200 transition-all duration-300">
      
                <div className="flex flex-col sm:flex-row gap-5">
      
                  {/* Company Logo */}
                  <div className="w-16 h-16 shrink-0 rounded-xl border border-gray-100 bg-white shadow-sm flex items-center justify-center overflow-hidden hover:scale-110 hover:rotate-3 hover:shadow-md transition-all duration-300">
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
                      ].map((skill, i) => (
                        <span
                          key={skill}
                          style={{ animationDelay: `${i * 60}ms` }}
                          className="px-3 py-1 bg-pink-50 text-pink-600 text-xs font-semibold rounded-full hover:bg-pink-100 hover:scale-105 transition-all duration-200 animate-fade-in"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
      
                  </div>
                </div>
              </div>
            </Reveal>
      
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="bg-gray-50 py-20 md:py-32 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-3xl -z-10" />

        <div className="max-w-6xl mx-auto px-6">
          <Reveal direction="up" className="text-center max-w-2xl mx-auto mb-16 space-y-3 relative">
            <Sparkle
              size={16}
              fill="currentColor"
              className="hidden md:block absolute -top-1 left-[30%] text-pink-300 animate-float"
            />
            <span className="text-xs font-bold uppercase tracking-widest text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
              Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Technical Skills & Tools
            </h2>
            <p className="text-gray-500 text-sm">
              My proficiency in various programming languages, frameworks, and design software tools.
            </p>
          </Reveal>

          <div className="space-y-14">
            {skillGroups.map((group, groupIndex) => (
              <SkillGroupBlock key={group.category} group={group} groupIndex={groupIndex} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-pink-100/30 rounded-full blur-3xl -z-10" />

        <Reveal direction="up" className="text-center mb-12 relative">
          <Sparkle
            size={18}
            fill="currentColor"
            className="hidden md:block absolute -top-2 left-[32%] text-pink-300 animate-float"
          />
          <Star
            size={14}
            fill="currentColor"
            className="hidden md:block absolute top-2 right-[32%] text-purple-300 animate-[spin_7s_linear_infinite]"
          />

          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-purple-600 bg-purple-50 px-3 py-1 rounded-full mb-4">
            <Layers size={12} />
            Portfolio
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Featured Projects
          </h2>
      
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            Explore my selected work across web, mobile, and system design.
          </p>
        </Reveal>
      
        {/* Category Tabs */}
        <div className="flex justify-center items-center gap-2 sm:gap-3 mb-12 flex-wrap">
          {['All', 'Web', 'Mobile', 'System', 'Trial'].map((category) => {
            const count =
              category === 'All'
                ? projects.length
                : projects.filter((p) => p.category === category).length
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 active:scale-90 ${
                  activeCategory === category
                    ? 'bg-gray-900 text-white shadow-md scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-purple-100 hover:text-purple-600 hover:scale-105'
                }`}
              >
                {category}
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                    activeCategory === category ? 'bg-white/20' : 'bg-white text-gray-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>
      
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .filter(
              (project) =>
                activeCategory === 'All' ||
                project.category === activeCategory
            )
            .map((project, i) => (
              <div
                key={project.title}
                style={{ animationDelay: `${(i % 6) * 90}ms` }}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-purple-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full animate-slide-in-up relative"
              >
                {/* "Live" badge for projects with a deployed site */}
                {'website' in project && (
                  <span className="absolute top-3 left-3 z-20 inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-green-600 px-2 py-1 rounded-full shadow-sm">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                    </span>
                    Live
                  </span>
                )}

                {/* Project Image */}
                <div className="aspect-video relative overflow-hidden bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Shine sweep on hover */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -inset-y-8 -left-1/2 w-1/4 bg-white/30 rotate-12 -translate-x-[200%] group-hover:translate-x-[600%] transition-transform duration-[1100ms] ease-out" />
                  </div>
                </div>
      
                {/* Project Content */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                        {project.title}
                      </h3>
      
                      <span className="shrink-0 text-[10px] uppercase font-bold tracking-wider text-purple-600 bg-purple-50 px-2 py-1 rounded-full group-hover:bg-purple-100 transition-colors duration-300">
                        {project.category}
                      </span>
                    </div>
      
                    <p className="text-gray-600 text-sm mb-4 line-clamp-4">
                      {project.description}
                    </p>
      
                    {/* Tags */}
                    <div className="flex gap-2 flex-wrap mb-6">
                      {project.tags.map((tag, ti) => (
                        <span
                          key={tag}
                          style={{ animationDelay: `${(i % 6) * 90 + ti * 60}ms` }}
                          className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-semibold rounded-full hover:bg-purple-100 hover:scale-105 transition-all duration-200 animate-fade-in"
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
                          className="text-purple-600 font-semibold text-sm inline-flex items-center gap-1 hover:underline transition-all duration-200 group/link"
                        >
                          Live Site <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                        </a>
      
                        <a
                          href={project.figma}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pink-600 font-semibold text-sm inline-flex items-center gap-1 hover:underline transition-all duration-200 group/link"
                        >
                          Figma <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                        </a>
                      </div>
                    ) : (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 font-semibold text-sm inline-flex items-center gap-2 hover:text-purple-700 border-t border-gray-100 pt-4 w-full transition-all duration-200 group/link"
                      >
                        View Project Design
                        <ExternalLink size={15} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
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
        className="bg-gray-50 py-20 md:py-32 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-6">
      
          {/* Section Header */}
          <Reveal direction="up" className="text-center max-w-2xl mx-auto mb-12 space-y-4 relative">

            <Sparkle
              size={16}
              fill="currentColor"
              className="hidden md:block absolute -top-1 left-[30%] text-pink-300 animate-float"
            />

            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
              <ImageIcon size={12} />
              Creative Work
            </span>
      
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Designs & Creative Work
            </h2>
      
            <p className="text-gray-500 text-sm md:text-base">
              A collection of creative designs, digital advertising visuals,
              branding, social media content, AI-generated imagery, and product
              visual designs. Tap a folder to open it.
            </p>
      
          </Reveal>

          {activeDesignCategory === null ? (
            /* ================= FOLDER PICKER (styled like Project cards) ================= */
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {designCategoryList.map((category, i) => {
                const items = designs.filter((d) => d.category === category)
                const cover = items[0]?.image
                const blurb =
                  designCategoryBlurbs[category] ??
                  `A curated set of ${items.length} ${items.length === 1 ? 'design' : 'designs'} exploring ${category.toLowerCase()}.`
                return (
                  <button
                    key={category}
                    onClick={() => setActiveDesignCategory(category)}
                    style={{ animationDelay: `${i * 90}ms` }}
                    className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-purple-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full animate-slide-in-up text-left"
                  >
                    {/* Cover Image */}
                    <div className="aspect-video relative overflow-hidden bg-gray-100">
                      {cover && (
                        <Image
                          src={cover}
                          alt={category}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Shine sweep on hover */}
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute -inset-y-8 -left-1/2 w-1/4 bg-white/30 rotate-12 -translate-x-[200%] group-hover:translate-x-[600%] transition-transform duration-[1100ms] ease-out" />
                      </div>

                      {/* Folder icon badge */}
                      <div className="absolute top-3 right-3 w-9 h-9 rounded-xl flex items-center justify-center backdrop-blur-sm bg-white/90 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Folder size={16} className="text-purple-500 group-hover:hidden" />
                        <FolderOpen size={16} className="text-purple-600 hidden group-hover:block" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1 justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                            {category}
                          </h3>
                          <span className="shrink-0 text-[10px] uppercase font-bold tracking-wider text-purple-600 bg-purple-50 px-2 py-1 rounded-full group-hover:bg-purple-100 transition-colors duration-300">
                            {items.length} {items.length === 1 ? 'design' : 'designs'}
                          </span>
                        </div>

                        <p className="text-gray-600 text-sm mb-6">
                          {blurb}
                        </p>
                      </div>

                      <div className="text-purple-600 font-semibold text-sm inline-flex items-center gap-2 hover:text-purple-700 border-t border-gray-100 pt-4 w-full transition-all duration-200 group/link">
                        Browse Folder
                        <ArrowLeft size={15} className="rotate-180 group-hover/link:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          ) : (
            /* ================= OPENED FOLDER: IMAGES ================= */
            <div>
              <div className="flex items-center justify-between mb-8 animate-fade-in">
                <button
                  onClick={() => setActiveDesignCategory(null)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-purple-600 bg-white border border-gray-200 hover:border-purple-200 px-4 py-2 rounded-full shadow-sm hover:shadow-md active:scale-95 transition-all duration-200"
                >
                  <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
                  Back to folders
                </button>

                <div className="inline-flex items-center gap-2">
                  <FolderOpen size={18} className="text-purple-500" />
                  <h3 className="text-lg font-bold text-gray-800">{activeDesignCategory}</h3>
                  <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">
                    {designs.filter((d) => d.category === activeDesignCategory).length}
                  </span>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {designs
                  .filter((design) => design.category === activeDesignCategory)
                  .map((design, index) => (
                    <div
                      key={design.image + index}
                      style={{ animationDelay: `${(index % 6) * 80}ms` }}
                      className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-purple-300 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-slide-in-up relative"
                    >
                      {/* Design Image */}
                      <div className="relative w-full bg-gray-100 flex items-center justify-center overflow-hidden">
                        <Image
                          src={design.image}
                          alt={`Creative design ${index + 1}`}
                          width={1200}
                          height={1200}
                          className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                        />

                        {/* Shine sweep on hover */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <div className="absolute -inset-y-8 -left-1/2 w-1/4 bg-white/30 rotate-12 -translate-x-[200%] group-hover:translate-x-[600%] transition-transform duration-[1100ms] ease-out" />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
      
        </div>
      </section>
      {/* Certificates Section */}
      <section id="certificates" className="bg-gradient-to-b from-white via-pink-50/30 to-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-purple-100/30 rounded-full blur-3xl -z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-pink-100/30 rounded-full blur-3xl -z-0" />

        <div className="max-w-6xl mx-auto px-6 relative">
          <Reveal direction="up" className="text-center mb-12 relative">
            <Sparkle
              size={16}
              fill="currentColor"
              className="hidden md:block absolute -top-1 left-[34%] text-pink-300 animate-float"
            />
            <Star
              size={14}
              fill="currentColor"
              className="hidden md:block absolute top-3 right-[34%] text-purple-300 animate-[spin_8s_linear_infinite]"
            />

            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-purple-600 bg-purple-50 px-3 py-1 rounded-full mb-4">
              <GraduationCap size={12} />
              Achievements
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Certifications & Achievements
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, i) => (
              <div
                key={cert.title}
                style={{ animationDelay: `${i * 100}ms` }}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-purple-200 transition-all duration-300 overflow-hidden flex flex-col justify-between group cursor-pointer animate-slide-in-up relative"
                onClick={() => setSelectedCert(cert)}
              >
                {/* Corner ribbon accent */}
                <div className="absolute top-3 right-3 z-20 w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Award size={14} className="text-purple-400 group-hover:text-purple-600 transition-colors" />
                </div>

                {/* Certificate BADGE Display */}
                <div className="aspect-[4/3] w-full relative bg-gray-50 flex items-center justify-center border-b border-gray-100 p-8 overflow-hidden">
                  {/* Soft glow pulse behind the badge */}
                  <div className="absolute w-24 h-24 rounded-full bg-purple-200/30 blur-2xl animate-glow" />

                  <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-500 animate-float" style={{ animationDelay: `${i * 0.3}s` }}>
                    <Image
                      src={cert.badge}
                      alt={`${cert.title} badge`}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Shine sweep on hover */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -inset-y-8 -left-1/2 w-1/4 bg-white/40 rotate-12 -translate-x-[200%] group-hover:translate-x-[600%] transition-transform duration-[1100ms] ease-out" />
                  </div>

                  <div className="absolute inset-0 bg-purple-950/10 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <span className="bg-white/90 text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full shadow flex items-center gap-1 scale-90 group-hover:scale-100 transition-transform duration-300">
                      View Certificate <ExternalLink size={12} />
                    </span>
                  </div>
                </div>

                {/* Info Text block */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-purple-600 bg-purple-50 px-2 py-0.5 rounded group-hover:bg-purple-100 transition-colors duration-300">
                        {cert.issuer}
                      </span>
                      <span className="text-[11px] text-gray-400 font-medium">{cert.issueDate}</span>
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-purple-600 transition-colors">
                      {cert.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-50 text-xs font-semibold text-gray-500 group-hover:text-purple-600 transition-colors">
                    <span className="inline-flex items-center gap-1">
                      Enlarge Document
                      <ExternalLink size={10} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </span>
                    <Award size={14} className="text-gray-400 group-hover:text-purple-500 group-hover:scale-110 transition-all duration-300" />
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
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden flex flex-col shadow-2xl max-h-[90vh] animate-slide-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <div>
                <h3 className="text-xl font-bold text-gray-900 inline-flex items-center gap-2">
                  {selectedCert.title}
                  <Award size={16} className="text-purple-400 animate-pulse" />
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">Issued by {selectedCert.issuer} • {selectedCert.issueDate}</p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="text-gray-400 hover:text-gray-600 hover:rotate-90 p-1 rounded-lg hover:bg-gray-50 transition-all duration-300"
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
                className="px-5 py-2 text-sm bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 hover:scale-105 transition-all duration-300 flex items-center gap-1.5"
              >
                <Download size={16} />
                Download
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Contact Banner */}
      <Reveal as="section" direction="up" className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 py-20 md:py-28">
        {/* Floating decorative sparkles, hearts, and stars */}
        <Heart size={22} fill="currentColor" className="absolute top-8 left-[8%] text-white/20 animate-float" style={{ animationDelay: '0.2s' }} />
        <Sparkle size={18} fill="currentColor" className="absolute top-16 left-[18%] text-white/25 animate-float" style={{ animationDelay: '1.1s' }} />
        <Star size={16} fill="currentColor" className="absolute bottom-10 left-[12%] text-white/20 animate-[spin_9s_linear_infinite]" />
        <Heart size={16} fill="currentColor" className="absolute bottom-16 left-[24%] text-white/25 animate-float" style={{ animationDelay: '1.8s' }} />

        <Sparkles size={26} className="absolute top-10 right-[10%] text-white/20 animate-float" style={{ animationDelay: '0.6s' }} />
        <Heart size={20} fill="currentColor" className="absolute bottom-12 right-[8%] text-white/25 animate-float" style={{ animationDelay: '1.4s' }} />
        <Star size={14} fill="currentColor" className="absolute top-20 right-[22%] text-white/20 animate-[spin_7s_linear_infinite]" />
        <Sparkle size={14} fill="currentColor" className="absolute bottom-8 right-[28%] text-white/25 animate-float" style={{ animationDelay: '2.2s' }} />

        <Heart size={12} fill="currentColor" className="hidden md:block absolute top-1/2 left-[4%] text-white/15 animate-float" style={{ animationDelay: '0.9s' }} />
        <Sparkle size={12} fill="currentColor" className="hidden md:block absolute top-1/2 right-[4%] text-white/15 animate-float" style={{ animationDelay: '1.6s' }} />

        <div className="max-w-4xl mx-auto px-6 text-center space-y-6 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight inline-flex items-center gap-3 flex-wrap justify-center">
            Let&apos;s Create Something Amazing
            <Heart size={28} fill="currentColor" className="text-pink-200 animate-pulse" />
          </h2>
          <p className="text-lg text-white/90 max-w-xl mx-auto">
            I&apos;m always open to discussing web development initiatives, UI/UX design opportunities, or collaborative projects.
          </p>
          <div className="relative inline-block">
            {/* Glowing pulse ring behind the button */}
            <span className="absolute inset-0 rounded-full bg-white/40 blur-md animate-glow" />
            <a 
              href="mailto:aicellerosales08@gmail.com?subject=Project%20Inquiry%20-%20UI/UX%20%26%20Frontend&body=Hi%20Aicelle,%0D%0A%0D%0AI%20saw%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project%20with%20you."
              className="relative px-8 py-4 bg-white text-purple-600 rounded-full font-bold hover:bg-gray-50 hover:scale-105 active:scale-90 transition-all duration-300 inline-flex items-center gap-2 shadow-lg group"
            >
              Get In Touch
              <Mail size={18} className="group-hover:-rotate-12 group-hover:scale-110 transition-transform duration-300" />
              <Sparkle size={14} fill="currentColor" className="absolute -top-1 -right-1 text-pink-400 animate-pulse" />
            </a>
          </div>
        </div>
      </Reveal>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-gray-900 text-white py-12 border-t border-gray-800">
        {/* Floating playful decorations, echoing the GitHub trophies section vibe */}
        <Sparkle size={16} fill="currentColor" className="absolute top-6 left-[6%] text-purple-400/40 animate-float" style={{ animationDelay: '0.3s' }} />
        <Star size={14} fill="currentColor" className="absolute top-10 left-[20%] text-pink-400/30 animate-[spin_8s_linear_infinite]" />
        <Heart size={14} fill="currentColor" className="absolute bottom-10 left-[14%] text-pink-400/30 animate-float" style={{ animationDelay: '1.2s' }} />
        <Sparkles size={20} className="absolute top-8 right-[8%] text-purple-400/40 animate-float" style={{ animationDelay: '0.8s' }} />
        <Star size={12} fill="currentColor" className="absolute bottom-14 right-[18%] text-pink-400/30 animate-[spin_10s_linear_infinite]" />
        <Sparkle size={12} fill="currentColor" className="hidden md:block absolute bottom-6 right-[35%] text-purple-400/30 animate-float" style={{ animationDelay: '1.8s' }} />
        <Heart size={10} fill="currentColor" className="hidden md:block absolute top-1/2 left-[45%] text-pink-400/20 animate-float" style={{ animationDelay: '2.4s' }} />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="font-bold text-lg mb-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 inline-block">
                Aicelle Rosales
              </p>
              <p className="text-gray-400 text-sm">UI/UX · Web Dev · Creative Design</p>
            </div>
            <div>
              <p className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-3">Links</p>
              <ul className="space-y-2 text-sm text-gray-400">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      onClick={(e) => handleScrollTo(e, link.href)}
                      className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-3">Connect</p>
              {/* UPDATED: Added TikTok, GitHub, and Discord icon integration inside footer as well */}
              <div className="flex gap-3">
                {socialLinks.map((social) =>
                  (social as any).isDiscord ? (
                    <button
                      key={social.name}
                      type="button"
                      onClick={handleCopyDiscord}
                      className="relative p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-purple-600 hover:-translate-y-1 active:scale-90 transition-all duration-300 flex items-center justify-center"
                      title={copiedDiscord ? 'Copied!' : `Discord: ${DISCORD_USERNAME} (click to copy)`}
                    >
                      {copiedDiscord ? <Check size={20} className="text-green-400" /> : social.icon}
                      {copiedDiscord && (
                        <span className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-purple-600 text-white text-[10px] font-semibold px-2 py-1 rounded-md animate-fade-in">
                          Copied!
                        </span>
                      )}
                    </button>
                  ) : (
                    <a 
                      key={social.name}
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-purple-600 hover:-translate-y-1 active:scale-90 transition-all duration-300 flex items-center justify-center" 
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-xs space-y-1">
            <p>© {new Date().getFullYear()} Aicelle Rosales. All rights reserved.</p>
            <p className="inline-flex items-center gap-1 justify-center">
              Designed with <Heart size={11} fill="currentColor" className="text-pink-400 animate-pulse" /> in the Philippines
            </p>
          </div>
        </div>
      </footer>

      <ChatWidget />
    </div>
  )
}
