/**
 * /admin — content editing has moved to Mosto Edit.
 *
 * The AI editor "brain" (agent, tools, content store) no longer lives in this
 * repo: it is a central, Mosto-owned service. This repo now only holds the site,
 * its content JSON, the live reader (lib/cms/live-content.ts) and the editable
 * fence (mosto-edit.schema.json). Edits are made from Mosto Edit and land here as
 * commits on this branch, going live via ISR.
 */
export const metadata = { title: 'Editor · Capri Yacht Charter' };

export default function AdminMoved() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0b1a2b',
        color: '#fff',
        fontFamily: 'system-ui, sans-serif',
        padding: 24,
      }}
    >
      <div style={{ maxWidth: 460, textAlign: 'center' }}>
        <h1 style={{ fontSize: 22, marginBottom: 12 }}>Editor dei contenuti</h1>
        <p style={{ lineHeight: 1.6, opacity: 0.85 }}>
          Le modifiche ai contenuti del sito si fanno ora da <strong>Mosto Edit</strong>.
          Contatta Mosto per l&apos;accesso.
        </p>
        <p style={{ marginTop: 20 }}>
          <a href="https://by.mosto.studio" style={{ color: '#7ad0ff' }}>
            by.mosto.studio
          </a>
        </p>
      </div>
    </main>
  );
}
