import { useEffect, useRef, useState, type ReactNode } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, Heart, Leaf, MapPin, MoveUpRight, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useSite } from '../lib/site-store'
import { safaris, type Safari } from '../lib/data'

export function AcaciaMark({ className = '' }: { className?: string }) {
  return <svg viewBox="0 0 68 56" fill="none" className={className} aria-hidden="true"><path d="M33 48V28m0 11L18 24m15 9 15-14m-15 8-3-10m-8 34h23" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /><path d="M7 24c-4-4 0-9 5-9-1-6 7-9 12-7 2-7 12-8 16-3 7-3 15 2 15 7 8-1 12 6 9 10-10 4-44 7-57 2Z" fill="currentColor" /><path d="M13 48c12 5 33 5 46-1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
}

export function Logo({ light = false }: { light?: boolean }) {
  return <Link to="/" className={`brand ${light ? 'brand-light' : ''}`} aria-label="Kibira Safaris homepage"><AcaciaMark /><span className="brand-type">KIBIRA<span className="brand-bottom"><i /> SAFARIS <i /></span></span></Link>
}

export function ButtonLink({ to, children, variant = 'primary', className = '', arrow = true }: { to: string; children: ReactNode; variant?: 'primary' | 'outline' | 'light'; className?: string; arrow?: boolean }) {
  return <Link to={to} className={`button button-${variant} ${className}`}>{children}{arrow && <ArrowUpRight size={17} />}</Link>
}

export function TextLink({ to, children, light = false }: { to: string; children: ReactNode; light?: boolean }) {
  return <Link className={`text-link ${light ? 'text-link-light' : ''}`} to={to}>{children}<ArrowUpRight size={17} /></Link>
}

export function SectionHeading({ eyebrow, title, italic, description, link, centered = false }: { eyebrow: string; title: string; italic?: string; description?: string; link?: { to: string; text: string }; centered?: boolean }) {
  return <div className={`section-heading ${centered ? 'section-heading-centered' : ''}`}><div><p className="eyebrow"><span />{eyebrow}</p><h2>{title}{italic && <><br /><em>{italic}</em></>}</h2>{description && <p className="section-description">{description}</p>}</div>{link && <TextLink to={link.to}>{link.text}</TextLink>}</div>
}

export function SafariCard({ safari }: { safari: Safari }) {
  const { saved, toggleSaved } = useSite()
  const selected = saved.includes(safari.slug)
  return <article className="safari-card"><div className="safari-card-image"><Link to={`/safaris/${safari.slug}`} tabIndex={-1} aria-label={safari.title}><img src={safari.image} alt={safari.title === 'Gorillas & the Great Rift' ? 'A mountain gorilla in the green forests of Uganda' : safari.title} loading="lazy" /></Link><span className="image-tag">{safari.tag}</span><button className={`save-button ${selected ? 'is-saved' : ''}`} onClick={() => toggleSaved(safari.slug)} aria-label={`${selected ? 'Remove' : 'Save'} ${safari.title}`} aria-pressed={selected}><Heart size={17} fill={selected ? 'currentColor' : 'none'} /></button><span className="card-duration">{safari.days} days · Private safari</span></div><div className="safari-card-content"><p className="card-location"><MapPin size={12} />{safari.country}<span>•</span>{safari.category}</p><Link to={`/safaris/${safari.slug}`}><h3>{safari.title}</h3></Link><p className="card-route">{safari.places.slice(0, 3).join(' · ')}</p><div className="card-bottom"><span>Thoughtfully tailored to you</span><Link to={`/safaris/${safari.slug}`} aria-label={`Explore ${safari.title}`} className="circle-link"><ArrowUpRight size={20} /></Link></div></div></article>
}

export function PageHero({ eyebrow, title, italic, text, image, children, className = '' }: { eyebrow: string; title: string; italic?: string; text?: string; image?: string; children?: ReactNode; className?: string }) {
  return <section className={`page-hero ${image ? 'page-hero-photo' : ''} ${className}`}>{image && <><img className="page-hero-image" src={image} alt="" /><div className="page-hero-shade" /></>}<div className="container page-hero-content"><p className="eyebrow"><span />{eyebrow}</p><h1>{title}{italic && <><br /><em>{italic}</em></>}</h1>{text && <p className="page-hero-text">{text}</p>}{children}</div>{image && <div className="page-hero-label"><MapPin size={13} />EAST AFRICA, A LITTLE CLOSER</div>}</section>
}

export function Accordion({ items, defaultOpen = -1 }: { items: { title: string; text: string }[]; defaultOpen?: number }) {
  const [open, setOpen] = useState(defaultOpen)
  return <div className="accordion">{items.map((item, index) => <div className={`accordion-item ${open === index ? 'accordion-open' : ''}`} key={item.title}><button aria-expanded={open === index} onClick={() => setOpen(open === index ? -1 : index)}><span>{item.title}</span><ChevronDown size={18} /></button>{open === index && <div className="accordion-body"><p>{item.text}</p></div>}</div>)}</div>
}

