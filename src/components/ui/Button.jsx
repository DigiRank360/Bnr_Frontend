import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-navy text-white border-navy hover:bg-gold hover:border-gold hover:text-navy',
  gold: 'bg-gold text-navy border-gold hover:bg-white hover:border-white',
  outline: 'border-navy text-navy hover:bg-navy hover:text-white',
  light: 'border-white/40 text-white hover:bg-white hover:text-navy',
}

export default function Button({ to, href, variant = 'primary', className = '', children, ...rest }) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] px-7 py-3 text-[15px] font-semibold transition ${variants[variant]} ${className}`
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{children}</a>
  return <button className={cls} {...rest}>{children}</button>
}
