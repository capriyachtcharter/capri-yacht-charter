"use client";

import { useEffect, useState } from "react";

const capriPath = "M458.8 349.6L464.8 355.5L472.8 354.6L472.1 356.2L475.6 356.4L480.5 354.8L480.4 357.6L474.2 359.3L475.1 367.9L468.7 378.0L470.3 378.6L473.4 376.2L474.0 378.1L472.5 379.9L473.9 379.9L464.5 387.8L471.8 387.7L473.6 389.0L480.4 387.1L481.9 384.5L486.5 384.5L496.2 378.7L498.8 380.3L498.5 377.3L503.1 376.2L502.8 371.5L511.2 376.7L514.7 373.9L520.1 373.5L521.5 370.7L523.4 370.2L523.0 375.3L525.3 375.8L528.2 370.7L532.4 373.7L542.4 361.7L544.5 364.5L548.9 360.7L551.7 360.2L554.9 362.7L571.4 361.7L574.4 364.3L582.4 364.1L584.1 365.8L585.5 365.1L584.9 372.2L588.7 371.2L587.6 367.7L591.2 372.1L593.3 372.1L593.4 374.7L596.1 371.7L599.2 374.8L601.9 374.9L601.8 371.0L600.3 370.0L603.1 367.8L602.2 365.5L606.1 363.4L605.1 361.5L608.1 357.6L616.8 354.1L617.7 351.9L621.9 356.8L622.7 352.9L624.3 352.0L630.5 351.4L631.0 349.9L635.7 351.2L639.0 342.1L638.3 337.8L644.9 328.5L649.7 327.2L653.6 328.4L653.1 334.1L655.8 333.4L655.5 329.0L657.6 327.8L667.0 328.9L673.8 325.0L675.1 327.6L680.4 325.1L685.8 325.1L690.6 319.9L699.0 321.5L702.7 318.4L710.0 323.6L716.0 322.2L718.0 324.0L717.4 325.8L722.0 326.4L721.8 331.7L726.1 333.6L726.8 335.7L733.1 336.5L731.3 337.5L733.4 337.2L732.3 339.1L734.0 339.8L734.5 338.7L736.7 340.7L738.9 339.6L741.6 342.9L740.0 343.8L740.9 344.8L744.2 342.3L743.7 348.5L746.6 350.1L748.4 349.3L748.3 344.5L750.8 342.6L748.9 341.2L744.5 342.1L743.5 337.5L744.8 337.0L744.7 332.9L750.8 331.1L754.4 332.8L757.4 332.1L757.0 329.5L762.8 328.6L761.9 325.6L764.8 325.9L768.8 323.4L769.5 321.7L767.7 318.3L770.4 315.8L777.4 317.5L778.2 315.8L774.1 313.4L775.5 308.5L771.5 305.4L773.5 294.1L778.4 290.5L777.8 288.1L780.0 284.2L782.1 285.9L787.1 276.8L792.7 279.4L793.1 274.0L796.1 274.7L794.6 271.2L803.7 276.7L803.2 268.7L806.1 267.8L808.5 264.9L808.2 262.1L811.9 254.0L798.4 252.8L802.8 249.5L801.0 246.9L799.9 248.0L801.8 246.0L800.1 242.3L801.0 238.9L797.4 227.5L793.9 224.1L786.5 226.9L782.5 221.4L773.5 225.5L771.2 229.1L762.0 235.1L761.9 237.2L757.4 237.3L756.9 241.0L758.7 242.0L746.3 247.7L745.1 252.9L742.1 253.6L736.5 251.1L730.4 255.6L718.6 255.2L710.2 248.8L701.5 247.9L711.6 250.3L713.7 255.4L702.7 257.6L702.9 255.0L693.1 254.3L702.4 255.3L702.2 257.9L699.2 258.2L690.5 257.0L690.4 254.7L689.0 254.8L689.0 258.5L682.6 258.6L681.6 256.2L680.9 258.1L674.6 254.2L675.2 253.0L677.2 254.1L675.4 252.5L679.2 246.1L694.0 246.2L696.3 242.7L692.6 244.5L680.0 244.7L675.1 251.3L669.2 252.2L662.8 249.7L660.6 245.9L662.4 245.4L656.9 243.6L654.7 240.1L637.8 233.5L632.4 234.6L624.3 232.8L622.6 235.2L617.5 235.5L611.1 233.8L600.3 227.1L593.7 225.3L593.7 223.8L593.2 225.3L589.0 224.6L586.1 228.4L563.7 223.0L560.6 223.9L546.0 218.1L512.6 221.6L510.1 223.9L503.7 222.9L493.7 225.6L484.1 223.9L478.2 224.8L472.0 233.0L471.3 236.0L471.8 249.3L469.9 249.4L472.6 256.2L471.4 257.4L473.2 259.4L470.7 259.5L470.3 263.5L472.5 268.2L473.8 267.2L475.6 269.5L477.2 268.9L486.9 275.6L492.3 287.1L487.1 285.4L485.8 286.9L485.4 289.1L489.6 293.5L482.7 289.3L480.9 293.1L477.8 291.9L474.5 293.5L473.0 295.8L474.5 298.8L468.2 295.9L463.8 302.3L466.0 304.9L472.4 303.4L468.9 306.1L468.2 308.8L469.9 315.6L467.9 318.5L469.9 323.6L472.7 325.3L476.7 320.7L471.6 329.1L472.4 330.8L470.7 332.2L470.2 338.5L466.6 339.3L467.0 342.6L462.6 344.3L458.8 349.6Z";
const promontoryPath = "M1081.9 48.4L1084.5 48.9L1087.9 53.6L1098.6 53.3L1101.0 55.6L1109.3 56.7L1115.1 55.6L1116.6 58.3L1110.6 69.2L1110.7 72.6L1103.7 71.2L1100.7 73.1L1094.7 85.9L1092.8 95.6L1091.1 96.0L1091.4 102.8L1093.9 102.8L1093.6 104.9L1090.1 106.1L1091.2 116.0L1093.6 119.4L1092.3 123.2L1095.0 132.6L1101.3 132.7L1099.5 139.5L1096.5 140.9L1098.5 141.8L1096.5 143.5L1097.1 162.4L1101.4 165.4L1099.3 166.3L1103.5 170.8L1106.3 169.5L1108.3 164.1L1123.1 159.6L1127.4 155.4L1128.5 146.9L1136.9 139.5L1142.7 138.9L1147.2 130.4L1153.0 127.9L1158.2 120.8L1160.1 125.1L1161.3 119.8L1163.8 117.9L1167.2 120.3L1164.6 122.1L1166.1 123.2L1169.6 119.0L1177.4 119.7L1179.9 117.3L1183.5 120.9L1184.9 126.0L1174.9 135.1L1177.4 137.6L1183.4 137.9L1180.3 141.4L1174.6 143.3L1169.6 150.0L1166.8 163.3L1171.3 164.5L1188.8 157.1L1195.9 147.7L1197.6 149.1L1201.3 146.6L1203.3 150.3L1208.7 150.1L1210.5 143.4L1208.8 140.7L1211.7 138.4L1205.4 130.0L1205.9 124.4L1209.6 122.1L1208.5 118.6L1212.7 113.7L1214.0 108.6L1212.5 106.9L1216.3 101.7L1235.4 93.9L1241.6 86.9L1250.6 84.1L1252.8 80.9L1259.1 78.4L1272.3 76.7L1275.5 82.9L1280.5 85.0L1298.7 78.5L1305.6 71.5L1302.1 72.1L1297.5 65.0L1299.0 62.5L1303.9 62.7L1302.6 58.6L1307.7 60.0L1313.8 50.0L1319.7 48.1L1325.4 52.8L1337.8 48.0L1342.9 43.3L1346.7 42.9L1346.3 41.1L1348.9 41.5L1355.1 35.0L1361.5 35.1L1362.2 24.8L1365.5 26.2L1383.2 22.4L1385.3 16.4L1384.4 12.7L1386.9 14.1L1388.2 21.4L1395.8 22.0L1424.0 11.4L1429.0 8.8L1432.9 2.8L1436.7 5.4L1443.1 3.3L1444.0 -11.0L1438.9 -20.7L1439.3 -24.1L1443.7 -24.3L1447.9 -28.7L1448.1 -39.1L1443.5 -49.7L1442.0 -59.8L1435.9 -65.1L1437.3 -69.8L1433.4 -73.3L1430.8 -69.6L1420.4 -73.4L1416.5 -72.0L1408.0 -74.8L1398.4 -74.6L1389.5 -78.7L1384.4 -85.9L1384.9 -101.0L1381.0 -107.7L1368.0 -121.2L1366.0 -119.6L1363.5 -122.8L1363.6 -114.8L1356.0 -107.0L1353.3 -108.6L1350.6 -116.3L1349.5 -117.1L1346.4 -112.0L1337.0 -123.4L1334.0 -122.4L1336.0 -116.0L1330.4 -121.8L1322.7 -119.5L1322.5 -122.7L1320.7 -124.2L1317.6 -122.3L1316.2 -126.5L1314.6 -126.2L1314.2 -121.7L1305.1 -125.6L1304.1 -122.9L1298.0 -123.0L1295.5 -120.7L1281.8 -126.3L1268.8 -142.3L1262.0 -145.7L1255.9 -146.2L1255.9 -151.2L1257.6 -152.4L1256.9 -166.1L1251.2 -174.7L1230.0 -197.0L1213.4 -210.4L1209.7 -208.4L1206.5 -209.9L1205.5 -206.4L1201.7 -207.8L1199.8 -210.8L1204.6 -215.5L1197.7 -210.0L1193.6 -211.9L1192.6 -207.8L1189.8 -206.4L1182.2 -216.4L1177.8 -217.9L1174.4 -207.5L1177.3 -205.1L1173.5 -205.6L1172.8 -203.5L1179.7 -195.3L1180.6 -188.5L1178.3 -186.4L1179.8 -177.9L1183.4 -169.4L1190.5 -162.5L1189.0 -160.3L1190.6 -155.9L1188.6 -152.1L1180.8 -149.7L1182.9 -145.2L1185.7 -145.0L1184.1 -144.2L1185.1 -142.3L1176.5 -133.7L1161.3 -98.5L1154.5 -95.3L1154.7 -90.5L1151.8 -88.4L1148.6 -91.9L1150.1 -89.2L1147.1 -87.5L1147.4 -84.6L1145.7 -84.2L1143.5 -87.8L1152.7 -97.2L1142.0 -88.5L1136.7 -88.1L1129.0 -79.1L1127.9 -74.2L1128.7 -67.4L1131.1 -64.7L1131.0 -56.4L1123.7 -59.2L1119.9 -57.2L1122.6 -53.8L1124.0 -46.4L1133.3 -41.9L1129.2 -42.9L1125.7 -38.1L1126.0 -35.5L1131.0 -31.7L1127.1 -33.1L1125.2 -31.7L1125.9 -27.5L1120.9 -22.8L1122.0 -18.6L1120.1 -16.6L1108.9 -16.0L1103.3 -13.5L1122.0 -9.8L1119.9 -5.8L1119.8 1.9L1115.0 2.4L1114.1 15.9L1111.5 17.9L1106.8 16.5L1103.2 18.3L1103.1 24.4L1108.1 25.7L1108.1 27.9L1093.8 32.2L1089.9 39.5L1094.4 43.0L1093.1 44.9L1084.1 44.9L1081.9 48.4Z";

