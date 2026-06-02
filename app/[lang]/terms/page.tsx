import type { Metadata } from "next";
import { pageMetadata } from "../../i18n/metadata";
import PageShell from "../../components/PageShell";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return pageMetadata({
    lang,
    path: "/terms",
    en: {
      title: "Terms & Conditions",
      description:
        "Terms of use for capriyachtcharter.com. Booking, pricing, safety and intellectual property terms for Capri Yacht Charter / Sun & Sea S.r.l.",
    },
    it: {
      title: "Termini e condizioni",
      description:
        "Termini d'uso del sito capriyachtcharter.com. Prenotazione, prezzi, sicurezza e proprietà intellettuale di Capri Yacht Charter / Sun & Sea S.r.l.",
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
            <h1 className="legal-page-title">
              {isIt ? "Termini e condizioni" : "Terms & Conditions"}
            </h1>
            <p className="legal-updated">
              {isIt
                ? "Ultimo aggiornamento: 2 giugno 2026"
                : "Last updated: 2 June 2026"}
            </p>
          </header>

          {isIt ? <TermsIT /> : <TermsEN />}
        </div>
      </article>
    </PageShell>
  );
}

function TermsIT() {
  return (
    <>
      <p>
        Il sito <strong>capriyachtcharter.com</strong> è gestito da{" "}
        <strong>Sun &amp; Sea S.r.l.</strong> (P.IVA IT07755820631), con sede in
        Via Marina Grande 282 — 80073 Capri (NA), Italia.
      </p>

      <h2>1. Oggetto</h2>
      <p>
        Il sito ha finalità informativa e di contatto: presenta i servizi di
        noleggio yacht, tour ed escursioni offerti da Sun &amp; Sea S.r.l. Le
        prenotazioni <strong>non avvengono direttamente online</strong>:
        l&apos;Utente invia una richiesta tramite il modulo di contatto,
        WhatsApp, email o telefono. Il contratto si perfeziona solo a seguito di
        conferma scritta da parte della società.
      </p>

      <h2>2. Prezzi e disponibilità</h2>
      <p>
        I prezzi indicativi mostrati sul sito sono espressi in euro e si
        intendono IVA inclusa, salvo diversa indicazione. Possono variare in
        funzione della stagione, della durata dell&apos;uscita e dei servizi
        accessori richiesti. La disponibilità delle imbarcazioni e degli
        itinerari è confermata caso per caso al momento della prenotazione.
      </p>

      <h2>3. Sicurezza in mare</h2>
      <p>
        Tutti i tour e i servizi di noleggio sono eseguiti da capitani
        qualificati e con imbarcazioni regolarmente in regola con la normativa
        italiana vigente. La sicurezza degli ospiti a bordo è prioritaria: il
        capitano ha facoltà di modificare l&apos;itinerario, anticipare il
        rientro o annullare l&apos;uscita in caso di condizioni meteo-marine
        avverse o di altre situazioni che ne mettano a rischio lo svolgimento
        in sicurezza.
      </p>

      <h2>4. Cancellazione e rimborsi</h2>
      <p>
        Le condizioni di cancellazione e rimborso sono concordate al momento
        della prenotazione e riportate nella conferma scritta. In caso di
        annullamento per cause meteo-marine non imputabili al Cliente, è
        prevista la riproposizione dell&apos;uscita o il rimborso integrale
        secondo le modalità concordate.
      </p>

      <h2>5. Comportamento a bordo</h2>
      <p>
        L&apos;Utente si impegna a rispettare le istruzioni del capitano e
        dell&apos;equipaggio, le norme di sicurezza in mare e le regole di
        navigazione locali. È vietato salire a bordo in stato di alterazione
        psico-fisica o portare con sé sostanze illegali. Il danneggiamento
        volontario o per negligenza dell&apos;imbarcazione comporta il
        risarcimento dei danni.
      </p>

      <h2>6. Limitazione di responsabilità</h2>
      <p>
        Sun &amp; Sea S.r.l. non risponde di danni derivanti da uso improprio
        del sito o da contenuti di terzi raggiunti tramite link esterni
        presenti sul sito stesso. La responsabilità della società è limitata
        all&apos;esecuzione dei servizi effettivamente concordati con il
        Cliente.
      </p>

      <h2>7. Proprietà intellettuale</h2>
      <p>
        Tutti i contenuti presenti sul sito — testi, fotografie, video, marchi,
        loghi, grafiche — sono di proprietà di Sun &amp; Sea S.r.l. o dei
        rispettivi titolari e sono protetti dalle leggi sul diritto
        d&apos;autore. È vietata ogni riproduzione, copia, distribuzione o
        utilizzo non autorizzato.
      </p>

      <h2>8. Privacy e cookie</h2>
      <p>
        Per il trattamento dei dati personali si rinvia alla{" "}
        <a href="/it/privacy">Privacy Policy</a> e alla{" "}
        <a href="/it/cookie">Cookie Policy</a>.
      </p>

      <h2>9. Legge applicabile e foro competente</h2>
      <p>
        Le presenti condizioni sono regolate dalla legge italiana. Per ogni
        controversia derivante dall&apos;uso del sito o dai servizi offerti è
        competente in via esclusiva il <strong>Foro di Napoli</strong>, salvo
        diverso foro inderogabile previsto dalla legge a tutela del
        consumatore.
      </p>

      <h2>10. Contatti</h2>
      <p>
        Sun &amp; Sea S.r.l.
        <br />
        Via Marina Grande, 282 — 80073 Capri (NA)
        <br />
        Email:{" "}
        <a href="mailto:info@capriyachtcharter.com">
          info@capriyachtcharter.com
        </a>
        <br />
        Telefono / WhatsApp:{" "}
        <a href="tel:+393335741333">+39 333 574 1333</a>
      </p>
    </>
  );
}

function TermsEN() {
  return (
    <>
      <p>
        The website <strong>capriyachtcharter.com</strong> is operated by{" "}
        <strong>Sun &amp; Sea S.r.l.</strong> (VAT IT07755820631), with
        registered office at Via Marina Grande 282 — 80073 Capri (NA), Italy.
      </p>

      <h2>1. Purpose</h2>
      <p>
        The site has an informational and contact purpose: it presents the
        yacht charter, tour and excursion services offered by Sun &amp; Sea
        S.r.l. Bookings <strong>do not take place directly online</strong>:
        the User sends a request via the contact form, WhatsApp, email or
        phone. The contract is only finalised upon written confirmation from
        the company.
      </p>

      <h2>2. Prices and availability</h2>
      <p>
        Indicative prices shown on the site are in euro and include VAT
        unless otherwise stated. They may vary depending on the season, the
        duration of the trip and any additional services requested. Boat and
        itinerary availability is confirmed on a case-by-case basis at the
        time of booking.
      </p>

      <h2>3. Safety at sea</h2>
      <p>
        All tours and charter services are operated by qualified captains on
        vessels compliant with current Italian regulations. Guest safety on
        board is the top priority: the captain may modify the itinerary,
        return early or cancel the trip in case of adverse weather or sea
        conditions, or any situation that compromises safe operation.
      </p>

      <h2>4. Cancellation and refunds</h2>
      <p>
        Cancellation and refund terms are agreed at the time of booking and
        included in the written confirmation. In case of cancellation due to
        weather or sea conditions not attributable to the Client, the trip
        will be rescheduled or fully refunded as agreed.
      </p>

      <h2>5. Conduct on board</h2>
      <p>
        The User agrees to follow the captain&apos;s and crew&apos;s
        instructions, sea safety rules and local navigation regulations.
        Boarding in a state of psycho-physical alteration or carrying illegal
        substances is forbidden. Intentional or negligent damage to the
        vessel will result in compensation for damages.
      </p>

      <h2>6. Limitation of liability</h2>
      <p>
        Sun &amp; Sea S.r.l. is not liable for damages arising from improper
        use of the site or from third-party content reached via external
        links on the site. The company&apos;s liability is limited to the
        performance of the services actually agreed with the Client.
      </p>

      <h2>7. Intellectual property</h2>
      <p>
        All content on the site — text, photographs, videos, trademarks,
        logos and graphics — is the property of Sun &amp; Sea S.r.l. or of
        the respective owners and is protected by copyright law. Any
        unauthorised reproduction, copying, distribution or use is forbidden.
      </p>

      <h2>8. Privacy and cookies</h2>
      <p>
        For the processing of personal data please refer to our{" "}
        <a href="/en/privacy">Privacy Policy</a> and our{" "}
        <a href="/en/cookie">Cookie Policy</a>.
      </p>

      <h2>9. Governing law and jurisdiction</h2>
      <p>
        These terms are governed by Italian law. Any dispute arising from the
        use of the site or from the services offered is subject to the
        exclusive jurisdiction of the <strong>Court of Naples</strong>,
        without prejudice to any mandatory consumer-protection jurisdiction
        provided by law.
      </p>

      <h2>10. Contact</h2>
      <p>
        Sun &amp; Sea S.r.l.
        <br />
        Via Marina Grande, 282 — 80073 Capri (NA), Italy
        <br />
        Email:{" "}
        <a href="mailto:info@capriyachtcharter.com">
          info@capriyachtcharter.com
        </a>
        <br />
        Phone / WhatsApp:{" "}
        <a href="tel:+393335741333">+39 333 574 1333</a>
      </p>
    </>
  );
}