export function JourneyCTA() {
  return <section className="journey-cta"><div className="cta-leaf"><Leaf size={140} strokeWidth={.45} /></div><div className="container cta-inner"><div><p className="eyebrow"><span />THE BEST JOURNEYS START WITH A CONVERSATION</p><h2>Your kind of wild.<br /><em>Let’s find it together.</em></h2><p>Tell us what moves you. We’ll help shape the journey.</p></div><ButtonLink to="/plan-your-safari" variant="light">Let’s plan your safari</ButtonLink></div></section>
}

export function Modal({ children, label, onClose, className = '' }: { children: ReactNode; label: string; onClose: () => void; className?: string }) {
  const dialog = useRef<HTMLDivElement>(null)
  const closeRef = useRef(onClose)
  useEffect(() => { closeRef.current = onClose }, [onClose])
  useEffect(() => {
    const previous = document.activeElement as HTMLElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const timer = window.setTimeout(() => dialog.current?.querySelector<HTMLElement>('button, a, input, select, video')?.focus(), 30)
    function handleKey(event: KeyboardEvent) {
      if (event.key === 'Escape') closeRef.current()
      if (event.key === 'Tab') {
        const list = dialog.current?.querySelectorAll<HTMLElement>('button, a, input, select, textarea, video, [tabindex="0"]')
        if (!list?.length) return
        const first = list[0], last = list[list.length - 1]
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => { window.clearTimeout(timer); document.body.style.overflow = previousOverflow; document.removeEventListener('keydown', handleKey); previous?.focus() }
  }, [])
  return <div className="modal-backdrop" onClick={onClose}><div className={`modal ${className}`} ref={dialog} role="dialog" aria-modal="true" aria-label={label} onClick={(e) => e.stopPropagation()}><button className="modal-close" onClick={onClose} aria-label="Close dialog"><X size={22} /></button>{children}</div></div>
}

export function GlobalOverlays() {
  const { saved, savedOpen, setSavedOpen, filmOpen, setFilmOpen, toast, toggleSaved } = useSite()
  const selected = safaris.filter((safari) => saved.includes(safari.slug))
  return <>{filmOpen && <Modal label="A glimpse of the wild — safari film" onClose={() => setFilmOpen(false)} className="film-modal"><div className="film-heading"><p className="eyebrow">A LITTLE CLOSER TO THE WILD</p><h2>Some things are better felt.</h2></div><video src="/videos/safari-film.mp4" controls autoPlay playsInline poster="/images/hero-safari.webp" aria-label="Elephants walking through the African grasslands" /><p className="film-caption">A moment in the wild. Footage by Roman Odintsov / Pexels.</p></Modal>}{savedOpen && <Modal label="Your safari shortlist" onClose={() => setSavedOpen(false)} className="shortlist-modal"><p className="eyebrow">DREAM NOW. WANDER LATER.</p><h2>Your little list<br /><em>of big adventures.</em></h2>{selected.length ? <><p className="muted">{selected.length} {selected.length === 1 ? 'journey' : 'journeys'} to come back to.</p><div className="shortlist-items">{selected.map((safari) => <div className="shortlist-item" key={safari.slug}><img src={safari.image} alt="" /><div><span className="eyebrow">{safari.country} · {safari.days} DAYS</span><Link to={`/safaris/${safari.slug}`} onClick={() => setSavedOpen(false)}>{safari.title}<ArrowUpRight size={16} /></Link></div><button onClick={() => toggleSaved(safari.slug)} aria-label={`Remove ${safari.title} from shortlist`}><X size={16} /></button></div>)}</div><Link to="/plan-your-safari" onClick={() => setSavedOpen(false)} className="button button-primary">Turn inspiration into a plan<ArrowRight size={16} /></Link></> : <div className="empty-shortlist"><Heart size={35} strokeWidth={1} /><p>A journey begins with a little inspiration.<br />Tap the heart on any safari to save it here.</p><Link to="/safaris" className="button button-primary" onClick={() => setSavedOpen(false)}>Explore our safaris<MoveUpRight size={16} /></Link></div>}</Modal>}{toast && <div className="toast" role="status"><Check size={17} />{toast}</div>}</>
}

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return <nav className="breadcrumbs container" aria-label="Breadcrumb"><Link to="/">Home</Link>{items.map((item) => <span key={item.label}><span className="breadcrumb-divider">/</span>{item.to ? <Link to={item.to}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}</span>)}</nav>
}

export function ScrollCue() { return <a href="#discover" className="scroll-cue" aria-label="Discover Kibira Safaris"><span>SCROLL TO DISCOVER</span><ArrowDown size={15} /></a> }
