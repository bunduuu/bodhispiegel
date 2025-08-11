import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  PlayCircle,
  Cpu,
  Camera,
  Code,
  Wrench,
  Music,
  Youtube,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

const Container = ({ className = "", children }) => (
  <div className={`mx-auto max-w-6xl px-4 ${className}`}>{children}</div>
);

const Chip = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-sm">
    {children}
  </span>
);

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="py-16">
    <Container>
      <div className="mb-8">
        {title && <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>}
        {subtitle && <p className="mt-2 text-muted-foreground max-w-3xl leading-relaxed">{subtitle}</p>}
      </div>
      {children}
    </Container>
  </section>
);

const Card = ({ as: As = "div", href, className = "", children }) => {
  const classes = "rounded-2xl border p-6 transition-transform hover:-translate-y-1 hover:shadow-sm";
  const all = `${classes} ${className}`;
  if (href) return <a href={href} className={`${all} block`}>{children}</a>;
  return <As className={all}>{children}</As>;
};

const Grid = ({ cols = 2, children, className = "" }) => (
  <div className={`grid grid-cols-1 md:grid-cols-${cols} gap-5 ${className}`}>{children}</div>
);

const HIGHLIGHTS = [
  { stat: "10M+", label: "Views across multiple platforms (short + long form)" },
  { stat: "8y", label: "Editing experience (2 years professional)" },
  { stat: "2x", label: "Planned study abroad" },
  { stat: "Specialties", label: "Cinematic editing, content strategy, and compact PC builds" },
];

const PROJECTS = [
  {
    side: "media",
    title: "Multi-Format Storytelling Projects",
    blurb: "Examples include cinematic gaming series, cultural commentary videos, and fast-paced YouTube content — combining strong visuals, clear structure, and retention-focused editing.",
    tags: ["Storytelling", "Cinematic", "Retention"],
    link: "#",
  },
  {
    side: "media",
    title: "MonsterVerse: Breath Attacks",
    blurb: "High-energy film analysis with dark humor, pacing discipline, and motion graphics to keep viewers engaged.",
    tags: ["Film Analysis", "Shorts", "Motion GFX"],
    link: "#",
  },
  {
    side: "engineering",
    title: "Mini-ITX SFX Build",
    blurb: "Compact workstation designed for video editing and school use. Balanced thermal performance, portability, and budget.",
    tags: ["PC Build", "Thermals", "Budgeting"],
    link: "#",
  },
  {
    side: "engineering",
    title: "YouTube Content Ops Toolkit",
    blurb: "CLI + spreadsheet workflow to plan hooks, manage versions, and track audience retention.",
    tags: ["Python", "CLI", "Automation"],
    link: "#",
  },
];

const WORK_STREAMS = {
  media: [
    "Concept development for short and long-form videos",
    "Hook and pacing optimization across formats",
    "Brand storytelling and narrative structure",
    "Audio design, music direction, and motion graphics",
  ],
  engineering: [
    "Tools that improve creative workflows",
    "Data capture & analytics for content performance",
    "Embedded hardware projects with real-world constraints",
    "Clean, functional UI design",
  ],
};

const Header = () => (
  <header className="sticky top-0 z-40 border-b backdrop-blur supports-[backdrop-filter]:bg-background/70">
    <Container className="py-3 flex items-center justify-between">
      <a href="#home" className="font-semibold tracking-tight">bodhispiegel<span className="text-primary">.com</span></a>
      <nav className="hidden gap-6 text-sm md:flex">
        <a href="#work" className="hover:text-primary">Work</a>
        <a href="#projects" className="hover:text-primary">Projects</a>
        <a href="#about" className="hover:text-primary">About</a>
        <a href="#contact" className="hover:text-primary">Contact</a>
      </nav>
      <div className="flex items-center gap-2">
        <a aria-label="GitHub" href="https://github.com/" className="rounded-lg border p-2 hover:bg-accent/50"><Github className="size-4"/></a>
        <a aria-label="LinkedIn" href="https://www.linkedin.com/in/" className="rounded-lg border p-2 hover:bg-accent/50"><Linkedin className="size-4"/></a>
        <a aria-label="Email" href="mailto:bodhispiegelbusiness@gmail.com" className="rounded-lg border p-2 hover:bg-accent/50"><Mail className="size-4"/></a>
      </div>
    </Container>
  </header>
);

const StatGrid = () => (
  <div className="border-y bg-muted/30">
    <Container className="py-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {HIGHLIGHTS.map(({ stat, label }) => (
          <div key={label} className="flex flex-col items-start">
            <span className="text-2xl font-semibold">{stat}</span>
            <span className="text-xs text-muted-foreground">{label}</span>
          </div>
        ))}
      </div>
    </Container>
  </div>
);

const ProjectCard = ({ side = "media", title, blurb, tags = [], link }) => {
  const icon = side === "media" ? <Camera className="size-5" /> : <Cpu className="size-5" />;
  return (
    <Card href={link} className="group">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">{icon}<span className="capitalize">{side}</span></div>
      <h3 className="mt-2 text-xl font-semibold tracking-tight flex items-center gap-2">{title}<ExternalLink className="size-4 opacity-0 transition-opacity group-hover:opacity-100" /></h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{blurb}</p>
      <div className="mt-4 flex flex-wrap gap-2">{tags.map((t) => (<Chip key={t}>{t}</Chip>))}</div>
    </Card>
  );
};