type Pin = {
  id: string;
  x: number;
  y: number;
  label: string;
  side: "left" | "right" | "top" | "bottom";
};

const pins: Pin[] = [
  { id: "marina-grande",  x: 673, y: 255, label: "Marina Grande",  side: "top"    },
  { id: "blue-grotto",    x: 496, y: 221, label: "Grotta Azzurra", side: "top"    },
  { id: "white-grotto",   x: 770, y: 355, label: "Grotta Bianca",  side: "right"  },
  { id: "marina-piccola", x: 655, y: 363, label: "Marina Piccola", side: "bottom" },
  { id: "faraglioni",     x: 794, y: 385, label: "Faraglioni",     side: "right"  },
  { id: "punta-carena",   x: 468, y: 359, label: "Faro Punta Carena", side: "left"   },
  { id: "grotta-verde",   x: 520, y: 375, label: "Grotta Verde",   side: "bottom" },
];

type Place = {
  img: string;
  desc: string;
};

const places: Record<string, Place> = {
  "marina-grande": {
    img: "/places/marina-grande.webp",
    desc: "Capri's main port — colorful fishing boats, the first glimpse of the cliffs above, and the start of every island day.",
  },
  "blue-grotto": {
    img: "/places/blue-grotto.webp",
    desc: "A sea cave where sunlight refracts through underwater openings, turning the interior a luminous electric blue. Reachable only by small rowboat at the right tide.",
  },
  "white-grotto": {
    img: "/places/white-grotto.jpg",
    desc: "A hidden cathedral of pale limestone on the southeast coast. Quieter than its famous siblings — often nearly empty at sunrise.",
  },
  "marina-piccola": {
    img: "/places/marina-piccola.jpeg",
    desc: "A sheltered bay on the southern coast. Crystal-clear water, two small beaches, and a handful of legendary trattorie carved into the rocks.",
  },
  "faraglioni": {
    img: "/places/faraglioni.jpeg",
    desc: "Three sea stacks rising up to 100 meters above the water — Capri's iconic silhouette. The middle stack hides a natural arch you can sail through.",
  },
  "punta-carena": {
    img: "/places/faraglioni.jpeg",
    desc: "The southwestern lighthouse — Capri's quietest cape. The cliffs glow at sunset, the swimming platforms below stay open until dusk.",
  },
  "grotta-verde": {
    img: "/places/blue-grotto.webp",
    desc: "Less famous than the Blue Grotto, but the water turns an unreal emerald green. Easy to enter on a calm day, and we never share it with crowds.",
  },
};

