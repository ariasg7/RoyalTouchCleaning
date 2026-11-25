'use client'

import { useEffect, useRef, useState } from 'react'
import {
  Phone, ShieldCheck, Sparkles, Leaf, CalendarClock, Home, Building2, KeyRound, Briefcase,
  ArrowRight, ArrowUpRight, MoveHorizontal, Check, Menu, X, Crown, MapPin, Mail, Star, Quote as QuoteIcon,
} from 'lucide-react'

const PHONE = '(312) 375-0499'
const TEL = 'tel:+13123750499'
const links = [
  ['Services', '#services'], ['Results', '#results'], ['About Us', '#about'],
  ['Pricing', '#quote'], ['Service Areas', '#areas'], ['Contact', '#contact'],
]
const U = (id: string, w = 1200) => `https://images.unsplash.com/${id}?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=${w}`

/* Scroll reveal */
function Reveal({ children, d = 0, className = '' }: { children: React.ReactNode; d?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current!
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in'); io.disconnect() } }, { threshold: 0.12 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return <div ref={ref} style={{ ['--d' as string]: `${d}ms` }} className={`reveal ${className}`}>{children}</div>
}

function Spark({ className = '', size = 18 }: { className?: string; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={`animate-twinkle text-gold-light ${className}`} fill="currentColor">
      <path d="M12 0c.8 6.6 3.4 10.2 12 12-8.6 1.8-11.2 5.4-12 12-.8-6.6-3.4-10.2-12-12C8.6 10.2 11.2 6.6 12 0z" />
    </svg>
  )
}

function GoldButton({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} className={`bg-gold-gradient group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-4 text-sm font-bold tracking-wide text-midnight shadow-[0_10px_40px_-8px_rgba(212,175,55,0.65)] transition hover:-translate-y-0.5 ${className}`}>
      <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-20 bg-white/50 blur-md transition-none group-hover:animate-[shine_.9s_ease]" />
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </a>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-ink/60 py-2 pr-2 pl-5 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
        <a href="#top"><img src="/img/RoyalTouchClean_nobg.png" alt="Royal Touch Cleaning Services" className="h-16 w-auto" /></a>
        <nav className="hidden items-center gap-7 xl:flex">
          {links.filter(([l]) => l !== 'Results').map(([l, h]) => (
            <a key={l} href={h} className="relative text-[13px] font-medium text-silver transition after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:text-white hover:after:w-full">{l}</a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href={TEL} className="flex items-center gap-2 rounded-full border border-gold/40 px-4 py-2.5 text-[13px] font-semibold text-gold-light transition hover:bg-gold/10">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" /><span className="relative h-2 w-2 rounded-full bg-gold" /></span>
            {PHONE}
          </a>
          <GoldButton href="#quote" className="!px-6 !py-2.5">Book Now</GoldButton>
        </div>
        <button className="mr-3 lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-white/10 bg-ink/95 p-6 backdrop-blur-2xl lg:hidden">
          {links.map(([l, h]) => <a key={l} href={h} onClick={() => setOpen(false)} className="block py-2.5 font-serif text-2xl">{l}</a>)}
          <div className="mt-4 flex flex-col gap-3">
            <a href={TEL} className="flex items-center justify-center gap-2 rounded-full border border-gold/40 py-3.5 text-gold-light"><Phone size={15} /> {PHONE}</a>
            <GoldButton href="#quote">Book Now</GoldButton>
          </div>
        </div>
      )}
    </header>
  )
}

const badges = [
  [ShieldCheck, 'Reliable & Trusted'], [Sparkles, 'Detailed Cleaning'],
  [Leaf, 'Eco-Friendly Products'], [CalendarClock, 'Flexible Schedule'],
] as const

function Words({ text, start = 0, className = '' }: { text: string; start?: number; className?: string }) {
  return (
    <>
      {text.split(' ').map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <span className={`word ${className}`} style={{ ['--w' as string]: `${start + i * 110}ms` }}>{w}&nbsp;</span>
        </span>
      ))}
    </>
  )
}

const sparks = [
  'top-[22%] left-[10%]', 'top-[34%] right-[12%]', 'top-[62%] left-[18%]', 'top-[18%] right-[30%]', 'top-[55%] right-[8%]', 'top-[28%] left-[30%]',
]

