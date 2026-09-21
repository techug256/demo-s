import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { ArrowDownToLine, ArrowRight, ArrowUpRight, ChevronDown, Heart, Leaf, Menu, MessageCircle, X } from 'lucide-react'
import { useSite } from '../lib/site-store'
import { ButtonLink, GlobalOverlays, Logo } from './UI'

const navItems = [
  { label: 'Our Safaris', to: '/safaris', children: [{ label: 'All our journeys', to: '/safaris' }, { label: 'Gorilla trekking', to: '/safaris?experience=Gorilla+trekking' }, { label: 'Wildlife safaris', to: '/safaris?experience=Wildlife+safari' }, { label: 'Family & slow travel', to: '/safaris?experience=Family+%26+slow+travel' }] },
  { label: 'Destinations', to: '/destinations', children: [{ label: 'Explore East Africa', to: '/destinations' }, { label: 'Uganda', to: '/destinations/uganda' }, { label: 'Rwanda', to: '/destinations/rwanda' }, { label: 'Kenya', to: '/destinations/kenya' }, { label: 'Tanzania', to: '/destinations/tanzania' }] },
  { label: 'Experiences', to: '/experiences' },
  { label: 'Lodges', to: '/lodges' },
  { label: 'Our Story', to: '/about' },
  { label: 'Journal', to: '/stories' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdown, setDropdown] = useState<string | null>(null)
  const { saved, setSavedOpen } = useSite()
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') { setDropdown(null); setMenuOpen(false) } }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])
  useEffect(() => {
    if (!menuOpen) return
    const old = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = old }
  }, [menuOpen])
  return <header className="site-header"><div className="utility-bar"><div className="container utility-inner"><span><Leaf size={12} />Locally rooted. Thoughtfully crafted.</span><div><Link to="/conservation">Travel with a lighter footprint <ArrowUpRight size={11} /></Link><i /><button onClick={() => setSavedOpen(true)}><Heart size={12} />Your shortlist{saved.length > 0 && <b>{saved.length}</b>}</button></div></div></div><div className="container main-nav"><Logo /><nav className="desktop-nav" aria-label="Main navigation">{navItems.map((item) => <div className="nav-group" key={item.label}><div className="nav-label"><NavLink to={item.to} onClick={() => setDropdown(null)}>{item.label}</NavLink>{item.children && <button aria-label={`Show ${item.label.toLowerCase()} menu`} aria-expanded={dropdown === item.label} onClick={() => setDropdown(dropdown === item.label ? null : item.label)}><ChevronDown size={12} /></button>}</div>{item.children && <div className={`nav-dropdown ${dropdown === item.label ? 'dropdown-open' : ''}`}>{item.children.map((child) => <Link key={child.to} to={child.to} onClick={() => setDropdown(null)}>{child.label}<ArrowUpRight size={14} /></Link>)}</div>}</div>)}</nav><ButtonLink to="/plan-your-safari" className="nav-cta">Plan your safari</ButtonLink><div className="mobile-nav-controls"><button onClick={() => setSavedOpen(true)} aria-label={`Open shortlist, ${saved.length} saved journeys`}><Heart size={21} />{saved.length > 0 && <span>{saved.length}</span>}</button><button aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>{menuOpen ? <X size={25} /> : <Menu size={25} />}</button></div></div>{menuOpen && <nav className="mobile-menu" aria-label="Mobile navigation">{navItems.map((item) => <div key={item.to}><Link to={item.to}>{item.label}<ArrowUpRight size={18} /></Link>{item.children && <div className="mobile-subnav">{item.children.slice(1).map((child) => <Link key={child.to} to={child.to}>{child.label}</Link>)}</div>}</div>)}<ButtonLink to="/plan-your-safari">Plan your safari</ButtonLink><p>Extraordinary journeys. A deeply personal approach.</p></nav>}</header>
}

