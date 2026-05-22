"use client";

import { useLang } from "../i18n/LanguageProvider";

export default function Manifesto() {
  const { t } = useLang();
  return (
    <section className="manifesto" id="manifesto">
      <div className="manifesto-inner">
        <div className="manifesto-intro" data-reveal>
          <div className="eyebrow">{t.manifesto.eyebrow}</div>
          <h2 className="section-title manifesto-headline">
            {t.manifesto.titleLine1} <span className="accent">{t.manifesto.titleAccent}</span>
            <br />
            {t.manifesto.titleLine2.replace(/(yours\.?|tua\.?)$/, "")}
            <span className="accent">
              {t.manifesto.titleLine2.match(/(yours\.?|tua\.?)$/)?.[0] ?? ""}
            </span>
          </h2>
          <p className="manifesto-prose">{t.manifesto.prose}</p>
          <div className="manifesto-signature">
            <div className="manifesto-signature-name">{t.manifesto.signatureName}</div>
            <div className="manifesto-signature-role">{t.manifesto.signatureRole}</div>
          </div>
        </div>

        <ul className="manifesto-list">
          {t.manifesto.items.map((item) => (
            <li
              key={item.n}
              className="manifesto-list-item"
              data-reveal
            >
              <span className="manifesto-list-num">{item.n}</span>
              <div className="manifesto-list-body">
                <h3 className="manifesto-list-title">{item.title}</h3>
                <p className="manifesto-list-text">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
