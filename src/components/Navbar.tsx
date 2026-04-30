import { navLinks } from '@/data/site'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070a14]/80 backdrop-blur-xl">
      <nav className="container-shell flex h-16 items-center justify-between">
        <a href="#top" className="text-sm font-semibold tracking-[0.2em] text-white/90">
          BODHI SPIEGEL
        </a>
        <div className="hidden gap-6 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-white/70 transition hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