function downloadGuide() {
  const text = `KIBIRA SAFARIS\nA thoughtful guide to planning your safari\n\n1. FIND YOUR WHY\nThink about what you want to feel, not only what you want to see: connection, adventure, rest, discovery.\n\n2. CHOOSE YOUR RHYTHM\nAllow time to settle into each place. Fewer transfers often mean more meaningful moments.\n\n3. PACK THOUGHTFULLY\nBring light layers, sun protection, comfortable closed shoes, a reusable bottle, and your personal medication. Forest trekking calls for sturdy boots, long trousers, and a rain jacket.\n\n4. CHECK THE ESSENTIALS\nConfirm passport validity, official entry requirements, travel-health advice, and suitable insurance before you travel. Rules vary by nationality and can change.\n\n5. RESPECT THE WILD\nFollow your guide and ranger instructions. Give wildlife space. Never feed wild animals. Ask before photographing people.\n\n6. MAKE A CLEAR PLAN\nRequest an itemised proposal and confirm what is included, from permits to transfers. Do not make non-refundable plans before availability is confirmed.\n\n7. LEAVE SPACE FOR WONDER\nBring your curiosity. Put down the camera sometimes. Let the place surprise you.\n\nThis checklist is general planning inspiration, not a confirmed itinerary or travel-health advice.\n\nKibira Safaris — A little closer to the wild.\n`
  const url = URL.createObjectURL(new Blob([text], { type: 'text/plain' }))
  const anchor = document.createElement('a'); anchor.href = url; anchor.download = 'Kibira-Safari-Planning-Checklist.txt'; anchor.click(); URL.revokeObjectURL(url)
}

function Footer() {
  return <footer className="site-footer"><div className="container"><div className="footer-top"><div><p className="eyebrow">KEEP A LITTLE OF THE WILD WITH YOU</p><h3>Good journeys begin with curiosity.</h3></div><button className="footer-download" onClick={downloadGuide}>Get our safari planning checklist<ArrowDownToLine size={17} /></button></div><div className="footer-main"><div className="footer-brand"><Logo light /><p>A little closer to the wild.<br />A little closer to what matters.</p><Link to="/conservation" className="footer-purpose"><Leaf size={17} />Thoughtful travel. Lasting connections.</Link></div><div className="footer-column"><h4>Explore</h4><Link to="/safaris">Our safaris</Link><Link to="/destinations">Destinations</Link><Link to="/experiences">Experiences</Link><Link to="/lodges">Places to stay</Link></div><div className="footer-column"><h4>Get to know us</h4><Link to="/about">Our story</Link><Link to="/conservation">Our approach to travel</Link><Link to="/stories">From the journal</Link><Link to="/faq">Your questions, answered</Link></div><div className="footer-column footer-connect"><h4>Your next chapter</h4><p>Something on your wish list?<br />Let’s make a little room for it.</p><Link to="/plan-your-safari">Start a conversation<ArrowRight size={15} /></Link><span>UGANDA · RWANDA · KENYA · TANZANIA</span></div></div><div className="footer-bottom"><p>© {new Date().getFullYear()} Kibira Safaris. Made for the curious.</p><span><Link to="/privacy">Privacy</Link><Link to="/terms">Terms of travel</Link><span>East Africa, with love <Leaf size={11} /></span></span></div></div></footer>
}

export function Layout() {
  const location = useLocation()
  useEffect(() => {
    if (location.hash) { window.setTimeout(() => document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }), 150) }
    else window.scrollTo({ top: 0, behavior: 'instant' })
    const segments = location.pathname.split('/').filter(Boolean)
    const title = segments.length ? segments[segments.length - 1].replace(/-/g, ' ').replace(/\b\w/g, (character) => character.toUpperCase()) : 'Africa, in its truest form'
    document.title = `${title} — Kibira Safaris`
  }, [location.pathname, location.hash])
  return <><a className="skip-link" href="#main-content">Skip to content</a><Header key={location.pathname + location.search} /><main id="main-content"><Outlet /></main><Footer />{!location.pathname.includes('plan-your-safari') && location.pathname !== '/contact' && <Link className="floating-contact" to="/plan-your-safari" aria-label="Let’s talk safari"><MessageCircle size={22} /><span>Let’s talk safari</span></Link>}<GlobalOverlays /></>
}
