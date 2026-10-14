import { useEffect, useId, useMemo, useRef, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  Check,
  Gauge,
  Gem,
  Layers,
  Plus,
  Rocket,
  Search,
  ServerCog,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  PenTool,
  Code2,
  Compass,
} from 'lucide-react'
import Mockup, { SITES } from './components/Mockup.jsx'
import { COMPANY, LEGAL } from './legal.js'

const YEAR = new Date().getFullYear()

const CONTACT_EMAIL = COMPANY.email
const VANTRA_URL = 'https://www.vantracollective.com'

// Add your profile URLs here when the accounts are ready.
const SOCIALS = [
  { label: 'Instagram', url: '', Icon: InstagramIcon },
  { label: 'TikTok', url: '', Icon: TikTokIcon },
  { label: 'LinkedIn', url: '', Icon: LinkedInIcon },
]

const LEGAL_LINKS = [
  ['Privacy Policy', '#/privacy'],
  ['Terms of Service', '#/terms'],
  ['Cookie Policy', '#/cookies'],
]

// Brand glyphs drawn in the same stroke style as the Lucide icons.
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  )
}

function TikTokIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5" />
      <path d="M14 3c.4 2.6 2.4 4.6 5 5" />
    </svg>
  )
}

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10.5V17M8 7.25v.01M12 17v-6.5M12 13.5a2.5 2.5 0 0 1 5 0V17" />
    </svg>
  )
}
const CURRENCY = '€'

const NAV = [
  ['Work', '#work'],
  ['Services', '#services'],
  ['Process', '#process'],
  ['Pricing', '#pricing'],
  ['FAQ', '#faq'],
]

const INDUSTRIES = ['Restaurants', 'Real Estate', 'Fitness Studios', 'Skincare & Beauty', 'Law Firms', 'SaaS', 'Clinics', 'Boutiques', 'Agencies', 'Hospitality', 'Contractors', 'Creators']

const SERVICES = [
  { Icon: Gem, title: 'Bespoke design', text: 'No templates. A web presence crafted around your brand that looks like it cost ten times more.' },
  { Icon: Gauge, title: 'Built for speed', text: 'Hand-written, mobile-first code engineered for near-instant loads. Speed is a conversion feature.' },
  { Icon: Search, title: 'SEO & AI visibility', text: 'Technical SEO, schema markup and clean structure so you show up on Google and in AI answers.' },
  { Icon: Sparkles, title: 'Motion & 3D', text: 'Scroll animation, 3D and micro-interactions that make visitors stop scrolling and start trusting.' },
  { Icon: ShoppingBag, title: 'E-commerce & booking', text: 'Online stores, reservations, appointments and lead forms wired into the tools you already use.' },
  { Icon: ShieldCheck, title: 'Hosting & care', text: 'Secure hosting, SSL, backups and updates handled for you — billed at what it actually costs to run.' },
]

const STEPS = [
  { Icon: Compass, n: '01', title: 'Discover', text: 'A strategy call to understand your customers, your competitors and what a win looks like.' },
  { Icon: PenTool, n: '02', title: 'Design', text: 'A high-fidelity design of your homepage, refined together until it feels unmistakably yours.' },
  { Icon: Code2, n: '03', title: 'Build', text: 'Every page built mobile-first, with forms, SEO and analytics wired up and tested on real devices.' },
  { Icon: Rocket, n: '04', title: 'Launch', text: 'We go live and keep your site fast, secure and up to date for a small monthly running fee.' },
]

// One-time build fee per package. Edit prices here.
const PACKAGES = [
  {
    name: 'Essential',
    price: '250',
    blurb: 'A premium presence for new and growing businesses.',
    features: ['Up to 5 custom pages', 'Mobile-first, responsive design', 'Contact & lead forms', 'On-page SEO setup', 'Launch-ready in ~2 weeks'],
  },
  {
    name: 'Business',
    price: '449',
    featured: true,
    blurb: 'For businesses ready to turn their website into a sales channel.',
    features: ['Up to 12 custom pages', 'Motion & 3D effects', 'Booking or e-commerce', 'Advanced SEO & AI visibility', 'Analytics setup', 'Edit content yourself (CMS)'],
  },
  {
    name: 'Signature',
    price: null,
    blurb: 'Flagship builds for brands that want to lead their market.',
    features: ['Unlimited pages', 'Bespoke 3D & interactions', 'Custom features & integrations', 'Creator launch campaign with Vantra Collective', 'Dedicated designer'],
  },
]