const HeroPane = ({ icon, kicker, title, body, ctaText, ctaIcon, chips = [] }) => (
  <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="relative">
    <div className="p-8 md:p-12">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">{icon} {kicker}</div>
      <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">{title}</h2>
      <p className="mt-3 max-w-lg text-muted-foreground">{body}</p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a href="#projects" className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium hover:bg-accent/50">{ctaIcon}{ctaText}</a>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">{chips.map((c) => (<Chip key={c}>{c}</Chip>))}</div>
      </div>
    </div>
  </motion.div>
);

export default function BodhiSpiegelSite() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main id="home">
        <section className="relative overflow-hidden">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 border">
              <HeroPane icon={<Youtube className="size-4" />} kicker="Digital Media" title="Editor → Creator" body="From short-form social videos to full-length storytelling, I craft engaging content with strong hooks, cinematic editing, and purposeful pacing. Skilled in growing audiences, refining narrative arcs, and delivering work that matches brand goals." ctaText="See Media Work" ctaIcon={<PlayCircle className="size-4" />} chips={["Premiere Pro", "After Effects", "DaVinci", "Shorts Strategy"]} />
              <div className="border-t md:border-t-0 md:border-l" />
              <HeroPane icon={<Cpu className="size-4" />} kicker="Computer Engineering" title="Systems → Impact" body="Penn State Computer Engineering + Japanese minor. Interested in the overlap between technology and creativity — from small form-factor PC builds to automation tools that make workflows faster and smarter." ctaText="See Engineering Work" ctaIcon={<Code className="size-4" />} chips={["Python", "React", "Embedded", "Data Viz"]} />
            </div>
          </Container>
        </section>

        <StatGrid />

        <Section id="projects" title="Selected Projects" subtitle="A mix of digital media and engineering work. Click through for write-ups, demos, or videos.">
          <Grid cols={2}>{PROJECTS.map((p) => (<ProjectCard key={p.title} {...p} />))}</Grid>
        </Section>

        <Section id="work" title="Work Streams">
          <Grid cols={2}>
            <Card><div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground"><Camera className="size-4" /> Digital Media</div><ul className="space-y-3 text-sm">{WORK_STREAMS.media.map((item) => (<li key={item}>• {item}</li>))}</ul></Card>
            <Card><div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground"><Cpu className="size-4" /> Engineering</div><ul className="space-y-3 text-sm">{WORK_STREAMS.engineering.map((item) => (<li key={item}>• {item}</li>))}</ul></Card>
          </Grid>
        </Section>

        <Section id="about" title="About" subtitle="Penn State Computer Engineering student + Japanese minor. 8 years of editing experience, from cinematic montages to branded social campaigns. Now building my own channels and tools while studying, lifting, and exploring creative storytelling formats.">
          <Grid cols={3}>
            <Card><div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground"><Wrench className="size-4" /> Stack</div><ul className="text-sm leading-7 text-muted-foreground"><li>Premiere Pro, After Effects, DaVinci</li><li>Python, JS/TS, React</li><li>FFmpeg, OBS, Git</li></ul></Card>
            <Card><div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground"><Music className="size-4" /> Now</div><ul className="text-sm leading-7 text-muted-foreground"><li>Producing original content across gaming, film, and personal documentary</li><li>Experimenting with storytelling styles for multiple platforms</li><li>Developing automation tools for creative workflows</li></ul></Card>
            <Card><div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground"><Code className="size-4" /> Learning</div><ul className="text-sm leading-7 text-muted-foreground"><li>DSP + audio cleaning pipelines</li><li>Data structures (C/CPP), embedded basics</li><li>Japanese grammar refresh</li></ul></Card>
          </Grid>
        </Section>

        <Section id="contact" title="Contact" subtitle="For collaborations, editing, or internships — I read every message.">
          <Grid cols={3}>
            <Card href="mailto:bodhispiegelbusiness@gmail.com" className="hover:bg-accent/40"><div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground"><Mail className="size-4" /> Email</div><div className="font-medium">bodhispiegelbusiness@gmail.com</div><div className="text-xs text-muted-foreground">Fastest reply</div></Card>
            <Card href="https://www.linkedin.com/in/" className="hover:bg-accent/40"><div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground"><Linkedin className="size-4" /> LinkedIn</div><div className="font-medium">Connect</div><div className="text-xs text-muted-foreground">Open to internships</div></Card>
            <Card href="https://www.youtube.com/@" className="hover:bg-accent/40"><div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground"><Youtube className="size-4" /> YouTube</div><div className="font-medium">Watch</div><div className="text-xs text-muted-foreground">New uploads soon</div></Card>
          </Grid>
        </Section>
      </main>

      <footer className="border-t">
        <Container className="py-10 text-xs text-muted-foreground flex items-center justify-between">
          <span>© {new Date().getFullYear()} Bodhi Spiegel. All rights reserved.</span>
          <div className="flex items-center gap-3">
            <a href="#home" className="hover:underline">Top</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </Container>
      </footer>
    </div>
  );
}