function Hero() {
  const ref = useRef<HTMLElement>(null)
  const onMove = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect()
    ref.current!.style.setProperty('--mx', `${e.clientX - r.left}px`)
    ref.current!.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  const field = 'w-full bg-transparent text-sm font-semibold text-white focus:outline-none [color-scheme:dark]'
  return (
    <section id="top" ref={ref} onMouseMove={onMove} className="relative overflow-hidden bg-ink">
      {/* Cinematic background */}
      <div className="absolute inset-0 overflow-hidden">
        <img src={U('photo-1628744876497-eb30460be9f6', 2000)} alt="" className="kenburns h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,15,0.85)_0%,rgba(11,19,43,0.7)_45%,#05070f_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(212,175,55,0.28),transparent)]" />
        <div className="beam absolute -top-20 left-1/2 h-[140%] w-40 -translate-x-1/2 rotate-[18deg] bg-gradient-to-b from-gold-light/30 via-gold/5 to-transparent blur-2xl" />
        <div className="absolute inset-0 opacity-80 [background:radial-gradient(500px_circle_at_var(--mx,50%)_var(--my,30%),rgba(212,175,55,0.14),transparent_60%)]" />
      </div>
      {sparks.map((c, i) => <Spark key={i} className={`absolute ${c} hidden md:block`} size={12 + (i % 3) * 7} />)}

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-5 pt-36 pb-48 text-center">
        <Reveal>
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-gold/30 bg-ink/50 py-2 pr-5 pl-2 backdrop-blur">
            <span className="bg-gold-gradient flex h-8 w-8 items-center justify-center rounded-full text-midnight"><Crown size={16} /></span>
            <span className="text-[11px] font-semibold tracking-[0.28em] text-gold-light uppercase">A Cleaner Space ✦ A Brighter Day</span>
          </div>
        </Reveal>
        <h1 className="font-serif text-[3.2rem] leading-[0.95] font-semibold tracking-tight sm:text-7xl lg:text-[7.5rem]">
          <Words text="Experience the" /><br />
          <Words text="Royal Treatment" start={300} className="text-gold-gradient italic" /><br />
          <span className="text-[0.62em] font-medium text-white/90"><Words text="for Your Space" start={650} /></span>
        </h1>
        <Reveal d={900}>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-silver sm:text-xl">
            Professional, detailed, and eco-friendly cleaning services tailored for houses, apartments, Airbnbs, and offices.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <GoldButton href="#quote">Schedule a Cleaning <ArrowRight size={16} /></GoldButton>
            <a href={TEL} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-ink/40 px-8 py-4 text-sm font-bold backdrop-blur transition hover:border-gold hover:text-gold-light">
              <Phone size={16} /> Call {PHONE}
            </a>
          </div>
        </Reveal>
      </div>

      {/* Quick quote bar docked to the hero's lower edge */}
      <div className="absolute inset-x-0 bottom-[5.5rem] z-10 hidden px-5 lg:block">
        <Reveal d={1100}>
          <form action="#quote" className="mx-auto grid max-w-4xl grid-cols-[1fr_1fr_1fr_auto] items-center gap-2 rounded-full border border-white/15 bg-ink/70 p-2 pl-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
            {[
              ['Property', <select key="a" className={field} defaultValue="House">{['House', 'Apartment', 'Airbnb', 'Office'].map((o) => <option key={o} className="text-black">{o}</option>)}</select>],
              ['Bedrooms', <select key="b" className={field} defaultValue="2">{['Studio', '1', '2', '3', '4', '5+'].map((o) => <option key={o} className="text-black">{o}</option>)}</select>],
              ['Date', <input key="c" type="date" className={field} />],
            ].map(([l, el], i) => (
              <label key={i} className="block rounded-full px-5 py-2 transition hover:bg-white/5">
                <span className="block text-[10px] font-bold tracking-[0.25em] text-gold uppercase">{l as string}</span>{el}
              </label>
            ))}
            <button className="bg-gold-gradient rounded-full px-8 py-4 text-sm font-bold text-midnight transition hover:brightness-110">Get a Quote</button>
          </form>
        </Reveal>
      </div>

      {/* Trust badges + ticker */}
      <div className="relative border-t border-white/10 bg-ink/80 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {badges.map(([Icon, label]) => (
            <div key={label} className="flex items-center justify-center gap-3 border-white/10 px-4 py-6 not-last:border-r">
              <Icon className="shrink-0 text-gold" size={22} strokeWidth={1.5} />
              <span className="text-[13px] font-semibold">{label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative overflow-hidden border-y border-gold/20 bg-gold-gradient py-4 text-midnight">
        <div className="flex w-max animate-marquee gap-10 font-serif text-2xl font-semibold whitespace-nowrap italic">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-10">
              {['Houses', 'Apartments', 'Airbnb Turnovers', 'Offices', 'Eco-Friendly', 'Deep Cleaning', 'Move-In / Move-Out', 'Flexible Scheduling'].map((t) => (
                <span key={t} className="flex items-center gap-10">{t} <Spark className="!text-midnight" size={14} /></span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SectionHead({ n, eyebrow, title, className = '' }: { n: string; eyebrow: string; title: React.ReactNode; className?: string }) {
  return (
    <Reveal className={`mb-16 ${className}`}>
      <p className="mb-5 flex items-center gap-4 text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">
        <span className="font-serif text-lg tracking-normal">{n}</span><span className="h-px w-12 bg-gold/60" />{eyebrow}
      </p>
      <h2 className="font-serif text-5xl leading-[0.98] font-semibold tracking-tight sm:text-7xl">{title}</h2>
    </Reveal>
  )
}

const services = [
  [Home, 'Houses', 'Top-to-bottom care, from routine upkeep to deep cleans.', 'photo-1599696848652-f0ff23bc911f'],
  [Building2, 'Apartments', 'Meticulous city living, including move-in and move-out turnovers.', 'photo-1616594039964-ae9021a400a0'],
  [KeyRound, 'Airbnb / Short-Term Rentals', 'Hotel-grade turnovers, fresh linens, guest-ready every time.', 'photo-1759264244726-adde4e4318fc'],
  [Briefcase, 'Offices', 'Polished workspaces that impress clients and energize teams.', 'photo-1643267514395-b36b3f7e8281'],
] as const

function Services() {
  return (
    <section id="services" className="relative bg-ink py-28">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead n="01" eyebrow="What We Do" title={<>Our Specialized<br /><span className="text-gold-gradient italic">Cleaning Services</span></>} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(([Icon, title, text, img], i) => (
            <Reveal key={title} d={i * 100} className={i % 2 ? 'lg:translate-y-12' : ''}>
              <a href="#quote" className="group relative block aspect-[3/4] overflow-hidden rounded-[2rem] border border-gold/30 transition hover:border-gold">
                <img src={U(img, 900)} alt={title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-midnight/20" />
                <div className="absolute inset-0 bg-gold/0 transition group-hover:bg-gold/10" />
                <span className="absolute top-5 left-5 flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 bg-ink/50 text-gold backdrop-blur"><Icon size={22} strokeWidth={1.6} /></span>
                <span className="font-serif absolute top-6 right-6 text-4xl text-white/30">0{i + 1}</span>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-serif text-3xl leading-none font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-silver">{text}</p>
                  <span className="mt-5 flex items-center justify-between border-t border-white/15 pt-4 text-sm font-semibold text-gold-light">
                    Learn More
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-gradient text-midnight transition group-hover:rotate-45"><ArrowUpRight size={16} /></span>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

const cases = [
  { label: 'Living Room', src: U('photo-1628744876497-eb30460be9f6', 1600), note: 'Deep clean · 4 hours' },
  { label: 'Kitchen', src: U('photo-1649083048428-3d8ed23a3ce0', 1600), note: 'Degrease & sanitize · 3 hours' },
  { label: 'Bathroom', src: U('photo-1629079447777-1e605162dc8d', 1600), note: 'Descale & polish · 2 hours' },
]

function Compare({ src, alt }: { src: string; alt: string }) {
  const [pos, setPos] = useState(50)
  const ref = useRef<HTMLDivElement>(null)
  const drag = useRef(false)
  const move = (x: number) => {
    const r = ref.current!.getBoundingClientRect()
    setPos(Math.min(100, Math.max(0, ((x - r.left) / r.width) * 100)))
  }
  return (
    <div ref={ref}
      className="relative aspect-[4/3] w-full cursor-ew-resize touch-pan-y overflow-hidden rounded-[1.5rem] select-none sm:aspect-[16/9]"
      onPointerDown={(e) => { drag.current = true; e.currentTarget.setPointerCapture(e.pointerId); move(e.clientX) }}
      onPointerMove={(e) => drag.current && move(e.clientX)}
      onPointerUp={() => (drag.current = false)}>
      <img src={src} alt={`${alt} after cleaning`} draggable={false} className="absolute inset-0 h-full w-full object-cover" />
      {/* Before: same space shown dull and grimy until real project photos are supplied */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={src} alt={`${alt} before cleaning`} draggable={false} className="h-full w-full object-cover [filter:grayscale(0.55)_sepia(0.35)_brightness(0.62)_contrast(0.9)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(60,40,10,0.45),transparent_45%),radial-gradient(circle_at_75%_30%,rgba(40,30,10,0.35),transparent_40%)]" />
      </div>
      <span className="absolute top-4 left-4 rounded-full bg-ink/80 px-4 py-1.5 text-[11px] font-bold tracking-widest uppercase backdrop-blur">Before</span>
      <span className="bg-gold-gradient absolute top-4 right-4 rounded-full px-4 py-1.5 text-[11px] font-bold tracking-widest text-midnight uppercase">After</span>
      <div className="absolute top-0 bottom-0 w-px bg-gold-light shadow-[0_0_20px_4px_rgba(212,175,55,0.7)]" style={{ left: `${pos}%` }}>
        <span className="bg-gold-gradient absolute top-1/2 left-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-midnight shadow-xl ring-8 ring-gold/20"><MoveHorizontal size={22} /></span>
      </div>
      <input type="range" min={0} max={100} value={pos} onChange={(e) => setPos(+e.target.value)} aria-label="Before and after slider" className="sr-only" />
    </div>
  )
}

function Results() {
  const [i, setI] = useState(0)
  const c = cases[i]
  return (
    <section id="results" className="relative overflow-hidden bg-midnight py-28 lg:pt-44">
      <div className="pointer-events-none absolute top-0 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]" />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHead n="02" eyebrow="The Royal Difference" title={<>See the <span className="text-gold-gradient italic">Before &amp; After</span></>} />
        <Reveal>
          <div className="mb-6 flex flex-wrap items-center gap-2">
            {cases.map((x, n) => (
              <button key={x.label} onClick={() => setI(n)}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition ${n === i ? 'bg-gold-gradient text-midnight' : 'border border-white/15 text-silver hover:border-gold/60 hover:text-white'}`}>{x.label}</button>
            ))}
            <span className="ml-auto hidden text-sm text-silver sm:block">{c.note}</span>
          </div>
          <div className="rounded-[2rem] border border-gold/30 bg-ink/50 p-2.5 shadow-[0_40px_100px_-40px_rgba(212,175,55,0.35)]">
            <Compare key={c.src} src={c.src} alt={c.label} />
          </div>
          <p className="mt-5 flex items-center justify-center gap-2 text-sm text-silver"><MoveHorizontal size={14} className="text-gold" /> Drag to reveal the transformation</p>
        </Reveal>
      </div>
    </section>
  )
}

const features = [
  ['Eco-Friendly Guarantee', 'Plant-based, non-toxic products that are safe for children, pets, and the planet. Always.'],
  ['Vetted Professionals', 'Background-checked, trained, and insured cleaners who treat your space like royalty.'],
  ['Satisfaction Checklist', 'A room-by-room checklist on every visit. Not delighted? We will re-clean it free.'],
]

function EcoBadge() {
  const text = '100% ECO-FRIENDLY PRODUCTS ✦ 100% ECO-FRIENDLY PRODUCTS ✦ '
  return (
    <div className="relative mx-auto aspect-square w-72 sm:w-96">
      <div className="absolute inset-0 rounded-full bg-gold/20 blur-3xl" />
      <svg viewBox="0 0 200 200" className="animate-spin-slow absolute inset-0 h-full w-full">
        <defs><path id="c" d="M100,100 m-82,0 a82,82 0 1,1 164,0 a82,82 0 1,1 -164,0" /></defs>
        <text className="fill-gold-light text-[11.5px] font-bold tracking-[0.2em]"><textPath href="#c">{text}</textPath></text>
      </svg>
      <div className="absolute inset-[16%] flex flex-col items-center justify-center rounded-full border-2 border-gold bg-gradient-to-b from-navy to-ink text-center shadow-[inset_0_0_60px_rgba(212,175,55,0.15)]">
        <Leaf className="mb-1 text-gold" size={34} strokeWidth={1.4} />
        <p className="text-gold-gradient font-serif text-6xl leading-none font-bold sm:text-7xl">100%</p>
        <p className="mt-1 text-[11px] tracking-[0.3em] text-silver uppercase">Eco-Friendly</p>
      </div>
    </div>
  )
}

function Why() {
  return (
    <section id="about" className="relative overflow-hidden bg-ink py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHead n="03" eyebrow="Why Royal Touch" className="!mb-10" title={<>A standard of clean <span className="text-gold-gradient italic">fit for royalty</span></>} />
          <Reveal><EcoBadge /></Reveal>
        </div>
        <div className="divide-y divide-white/10 self-center border-y border-white/10">
          {features.map(([t, d], i) => (
            <Reveal key={t} d={i * 100}>
              <div className="spot group relative flex gap-6 px-2 py-10 transition sm:gap-10 sm:px-6"
                onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`); e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`) }}>
                <span className="text-outline font-serif text-7xl leading-none font-semibold transition group-hover:text-gold sm:text-8xl">0{i + 1}</span>
                <div className="self-center">
                  <h3 className="font-serif text-3xl font-semibold sm:text-4xl">{t}</h3>
                  <p className="mt-3 max-w-md leading-relaxed text-silver">{d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

const reviews = [
  { name: 'Danielle R.', role: 'Homeowner · Lincoln Park', type: 'House', text: 'Walking back into my home felt like checking into a five-star hotel. Every baseboard, every corner. The attention to detail is unreal.' },
  { name: 'Marcus T.', role: 'Airbnb Host · River North', type: 'Airbnb', text: 'Turnovers are flawless and always on time. My guest reviews now mention how spotless the place is.' },
  { name: 'Priya S.', role: 'Apartment · West Loop', type: 'Apartment', text: 'Everything is eco-friendly. No harsh smells, safe for my dog, and the place still sparkles.' },
  { name: 'Jordan & Co.', role: 'Office Manager · The Loop', type: 'Office', text: 'Our office looks sharp every Monday morning. Clients notice, and the team is more energized.' },
  { name: 'Elena M.', role: 'Homeowner · Oak Park', type: 'House', text: 'Punctual, polite, and thorough beyond what I expected. The checklist at the end is a lovely touch.' },
  { name: 'Chris W.', role: 'Property Manager · Gold Coast', type: 'Airbnb', text: 'I manage six units and Royal Touch handles them all seamlessly. Linens fresh, staging perfect, zero stress.' },
  { name: 'Amara O.', role: 'Apartment · Lakeview', type: 'Apartment', text: 'Booked a move-out clean and got my full deposit back. Worth every penny.' },
  { name: 'Studio Nine', role: 'Creative Agency · Fulton Market', type: 'Office', text: 'Discreet, dependable, and the space always feels brand new. Our go-to cleaning partner.' },
]

function ReviewCard({ r }: { r: (typeof reviews)[number] }) {
  return (
    <figure className="flex w-[17.5rem] shrink-0 snap-center flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 whitespace-normal transition hover:border-gold/50 hover:bg-white/[0.07] sm:w-80">
      <div>
        <div className="mb-3 flex items-center justify-between">
          <div className="flex gap-0.5 text-gold">{Array.from({ length: 5 }).map((_, k) => <Star key={k} size={12} fill="currentColor" />)}</div>
          <span className="text-[10px] font-bold tracking-widest text-gold/80 uppercase">{r.type}</span>
        </div>
        <blockquote className="text-sm leading-relaxed text-white/90">&ldquo;{r.text}&rdquo;</blockquote>
      </div>
      <figcaption className="mt-5 flex items-center gap-3">
        <span className="bg-gold-gradient flex h-8 w-8 items-center justify-center rounded-full font-serif text-sm font-bold text-midnight">{r.name[0]}</span>
        <span className="leading-tight">
          <span className="block text-[13px] font-semibold">{r.name}</span>
          <span className="block text-[11px] text-silver">{r.role}</span>
        </span>
      </figcaption>
    </figure>
  )
}

function Testimonials() {
  return (
    <section id="reviews" className="relative overflow-hidden border-y border-white/5 bg-ink py-14 sm:py-16">
      <div className="mx-auto max-w-[90rem] px-5 sm:px-10">
        <Reveal className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 flex items-center gap-3 text-[11px] font-semibold tracking-[0.3em] text-gold uppercase">
              <span className="font-serif text-base tracking-normal">04</span><span className="h-px w-8 bg-gold/60" />Kind Words
            </p>
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Treated like <span className="text-gold-gradient italic">royalty</span></h2>
          </div>
          <div className="text-right">
            <div className="flex justify-end gap-0.5 text-gold">{Array.from({ length: 5 }).map((_, k) => <Star key={k} size={16} fill="currentColor" />)}</div>
            <p className="mt-1.5 text-[11px] tracking-widest text-silver uppercase md:hidden">Swipe →</p>
          </div>
        </Reveal>
      </div>

      {/* Mobile: swipeable snap row */}
      <div className="-mb-2 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden">
        {reviews.map((r) => <ReviewCard key={r.name} r={r} />)}
      </div>

      {/* Desktop: one full-bleed marquee */}
      <div className="marquee-pause hidden overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)] md:block">
        <div className="marquee-slow flex w-max gap-4 [animation-duration:60s]">
          {[0, 1].map((k) => (
            <div key={k} className="flex gap-4" aria-hidden={k > 0}>
              {reviews.map((r) => <ReviewCard key={r.name} r={r} />)}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const types = [['House', Home], ['Apartment', Building2], ['Airbnb', KeyRound], ['Office', Briefcase]] as const

function Stepper({ label, value, set, min = 0 }: { label: string; value: number; set: (n: number) => void; min?: number }) {
  const b = 'h-9 w-9 rounded-full border border-gold/40 text-lg text-gold-light transition hover:bg-gold hover:text-midnight'
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
      <span className="text-silver">{label}</span>
      <div className="flex items-center gap-4">
        <button type="button" className={b} onClick={() => set(Math.max(min, value - 1))} aria-label={`Fewer ${label}`}>−</button>
        <span className="w-6 text-center font-serif text-2xl font-semibold">{value}</span>
        <button type="button" className={b} onClick={() => set(Math.min(10, value + 1))} aria-label={`More ${label}`}>+</button>
      </div>
    </div>
  )
}

function Quote() {
  const [step, setStep] = useState(1)
  const [type, setType] = useState('House')
  const [beds, setBeds] = useState(2)
  const [baths, setBaths] = useState(1)
  const [date, setDate] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const input = 'w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white placeholder:text-silver/50 transition focus:border-gold focus:bg-white/[0.07] focus:outline-none'

  return (
    <section id="quote" className="relative overflow-hidden bg-midnight py-28">
      <div className="pointer-events-none absolute -right-40 top-0 h-[40rem] w-[40rem] rounded-full bg-gold/15 blur-[150px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-blue-600/25 blur-[150px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHead n="05" eyebrow="Instant Quote" className="!mb-8" title={<>Book your <span className="text-gold-gradient italic">royal clean</span></>} />
          <Reveal>
            <p className="max-w-md text-lg leading-relaxed text-silver">Three quick steps and we will get back to you with a tailored quote. Prefer to talk? We pick up.</p>
            <a href={TEL} className="mt-8 inline-flex items-center gap-4 rounded-full border border-gold/40 py-2 pr-7 pl-2 transition hover:bg-gold/10">
              <span className="bg-gold-gradient flex h-12 w-12 items-center justify-center rounded-full text-midnight"><Phone size={20} /></span>
              <span><span className="block text-[11px] tracking-widest text-silver uppercase">Call us</span><span className="font-serif text-2xl font-semibold">{PHONE}</span></span>
            </a>
          </Reveal>
        </div>
        <Reveal d={150}>
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-6 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:p-10">
            {done ? (
              <div className="py-12 text-center">
                <span className="bg-gold-gradient mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full text-midnight"><Check size={36} /></span>
                <h3 className="font-serif text-4xl font-semibold">Thank you, {name || 'valued guest'}</h3>
                <p className="mt-3 text-silver">We received your request for a {type.toLowerCase()} cleaning and will contact you shortly with your quote.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setDone(true) }}>
                <div className="mb-8 flex items-center gap-2">
                  {[1, 2, 3].map((n) => <div key={n} className={`h-1 flex-1 rounded-full transition-all duration-500 ${n <= step ? 'bg-gold-gradient' : 'bg-white/10'}`} />)}
                  <span className="ml-3 text-[11px] font-semibold tracking-widest text-gold uppercase">0{step} / 03</span>
                </div>
                {step === 1 && (
                  <div>
                    <h3 className="mb-6 font-serif text-3xl font-semibold">What are we cleaning?</h3>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {types.map(([t, Icon]) => (
                        <button type="button" key={t} onClick={() => setType(t)}
                          className={`flex flex-col items-center gap-3 rounded-2xl border px-3 py-7 transition ${type === t ? 'border-gold bg-gold/10 text-gold-light shadow-[0_0_30px_-8px_rgba(212,175,55,0.6)]' : 'border-white/10 text-silver hover:border-gold/50'}`}>
                          <Icon size={26} strokeWidth={1.5} /><span className="text-sm font-semibold">{t}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                {step === 2 && (
                  <div className="space-y-3">
                    <h3 className="mb-6 font-serif text-3xl font-semibold">Size and timing</h3>
                    <Stepper label="Bedrooms" value={beds} set={setBeds} />
                    <Stepper label="Bathrooms" value={baths} set={setBaths} min={1} />
                    <label className="block pt-2">
                      <span className="mb-2 block text-sm text-silver">Preferred date</span>
                      <input type="date" required value={date} onChange={(e) => setDate(e.target.value)} className={`${input} [color-scheme:dark]`} />
                    </label>
                  </div>
                )}
                {step === 3 && (
                  <div className="space-y-3">
                    <h3 className="mb-6 font-serif text-3xl font-semibold">Where do we send your quote?</h3>
                    <input required placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} className={input} />
                    <input required type="tel" placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} className={input} />
                    <input required type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} className={input} />
                    <p className="rounded-2xl border border-gold/20 bg-gold/5 p-4 text-sm text-gold-light">{type} · {beds} bed · {baths} bath · {date || 'date TBD'}</p>
                  </div>
                )}
                <div className="mt-8 flex justify-between gap-4">
                  {step > 1 ? <button type="button" onClick={() => setStep(step - 1)} className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold hover:border-gold">Back</button> : <span />}
                  {step < 3 ? (
                    <button type="button" onClick={() => { if (step === 2 && !date) return setDate(new Date().toISOString().slice(0, 10)); setStep(step + 1) }}
                      className="bg-gold-gradient inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold text-midnight hover:brightness-110">Continue <ArrowRight size={16} /></button>
                  ) : (
                    <button type="submit" className="bg-gold-gradient inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold text-midnight hover:brightness-110">Get My Quote</button>
                  )}
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-ink pt-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <img src="/img/RoyalTouchClean_nobg.png" alt="Royal Touch Cleaning Services" className="h-36 w-auto" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-silver">A Cleaner Space ✦ A Brighter Day. Premium, eco-friendly cleaning for homes, rentals, and offices.</p>
        </div>
        <div>
          <h4 className="mb-5 text-[11px] font-bold tracking-[0.3em] text-gold uppercase">Explore</h4>
          <ul className="space-y-3 text-sm text-silver">{links.map(([l, h]) => <li key={l}><a href={h} className="transition hover:text-gold-light">{l}</a></li>)}</ul>
        </div>
        <div id="areas">
          <h4 className="mb-5 text-[11px] font-bold tracking-[0.3em] text-gold uppercase">Service Areas</h4>
          <ul className="space-y-3 text-sm text-silver">{['Chicago', 'Evanston', 'Oak Park', 'Naperville', 'Surrounding suburbs'].map((a) => <li key={a} className="flex items-center gap-2"><MapPin size={13} className="text-gold" />{a}</li>)}</ul>
        </div>
        <div>
          <h4 className="mb-5 text-[11px] font-bold tracking-[0.3em] text-gold uppercase">Contact</h4>
          <ul className="space-y-3 text-sm text-silver">
            <li><a href={TEL} className="flex items-center gap-2 transition hover:text-gold-light"><Phone size={14} className="text-gold" />{PHONE}</a></li>
            <li className="flex items-center gap-2"><Mail size={14} className="text-gold" />hello@royaltouchcleaning.com</li>
          </ul>
          <GoldButton href="#quote" className="mt-6 !py-3">Book Now</GoldButton>
        </div>
      </div>
      <p className="text-outline pointer-events-none mt-16 text-center font-serif text-[18vw] leading-[0.8] font-semibold select-none">Royal Touch</p>
      <div className="relative border-t border-white/10 bg-ink px-5 py-6 text-center text-xs text-silver/70">
        © 2026 Royal Touch Cleaning Services. All rights reserved.
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Results />
        <Why />
        <Testimonials />
        <Quote />
      </main>
      <Footer />
    </>
  )
}
