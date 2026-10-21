import Container from './Container'

export default function PageHeader({ eyebrow, title, text, image }) {
  return (
    <section className="relative flex min-h-[420px] items-center overflow-hidden bg-navy py-24 text-center text-white md:min-h-[480px]">
      {image && (
        <div className="animate-kenburns absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/75 to-navy/90" />
      <div className="animate-glow pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gold/20 blur-3xl" />
      <Container className="relative">
        <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.25em] text-gold">{eyebrow}</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        {text && <p className="mx-auto mt-5 max-w-xl text-white/75">{text}</p>}
      </Container>
    </section>
  )
}
