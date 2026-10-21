import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../../assets/logo.png'
import { navLinks } from '../../data/site'
import Container from '../ui/Container'
import Button from '../ui/Button'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const link = ({ isActive }) => `transition hover:text-navy ${isActive ? 'font-semibold text-navy' : 'text-muted'}`

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-white/90 backdrop-blur">
      <Container className="flex h-[72px] items-center justify-between">
        <Link to="/"><img src={logo} alt="BNR Group" className="h-11 w-auto" /></Link>
        <nav className="hidden items-center gap-8 text-[15px] md:flex">
          {navLinks.map((l) => <NavLink key={l.to} to={l.to} end={l.to === '/'} className={link}>{l.label}</NavLink>)}
          <Button to="/contact" className="!px-5 !py-2">Request a Consultation</Button>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className="text-navy">{open ? <X size={26} /> : <Menu size={26} />}</span>
        </button>
      </Container>
      {open && (
        <nav className="flex flex-col gap-4 border-t border-line bg-white px-6 py-5 md:hidden">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={link} onClick={() => setOpen(false)}>{l.label}</NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
