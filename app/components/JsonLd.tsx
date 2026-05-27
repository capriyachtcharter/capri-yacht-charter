/**
 * Server-only helper that renders a JSON-LD script tag.
 * Pass any Schema.org-shaped object as `data`.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> | Array<Record<string, unknown>> }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify with no spaces keeps the markup compact.
      // Next.js renders this server-side so the JSON-LD is in the initial HTML.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