// Monthly running fee estimator: base + what the site needs. Edit numbers here.
const RUNNING_BASE = 19
const RUNNING_ADDONS = [
  { id: 'cms', label: 'Content editing (CMS)', price: 10 },
  { id: 'booking', label: 'Booking system', price: 15 },
  { id: 'shop', label: 'Online store', price: 25 },
  { id: 'traffic', label: 'High traffic (50k+ visits/mo)', price: 20 },
]

const FAQS = [
  ['How long does a website take?', 'Essential sites typically launch in about two weeks and Business sites in three to four. Signature builds depend on scope — we give you a timeline with your quote.'],
  ['Is the build price really fixed?', 'Yes. You get one fixed price for the agreed scope before we start. If you want to add something later, we quote it upfront — no surprise invoices.'],
  ['What does the monthly fee cover?', 'Only what it takes to keep your site running: hosting, SSL, backups, security updates and monitoring. It scales with your site — a simple brochure site costs less to run than a busy online store.'],
  ['Do I own my website?', 'Yes. Your domain, content and design are yours. If you ever want to move on, we hand everything over.'],
  ['Can you redesign my existing site?', 'Absolutely. We audit what you have, keep what works, and rebuild the rest so it looks premium and converts better.'],
  ['How does the Vantra Collective partnership work?', 'Vantra Collective is our creator-marketing partner. If you want, we can launch your new site alongside a creator campaign from their roster — so real customers arrive from day one. It’s optional and quoted separately.'],
]

function useReveal(pageKey) {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            // An attribute React doesn't manage, so re-renders can't remove it.
            e.target.setAttribute('data-shown', '')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pageKey])
}

// Pointer-driven tilt + spotlight, batched to one update per frame.
function useTilt(max = 10) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    let raf = 0
    let ev = null
    const apply = () => {
      raf = 0
      const r = el.getBoundingClientRect()
      const px = (ev.clientX - r.left) / r.width
      const py = (ev.clientY - r.top) / r.height
      el.style.setProperty('--rx', `${(0.5 - py) * max}deg`)
      el.style.setProperty('--ry', `${(px - 0.5) * max}deg`)
      el.style.setProperty('--mx', `${px * 100}%`)
      el.style.setProperty('--my', `${py * 100}%`)
    }
    const move = (e) => {
      ev = e
      if (!raf) raf = requestAnimationFrame(apply)
    }
    const leave = () => {
      cancelAnimationFrame(raf)
      raf = 0
      el.style.setProperty('--rx', '0deg')
      el.style.setProperty('--ry', '0deg')
    }
    el.addEventListener('pointermove', move)
    el.addEventListener('pointerleave', leave)
    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('pointermove', move)
      el.removeEventListener('pointerleave', leave)
    }
  }, [max])
  return ref
}

function Spotlight({ className = '', children, ...rest }) {
  const ref = useTilt(6)
  return (
    <div ref={ref} className={`spot ${className}`} {...rest}>
      {children}
    </div>
  )
}

function LogoMark() {
  // Unique gradient ids so the header and footer logos never clash.
  const uid = useId().replace(/:/g, '')
  const a = `kova-a-${uid}`
  const b = `kova-b-${uid}`
  return (
    <svg className="logo-mark" viewBox="0 0 32 32" aria-hidden="true">
      <defs>
        <linearGradient id={a} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6ee7b7" />
          <stop offset="1" stopColor="#10b981" />
        </linearGradient>
        <linearGradient id={b} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#10b981" />
          <stop offset="1" stopColor="#047857" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="6.5" height="24" rx="1.6" fill="#f5f1eb" />
      <path d="M12.5 16 L21.5 4 H28.5 L19.5 16 Z" fill={`url(#${a})`} />
      <path d="M12.5 16 H19.5 L28.5 28 H21.5 Z" fill={`url(#${b})`} />
    </svg>
  )
}

