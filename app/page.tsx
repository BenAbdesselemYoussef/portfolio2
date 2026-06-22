import { Button } from "@/components/ui/button";

const stack = ["Next.js", "TypeScript", "Node.js", "Python", "LLMs", "AWS"];

const placeholders = [
  {
    id: "work",
    eyebrow: "01 / Work",
    title: "Selected Projects",
    body: "Case studies are on the way — real-time platforms, multi-tenant SaaS, and AI tooling.",
  },
  {
    id: "about",
    eyebrow: "02 / About",
    title: "Background",
    body: "Four years across streaming, audit, and AI products. The full story lands here next.",
  },
  {
    id: "contact",
    eyebrow: "03 / Contact",
    title: "Get in Touch",
    body: "A contact form with real delivery is coming. For now, the footer links work.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6">
      {/* Hero */}
      <section className="flex min-h-[calc(100svh-4rem)] flex-col justify-center py-24">
        <p className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase">
          Full-Stack Engineer · Tunisia
        </p>

        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Youssef Ben Abdesselem
        </h1>

        <p className="text-muted-foreground mt-5 max-w-xl text-lg leading-relaxed text-pretty">
          I build scalable, real-time, and data-driven systems — from multi-tenant SaaS platforms to
          tools that blend software with <span className="text-brand font-medium">AI</span> in
          practical ways.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="lg" asChild>
            <a href="#work">View Work</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        <ul className="text-muted-foreground mt-10 flex flex-wrap gap-x-3 gap-y-2 font-mono text-xs">
          {stack.map((item) => (
            <li key={item} className="border-border rounded-md border px-2.5 py-1">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Placeholder sections — filled in by issues #12–16 */}
      {placeholders.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="border-border/60 scroll-mt-16 border-t py-24"
        >
          <p className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase">
            {section.eyebrow}
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            {section.title}
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl text-pretty">{section.body}</p>
        </section>
      ))}
    </main>
  );
}
