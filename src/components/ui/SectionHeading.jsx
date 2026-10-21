export default function SectionHeading({ eyebrow, title, text, light = false, center = true }) {
  return (
    <div className={`mb-12 max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.25em] text-gold">{eyebrow}</p>}
      <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${light ? 'text-white' : 'text-navy'}`}>{title}</h2>
      {text && <p className={`mt-4 ${light ? 'text-white/70' : 'text-muted'}`}>{text}</p>}
    </div>
  )
}
