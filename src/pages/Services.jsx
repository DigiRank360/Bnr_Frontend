import { useState } from 'react'
import { ArrowRight, Plus } from 'lucide-react'
import Container from '../components/ui/Container'
import PageHeader from '../components/ui/PageHeader'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import CTASection from '../components/ui/CTASection'
import Reveal from '../components/ui/Reveal'
import { services, serviceDetails, steps, faqs } from '../data/site'

export default function Services() {
  const [open, setOpen] = useState(0)

  return (
    <>
      <PageHeader image="/banners/services.jpg" eyebrow="Services" title="Comprehensive solutions for your operational needs" text="Workforce, facility management and business support services shaped around your organization's requirements." />

      <section className="py-24">
        <Container>
          <SectionHeading eyebrow="What we offer" title="Workforce & operational support in one place" text="Discuss your requirements with our team to define a suitable service approach and agreed scope." />
          <div className="space-y-8">
            {services.map((s, i) => (
              <Reveal key={s.title}>
                <article className={`grid items-center gap-8 rounded-3xl border border-line bg-white p-8 transition hover:shadow-xl hover:shadow-navy/10 md:grid-cols-[auto_1fr_auto] md:p-10 ${i % 2 ? 'md:bg-soft' : ''}`}>
                  <div className="relative">
                    <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-navy text-gold"><s.icon size={36} /></span>
                    <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-gold text-xs font-bold text-navy">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-navy">{s.title}</h3>
                    <p className="mb-4 text-muted">{s.text}</p>
                    <ul className="flex flex-wrap gap-2">
                      {serviceDetails[s.title].map((f) => (
                        <li key={f} className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-medium text-navy">{f}</li>
                      ))}
                    </ul>
                  </div>
                  <Button to="/contact" variant="outline" className="!px-5 !py-2.5">Enquire <ArrowRight size={16} /></Button>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-navy py-24 text-white">
        <div className="animate-glow pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-gold/20 blur-3xl" />
        <Container className="relative">
          <SectionHeading light eyebrow="Our process" title="A coordinated approach to service delivery" />
          <div className="grid gap-6 md:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur transition hover:border-gold/60">
                <span className="mb-3 block text-4xl font-bold text-gold">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mb-1 font-semibold">{s.title}</h3>
                <p className="text-sm text-white/65">{s.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Common questions" />
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={f.q} className={`rounded-2xl border bg-white transition ${open === i ? 'border-gold shadow-lg shadow-navy/5' : 'border-line'}`}>
                <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-navy" aria-expanded={open === i}>
                  {f.q}
                  <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/20 text-navy transition-transform ${open === i ? 'rotate-45' : ''}`}><Plus size={16} /></span>
                </button>
                <div className={`grid transition-all duration-300 ${open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <p className="overflow-hidden px-6 text-muted"><span className="block pb-5">{f.a}</span></p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
