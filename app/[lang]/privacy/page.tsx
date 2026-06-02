import type { Metadata } from "next";
import { pageMetadata } from "../../i18n/metadata";
import PageShell from "../../components/PageShell";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return pageMetadata({
    lang,
    path: "/privacy",
    en: {
      title: "Privacy Policy",
      description:
        "How Sun & Sea S.r.l. (Capri Yacht Charter) handles personal data collected through this website. GDPR-compliant.",
    },
    it: {
      title: "Privacy Policy",
      description:
        "Come Sun & Sea S.r.l. (Capri Yacht Charter) tratta i dati personali raccolti tramite questo sito. Conforme al GDPR.",
    },
  });
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  const isIt = lang === "it";

  return (
    <PageShell>
      <article className="legal-page">
        <div className="legal-page-inner">
          <header className="legal-page-head">
            <div className="eyebrow">{isIt ? "Informativa" : "Notice"}</div>
            <h1 className="legal-page-title">Privacy Policy</h1>
            <p className="legal-updated">
              {isIt ? "Ultimo aggiornamento: 2 giugno 2026" : "Last updated: 2 June 2026"}
            </p>
          </header>

          {isIt ? <ContentIT /> : <ContentEN />}
        </div>
      </article>
    </PageShell>
  );
}

function ContentIT() {
  return (
    <>
      <p>
        La presente informativa descrive le modalità con cui Sun &amp; Sea S.r.l.
        tratta i dati personali raccolti tramite il sito{" "}
        <strong>capriyachtcharter.com</strong>, in conformità al Regolamento (UE)
        2016/679 (&laquo;GDPR&raquo;) e al D.Lgs. 196/2003 e ss.mm.ii.
      </p>

      <h2>1. Titolare del trattamento</h2>
      <p>
        <strong>Sun &amp; Sea S.r.l.</strong>
        <br />
        Via Marina Grande, 282 — 80073 Capri (NA), Italia
        <br />
        P.IVA: IT07755820631
        <br />
        Email: <a href="mailto:info@capriyachtcharter.com">info@capriyachtcharter.com</a>
        <br />
        Telefono / WhatsApp:{" "}
        <a href="tel:+393335741333">+39 333 574 1333</a>
      </p>

      <h2>2. Tipi di dati raccolti</h2>
      <p>
        Tramite il modulo di contatto e i canali diretti (WhatsApp, email,
        telefono) raccogliamo:
      </p>
      <ul>
        <li>Nome e cognome</li>
        <li>Indirizzo email</li>
        <li>Numero di telefono</li>
        <li>Contenuto del messaggio (richiesta, date, numero di ospiti)</li>
      </ul>
      <p>
        <strong>Non raccogliamo dati di pagamento</strong>: ogni accordo
        economico viene gestito offline, direttamente con il Cliente. Non sono
        presenti, su questo sito, sistemi di pagamento online né registrazione
        utenti.
      </p>
      <p>
        Durante la navigazione, il provider di hosting registra in automatico
        log tecnici (indirizzo IP, user agent del browser, timestamp) per
        finalità di sicurezza e funzionamento del Servizio.
      </p>

      <h2>3. Finalità e base giuridica</h2>
      <ul>
        <li>
          <strong>Risposta alle richieste</strong> di informazioni e di
          preventivo — base giuridica: misure precontrattuali su richiesta
          dell&apos;Utente (art. 6.1.b GDPR).
        </li>
        <li>
          <strong>Esecuzione del contratto</strong> di noleggio o servizio — base
          giuridica: contratto (art. 6.1.b GDPR).
        </li>
        <li>
          <strong>Adempimenti fiscali e contabili</strong> — base giuridica:
          obbligo legale (art. 6.1.c GDPR).
        </li>
        <li>
          <strong>Sicurezza del sito</strong> e prevenzione di abusi — base
          giuridica: legittimo interesse del Titolare (art. 6.1.f GDPR).
        </li>
      </ul>
      <p>
        Non utilizziamo i dati per profilazione né per marketing automatizzato.
      </p>

      <h2>4. Modalità del trattamento</h2>
      <p>
        I dati sono trattati con strumenti informatici protetti da misure
        tecniche e organizzative adeguate a garantirne riservatezza,
        integrità e disponibilità. L&apos;accesso è limitato al personale
        autorizzato.
      </p>

      <h2>5. Periodo di conservazione</h2>
      <ul>
        <li>
          Richieste di contatto non convertite in prenotazione:{" "}
          <strong>12 mesi</strong>.
        </li>
        <li>
          Dati relativi a contratti eseguiti:{" "}
          <strong>10 anni</strong> per obblighi fiscali e contabili.
        </li>
        <li>
          Log tecnici del server: <strong>massimo 30 giorni</strong>.
        </li>
      </ul>

      <h2>6. Comunicazione a terzi</h2>
      <p>
        I dati possono essere comunicati, nei limiti della finalità per cui sono
        stati raccolti, a:
      </p>
      <ul>
        <li>
          <strong>Vercel Inc.</strong> — provider di hosting (regioni server
          configurabili in UE);
        </li>
        <li>
          Fornitori di servizi email e messaggistica utilizzati per rispondere
          alle richieste (es. Google Workspace, WhatsApp);
        </li>
        <li>Commercialista e consulenti per adempimenti fiscali;</li>
        <li>Autorità competenti, su richiesta motivata.</li>
      </ul>
      <p>
        <strong>Non vendiamo né cediamo dati</strong> per finalità di marketing
        di terzi.
      </p>

      <h2>7. Diritti dell&apos;Utente</h2>
      <p>
        In qualsiasi momento puoi esercitare i diritti previsti dagli artt.
        15-22 del GDPR:
      </p>
      <ul>
        <li>accedere ai tuoi dati personali;</li>
        <li>chiederne la rettifica o la cancellazione;</li>
        <li>chiedere la limitazione del trattamento;</li>
        <li>opporti al trattamento;</li>
        <li>ricevere i tuoi dati in formato portabile;</li>
        <li>revocare il consenso prestato (se applicabile);</li>
        <li>
          proporre reclamo al Garante per la protezione dei dati personali —{" "}
          <a
            href="https://www.garanteprivacy.it"
            target="_blank"
            rel="noopener"
          >
            www.garanteprivacy.it
          </a>
          .
        </li>
      </ul>
      <p>
        Per esercitare i tuoi diritti scrivi a{" "}
        <a href="mailto:info@capriyachtcharter.com">
          info@capriyachtcharter.com
        </a>
        . Risponderemo entro un mese.
      </p>

      <h2>8. Cookie</h2>
      <p>
        Il sito utilizza esclusivamente cookie tecnici strettamente necessari.
        Per i dettagli consulta la nostra{" "}
        <a href="/it/cookie">Cookie Policy</a>.
      </p>

      <h2>9. Modifiche</h2>
      <p>
        Eventuali aggiornamenti a questa policy saranno pubblicati su questa
        pagina con relativa data.
      </p>
    </>
  );
}

