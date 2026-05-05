const items = [
  {
    n: "01",
    title: "Entirely Private",
    text: "Your group only. Always. No strangers, no shared decks.",
  },
  {
    n: "02",
    title: "Curated Routes",
    text: "Predefined itineraries or fully custom — always with a professional skipper at the helm.",
  },
  {
    n: "03",
    title: "Premium Comfort",
    text: "Prosecco on ice, snorkeling kit, sound system, fresh towels. Everything taken care of.",
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

        <ul className="manifesto-list">
          {items.map((item) => (
            <li key={item.n} className="manifesto-list-item">
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
