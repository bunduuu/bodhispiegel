import React from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Youtube,
  Linkedin,
  Sun,
  Moon,
  PlayCircle,
  Camera,
  Clapperboard,
  TrendingUp,
  Wand2,
  Mic,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const Container = ({ className = "", children }) => (
  <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>
);

const Section = ({ id, label, title, subtitle, children }) => (
  <Motion.section
    id={id}
    className="py-16 sm:py-20"
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.45 }}
  >
    <Container>
      <div className="mb-8 sm:mb-10">
        {label && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">{label}</p>
        )}
        {title && <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>}
        {subtitle && <p className="mt-3 max-w-3xl text-muted-foreground">{subtitle}</p>}
      </div>
      {children}
    </Container>
  </Motion.section>
);

const Card = ({ className = "", children }) => (
  <div className={`rounded-2xl border border-border bg-background/80 p-6 ${className}`}>{children}</div>
);

const Pill = ({ children }) => (
  <span className="inline-flex rounded-full border border-border px-3 py-1 text-xs font-medium">
    {children}
  </span>
);

const DarkModeToggle = () => {
  const [theme, setTheme] = React.useState(() => {
    if (typeof window === "undefined") return "light";

    return (
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    );
  });

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-lg border p-2 hover:bg-accent/50"
    >
      <AnimatePresence mode="wait" initial={false}>
        <Motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="block"
        >
          {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </Motion.span>
      </AnimatePresence>
    </button>
  );
};

const STATS = [
  { value: "10M+", label: "Combined views across personal + client channels" },
  { value: "8 years", label: "Hands-on editing and content production experience" },
  { value: "Multi-platform", label: "Short-form, long-form, social, newsletter, and public media" },
  { value: "Monetized", label: "Built and monetized multiple YouTube channels" },
];

const SERVICES = [
  {
    icon: <Clapperboard className="size-5" />,
    title: "Video Editing",
    body: "Retention-focused edits for commentary, gaming, documentary, and creator-led formats.",
  },
  {
    icon: <TrendingUp className="size-5" />,
    title: "YouTube Growth Strategy",
    body: "Packaging, thumbnail direction, pacing audits, and analytics-backed iteration.",
  },
  {
    icon: <Camera className="size-5" />,
    title: "Digital Storytelling",
    body: "Story-first scripting and platform-ready distribution for social and public-facing campaigns.",
  },
  {
    icon: <Wand2 className="size-5" />,
    title: "Creative Direction",
    body: "Hook design, tone shaping, and brand-consistent content systems for creators and teams.",
  },
];

const FEATURED_WORK = [
  {
    title: "WPSU Digital Media",
    description:
      "Produced social, promotional, and community storytelling content for public media with scripting, editing, and audience engagement built in.",
    tags: ["Public Media", "Story Packaging", "Community Focus"],
  },
  {
    title: "YouTube Creator & Channel Owner",
    description:
      "Built and monetized multiple channels; generated over 10 million views through stronger hooks, cleaner pacing, and thumbnail + title strategy.",
    tags: ["Channel Growth", "Retention", "Monetization"],
  },
  {
    title: "Freelance Editor & Content Strategist",
    description:
      "Edited long-form and short-form content for creators across gaming, commentary, and documentary niches.",
    tags: ["Client Work", "Long + Short Form", "Performance Uplift"],
  },
];

const PROCESS = [
  "Audience + format audit",
  "Hook and structure planning",
  "Edit execution and pacing pass",
  "Packaging (title, thumbnail, framing)",
  "Post-publish analytics review",
];

const Header = () => (
  <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
    <Container className="flex items-center justify-between py-3">
      <a href="#home" className="text-sm font-semibold tracking-[0.14em] uppercase">
        Bodhi Spiegel
      </a>
      <nav className="hidden items-center gap-6 text-sm md:flex">
        <a href="#work" className="hover:text-primary">
          Work
        </a>
        <a href="#services" className="hover:text-primary">
          Services
        </a>
        <a href="#about" className="hover:text-primary">
          About
        </a>
        <a href="#contact" className="hover:text-primary">
          Contact
        </a>
      </nav>
      <div className="flex items-center gap-2">
        <DarkModeToggle />
        <a
          aria-label="Email"
          href="mailto:bodhispiegel@gmail.com"
          className="rounded-lg border p-2 hover:bg-accent/50"
        >
          <Mail className="size-4" />
        </a>
        <a
          aria-label="YouTube"
          href="https://www.youtube.com/@"
          className="rounded-lg border p-2 hover:bg-accent/50"
        >
          <Youtube className="size-4" />
        </a>
        <a
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/"
          className="rounded-lg border p-2 hover:bg-accent/50"
        >
          <Linkedin className="size-4" />
        </a>
      </div>
    </Container>
  </header>
);

