"use client";

import { useLang } from "../i18n/LanguageProvider";

export default function Manifesto() {
  const { t, f } = useLang();
  return (
    <section className="manifesto" id="manifesto">
      <div className="manifesto-inner">
        <div className="manifesto-intro" data-reveal>
          <div className="eyebrow" {...f("manifesto.eyebrow")}>{t.manifesto.eyebrow}</div>
          <h2 className="section-title manifesto-headline">
            <span {...f("manifesto.titleLine1")}>{t.manifesto.titleLine1}</span> <span className="accent" {...f("manifesto.titleAccent")}>{t.manifesto.titleAccent}</span>
            <br />
            <span {...f("manifesto.titleLine2")}>
              {t.manifesto.titleLine2.replace(/(yours\.?|tua\.?)$/, "")}
              <span className="accent">
                {t.manifesto.titleLine2.match(/(yours\.?|tua\.?)$/)?.[0] ?? ""}
              </span>
            </span>
          </h2>
          <p className="manifesto-prose" {...f("manifesto.prose", "multiline")}>{t.manifesto.prose}</p>
          <div className="manifesto-signature">
            <div className="manifesto-signature-name" {...f("manifesto.signatureName")}>{t.manifesto.signatureName}</div>
            <div className="manifesto-signature-role" {...f("manifesto.signatureRole")}>{t.manifesto.signatureRole}</div>
          </div>
        </div>

        <ul className="manifesto-list">
          {t.manifesto.items.map((item, i) => (
            <li
              key={item.n}
              className="manifesto-list-item"
              data-reveal
            >
              <span className="manifesto-list-num">{item.n}</span>
              <div className="manifesto-list-body">
                <h3 className="manifesto-list-title" {...f(`manifesto.items.${i}.title`)}>{item.title}</h3>
                <p className="manifesto-list-text" {...f(`manifesto.items.${i}.text`, "multiline")}>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
