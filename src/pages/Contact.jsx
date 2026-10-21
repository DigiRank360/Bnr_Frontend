import { useState } from 'react'
import { Mail, Phone, Clock, Check, CircleCheck, MapPin } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import Container from '../components/ui/Container'
import PageHeader from '../components/ui/PageHeader'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import { site, services } from '../data/site'

const field = 'w-full rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30'

const cards = [
  { icon: Mail, label: 'Email Us', value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: 'Call Us', value: site.phone, href: `tel:${site.phone.replace(/\s/g, '')}` },
  { icon: FaWhatsapp, label: 'WhatsApp', value: 'Chat instantly', href: `https://wa.me/${site.whatsapp}` },
  { icon: Clock, label: 'Working Hours', value: site.hours },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const d = Object.fromEntries(new FormData(e.currentTarget))
    const msg = `Hello BNR Group,\nName: ${d.name}\nEmail: ${d.email}\nPhone: ${d.phone || '-'}\nCompany: ${d.company || '-'}\nService: ${d.service}\n\n${d.message}`
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener')
    setSent(true)
  }

  return (
    <>
      <PageHeader image="/banners/contact.jpg" eyebrow="Contact" title="Let’s discuss your workforce requirements" text="Tell us about your manpower, facility management, payroll or outsourcing needs." />

      <section className="relative z-10 -mt-16">
        <Container className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => {
            const Tag = c.href ? 'a' : 'div'
            return (
              <Tag key={c.label} href={c.href} {...(c.href?.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="group rounded-2xl border border-line bg-white p-6 shadow-lg shadow-navy/10 transition hover:-translate-y-1 hover:border-gold">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-navy"><c.icon size={24} /></span>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted">{c.label}</p>
                <p className="mt-1 break-words font-semibold text-navy">{c.value}</p>
              </Tag>
            )
          })}
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeading center={false} eyebrow="Get in touch" title="Tell us what you need" text="Share your requirements and open an enquiry directly in WhatsApp to contact our team." />
            <ul className="mb-8 space-y-3 text-sm text-muted">
              {['Discuss your service requirements', 'Request a customized proposal', 'Workforce & operational support'].map((t) => (
                <li key={t} className="flex items-center gap-3"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold text-navy"><Check size={14} strokeWidth={3} /></span>{t}</li>
              ))}
            </ul>
            <Button href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="!border-[#25D366] !bg-[#25D366] !text-white hover:!bg-[#1ebe5b]">
              <FaWhatsapp size={20} /> Chat on WhatsApp
            </Button>
          </div>

          <form onSubmit={onSubmit} className="space-y-4 rounded-3xl border border-line bg-white p-8 shadow-xl shadow-navy/5 lg:col-span-3">
            {sent ? (
              <div className="py-12 text-center">
                <CircleCheck size={56} className="mx-auto text-gold" />
                <p className="mt-4 text-xl font-bold text-navy">Thank you!</p>
                <p className="mt-2 text-muted">Your enquiry is ready in WhatsApp. Press send there and we’ll be in touch shortly.</p>
                <button type="button" onClick={() => setSent(false)} className="mt-6 text-sm font-semibold text-gold hover:underline">Send another enquiry</button>
              </div>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input name="name" required className={field} placeholder="Your name *" />
                  <input name="email" required type="email" className={field} placeholder="Email *" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input name="phone" className={field} placeholder="Phone" />
                  <input name="company" className={field} placeholder="Company" />
                </div>
                <select name="service" className={field} defaultValue={services[0].title}>
                  {services.map((s) => <option key={s.title}>{s.title}</option>)}
                </select>
                <textarea name="message" required rows="5" className={field} placeholder="Tell us your service requirement *" />
                <Button type="submit" className="w-full"><FaWhatsapp size={20} /> Send Enquiry on WhatsApp</Button>
              </>
            )}
          </form>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <SectionHeading eyebrow="Find us" title="Visit our office" text={site.address} />
          <div className="overflow-hidden rounded-3xl border border-line shadow-xl shadow-navy/10">
            <iframe
              title="BNR Group location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="mt-6 text-center">
            <Button href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`} target="_blank" rel="noreferrer" variant="outline"><MapPin size={16} /> Open in Google Maps</Button>
          </div>
        </Container>
      </section>
    </>
  )
}
