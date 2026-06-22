import { getTranslations, setRequestLocale } from "next-intl/server";

import { Button } from "@/components/ui/button";

const stack = ["Next.js", "TypeScript", "Node.js", "Python", "LLMs", "AWS"];
const sectionKeys = ["work", "about", "contact"] as const;

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Hero");
  const ts = await getTranslations("Sections");

  return (
    <main className="mx-auto w-full max-w-5xl px-6">
      {/* Hero */}
      <section className="flex min-h-[calc(100svh-4rem)] flex-col justify-center py-24">
        <p className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase">
          {t("eyebrow")}
        </p>

        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Youssef Ben Abdesselem
        </h1>

        <p className="text-muted-foreground mt-5 max-w-xl text-lg leading-relaxed text-pretty">
          {t.rich("description", {
            ai: (chunks) => <span className="text-brand font-medium">{chunks}</span>,
          })}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="lg" asChild>
            <a href="#work">{t("viewWork")}</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">{t("getInTouch")}</a>
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
      {sectionKeys.map((key) => (
        <section key={key} id={key} className="border-border/60 scroll-mt-16 border-t py-24">
          <p className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase">
            {ts(`${key}Eyebrow`)}
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            {ts(`${key}Title`)}
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl text-pretty">{ts(`${key}Body`)}</p>
        </section>
      ))}
    </main>
  );
}
