// Renders a JSON-LD structured-data block. The payload is built server-side
// (see lib/seo.ts) and is trusted, so dangerouslySetInnerHTML is safe here.
export function JsonLd({ data }: { data: object }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
