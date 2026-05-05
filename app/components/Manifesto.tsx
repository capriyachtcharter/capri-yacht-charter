const items = [
  {
    n: "01",
    title: "Entirely Private",
    text: "Your group only. Always. No strangers, no shared decks.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="11" r="4.5" />
        <path d="M6 26 C6 21 10 18 16 18 C22 18 26 21 26 26" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Curated Routes",
    text: "Predefined itineraries or fully custom — always with a professional skipper.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4 L20 16 L26 16 L21 20 L23 28 L16 23 L9 28 L11 20 L6 16 L12 16 Z" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Premium Comfort",
    text: "Prosecco, snorkeling kit, sound system. Everything taken care of.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 14 L26 14 L23 24 L9 24 Z" />
        <path d="M9 14 L9 8 L23 8 L23 14" />
        <line x1="16" y1="14" x2="16" y2="24" />
      </svg>
    ),
  },
];

export default function Manifesto() {
  return (
    <section className="manifesto">
      <div className="manifesto-inner">
        <div className="manifesto-intro">
          <div className="eyebrow">The Promise</div>
          <h2 className="section-title manifesto-headline">
            The boat is <span className="accent">yours.</span>
            <br />
            The day is yours.
          </h2>
          <p className="manifesto-prose">
            Three vessels, two generations, twenty years on the same
            stretch of sea. The Esposito family has been showing visitors
            the Tyrrhenian coast since 2004 — one private day at a time.
          </p>
          <div className="manifesto-signature">
            <div className="manifesto-signature-name">Carlo &amp; Marco Esposito</div>
            <div className="manifesto-signature-role">Founders &amp; Captains</div>
          </div>
        </div>

        <div className="manifesto-features">
          {items.map((item) => (
            <div key={item.n} className="manifesto-feature">
              <div className="manifesto-feature-icon">{item.icon}</div>
              <div className="manifesto-feature-body">
                <div className="manifesto-feature-num">{item.n}</div>
                <h3 className="manifesto-feature-title">{item.title}</h3>
                <p className="manifesto-feature-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
