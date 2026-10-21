import { Check } from 'lucide-react'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import HeroSlider from '../components/ui/HeroSlider'
import SectionHeading from '../components/ui/SectionHeading'
import ServiceCard from '../components/ui/ServiceCard'
import CTASection from '../components/ui/CTASection'
import Reveal from '../components/ui/Reveal'
import { services, steps, industries, industryDetails, whyUs } from '../data/site'

export default function Home() {
  return (
    <>
      <HeroSlider />

      <section className="relative z-10 -mt-14">
        <Container>
          <div className="grid gap-px overflow-hidden rounded-2xl bg-line shadow-2xl shadow-navy/15 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w) => (
              <div key={w.title} className="flex items-start gap-4 bg-white p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-navy"><w.icon size={24} /></span>
                <div>
                  <h3 className="font-semibold text-navy">{w.title}</h3>
                  <p className="mt-1 text-sm text-muted">{w.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="absolute -bottom-4 -left-4 h-full w-full rounded-3xl bg-gold/20" />
            <img src="/banners/banner1.jpg" alt="BNR Group team" className="relative h-[440px] w-full rounded-3xl object-cover shadow-2xl shadow-navy/20" />
            <div className="absolute -right-4 top-8 rounded-2xl bg-navy p-5 text-white shadow-xl">
              <p className="text-sm font-bold uppercase tracking-wide text-gold">Integrated</p>
              <p className="text-xs text-white/70">workforce & operations</p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <SectionHeading center={false} eyebrow="About BNR Group of Services" title="A partner for workforce & facility management" />
            <p className="-mt-6 mb-5 text-muted">We help Government departments, corporate organizations, industries and institutions manage operational requirements through manpower supply, facility management and business support solutions.</p>
            <ul className="mb-8 grid gap-3 sm:grid-cols-2">
              {['Manpower supply & staffing', 'Facility management', 'Payroll administration', 'Operational support'].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm font-medium text-navy">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold text-navy"><Check size={14} strokeWidth={3} /></span>{t}
                </li>
              ))}
            </ul>
            <Button to="/about">About BNR</Button>
          </Reveal>
        </Container>
      </section>

      <section className="bg-soft py-24">
        <Container>
          <SectionHeading eyebrow="What we do" title="Comprehensive solutions for your operational needs" text="We bring essential workforce and support services together to help organizations manage day-to-day operations." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 100}><ServiceCard {...s} /></Reveal>
            ))}
          </div>
          <div className="mt-10 text-center"><Button to="/services" variant="outline">View All Services</Button></div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionHeading eyebrow="Process" title="How we work" text="A coordinated approach from understanding your requirements to supporting ongoing operations." />
          <ol className="relative grid gap-8 md:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-7 hidden h-0.5 bg-gradient-to-r from-gold/0 via-gold to-gold/0 md:block" />
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 120}>
                <li className="relative list-none text-center">
                  <span className="relative mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-navy text-lg font-bold text-gold ring-4 ring-white">{i + 1}</span>
                  <h3 className="font-semibold text-navy">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted">{s.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-soft py-24">
        <Container>
          <SectionHeading eyebrow="Industries" title="Supporting organizations across sectors" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((name, i) => (
              <Reveal key={name} delay={(i % 4) * 80}>
                <div className="group flex flex-col items-center rounded-2xl border border-line bg-white p-6 text-center transition hover:-translate-y-1 hover:border-gold hover:shadow-lg">
                  <span className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy/5 text-navy transition group-hover:scale-110 group-hover:bg-gold/20">{(() => { const Icon = industryDetails[name].icon; return <Icon size={28} /> })()}</span>
                  <span className="text-sm font-semibold text-navy">{name}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-navy py-20">
        <Container className="relative">
          <SectionHeading light eyebrow="Our philosophy" title="Stronger people. Smarter processes. More efficient operations." text="We focus on understanding each organization’s requirements and providing workforce and operational support aligned with its objectives." />
        </Container>
      </section>

      <CTASection />
    </>
  )
}
