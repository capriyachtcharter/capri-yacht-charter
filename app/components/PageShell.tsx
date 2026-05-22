"use client";

import Header from "./Header";
import Footer from "./Footer";
import ScrollReveal from "./ScrollReveal";
import ConciergeFab from "./ConciergeFab";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="page-shell">{children}</div>
      <Footer />
      <ScrollReveal />
      <ConciergeFab />
    </>
  );
}
