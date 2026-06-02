import type { Metadata } from "next";
import { pageMetadata } from "../../i18n/metadata";
import PageShell from "../../components/PageShell";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return pageMetadata({
    lang,
    path: "/cookie",
    en: {
      title: "Cookie Policy",
      description:
        "Cookies used by capriyachtcharter.com — strictly necessary only, no profiling, no analytics, no consent banner required.",
    },
    it: {
      title: "Cookie Policy",
      description:
        "Cookie utilizzati da capriyachtcharter.com — solo tecnici strettamente necessari, niente profilazione, niente analytics.",
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
            <h1 className="legal-page-title">Cookie Policy</h1>
            <p className="legal-updated">
              {isIt
                ? "Ultimo aggiornamento: 2 giugno 2026"
                : "Last updated: 2 June 2026"}
            </p>
          </header>

          {isIt ? <CookieIT /> : <CookieEN />}
        </div>
      </article>
    </PageShell>
  );
}

function CookieIT() {
  return (
    <>
      <h2>Che cosa sono i cookie</h2>
      <p>
        I cookie sono piccoli file di testo che i siti visitati salvano nel
        browser dell&apos;Utente per consentire il corretto funzionamento del
        sito e, in alcuni casi, raccogliere informazioni statistiche o di
        profilazione (queste ultime solo previo consenso esplicito).
      </p>

      <h2>Cookie utilizzati da questo sito</h2>
      <p>
        Il sito utilizza <strong>esclusivamente cookie tecnici strettamente
        necessari</strong>. Non sono presenti cookie di profilazione, di
        marketing né strumenti di analytics di terze parti. Per questo motivo,
        in conformità con il provvedimento del Garante Privacy del 10 giugno
        2021, non viene mostrato alcun banner di consenso cookie.
      </p>

      <div className="legal-table-wrap">
        <table className="legal-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Finalità</th>
              <th>Durata</th>
              <th>Tipologia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>NEXT_LOCALE</code>
              </td>
              <td>Memorizza la lingua scelta (IT / EN)</td>
              <td>12 mesi</td>
              <td>Tecnico</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Il sito utilizza inoltre <code>localStorage</code> e{" "}
        <code>sessionStorage</code> del browser per memorizzare alcune
        preferenze di sessione (es. stato dei caroselli). Questi dati restano
        sul dispositivo dell&apos;Utente e non vengono trasmessi a server
        esterni.
      </p>

      <h2>Servizi di terze parti</h2>
      <ul>
        <li>
          <strong>Google Fonts</strong>: i font utilizzati dal sito vengono
          scaricati e auto-ospitati al momento della build, quindi durante la
          navigazione <strong>non viene effettuata alcuna richiesta a Google
          dal browser dell&apos;Utente</strong>.
        </li>
        <li>
          <strong>Vercel</strong> (hosting): l&apos;infrastruttura registra log
          tecnici (indirizzo IP, user agent, timestamp) per ragioni di
          sicurezza e di funzionamento del servizio. Non vengono utilizzati
          cookie di tracciamento.
        </li>
      </ul>

      <h2>Gestione dei cookie dal browser</h2>
      <p>
        Puoi gestire o disabilitare i cookie tecnici dalle impostazioni del tuo
        browser:
      </p>
      <ul>
        <li>
          <a
            href="https://support.google.com/chrome/answer/95647"
            target="_blank"
            rel="noopener"
          >
            Google Chrome
          </a>
        </li>
        <li>
          <a
            href="https://support.apple.com/it-it/HT201265"
            target="_blank"
            rel="noopener"
          >
            Apple Safari
          </a>
        </li>
        <li>
          <a
            href="https://support.mozilla.org/it/kb/eliminare-i-cookie-rimuovere-informazioni-siti-web"
            target="_blank"
            rel="noopener"
          >
            Mozilla Firefox
          </a>
        </li>
        <li>
          <a
            href="https://support.microsoft.com/it-it/microsoft-edge"
            target="_blank"
            rel="noopener"
          >
            Microsoft Edge
          </a>
        </li>
      </ul>
      <p>
        La disabilitazione dei cookie tecnici può compromettere il corretto
        funzionamento di alcune parti del sito (es. selezione della lingua).
      </p>

      <h2>Modifiche</h2>
      <p>
        Eventuali aggiornamenti saranno pubblicati su questa pagina con la
        relativa data. Per qualsiasi domanda scrivi a{" "}
        <a href="mailto:info@capriyachtcharter.com">
          info@capriyachtcharter.com
        </a>
        .
      </p>
    </>
  );
}

function CookieEN() {
  return (
    <>
      <h2>What cookies are</h2>
      <p>
        Cookies are small text files that the websites you visit save in your
        browser to enable the correct functioning of the site and, in some
        cases, collect statistical or profiling information (the latter only
        with explicit consent).
      </p>

      <h2>Cookies used by this site</h2>
      <p>
        This site uses{" "}
        <strong>only strictly necessary technical cookies</strong>. There are
        no profiling, marketing or third-party analytics cookies. For this
        reason — in compliance with the Italian Data Protection Authority
        ruling of 10 June 2021 — no cookie consent banner is shown.
      </p>

      <div className="legal-table-wrap">
        <table className="legal-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Purpose</th>
              <th>Duration</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>NEXT_LOCALE</code>
              </td>
              <td>Stores the chosen language (IT / EN)</td>
              <td>12 months</td>
              <td>Technical</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        The site also uses the browser&apos;s <code>localStorage</code> and{" "}
        <code>sessionStorage</code> to remember some session preferences (e.g.
        carousel state). This data stays on the User&apos;s device and is not
        transmitted to external servers.
      </p>

      <h2>Third-party services</h2>
      <ul>
        <li>
          <strong>Google Fonts</strong>: the fonts used by the site are
          downloaded and self-hosted at build time, so during navigation{" "}
          <strong>no request is made to Google from the User&apos;s
          browser</strong>.
        </li>
        <li>
          <strong>Vercel</strong> (hosting): the infrastructure logs technical
          information (IP address, user agent, timestamp) for security and
          service operation purposes. No tracking cookies are used.
        </li>
      </ul>

      <h2>Managing cookies in the browser</h2>
      <p>
        You can manage or disable technical cookies in your browser settings:
      </p>
      <ul>
        <li>
          <a
            href="https://support.google.com/chrome/answer/95647"
            target="_blank"
            rel="noopener"
          >
            Google Chrome
          </a>
        </li>
        <li>
          <a
            href="https://support.apple.com/en-us/HT201265"
            target="_blank"
            rel="noopener"
          >
            Apple Safari
          </a>
        </li>
        <li>
          <a
            href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox"
            target="_blank"
            rel="noopener"
          >
            Mozilla Firefox
          </a>
        </li>
        <li>
          <a
            href="https://support.microsoft.com/en-us/microsoft-edge"
            target="_blank"
            rel="noopener"
          >
            Microsoft Edge
          </a>
        </li>
      </ul>
      <p>
        Disabling technical cookies may impair the correct operation of parts
        of the site (e.g. language selection).
      </p>

      <h2>Changes</h2>
      <p>
        Any updates will be published on this page with the relevant date. For
        any questions write to{" "}
        <a href="mailto:info@capriyachtcharter.com">
          info@capriyachtcharter.com
        </a>
        .
      </p>
    </>
  );
}