export default function BodhiSpiegelSite() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main id="home">
        <section className="relative overflow-hidden border-b">
          <Container className="py-16 sm:py-24">
            <Motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end"
            >
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Content & Media Strategist
                </p>
                <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                  I help creators turn ideas into content people actually finish.
                </h1>
                <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
                  Broadcast journalism student and editor focused on storytelling, audience retention,
                  and YouTube growth. I build videos that look sharp, move fast, and perform.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#work"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
                  >
                    <PlayCircle className="size-4" />
                    View Featured Work
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium hover:bg-accent/50"
                  >
                    Let&apos;s Collaborate
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </div>

              <Card className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Core strengths
                </p>
                <div className="flex flex-wrap gap-2">
                  <Pill>Video Editing</Pill>
                  <Pill>Content Strategy</Pill>
                  <Pill>Audience Retention</Pill>
                  <Pill>YouTube Analytics</Pill>
                  <Pill>Thumbnail Design</Pill>
                  <Pill>Adobe Premiere Pro</Pill>
                  <Pill>DaVinci Resolve</Pill>
                  <Pill>After Effects</Pill>
                </div>
              </Card>
            </Motion.div>
          </Container>
        </section>

        <section className="border-b bg-muted/25">
          <Container className="py-8 sm:py-10">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {STATS.map((item) => (
                <div key={item.label}>
                  <p className="text-2xl font-semibold leading-none">{item.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <Section
          id="work"
          label="Featured Work"
          title="Built for creators, channels, and public media"
          subtitle="A snapshot of the media work I do across personal projects and client collaborations."
        >
          <div className="grid gap-5 md:grid-cols-3">
            {FEATURED_WORK.map((project) => (
              <Card key={project.title} className="h-full">
                <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Pill key={tag}>{tag}</Pill>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="services"
          label="Services"
          title="Where I can help"
          subtitle="From first hook to final upload, I focus on clarity, pacing, and content performance."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {SERVICES.map((service) => (
              <Card key={service.title} className="flex items-start gap-4">
                <div className="rounded-xl border p-2 text-primary">{service.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{service.body}</p>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="about"
          label="About"
          title="Media-first, strategy-backed"
          subtitle="I study broadcast journalism at Penn State and apply that foundation to digital storytelling that drives engagement."
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Card>
              <h3 className="text-lg font-semibold">What I focus on</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  Story structure and pacing that keeps people watching.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  Social-ready edits built for platform behavior.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  Content packaging that improves clicks and watch time.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  Community-centered reporting style from public media work.
                </li>
              </ul>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold">Workflow</h3>
              <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
                {PROCESS.map((step, index) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full border text-xs font-semibold">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </Card>
          </div>
        </Section>

        <Section
          id="contact"
          label="Contact"
          title="Let&apos;s build your next piece of content"
          subtitle="Open to creator partnerships, freelance editing, and strategy projects."
        >
          <div className="grid gap-5 md:grid-cols-3">
            <a
              href="mailto:bodhispiegel@gmail.com"
              className="rounded-2xl border p-6 transition hover:-translate-y-1 hover:bg-accent/30"
            >
              <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="size-4" /> Email
              </div>
              <p className="font-medium">bodhispiegel@gmail.com</p>
              <p className="mt-1 text-xs text-muted-foreground">Best for project inquiries</p>
            </a>

            <a
              href="https://www.youtube.com/@"
              className="rounded-2xl border p-6 transition hover:-translate-y-1 hover:bg-accent/30"
            >
              <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                <Youtube className="size-4" /> YouTube
              </div>
              <p className="font-medium">Watch latest uploads</p>
              <p className="mt-1 text-xs text-muted-foreground">Storytelling + creator work</p>
            </a>

            <a
              href="https://www.linkedin.com/in/"
              className="rounded-2xl border p-6 transition hover:-translate-y-1 hover:bg-accent/30"
            >
              <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                <Mic className="size-4" /> LinkedIn
              </div>
              <p className="font-medium">Professional profile</p>
              <p className="mt-1 text-xs text-muted-foreground">Experience + collaborations</p>
            </a>
          </div>
        </Section>
      </main>

      <footer className="border-t">
        <Container className="flex flex-col items-start justify-between gap-3 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Bodhi Spiegel</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:underline">
              Top
            </a>
            <a href="#work" className="hover:underline">
              Work
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </div>
        </Container>
      </footer>
    </div>
  );
}
