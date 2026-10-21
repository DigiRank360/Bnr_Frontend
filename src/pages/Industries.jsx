import Container from '../components/ui/Container'
import PageHeader from '../components/ui/PageHeader'
import SectionHeading from '../components/ui/SectionHeading'
import CTASection from '../components/ui/CTASection'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import { industries, industryDetails } from '../data/site'

export default function Industries() {
  return (
    <>
      <PageHeader image="/banners/industries.jpg" eyebrow="Industries" title="Workforce & operational support across sectors" text="Solutions shaped around the service scope, workforce requirements and operating environment of each organization." />

      <section className="py-24">
        <Container>
          <SectionHeading eyebrow="Sectors we serve" title="Support shaped for your organization" text="We work with Government departments, businesses, healthcare facilities, industrial units and educational institutions." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((name, idx) => {
              const d = industryDetails[name]
              return (
                <Reveal key={name} delay={(idx % 4) * 90}>
                  <article className="group relative h-full overflow-hidden rounded-3xl border border-line bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-navy hover:bg-navy hover:shadow-2xl hover:shadow-navy/25">
                    <span className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold/20 transition duration-500 group-hover:scale-[2.5]" />
                    <span className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy/5 text-navy transition group-hover:bg-white/10 group-hover:text-gold"><d.icon size={28} /></span>
                    <p className="relative text-xs font-bold text-gold">{String(idx + 1).padStart(2, '0')}</p>
                    <h3 className="relative mb-4 text-lg font-semibold text-navy transition group-hover:text-white">{name}</h3>
                    <p className="relative text-sm text-muted transition group-hover:text-white/75">{d.text}</p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Reveal>
            <div className="grid items-center gap-8 rounded-3xl bg-soft p-10 md:grid-cols-[1fr_auto] md:p-14">
              <div>
                <p className="mb-2 text-[13px] font-semibold uppercase tracking-[0.25em] text-gold">Don’t see your industry?</p>
                <h2 className="text-2xl font-bold text-navy sm:text-3xl">Need support tailored to your organization?</h2>
                <p className="mt-3 max-w-xl text-muted">Share your service scope and operational requirements to discuss a suitable approach.</p>
              </div>
              <Button to="/contact">Talk to Us</Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
