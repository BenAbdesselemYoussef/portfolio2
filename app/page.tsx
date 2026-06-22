import { Button } from "@/components/ui/button";

const stack = ["Next.js", "TypeScript", "Node.js", "Python", "LLMs", "AWS"];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24">
      <div className="w-full max-w-2xl">
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
          <Button size="lg">View Work</Button>
          <Button size="lg" variant="outline">
            Get in Touch
          </Button>
        </div>

        <ul className="text-muted-foreground mt-10 flex flex-wrap gap-x-3 gap-y-2 font-mono text-xs">
          {stack.map((item) => (
            <li key={item} className="border-border rounded-md border px-2.5 py-1">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
