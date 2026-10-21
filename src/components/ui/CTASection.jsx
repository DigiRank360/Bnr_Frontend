import Container from './Container'
import Button from './Button'

export default function CTASection() {
  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-16 text-center text-white">
          <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
          <h2 className="relative text-3xl font-bold sm:text-4xl">The Right People. The Right Processes.</h2>
          <p className="relative mx-auto mt-4 max-w-md text-white/70">Partner with BNR Group of Services for manpower, facility management and business support solutions.</p>
          <div className="relative mt-8"><Button to="/contact" variant="gold">Request a Consultation</Button></div>
        </div>
      </Container>
    </section>
  )
}
