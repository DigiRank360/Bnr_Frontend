import { FaWhatsapp } from 'react-icons/fa'
import { site } from '../../data/site'

export default function WhatsAppButton() {
  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Hello BNR Group, I need manpower support.')}`
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-30 flex items-center"
    >
      <span className="mr-3 hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy opacity-0 shadow-lg transition group-hover:opacity-100 sm:block">Chat with us</span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white animate-wa-glow transition group-hover:scale-110">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <FaWhatsapp className="relative" size={32} />
      </span>
    </a>
  )
}
