import { contact } from '@/data/site'

export function Contact() {
  return (
    <section id="contact" className="container-shell pb-24">
      <article className="glass-panel p-8 sm:p-10">
        <h2 className="max-w-2xl text-3xl font-semibold sm:text-4xl">{contact.headline}</h2>
        <div className="mt-6 space-y-2 text-white/85">
          <p>
            Email:{' '}
            <a className="text-cyan-200 hover:text-cyan-100" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </p>
          <p>Website: {contact.website}</p>
          {contact.includePhone && contact.phone ? <p>Phone: {contact.phone}</p> : null}
        </div>
        <div className="mt-6 flex gap-4">
          {contact.socials.map((social) => (
            <a key={social.label} href={social.href} className="rounded-full border border-white/20 px-4 py-2 text-sm hover:border-white/50">
              {social.label}
            </a>
          ))}
        </div>
        <a
          href={`mailto:${contact.email}`}
          className="mt-8 inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:scale-[1.03]"
        >
          Start a Conversation
        </a>
      </article>
    </section>
  )
}