function ContentEN() {
  return (
    <>
      <p>
        This notice describes how Sun &amp; Sea S.r.l. processes personal data
        collected through the website <strong>capriyachtcharter.com</strong>,
        in accordance with Regulation (EU) 2016/679 (the &laquo;GDPR&raquo;)
        and Italian Legislative Decree 196/2003 as amended.
      </p>

      <h2>1. Data Controller</h2>
      <p>
        <strong>Sun &amp; Sea S.r.l.</strong>
        <br />
        Via Marina Grande, 282 — 80073 Capri (NA), Italy
        <br />
        VAT: IT07755820631
        <br />
        Email:{" "}
        <a href="mailto:info@capriyachtcharter.com">
          info@capriyachtcharter.com
        </a>
        <br />
        Phone / WhatsApp:{" "}
        <a href="tel:+393335741333">+39 333 574 1333</a>
      </p>

      <h2>2. Types of data collected</h2>
      <p>
        Through the contact form and direct channels (WhatsApp, email, phone)
        we collect:
      </p>
      <ul>
        <li>First and last name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Message content (request, dates, number of guests)</li>
      </ul>
      <p>
        <strong>We do not collect payment data</strong>: any financial
        arrangement is handled offline, directly with the Client. There are no
        online payment systems or user registration on this site.
      </p>
      <p>
        During navigation the hosting provider automatically records technical
        logs (IP address, browser user agent, timestamp) for security and
        Service operation purposes.
      </p>

      <h2>3. Purposes and legal basis</h2>
      <ul>
        <li>
          <strong>Replying to requests</strong> for information and quotes —
          legal basis: pre-contractual measures at the User&apos;s request (Art.
          6.1.b GDPR).
        </li>
        <li>
          <strong>Performance of the charter or service contract</strong> —
          legal basis: contract (Art. 6.1.b GDPR).
        </li>
        <li>
          <strong>Tax and accounting obligations</strong> — legal basis: legal
          obligation (Art. 6.1.c GDPR).
        </li>
        <li>
          <strong>Site security</strong> and abuse prevention — legal basis:
          Controller&apos;s legitimate interest (Art. 6.1.f GDPR).
        </li>
      </ul>
      <p>We do not use data for profiling or automated marketing.</p>

      <h2>4. Processing methods</h2>
      <p>
        Data is processed with electronic tools protected by technical and
        organisational measures appropriate to ensure confidentiality,
        integrity and availability. Access is limited to authorised personnel.
      </p>

      <h2>5. Retention period</h2>
      <ul>
        <li>
          Contact requests not converted into a booking:{" "}
          <strong>12 months</strong>.
        </li>
        <li>
          Data relating to performed contracts: <strong>10 years</strong> for
          tax and accounting obligations.
        </li>
        <li>
          Server technical logs: <strong>up to 30 days</strong>.
        </li>
      </ul>

      <h2>6. Disclosure to third parties</h2>
      <p>
        Data may be disclosed, within the purpose for which it was collected,
        to:
      </p>
      <ul>
        <li>
          <strong>Vercel Inc.</strong> — hosting provider (server regions
          configurable in the EU);
        </li>
        <li>
          Email and messaging service providers used to reply to requests
          (e.g. Google Workspace, WhatsApp);
        </li>
        <li>Accountants and consultants for tax obligations;</li>
        <li>Competent authorities, upon justified request.</li>
      </ul>
      <p>
        <strong>We do not sell or share data</strong> for third-party
        marketing.
      </p>

      <h2>7. User rights</h2>
      <p>
        At any time you may exercise the rights under Articles 15-22 of the
        GDPR:
      </p>
      <ul>
        <li>access your personal data;</li>
        <li>request rectification or erasure;</li>
        <li>request restriction of processing;</li>
        <li>object to processing;</li>
        <li>receive your data in a portable format;</li>
        <li>withdraw any consent given (where applicable);</li>
        <li>
          lodge a complaint with the Italian Data Protection Authority —{" "}
          <a
            href="https://www.garanteprivacy.it"
            target="_blank"
            rel="noopener"
          >
            www.garanteprivacy.it
          </a>
          .
        </li>
      </ul>
      <p>
        To exercise your rights write to{" "}
        <a href="mailto:info@capriyachtcharter.com">
          info@capriyachtcharter.com
        </a>
        . We will reply within one month.
      </p>

      <h2>8. Cookies</h2>
      <p>
        The site uses only strictly necessary technical cookies. See our{" "}
        <a href="/en/cookie">Cookie Policy</a> for details.
      </p>

      <h2>9. Changes</h2>
      <p>
        Any updates to this policy will be published on this page, dated
        accordingly.
      </p>
    </>
  );
}
