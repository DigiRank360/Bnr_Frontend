import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Container from './Container'
import Button from './Button'

const slides = [
  {
    tag: 'Integrated Workforce & Operational Support',
    title: ['Building Stronger Organizations', 'Through People, Processes & Reliable Services.'],
    text: 'BNR Group of Services delivers manpower, facility management, payroll and outsourcing solutions to Government and private sector organizations.',
    cta: { label: 'Request a Consultation', to: '/contact' },
    alt: { label: 'Our Services', to: '/services' },
    image: '/banners/banner1.jpg',
  },
  {
    tag: 'Manpower Supply & Staffing',
    title: ['The workforce support', 'your operations need.'],
    text: 'We support skilled, semi-skilled and unskilled workforce requirements with a service approach shaped around your organization.',
    cta: { label: 'Discuss Your Requirements', to: '/contact' },
    alt: { label: 'Explore Our Services', to: '/services' },
    image: '/banners/banner2.jpg',
  },
  {
    tag: 'Facility Management & Business Support',
    title: ['More efficient workplaces,', 'supported by people & process.'],
    text: 'From housekeeping and payroll administration to data entry and outsourcing, we bring essential operational support together.',
    cta: { label: 'Request a Consultation', to: '/contact' },
    alt: { label: 'About BNR', to: '/about' },
    image: '/banners/banner3.jpg',
  },
]

export default function HeroSlider() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const go = (i) => setIndex((i + slides.length) % slides.length)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5500)
    return () => clearInterval(id)
  }, [paused])

  return (
    <section
      className="relative overflow-hidden text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((s, i) => (
          <div key={s.tag} className="relative min-h-[calc(100svh-72px)] w-full shrink-0 overflow-hidden bg-navy" aria-hidden={i !== index}>
            <div
              className={`absolute inset-0 bg-cover bg-center ${i === index ? 'animate-kenburns' : ''}`}
              style={{ backgroundImage: `url(${s.image})` }}
            />
            <div className="animate-glow pointer-events-none absolute -right-20 top-1/4 h-[28rem] w-[28rem] rounded-full bg-gold/20 blur-3xl" />
            <div className="animate-glow-slow pointer-events-none absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-gold/20 blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/30" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy/70 to-transparent" />
            <Container className="relative flex min-h-[calc(100svh-72px)] items-center py-20">
              <div className={`max-w-2xl transition duration-1000 ${i === index ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                <p className="mb-5 inline-block rounded-full border border-gold/40 px-4 py-1 text-[12px] font-semibold uppercase tracking-[0.2em] text-gold">{s.tag}</p>
                <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                  {s.title[0]} <span className="text-gold">{s.title[1]}</span>
                </h1>
                <p className="mt-6 max-w-lg text-lg text-white/70">{s.text}</p>
                <div className="mt-9 flex flex-wrap gap-3.5">
                  <Button to={s.cta.to} variant="gold" tabIndex={i === index ? 0 : -1}>{s.cta.label}</Button>
                  <Button to={s.alt.to} variant="light" tabIndex={i === index ? 0 : -1}>{s.alt.label}</Button>
                </div>
              </div>
            </Container>
          </div>
        ))}
      </div>

      <button onClick={() => go(index - 1)} aria-label="Previous slide" className="absolute left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 text-xl transition hover:bg-gold hover:text-navy md:flex"><ChevronLeft size={22} /></button>
      <button onClick={() => go(index + 1)} aria-label="Next slide" className="absolute right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 text-xl transition hover:bg-gold hover:text-navy md:flex"><ChevronRight size={22} /></button>

      <div className="absolute inset-x-0 bottom-24 flex justify-center gap-2.5">
        {slides.map((s, i) => (
          <button
            key={s.tag}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-500 ${i === index ? 'w-9 bg-gold' : 'w-2 bg-white/40 hover:bg-white/70'}`}
          />
        ))}
      </div>
    </section>
  )
}