function labelPos(p: Pin) {
  const off = 14;
  switch (p.side) {
    case "left":   return { x: p.x - off, y: p.y + 4,         anchor: "end"    as const };
    case "right":  return { x: p.x + off, y: p.y + 4,         anchor: "start"  as const };
    case "top":    return { x: p.x,       y: p.y - off,       anchor: "middle" as const };
    case "bottom": return { x: p.x,       y: p.y + off + 12,  anchor: "middle" as const };
  }
}

const VIEWBOX_DESKTOP = "0 0 1200 500";
const VIEWBOX_MOBILE  = "420 180 420 290";

export default function CapriMap() {
  const [isMobile, setIsMobile] = useState(false);
  const [pinned, setPinned] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 900px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const selected = hovered ?? pinned;
  const selectedPin = selected ? pins.find((p) => p.id === selected) : null;
  const selectedPlace = selected ? places[selected] : null;

  return (
    <section className="map-section" data-reveal="map">
      <div className="map-shimmer" aria-hidden />

      <svg
        className="map-svg"
        viewBox={isMobile ? VIEWBOX_MOBILE : VIEWBOX_DESKTOP}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        onClick={(e) => {
          if ((e.target as SVGElement).tagName === "svg") setPinned(null);
        }}
      >
        <defs>
          <linearGradient id="landGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor="#2C3A52" />
            <stop offset="100%" stopColor="#1A2433" />
          </linearGradient>
          <filter id="landShadow" x="-5%" y="-5%" width="110%" height="115%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#0F1623" floodOpacity="0.22" />
          </filter>
        </defs>

        <path className="map-land" d={capriPath} fill="url(#landGrad)" stroke="#0F1623" strokeWidth="0.6" filter="url(#landShadow)" />
        {!isMobile && (
          <path className="map-land map-land-secondary" d={promontoryPath} fill="url(#landGrad)" stroke="#0F1623" strokeWidth="0.6" filter="url(#landShadow)" />
        )}

        {pins.map((p, i) => {
          const lp = labelPos(p);
          const isPinned = pinned === p.id;
          const isHovered = hovered === p.id;
          const isActive = isPinned || isHovered;
          return (
            <g
              key={p.id}
              style={{ animationDelay: `${0.6 + i * 0.1}s` } as React.CSSProperties}
              className={`map-pin${isActive ? " is-active" : ""}${pinned === p.id ? " is-pinned" : ""}`}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setPinned((prev) => (prev === p.id ? null : p.id))}
              tabIndex={0}
              role="button"
              aria-label={p.label}
              onFocus={() => setHovered(p.id)}
              onBlur={() => setHovered(null)}
            >
              <circle cx={p.x} cy={p.y} r="14" fill="#1A2433" opacity="0" className="map-pin-hit" />
              <circle cx={p.x} cy={p.y} r={isActive ? 6 : 3.5} fill={isPinned ? "#6FB5C5" : "#FFFFFF"} stroke="#1A2433" strokeWidth="1.2" className="map-pin-dot" />
              {isPinned && <circle cx={p.x} cy={p.y} r="2.2" fill="#FFFFFF" className="map-pin-inner" />}
              <text
                x={lp.x}
                y={lp.y}
                fontFamily="var(--font-inter), sans-serif"
                fontSize="11"
                fill="#0F1623"
                textAnchor={lp.anchor}
                fontWeight={isActive ? "700" : "600"}
                paintOrder="stroke"
                stroke="#FFFFFF"
                strokeWidth="3.5"
                strokeLinejoin="round"
                letterSpacing="0.16em"
                style={{ textTransform: "uppercase" }}
              >
                {p.label}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="map-overlay">
        {selectedPin && selectedPlace ? (
          <div className="map-text-card map-place-card">
            <div className="map-place-img">
              <img src={selectedPlace.img} alt={selectedPin.label} />
            </div>
            <div className="map-place-body">
              <div className="eyebrow">On the Map</div>
              <h3 className="map-place-title">{selectedPin.label}</h3>
              <p className="map-place-desc">{selectedPlace.desc}</p>
              <a href="#tour-custom" className="btn-primary">Personalize Your Tour</a>
            </div>
          </div>
        ) : (
          <div className="map-text-card">
            <div className="eyebrow">Bespoke</div>
            <h2 className="section-title">
              Discover Capri <span className="accent">in your way.</span>
            </h2>
            <p className="section-desc">
              Click any spot on the map to see the place — or design a route entirely your own.
            </p>
            <a href="#tour-custom" className="btn-primary">Personalize Your Tour</a>
          </div>
        )}
      </div>
    </section>
  );
}
