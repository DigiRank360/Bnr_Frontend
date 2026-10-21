import Container from '../components/ui/Container'
import PageHeader from '../components/ui/PageHeader'
import SectionHeading from '../components/ui/SectionHeading'
import CTASection from '../components/ui/CTASection'
import Reveal from '../components/ui/Reveal'
import { Check } from 'lucide-react'
import { values, mission, whyUs, steps, certifications } from '../data/site'

export default function About() {
  return (
    <>
      <PageHeader image="/banners/about.jpg" eyebrow="About us" title="Your trusted partner for workforce & facility management" text="Supporting Government departments, corporate organizations, industries and institutions with workforce and operational solutions." />

      <section className="py-24">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl border-2 border-gold" />
            <img src="/banners/banner1.jpg" alt="BNR Group team at work" className="relative h-[460px] w-full rounded-3xl object-cover shadow-2xl shadow-navy/20" />
          </Reveal>
          <Reveal delay={150}>
            <SectionHeading center={false} eyebrow="Our story" title="Built on trust and delivery" />
            <p className="mb-4 -mt-6 text-muted">BNR Group of Services is a workforce and business support solutions provider focused on helping organizations manage their operational requirements effectively.</p>
            <p className="mb-6 text-muted">Our services include manpower supply, facility management, housekeeping, security services, payroll management, technical and non-technical staffing, data entry, administrative support and outsourcing solutions. We focus on understanding each client’s requirements and providing support aligned with their business objectives.</p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {['People, processes & service coordination', 'Requirement-based support', 'Quality-focused delivery', 'Long-term partnerships'].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm font-medium text-navy">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold text-navy"><Check size={14} strokeWidth={3} /></span>{t}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="bg-soft py-24">
        <Container className="grid gap-6 md:grid-cols-2">
          {mission.map((m, i) => (
            <Reveal key={m.title} delay={i * 120}>
              <div className="h-full rounded-3xl border border-line bg-white p-10 transition hover:shadow-xl hover:shadow-navy/10">
                <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-gold"><m.icon size={26} /></span>
                <h3 className="mb-3 text-2xl font-bold text-navy">{m.title}</h3>
                <p className="text-muted">{m.text}</p>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionHeading eyebrow="Our values" title="What drives us" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="h-full rounded-2xl border-t-4 border-gold bg-white p-7 shadow-md shadow-navy/5 transition hover:-translate-y-1">
                  <h3 className="mb-2 font-semibold text-navy">{v.title}</h3>
                  <p className="text-sm text-muted">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-soft py-24">
        <Container>
          <SectionHeading eyebrow="Why BNR Group" title="The BNR advantage" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 100}>
                <div className="h-full rounded-2xl bg-white p-7 text-center shadow-sm transition hover:shadow-xl hover:shadow-navy/10">
                  <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-navy"><w.icon size={26} /></span>
                  <h3 className="mb-2 font-semibold text-navy">{w.title}</h3>
                  <p className="text-sm text-muted">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-soft py-24">
        <Container>
          <SectionHeading eyebrow="Certifications & registrations" title="Business standards and registrations" text="The following standards and registrations are referenced in the supplied business information. Current certificates, registration status and eligibility must be verified before any certification or registration claim is published." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((item) => (
              <Reveal key={item.name}>
                <article className="h-full rounded-2xl border border-line bg-white p-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold">Status to verify</p>
                  <h3 className="font-semibold text-navy">{item.name}</h3>
                  <p className="mt-2 text-sm text-muted">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid items-center gap-10 rounded-3xl bg-navy p-8 text-white md:grid-cols-[1fr_2fr] md:p-12">
          <div>
            <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.25em] text-gold">Founder & Director</p>
            <h2 className="text-3xl font-bold">Rishi Dubey</h2>
            <p className="mt-2 text-white/70">Founder & Director, BNR Group of Services</p>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-semibold">Building Scalable Operations Through People & Process</h3>
            <p className="text-white/75">Rishi Dubey leads BNR Group of Services with a focus on workforce solutions, facility management and business operations. His vision centers on helping organizations build stronger operational foundations through people, structured processes and dependable service partnerships.</p>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionHeading eyebrow="Our approach" title="From requirement to joining" />
          <ol className="relative grid gap-8 md:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-7 hidden h-0.5 bg-gradient-to-r from-gold/0 via-gold to-gold/0 md:block" />
            {steps.map((s, i) => (
              <li key={s.title} className="relative text-center">
                <span className="relative mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-navy text-lg font-bold text-gold ring-4 ring-white">{i + 1}</span>
                <h3 className="font-semibold text-navy">{s.title}</h3>
                <p className="mt-1 text-sm text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
