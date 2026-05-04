const items = [
  {
    n: "01",
    title: "Entirely Private",
    text: "Your group only. Always. No strangers, no shared decks.",
  },
  {
    n: "02",
    title: "Curated Routes",
    text: "Predefined itineraries or fully custom—always with a professional skipper.",
  },
  {
    n: "03",
    title: "Premium Comfort",
    text: "Prosecco, snorkeling kit, sound system. Everything taken care of.",
  },
];

export default function Manifesto() {
  return (
    <section className="section manifesto">
      <p className="manifesto-quote">
        The boat is yours. The day is yours.<br />
        We just take care of the sea.
      </p>

      <div className="manifesto-grid">
        {items.map((item) => (
          <div key={item.n} className="manifesto-item">
            <div className="manifesto-number">{item.n}</div>
            <h3 className="manifesto-title">{item.title}</h3>
            <p className="manifesto-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
