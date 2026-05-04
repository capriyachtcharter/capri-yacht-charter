const pins = [
  { x: 230, y: 275, label: "Marina Grande", labelY: 258, delay: "0s" },
  { x: 180, y: 295, label: "Blue Grotto", labelY: 315, delay: "0.2s" },
  { x: 520, y: 330, label: "Faraglioni", labelY: 350, delay: "0.4s" },
  { x: 380, y: 360, label: "Marina Piccola", labelY: 378, delay: "0.6s" },
  { x: 300, y: 290, label: "Anacapri", labelY: 308, delay: "0.8s" },
  { x: 200, y: 355, label: "Punta Carena", labelY: 373, delay: "1s" },
];

export default function CapriMap() {
  return (
    <section className="map-section">
      <div className="map-content">
        <div className="map-text">
          <div className="eyebrow">The Island</div>
          <h2 className="section-title">
            Discover <span className="accent">Capri</span>
          </h2>
          <p className="section-desc">
            Every tour explores the island&apos;s hidden coves, dramatic cliffs,
            and crystal grottos. Our routes are designed to show you the Capri
            that tourists never see.
          </p>
          <button className="btn-primary">View All Tours</button>
        </div>

        <div className="map-illustration">
          <svg
            className="map-svg"
            viewBox="0 0 700 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="waterGradient" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#1A2433" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#0B0F19" stopOpacity="0" />
              </radialGradient>
            </defs>

            <ellipse
              cx="350"
              cy="320"
              rx="320"
              ry="200"
              fill="url(#waterGradient)"
              opacity="0.6"
            />

            <path
              d="M180,280 L200,260 L230,250 L270,240 L320,235 L380,240 L430,250 L480,265 L520,280 L545,300 L555,320 L550,345 L530,365 L500,380 L450,390 L400,395 L350,390 L300,380 L250,365 L210,345 L185,320 L175,300 Z"
              fill="#252B3D"
              stroke="#3D4A5C"
              strokeWidth="1.5"
            />

            <path d="M280,290 L290,270 L300,290 Z" fill="#2E3644" stroke="#3D4A5C" strokeWidth="0.5" />
            <path d="M340,300 L355,275 L370,300 Z" fill="#2E3644" stroke="#3D4A5C" strokeWidth="0.5" />

            <path d="M200,280 Q300,270 400,285" stroke="#4A5566" strokeWidth="1" opacity="0.4" />
            <path d="M300,270 L320,320" stroke="#4A5566" strokeWidth="0.8" opacity="0.3" />

            <path d="M520,280 Q530,285 540,290" stroke="#3D4A5C" strokeWidth="1.2" fill="none" />
            <path d="M200,265 Q195,270 192,278" stroke="#3D4A5C" strokeWidth="1.2" fill="none" />

            {pins.map((p) => (
              <g key={p.label} className="map-pin" style={{ animationDelay: p.delay }}>
                <circle cx={p.x} cy={p.y} r="5" fill="#C9A870" />
                <circle cx={p.x} cy={p.y} r="10" fill="none" stroke="#C9A870" strokeWidth="2" opacity="0.4" />
                <text
                  x={p.x}
                  y={p.labelY}
                  fontFamily="Inter"
                  fontSize="12"
                  fill="#E8ECF2"
                  textAnchor="middle"
                  fontWeight="600"
                >
                  {p.label}
                </text>
              </g>
            ))}

            <circle cx="470" cy="285" r="3" fill="#5DADE2" opacity="0.7" />
            <text x="470" y="275" fontFamily="Inter" fontSize="10" fill="#5DADE2" textAnchor="middle" fontWeight="500" opacity="0.8">
              White Grotto
            </text>

            <circle cx="485" cy="310" r="3" fill="#5DADE2" opacity="0.7" />
            <text x="485" y="300" fontFamily="Inter" fontSize="10" fill="#5DADE2" textAnchor="middle" fontWeight="500" opacity="0.8">
              Green Grotto
            </text>

            <path d="M50,400 Q80,390 110,400 T170,400 T230,400" stroke="#5DADE2" strokeWidth="1" fill="none" opacity="0.2" />
            <path d="M500,150 Q530,140 560,150 T620,150" stroke="#5DADE2" strokeWidth="1" fill="none" opacity="0.2" />

            <g transform="translate(580, 460)" opacity="0.6">
              <line x1="0" y1="0" x2="80" y2="0" stroke="#7B8394" strokeWidth="1.5" />
              <line x1="0" y1="-3" x2="0" y2="3" stroke="#7B8394" strokeWidth="1.5" />
              <line x1="80" y1="-3" x2="80" y2="3" stroke="#7B8394" strokeWidth="1.5" />
              <text x="40" y="-8" fontFamily="Inter" fontSize="10" fill="#7B8394" textAnchor="middle">
                2 km
              </text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
