import { motion as Motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Camera,
  ChartNoAxesCombined,
  Clapperboard,
  Eye,
  Linkedin,
  Mail,
  Rocket,
  Youtube,
} from "lucide-react";

const projects = [
  {
    title: "Long-Form YouTube Narrative",
    role: "Editor + Story Strategist",
    description:
      "Retention-focused structure, hook redesign, and pacing polish for creator-led storytelling.",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["Long-form", "Retention", "Narrative"],
  },
  {
    title: "Public Media Feature",
    role: "Producer + Editor",
    description:
      "Public-interest media piece balancing emotional arc, clarity, and platform-ready distribution.",
    embedUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
    tags: ["Public media", "Documentary", "Audience-first"],
  },
  {
    title: "Social Cutdown System",
    role: "Editor + Media Strategist",
    description:
      "Series of high-velocity social edits designed to increase completion rates and repeat views.",
    embedUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
    tags: ["Social", "Short-form", "Growth"],
  },
];

const steps = [
  "Audience & goal discovery",
  "Hook & structure planning",
  "Edit & pace like a storyteller",
  "Package & launch",
  "Analyse & iterate",
];

const metrics = [
  { icon: Eye, value: "10M+ views", label: "Combined views across channels" },
  { icon: Camera, value: "8+ years", label: "Hands-on editing experience" },
  { icon: BarChart3, value: "Monetised channels", label: "Multiple YouTube channels monetised" },
  { icon: Clapperboard, value: "Multi-format storyteller", label: "Long-form, social, public media & documentary" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#070708] text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-[#070708]/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#home" className="text-sm font-semibold uppercase tracking-[0.2em]">Bodhi Spiegel</a>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#work" className="hover:text-cyan-300">Work</a>
            <a href="#services" className="hover:text-cyan-300">Services</a>
            <a href="#about" className="hover:text-cyan-300">About</a>
            <a href="#contact" className="hover:text-cyan-300">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden border-b border-zinc-900 bg-[#0a0a0a]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.16),transparent_38%),linear-gradient(135deg,rgba(24,24,27,0.4),rgba(10,10,10,0.9))]" />
          <Motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28"
          >
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">Story-driven video that audiences finish.</h1>
            <p className="mt-6 max-w-3xl text-base text-zinc-300 sm:text-lg">
              I’m Bodhi Spiegel — a video editor & media strategist. I craft long-form YouTube narratives,
              public-media pieces and social content that hook viewers, build retention and grow channels.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-cyan-300">See my work <ArrowRight className="size-4" /></a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-zinc-600 px-5 py-3 text-sm font-semibold hover:border-cyan-300 hover:text-cyan-300">Let&apos;s collaborate</a>
            </div>
          </Motion.div>
        </section>

        <section className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {metrics.map((metric) => {
            const MetricIcon = metric.icon;
            return (
              <div key={metric.value} className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 shadow-[0_10px_35px_rgba(0,0,0,0.35)]">
                <MetricIcon className="mb-4 size-5 text-cyan-300" />
                <p className="text-2xl font-semibold">{metric.value}</p>
                <p className="mt-2 text-sm text-zinc-400">{metric.label}</p>
              </div>
            );
          })}
        </section>

        <section id="work" className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 className="text-3xl font-semibold sm:text-4xl">Featured work</h2>
          <div className="mt-8 grid gap-6">
            {projects.map((project) => (
              <article key={project.title} className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition hover:border-cyan-400/70">
                <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">{project.role}</p>
                    <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
                    <p className="mt-3 text-zinc-300">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => <span key={tag} className="rounded-full border border-zinc-700 px-3 py-1 text-xs">{tag}</span>)}
                    </div>
                  </div>
                  <div className="relative h-0 overflow-hidden rounded-xl border border-zinc-800 pb-[56.25%]">
                    <iframe
                      className="absolute left-0 top-0 h-full w-full"
                      src={project.embedUrl}
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="border-y border-zinc-900 bg-zinc-950/60 py-14">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <h2 className="text-3xl font-semibold sm:text-4xl">My approach</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-5">
              {steps.map((step, idx) => (
                <Motion.div
                  key={step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4"
                >
                  <div className="mb-3 inline-flex size-8 items-center justify-center rounded-full bg-cyan-400/15 text-sm font-semibold text-cyan-300">{idx + 1}</div>
                  <p className="text-sm text-zinc-200">{step}</p>
                </Motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-3xl font-semibold sm:text-4xl">About</h2>
          <p className="mt-5 max-w-3xl text-zinc-300">I’m a Penn State media student and working creator. Outside class I run monetised YouTube channels, intern with WPSU and collaborate with creators to craft content people actually finish.</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Video editing", "Narrative structure", "Audience retention", "Strategy & analytics"].map((item) => (
              <span key={item} className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs">{item}</span>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-zinc-400">My mission is to blend story craft with data-backed strategy so every video feels intentional, emotional, and impossible to click away from.</p>
        </section>

        <section id="contact" className="mx-auto mb-16 w-full max-w-6xl rounded-3xl border border-cyan-400/35 bg-zinc-950 px-4 py-14 sm:px-6">
          <h2 className="max-w-2xl text-3xl font-semibold sm:text-4xl">Let’s create stories that audiences can’t stop watching.</h2>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="mailto:bodhispiegel@gmail.com" className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-zinc-900"><Mail className="size-4"/>Email</a>
            <a href="https://www.linkedin.com/in/bodhi-spiegel" className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-4 py-2 text-sm"><Linkedin className="size-4"/>LinkedIn</a>
            <a href="https://www.youtube.com/@bodhispiegel" className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-4 py-2 text-sm"><Youtube className="size-4"/>Watch my latest uploads</a>
          </div>
        </section>
      </main>
    </div>
  );
}
