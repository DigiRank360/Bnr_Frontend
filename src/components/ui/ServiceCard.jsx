export default function ServiceCard({ icon: Icon, title, text }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-line bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10">
      <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold transition group-hover:bg-gold group-hover:text-navy"><Icon size={24} /></div>
      <h3 className="mb-2 text-lg font-semibold text-navy">{title}</h3>
      <p className="text-[15px] leading-relaxed text-muted">{text}</p>
    </article>
  )
}