function Logo() {
  return (
    <a href="#top" className="logo" aria-label="Kova Development home">
      <LogoMark />
      <span className="logo-text">
        <span className="logo-word">Kova</span>
        <span className="logo-sub">Development</span>
      </span>
    </a>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="header-inner">
        <Logo />
        <nav className="nav-desktop" aria-label="Primary">
          {NAV.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a href="#contact" className="btn btn-sm btn-primary nav-cta">Start a project</a>
        <button className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
      </div>
      <nav className="nav-mobile" aria-label="Mobile">
        {NAV.map(([label, href], i) => (
          <a key={href} href={href} onClick={() => setOpen(false)} style={{ '--i': i }}>
            {label}<ArrowUpRight size={22} strokeWidth={1.5} />
          </a>
        ))}
        <a href="#contact" className="btn btn-primary" onClick={() => setOpen(false)} style={{ '--i': NAV.length }}>
          Start a project <ArrowRight size={18} />
        </a>
      </nav>
    </header>
  )
}

function Hero() {
  const stackRef = useTilt(14)
  return (
    <section className="hero" id="top">
      <div className="hero-glow" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow" data-reveal>
            <span className="pulse-dot" /> Web design & development studio
          </p>
          <h1 data-reveal style={{ '--d': '80ms' }}>
            Websites that make your business look <em className="chrome">inevitable.</em>
          </h1>
          <p className="lead" data-reveal style={{ '--d': '160ms' }}>
            We design and build premium, mobile-first websites for ambitious businesses — for one fixed price, then keep them running for a small monthly fee.
          </p>
          <div className="hero-ctas" data-reveal style={{ '--d': '240ms' }}>
            <a href="#contact" className="btn btn-primary">Start your project <ArrowRight size={18} /></a>
            <a href="#work" className="btn btn-ghost">See our work</a>
          </div>
          <ul className="hero-proof" data-reveal style={{ '--d': '320ms' }}>
            <li><b>Fixed</b><span>build price</span></li>
            <li><b>{CURRENCY}{RUNNING_BASE}<small>/mo</small></b><span>running from</span></li>
            <li><b>100%</b><span>yours to own</span></li>
          </ul>
        </div>

        <div className="hero-stack" ref={stackRef} data-reveal style={{ '--d': '200ms' }}>
          <Mockup id="lumiere" className="stack-1" />
          <Mockup id="olive" className="stack-2" />
          <Mockup id="pulse" className="stack-3" />
          <div className="float-chip chip-a"><span className="pulse-dot" /> Site is live</div>
          <div className="float-chip chip-b">
            <CalendarCheck size={18} strokeWidth={1.75} />
            <span>New booking request<small>Lumière · just now</small></span>
          </div>
        </div>
      </div>
      <a href="#work" className="scroll-cue" aria-label="Scroll to work"><span /></a>
    </section>
  )
}

function Marquee() {
  const row = [...INDUSTRIES, ...INDUSTRIES]
  return (
    <div className="marquee" aria-label="Industries we build for">
      <div className="marquee-track">
        {row.map((t, i) => (
          <span key={i}>{t}<i className="diamond" aria-hidden /></span>
        ))}
      </div>
    </div>
  )
}

function WorkCard({ id, i }) {
  const ref = useTilt(12)
  const site = SITES[id]
  return (
    <article className="work-card" ref={ref} data-reveal style={{ '--d': `${(i % 3) * 90}ms` }}>
      <div className="work-stage">
        <Mockup id={id} className={`work-mock ${i % 2 ? 'tilt-r' : 'tilt-l'}`} />
      </div>
      <div className="work-meta">
        <span className="tag">{site.industry}</span>
        <h3>{site.name}</h3>
      </div>
    </article>
  )
}

// Real client projects. Edit copy here.
const CASES = [
  {
    id: 'vantra',
    name: 'Vantra Collective',
    url: VANTRA_URL,
    text: 'A two-sided website for a brand-to-creator matchmaking agency — built to win over brands and creators at the same time.',
    points: ['Two clear journeys: brands and creators', 'Creator roster showcase', 'Inquiry forms routed to the right inbox', 'Mobile-first, fast, SEO-ready'],
  },
  {
    id: 'bloom',
    name: 'Bloom Pilates Studio',
    url: 'https://www.bloompilates.studio',
    text: 'A calm, boutique website for a reformer Pilates studio opening in Mursko Središće — built to fill the waitlist before day one.',
    points: ['Bilingual: Croatian & English', 'Waitlist sign-up for the launch', 'Founder story & methodology', 'Dedicated pricing packages page'],
  },
]

function CaseStudy({ c, reverse }) {
  const ref = useTilt(10)
  return (
    <article className={`case card ${reverse ? 'case--reverse' : ''}`} ref={ref} data-reveal>
      <div className="case-stage">
        <Mockup id={c.id} className={`case-mock ${reverse ? 'tilt-l' : 'tilt-r'}`} />
      </div>
      <div className="case-copy">
        <p className="eyebrow">Case study · {SITES[c.id].industry}</p>
        <h3>{c.name}</h3>
        <p className="case-lead">{c.text}</p>
        <ul className="case-points">
          {c.points.map((x) => (
            <li key={x}><Check size={16} strokeWidth={2} />{x}</li>
          ))}
        </ul>
        <a href={c.url} target="_blank" rel="noreferrer" className="btn btn-ghost">
          View live site <ArrowUpRight size={18} />
        </a>
      </div>
    </article>
  )
}

function Work() {
  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Our work</p>
          <h2>Crafted for every kind of <em className="chrome">ambition.</em></h2>
          <p className="lead">Real projects we’ve launched, plus concepts for the kinds of businesses we build for — each designed around how its customers decide to buy.</p>
        </div>
        <div className="cases">
          {CASES.map((c, i) => <CaseStudy key={c.id} c={c} reverse={i % 2 === 1} />)}
        </div>
        <p className="eyebrow work-sub" data-reveal>Concept designs</p>
        <div className="work-grid">
          {Object.keys(SITES).filter((id) => !SITES[id].featured).map((id, i) => <WorkCard key={id} id={id} i={i} />)}
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">What you get</p>
          <h2>Everything your website needs. <em className="chrome">Nothing it doesn’t.</em></h2>
        </div>
        <div className="services-grid">
          {SERVICES.map(({ Icon, title, text }, i) => (
            <Spotlight key={title} className="service card" data-reveal style={{ '--d': `${(i % 3) * 80}ms` }}>
              <span className="icon-tile"><Icon size={22} strokeWidth={1.6} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Spotlight>
          ))}
        </div>
      </div>
    </section>
  )
}

function Partner() {
  return (
    <section className="section section-tight" id="partner">
      <div className="container">
        <div className="group card" data-reveal>
          <div className="group-copy">
            <p className="eyebrow">In partnership with Vantra Collective</p>
            <h2>A great site is step one. <em className="chrome">Traffic is step two.</em></h2>
            <p className="lead">
              We’ve partnered with Vantra Collective, the brand-to-creator matchmaking agency. Launch your new website alongside a creator campaign from their roster of trusted micro and mid-tier creators — so real customers arrive the day you go live.
            </p>
            <a href={VANTRA_URL} target="_blank" rel="noreferrer" className="btn btn-ghost">
              Visit Vantra Collective <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="group-flow" aria-hidden>
            <div className="flow-node"><Layers size={20} strokeWidth={1.6} /><div><b>Kova Development</b><span>Your website, built to convert</span></div></div>
            <div className="flow-line" />
            <div className="flow-node flow-node--hot"><Sparkles size={20} strokeWidth={1.6} /><div><b>Vantra Collective</b><span>Creator campaigns drive traffic</span></div></div>
            <div className="flow-line" />
            <div className="flow-node"><ServerCog size={20} strokeWidth={1.6} /><div><b>Your business</b><span>Leads, bookings & sales</span></div></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">How it works</p>
          <h2>From first call to launch, <em className="chrome">in four steps.</em></h2>
        </div>
        <ol className="steps">
          {STEPS.map(({ Icon, n, title, text }, i) => (
            <li key={n} className="step card" data-reveal style={{ '--d': `${i * 90}ms` }}>
              <div className="step-top">
                <span className="icon-tile"><Icon size={20} strokeWidth={1.6} /></span>
                <span className="step-n">{n}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function RunningCost() {
  const [picked, setPicked] = useState(() => new Set(['cms']))
  const total = useMemo(
    () => RUNNING_BASE + RUNNING_ADDONS.filter((a) => picked.has(a.id)).reduce((s, a) => s + a.price, 0),
    [picked],
  )
  const toggle = (id) =>
    setPicked((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  return (
    <div className="running card" data-reveal>
      <div className="running-copy">
        <span className="icon-tile"><ServerCog size={22} strokeWidth={1.6} /></span>
        <h3>Monthly running fee</h3>
        <p>
          After launch, you only pay what it costs to keep your site running — hosting, SSL, backups, security updates and monitoring. A simple site costs less; a busy store costs a bit more.
        </p>
        <ul className="running-incl">
          {['Hosting & SSL', 'Daily backups', 'Security updates', 'Uptime monitoring'].map((x) => (
            <li key={x}><Check size={16} strokeWidth={2} />{x}</li>
          ))}
        </ul>
      </div>
      <div className="estimator">
        <p className="estimator-label">Estimate your monthly fee</p>
        <div className="estimator-base"><span>Base running cost</span><b>{CURRENCY}{RUNNING_BASE}</b></div>
        {RUNNING_ADDONS.map((a) => (
          <button
            key={a.id}
            type="button"
            className={`toggle ${picked.has(a.id) ? 'is-on' : ''}`}
            aria-pressed={picked.has(a.id)}
            onClick={() => toggle(a.id)}
          >
            <span className="toggle-box"><Check size={14} strokeWidth={2.5} /></span>
            <span className="toggle-label">{a.label}</span>
            <span className="toggle-price">+{CURRENCY}{a.price}</span>
          </button>
        ))}
        <div className="estimator-total">
          <span>Estimated</span>
          <b>{CURRENCY}{total}<small>/mo</small></b>
        </div>
      </div>
    </div>
  )
}

function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Pricing</p>
          <h2>One fixed price to build. <em className="chrome">A small fee to run.</em></h2>
          <p className="lead">No hourly billing, no surprise invoices. Pick a package for the build, then pay only what your site costs to run each month.</p>
        </div>
        <div className="plans">
          {PACKAGES.map((p, i) => (
            <Spotlight key={p.name} className={`plan card ${p.featured ? 'plan--featured' : ''}`} data-reveal style={{ '--d': `${i * 90}ms` }}>
              {p.featured && <span className="plan-badge">Most popular</span>}
              <h3>{p.name}</h3>
              <p className="plan-blurb">{p.blurb}</p>
              <p className="plan-price">
                {p.price ? (
                  <><b>{CURRENCY}{p.price}</b><span>one-time build</span></>
                ) : (
                  <><b>Custom</b><span>quoted per project</span></>
                )}
              </p>
              <ul>
                {p.features.map((f) => <li key={f}><Check size={16} strokeWidth={2} />{f}</li>)}
              </ul>
              <p className="plan-run">+ monthly running fee from {CURRENCY}{RUNNING_BASE}</p>
              <a href="#contact" className={`btn ${p.featured ? 'btn-primary' : 'btn-ghost'}`}>
                {p.price ? `Start with ${p.name}` : 'Request a quote'} <ArrowRight size={18} />
              </a>
            </Spotlight>
          ))}
        </div>
        <RunningCost />
      </div>
    </section>
  )
}

function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section" id="faq">
      <div className="container container-narrow">
        <div className="section-head" data-reveal>
          <p className="eyebrow">FAQ</p>
          <h2>Questions, <em className="chrome">answered.</em></h2>
        </div>
        <div className="faq" data-reveal>
          {FAQS.map(([q, a], i) => {
            const isOpen = open === i
            return (
              <div key={q} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                <button
                  type="button"
                  id={`faq-q-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{q}</span>
                  <span className="faq-icon"><Plus size={18} strokeWidth={1.75} /></span>
                </button>
                <div className="faq-a" id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`}>
                  <div><p>{a}</p></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const submit = (e) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const body = `Name: ${f.get('name')}\nBusiness: ${f.get('business')}\nEmail: ${f.get('email')}\nPackage: ${f.get('plan')}\n\n${f.get('message')}`
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('New website project — ' + f.get('business'))}&body=${encodeURIComponent(body)}`
  }
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact card" data-reveal>
          <div className="contact-copy">
            <p className="eyebrow">Start a project</p>
            <h2>Let’s build something <em className="chrome">unforgettable.</em></h2>
            <p className="lead">Tell us about your business. We reply within 24 hours with ideas, a timeline and a fixed quote.</p>
            <a className="contact-mail" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}<ArrowUpRight size={18} /></a>
          </div>
          <form className="form" onSubmit={submit}>
            <label><span>Your name</span><input name="name" required autoComplete="name" /></label>
            <label><span>Business</span><input name="business" required autoComplete="organization" /></label>
            <label className="span-2"><span>Email</span><input name="email" type="email" required autoComplete="email" /></label>
            <label className="span-2"><span>Package</span>
              <select name="plan" defaultValue="Business">
                <option>Essential</option><option>Business</option><option>Signature</option><option>Not sure yet</option>
              </select>
            </label>
            <label className="span-2"><span>What are you building?</span><textarea name="message" rows="4" /></label>
            <button className="btn btn-primary span-2" type="submit">Send inquiry <ArrowRight size={18} /></button>
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const company = [
    ['Work', '#work'],
    ['Services', '#services'],
    ['Pricing', '#pricing'],
    ['FAQ', '#faq'],
    ['Contact', '#contact'],
  ]
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo />
            <p className="footer-note">Premium websites for ambitious businesses.</p>
            <div className="socials">
              {SOCIALS.map(({ label, url, Icon }) => (
                <a
                  key={label}
                  className={`social ${url ? '' : 'is-soon'}`}
                  href={url || undefined}
                  target={url ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={url ? label : `${label} (coming soon)`}
                  title={url ? label : `${label} — coming soon`}
                >
                  <Icon width={18} height={18} />
                </a>
              ))}
            </div>
          </div>
          <nav className="footer-col" aria-label="Company">
            <p className="footer-head">Company</p>
            {company.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <nav className="footer-col" aria-label="Legal">
            <p className="footer-head">Legal</p>
            {LEGAL_LINKS.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <div className="footer-col">
            <p className="footer-head">Get in touch</p>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <a href={VANTRA_URL} target="_blank" rel="noreferrer">Partner: Vantra Collective <ArrowUpRight size={14} /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {YEAR} {COMPANY.name}. All rights reserved.</p>
          <p>Designed & built in-house.</p>
        </div>
      </div>
    </footer>
  )
}

function LegalPage({ page }) {
  return (
    <section className="legal">
      <div className="container container-narrow">
        <a href="#top" className="legal-back"><ArrowRight size={16} style={{ transform: 'rotate(180deg)' }} /> Back to home</a>
        <p className="eyebrow">Legal</p>
        <h1>{page.title}</h1>
        <p className="legal-updated">Last updated: {page.updated}</p>
        {page.sections.map(([h, text]) => (
          <div key={h} className="legal-section">
            <h2>{h}</h2>
            <p>{text}</p>
          </div>
        ))}
        <p className="legal-contact">Questions? Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
      </div>
    </section>
  )
}

function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash)
  useEffect(() => {
    const onChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return hash
}

export default function App() {
  const hash = useHashRoute()
  const legalKey = hash.startsWith('#/') ? hash.slice(2) : null
  const legalPage = LEGAL[legalKey]
  useReveal(legalPage ? legalKey : 'home')

  // Switching between home and a legal page: jump to the top or to the requested section.
  useEffect(() => {
    if (legalPage) window.scrollTo(0, 0)
    else if (hash.length > 1) document.getElementById(hash.slice(1))?.scrollIntoView()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [legalKey])

  if (legalPage) {
    return (
      <>
        <Header />
        <main><LegalPage page={legalPage} /></main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Services />
        <Partner />
        <Process />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
