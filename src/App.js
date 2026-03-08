import { useState, useEffect, useRef } from "react";

// ─── DESIGN TOKENS ───────────────────────────────────────────────────────────
const C = {
  green: "#1a9e4a",
  greenLight: "#2ecc71",
  greenDark: "#0d6e33",
  orange: "#f97316",
  orangeLight: "#fb923c",
  beige: "#fdf8f0",
  beigeDeep: "#f5ede0",
  white: "#ffffff",
  dark: "#0f1f0f",
  darkMid: "#1c3320",
  gray: "#6b7280",
  grayLight: "#f3f4f6",
};

// ─── UTILITIES ────────────────────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function AnimatedSection({ children, className = "", delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(40px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
}

// ─── ICONS ────────────────────────────────────────────────────────────────────
const Icon = {
  Leaf: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  ),
  Globe: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  Truck: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
      <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  ),
  Handshake: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 7.65l1.06 1.06L12 21.23l7.77-7.94 1.06-1.06a5.4 5.4 0 0 0-.41-7.65z"/>
    </svg>
  ),
  Shield: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  Chart: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
    </svg>
  ),
  Mail: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  Phone: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  MapPin: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  Menu: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  ),
  X: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  ),
  Check: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  ArrowRight: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  Star: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
};

// ─── FOOD CATEGORY IMAGES ─────────────────────────────────────────────────────
const CategoryImage = ({ category }) => {
  const configs = {
    "Fresh Fruits": { bg: "#fef3c7", emoji: "🍊" },
    "Fresh Vegetables": { bg: "#d1fae5", emoji: "🥦" },
    "Frozen Foods": { bg: "#dbeafe", emoji: "🧊" },
    "Dairy Products": { bg: "#fce7f3", emoji: "🥛" },
    "Packaged Foods": { bg: "#f3e8ff", emoji: "📦" },
    "Organic Products": { bg: "#ecfdf5", emoji: "🌿" },
  };
  const cfg = configs[category] || { bg: "#f0fdf4", emoji: "🍽️" };
  return (
    <div style={{ background: cfg.bg, borderRadius: "12px 12px 0 0" }} className="h-48 flex items-center justify-center relative overflow-hidden">
      <div style={{ height: 192, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "72px", filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.15))", fontFamily: "'Noto Color Emoji','Segoe UI Emoji',sans-serif" }}>{cfg.emoji}</div>
    </div>
  );
};

// ─── NAV ──────────────────────────────────────────────────────────────────────
function Navbar({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Categories", id: "categories" },
    { label: "Contact", id: "contact" },
  ];

  const go = (id) => { setPage(id); setMobileOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.1)" : "none",
      transition: "all 0.3s ease",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 70 }}>
        <button onClick={() => go("home")} style={{ display: "flex", alignItems: "center", gap: 10, background: "none", border: "none", cursor: "pointer" }}>
          <div style={{ width: 38, height: 38, borderRadius: 10, background: `linear-gradient(135deg, ${C.greenLight}, ${C.greenDark})`, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 18 }}>🌿</div>
          <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 22, fontWeight: 700, color: page === "home" && !scrolled ? C.white : C.dark }}>
            Go<span style={{ color: C.greenLight }}>Fresh</span> <span style={{ fontSize: 14, fontWeight: 500, color: C.gray }}>UAE</span>
          </span>
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }} className="gf-desktop-nav">
          {navLinks.map(l => (
            <button key={l.id} onClick={() => go(l.id)} style={{
              padding: "8px 16px", borderRadius: 8, border: "none", cursor: "pointer", fontWeight: 500, fontSize: 15,
              background: page === l.id ? C.greenLight : "transparent",
              color: page === l.id ? C.white : (page === "home" && !scrolled ? C.white : C.dark),
              transition: "all 0.2s",
            }}>{l.label}</button>
          ))}
          <button onClick={() => go("supplier")} style={{
            padding: "9px 20px", borderRadius: 8, border: "none", cursor: "pointer",
            background: `linear-gradient(135deg, ${C.orange}, ${C.orangeLight})`,
            color: C.white, fontWeight: 700, fontSize: 15,
            boxShadow: "0 4px 14px rgba(249,115,22,0.4)",
            transition: "all 0.2s",
          }}>Become a Supplier</button>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} style={{ background: "none", border: "none", cursor: "pointer", color: page === "home" && !scrolled ? C.white : C.dark }} className="gf-mobile-btn">
          {mobileOpen ? <Icon.X /> : <Icon.Menu />}
        </button>
      </div>

      {mobileOpen && (
        <div style={{ background: C.white, padding: "16px 24px 24px", boxShadow: "0 8px 30px rgba(0,0,0,0.15)" }}>
          {navLinks.map(l => (
            <button key={l.id} onClick={() => go(l.id)} style={{
              display: "block", width: "100%", padding: "12px 16px", textAlign: "left", borderRadius: 8, border: "none", cursor: "pointer",
              fontWeight: 500, fontSize: 16, background: page === l.id ? C.grayLight : "transparent", color: C.dark, marginBottom: 4,
            }}>{l.label}</button>
          ))}
          <button onClick={() => go("supplier")} style={{
            display: "block", width: "100%", padding: "12px 16px", textAlign: "center", borderRadius: 8, border: "none", cursor: "pointer",
            background: `linear-gradient(135deg, ${C.orange}, ${C.orangeLight})`, color: C.white, fontWeight: 700, fontSize: 16, marginTop: 8,
          }}>Become a Supplier</button>
        </div>
      )}

      <style>{`
        .gf-mobile-btn { display: none !important; }
        @media (max-width: 768px) {
          .gf-desktop-nav { display: none !important; }
          .gf-mobile-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer({ setPage }) {
  const go = (id) => { setPage(id); window.scrollTo({ top: 0, behavior: "smooth" }); };
  return (
    <footer style={{ background: C.dark, color: C.white, padding: "60px 24px 30px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40, marginBottom: 40 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, borderRadius: 9, background: `linear-gradient(135deg, ${C.greenLight}, ${C.greenDark})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🌿</div>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 20, fontWeight: 700 }}>GoFresh UAE</span>
            </div>
            <p style={{ color: "#9ca3af", fontSize: 14, lineHeight: 1.7 }}>Connecting global food suppliers to the UAE market with expertise, trust, and seamless logistics.</p>
            <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
              {["𝕏", "in", "f", "▶"].map((s, i) => (
                <div key={i} style={{ width: 36, height: 36, borderRadius: 8, background: "#1c3320", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: C.greenLight, fontSize: 13, fontWeight: 700 }}>{s}</div>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: 16, color: C.greenLight }}>Quick Links</h4>
            {[["Home","home"],["About Us","about"],["Services","services"],["Categories","categories"],["Become a Supplier","supplier"],["Contact","contact"]].map(([l,id]) => (
              <button key={id} onClick={() => go(id)} style={{ display: "block", background: "none", border: "none", cursor: "pointer", color: "#9ca3af", fontSize: 14, marginBottom: 8, textAlign: "left", padding: 0 }}
                onMouseEnter={e => e.target.style.color = C.greenLight} onMouseLeave={e => e.target.style.color = "#9ca3af"}>{l}</button>
            ))}
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: 16, color: C.greenLight }}>Services</h4>
            {["Import Support","Market Entry","Distribution Network","Vendor Partnership","Logistics Coordination"].map(s => (
              <p key={s} style={{ color: "#9ca3af", fontSize: 14, marginBottom: 8 }}>• {s}</p>
            ))}
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: 16, color: C.greenLight }}>Contact</h4>
            {[
              [<Icon.Mail />, "info@gofreshuae.ae"],
              [<Icon.Phone />, "+971 4 000 0000"],
              [<Icon.MapPin />, "Dubai, UAE"],
            ].map(([icon, text], i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, color: "#9ca3af", fontSize: 14 }}>
                <span style={{ color: C.greenLight }}>{icon}</span>{text}
              </div>
            ))}
          </div>
        </div>
        <div style={{ borderTop: "1px solid #1c3320", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ color: "#6b7280", fontSize: 13 }}>© 2025 GoFresh UAE. All rights reserved. | gofreshuae.ae</p>
          <p style={{ color: "#6b7280", fontSize: 13 }}>🇦🇪 Made for the UAE Market</p>
        </div>
      </div>
    </footer>
  );
}

// ─── BTN ──────────────────────────────────────────────────────────────────────
function Btn({ children, variant = "primary", onClick, small }) {
  const styles = {
    primary: { background: `linear-gradient(135deg, ${C.greenLight}, ${C.green})`, color: C.white, boxShadow: "0 4px 14px rgba(46,204,113,0.4)" },
    orange: { background: `linear-gradient(135deg, ${C.orange}, ${C.orangeLight})`, color: C.white, boxShadow: "0 4px 14px rgba(249,115,22,0.4)" },
    outline: { background: "transparent", color: C.white, border: `2px solid rgba(255,255,255,0.6)` },
    white: { background: C.white, color: C.green, boxShadow: "0 4px 14px rgba(0,0,0,0.15)" },
  };
  return (
    <button onClick={onClick} style={{
      ...styles[variant], padding: small ? "9px 20px" : "13px 28px", borderRadius: 10, border: styles[variant].border || "none",
      cursor: "pointer", fontWeight: 700, fontSize: small ? 14 : 16,
      display: "inline-flex", alignItems: "center", gap: 8, transition: "all 0.25s",
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.filter = "brightness(1.05)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.filter = ""; }}
    >{children}</button>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// HOME PAGE
// ═══════════════════════════════════════════════════════════════════════════════
function HomePage({ setPage }) {
  const [count, setCount] = useState({ suppliers: 0, countries: 0, products: 0 });

  useEffect(() => {
    const targets = { suppliers: 250, countries: 45, products: 1200 };
    const duration = 1800;
    const steps = 60;
    let step = 0;
    const interval = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount({
        suppliers: Math.round(targets.suppliers * ease),
        countries: Math.round(targets.countries * ease),
        products: Math.round(targets.products * ease),
      });
      if (step >= steps) clearInterval(interval);
    }, duration / steps);
    return () => clearInterval(interval);
  }, []);

  const services = [
    { icon: <Icon.Globe />, title: "Import Support", desc: "Full regulatory & customs support for importing food products into the UAE." },
    { icon: <Icon.Chart />, title: "Market Entry", desc: "Strategic guidance to help international suppliers enter and grow in the UAE." },
    { icon: <Icon.Truck />, title: "Logistics Coordination", desc: "End-to-end cold-chain logistics and warehousing across the UAE." },
    { icon: <Icon.Handshake />, title: "Vendor Partnership", desc: "Long-term programs connecting suppliers with local distributors." },
    { icon: <Icon.Shield />, title: "Compliance & Certifications", desc: "UAE food safety, halal, and labeling compliance made easy." },
    { icon: <Icon.Leaf />, title: "Distribution Network", desc: "Access retailers, wholesalers, and HoReCa buyers across the UAE." },
  ];

  const categories = ["Fresh Fruits", "Fresh Vegetables", "Frozen Foods", "Dairy Products", "Packaged Foods", "Organic Products"];

  const testimonials = [
    { name: "Carlos Mendez", company: "FreshMed Exports, Spain", text: "GoFresh UAE opened doors we couldn't have opened ourselves. Within 6 months, our citrus products were on UAE supermarket shelves.", rating: 5 },
    { name: "Priya Sharma", company: "AgriFirst India", text: "The compliance support was invaluable. They handled everything from halal certification to customs clearance seamlessly.", rating: 5 },
    { name: "Ahmed Hassan", company: "EgyptFresh Co.", text: "Professional, trustworthy, and results-driven. Our mango exports to the UAE grew 3x in the first year.", rating: 5 },
  ];

  const whyUs = [
    "Deep knowledge of UAE food import regulations",
    "Established relationships with major UAE distributors",
    "End-to-end supply chain management",
    "Halal certification assistance",
    "Cold chain & logistics expertise",
    "Bilingual team (English & Arabic)",
    "Transparent pricing & commissions",
    "Dedicated account manager",
  ];

  return (
    <div>
      {/* HERO */}
      <section style={{
        minHeight: "100vh", position: "relative", display: "flex", alignItems: "center",
        background: `linear-gradient(135deg, ${C.greenDark} 0%, ${C.darkMid} 50%, #0a2e16 100%)`,
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", border: `1px solid rgba(46,204,113,0.06)`, top: -100, left: -150 }} />
        <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", border: `1px solid rgba(46,204,113,0.06)`, bottom: -80, right: 0 }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 80%, rgba(46,204,113,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(249,115,22,0.06) 0%, transparent 50%)" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "120px 24px 80px", position: "relative", zIndex: 1, width: "100%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="gf-hero-grid">
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(46,204,113,0.15)", border: "1px solid rgba(46,204,113,0.3)", borderRadius: 50, padding: "6px 16px", marginBottom: 24 }}>
                <span style={{ color: C.greenLight, fontSize: 13, fontWeight: 600 }}>🇦🇪 UAE's Premier Food Import Partner</span>
              </div>
              <h1 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(32px, 5vw, 58px)", fontWeight: 900, color: C.white, lineHeight: 1.15, marginBottom: 24 }}>
                Connecting Global Food Suppliers to the{" "}
                <span style={{ background: `linear-gradient(135deg, ${C.greenLight}, #a8f0c4)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>UAE Market</span>
              </h1>
              <p style={{ color: "#a7d9b7", fontSize: 18, lineHeight: 1.7, marginBottom: 36, maxWidth: 500 }}>
                GoFresh UAE bridges international food producers with UAE distributors, retailers, and buyers — handling compliance, logistics, and market entry from start to finish.
              </p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <Btn variant="orange" onClick={() => { setPage("supplier"); window.scrollTo({ top: 0 }); }}>
                  Become a Supplier <Icon.ArrowRight />
                </Btn>
                <Btn variant="outline" onClick={() => { setPage("services"); window.scrollTo({ top: 0 }); }}>
                  Our Services
                </Btn>
              </div>
              <div style={{ display: "flex", gap: 32, marginTop: 48, flexWrap: "wrap" }}>
                {[
                  [count.suppliers + "+", "Supplier Partners"],
                  [count.countries + "+", "Countries Served"],
                  [count.products + "+", "Products Facilitated"],
                ].map(([val, label]) => (
                  <div key={label}>
                    <div style={{ fontSize: 32, fontWeight: 900, color: C.greenLight }}>{val}</div>
                    <div style={{ fontSize: 13, color: "#7fb89a" }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { emoji: "🍊", cat: "Fresh Fruits & Vegetables", sub: "From farm to UAE shelf" },
                { emoji: "🧊", cat: "Frozen & Packaged Foods", sub: "Cold-chain excellence" },
                { emoji: "🌿", cat: "Organic & Specialty", sub: "Premium market access" },
              ].map((card, i) => (
                <div key={i} style={{
                  background: "rgba(255,255,255,0.07)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 16, padding: "20px 24px", display: "flex", alignItems: "center", gap: 16,
                }}>
                  <span style={{ fontSize: 36, fontFamily: "'Noto Color Emoji','Segoe UI Emoji',sans-serif" }}>{card.emoji}</span>
                  <div>
                    <div style={{ color: C.white, fontWeight: 700, fontSize: 15 }}>{card.cat}</div>
                    <div style={{ color: "#7fb89a", fontSize: 13, marginTop: 2 }}>{card.sub}</div>
                  </div>
                  <div style={{ marginLeft: "auto", color: C.greenLight, fontSize: 18 }}>✓</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: -1, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 80" fill={C.beige}>
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section style={{ background: C.beige, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="gf-two-col">
            <AnimatedSection>
              <span style={{ color: C.green, fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase" }}>About GoFresh UAE</span>
              <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: C.dark, margin: "12px 0 20px", lineHeight: 1.25 }}>
                Your Trusted Gateway to the UAE Food Market
              </h2>
              <p style={{ color: C.gray, fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
                GoFresh UAE is a Dubai-based food import facilitation company connecting international food suppliers with the UAE's growing distribution network. We handle regulations, halal standards, cold chain logistics—everything.
              </p>
              <p style={{ color: C.gray, fontSize: 16, lineHeight: 1.8, marginBottom: 28 }}>
                Whether you produce fresh fruits, organic goods, frozen products, or packaged foods, our team has the expertise and partnerships to get your products onto UAE shelves.
              </p>
              <Btn onClick={() => { setPage("about"); window.scrollTo({ top: 0 }); }}>Learn More <Icon.ArrowRight /></Btn>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {[
                  { emoji: "🏆", title: "10+ Years Experience", sub: "In UAE food markets" },
                  { emoji: "🤝", title: "250+ Partners", sub: "Active supplier network" },
                  { emoji: "🌍", title: "45 Countries", sub: "Global sourcing reach" },
                  { emoji: "⚡", title: "Fast Market Entry", sub: "60-90 day onboarding" },
                ].map((item, i) => (
                  <div key={i} style={{
                    background: C.white, borderRadius: 16, padding: "24px 20px", textAlign: "center",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.04)", transition: "all 0.2s",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.12)"; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.06)"; }}
                  >
                    <div style={{ fontSize: 36, marginBottom: 10, fontFamily: "'Noto Color Emoji','Segoe UI Emoji',sans-serif" }}>{item.emoji}</div>
                    <div style={{ fontWeight: 800, color: C.dark, fontSize: 16 }}>{item.title}</div>
                    <div style={{ color: C.gray, fontSize: 13, marginTop: 4 }}>{item.sub}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section style={{ background: C.white, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <AnimatedSection>
            <span style={{ color: C.green, fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase" }}>Why GoFresh UAE</span>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: C.dark, margin: "12px 0 48px" }}>
              The Smart Choice for UAE Market Entry
            </h2>
          </AnimatedSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            {whyUs.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div style={{
                  background: C.beige, borderRadius: 12, padding: "18px 20px",
                  display: "flex", alignItems: "center", gap: 14, transition: "all 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#e8f8ef"; e.currentTarget.style.transform = "translateX(6px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = C.beige; e.currentTarget.style.transform = ""; }}
                >
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: C.greenLight, display: "flex", alignItems: "center", justifyContent: "center", color: C.white, flexShrink: 0 }}>
                    <Icon.Check />
                  </div>
                  <span style={{ color: C.dark, fontWeight: 500, fontSize: 15 }}>{item}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ background: C.beigeDeep, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <AnimatedSection>
            <span style={{ color: C.green, fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase" }}>What We Do</span>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: C.dark, margin: "12px 0 48px" }}>Our Core Services</h2>
          </AnimatedSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {services.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div style={{
                  background: C.white, borderRadius: 20, padding: "32px 28px", textAlign: "left",
                  boxShadow: "0 2px 20px rgba(0,0,0,0.05)", transition: "all 0.25s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = `0 16px 40px rgba(46,204,113,0.15)`; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 2px 20px rgba(0,0,0,0.05)"; }}
                >
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: `${C.greenLight}22`, color: C.green, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>{s.icon}</div>
                  <h3 style={{ fontWeight: 800, fontSize: 18, color: C.dark, marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ color: C.gray, fontSize: 15, lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <AnimatedSection delay={0.3}>
              <Btn onClick={() => { setPage("services"); window.scrollTo({ top: 0 }); }}>View All Services <Icon.ArrowRight /></Btn>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section style={{ background: C.white, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <AnimatedSection>
            <span style={{ color: C.green, fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase" }}>Product Range</span>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: C.dark, margin: "12px 0 48px" }}>Featured Food Categories</h2>
          </AnimatedSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {categories.map((cat, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div style={{
                  borderRadius: 20, overflow: "hidden", boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
                  transition: "all 0.25s", cursor: "pointer",
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.15)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.07)"; }}
                  onClick={() => { setPage("categories"); window.scrollTo({ top: 0 }); }}
                >
                  <CategoryImage category={cat} />
                  <div style={{ background: C.white, padding: "16px 20px", textAlign: "left" }}>
                    <h3 style={{ fontWeight: 700, color: C.dark, fontSize: 16 }}>{cat}</h3>
                    <p style={{ color: C.green, fontSize: 13, fontWeight: 600, marginTop: 4 }}>Explore Products →</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: `linear-gradient(135deg, ${C.greenDark}, ${C.darkMid})`, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <AnimatedSection>
            <span style={{ color: C.greenLight, fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase" }}>Testimonials</span>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: C.white, margin: "12px 0 48px" }}>Trusted by Global Suppliers</h2>
          </AnimatedSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <div style={{
                  background: "rgba(255,255,255,0.07)", backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.12)", borderRadius: 20, padding: "32px 28px", textAlign: "left",
                }}>
                  <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <span key={j} style={{ color: "#fbbf24" }}><Icon.Star /></span>
                    ))}
                  </div>
                  <p style={{ color: "#d1fae5", fontSize: 15, lineHeight: 1.8, marginBottom: 24, fontStyle: "italic" }}>"{t.text}"</p>
                  <div>
                    <div style={{ color: C.white, fontWeight: 700 }}>{t.name}</div>
                    <div style={{ color: "#7fb89a", fontSize: 13, marginTop: 2 }}>{t.company}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPLIER CTA */}
      <section style={{ background: C.beige, padding: "80px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <AnimatedSection>
            <div style={{ background: `linear-gradient(135deg, ${C.orange}, ${C.orangeLight})`, borderRadius: 28, padding: "60px 40px" }}>
              <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 900, color: C.white, marginBottom: 16 }}>
                Ready to Enter the UAE Market?
              </h2>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 17, lineHeight: 1.7, marginBottom: 32, maxWidth: 500, margin: "0 auto 32px" }}>
                Join 250+ international food suppliers already growing their business in the UAE through GoFresh UAE.
              </p>
              <Btn variant="white" onClick={() => { setPage("supplier"); window.scrollTo({ top: 0 }); }}>
                Become a Supplier Today <Icon.ArrowRight />
              </Btn>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .gf-hero-grid { grid-template-columns: 1fr !important; }
          .gf-hero-grid > div:last-child { display: none; }
          .gf-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ABOUT PAGE
// ═══════════════════════════════════════════════════════════════════════════════
function AboutPage({ setPage }) {
  const milestones = [
    { year: "2014", title: "Founded in Dubai", desc: "GoFresh UAE established with a vision to bridge global food producers with UAE buyers." },
    { year: "2016", title: "First 50 Suppliers", desc: "Reached 50 active supplier partnerships across Europe, Asia, and Africa." },
    { year: "2019", title: "UAE Distribution Network", desc: "Built a network of 100+ local distributors, retailers, and HoReCa clients." },
    { year: "2022", title: "Expanded to 40+ Countries", desc: "Grew supplier network to 40+ countries with dedicated regional teams." },
    { year: "2025", title: "250+ Global Partners", desc: "Today, facilitating 1,200+ products across all major UAE food channels." },
  ];

  const values = [
    { icon: "🤝", title: "Trust & Transparency", desc: "We operate with full transparency on pricing, timelines, and market conditions." },
    { icon: "🌍", title: "Global Perspective", desc: "Understanding both international supply and local UAE demand is our core strength." },
    { icon: "⚡", title: "Speed to Market", desc: "Our streamlined onboarding gets your products to UAE shelves in 60–90 days." },
    { icon: "🏆", title: "Excellence", desc: "We hold ourselves to the highest standards in compliance, quality, and service." },
  ];

  return (
    <div style={{ paddingTop: 70 }}>
      <section style={{ background: `linear-gradient(135deg, ${C.greenDark}, ${C.darkMid})`, padding: "100px 24px 80px", textAlign: "center" }}>
        <AnimatedSection>
          <span style={{ color: C.greenLight, fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase" }}>About Us</span>
          <h1 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 900, color: C.white, margin: "16px 0 20px" }}>UAE's Trusted Food Import Facilitator</h1>
          <p style={{ color: "#a7d9b7", fontSize: 18, maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>Decade-long expertise in connecting the world's finest food producers with the UAE's dynamic market.</p>
        </AnimatedSection>
        <div style={{ position: "absolute", bottom: -1, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 60" fill={C.beige}><path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" /></svg>
        </div>
      </section>

      <section style={{ background: C.beige, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="gf-two-col">
            <AnimatedSection>
              <span style={{ color: C.green, fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase" }}>Our Mission</span>
              <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800, color: C.dark, margin: "12px 0 20px" }}>
                Making UAE Market Entry Simple, Fast & Profitable
              </h2>
              <p style={{ color: C.gray, fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
                The UAE is one of the world's most attractive food import markets—with high spending power, a cosmopolitan population, and year-round demand for premium food products. But navigating it requires deep local knowledge.
              </p>
              <p style={{ color: C.gray, fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
                GoFresh UAE removes every barrier between international suppliers and UAE buyers. We manage regulatory complexity, build distribution relationships, and handle logistics—so you can focus on producing great food.
              </p>
              <p style={{ color: C.gray, fontSize: 16, lineHeight: 1.8 }}>
                Our vendor partnership model is designed for long-term success. We grow when our suppliers grow, creating a true win-win across the entire supply chain.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div style={{ background: C.white, borderRadius: 24, padding: "40px", boxShadow: "0 4px 30px rgba(0,0,0,0.08)" }}>
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 24, fontWeight: 800, color: C.dark, marginBottom: 24 }}>Our Expertise</h3>
                {[
                  ["UAE Food Import Regulations", 95],
                  ["Distribution Network Coverage", 88],
                  ["Halal Certification Support", 98],
                  ["Cold Chain Logistics", 92],
                  ["Market Entry Strategy", 90],
                ].map(([label, pct]) => (
                  <div key={label} style={{ marginBottom: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                      <span style={{ fontSize: 14, fontWeight: 600, color: C.dark }}>{label}</span>
                      <span style={{ fontSize: 14, fontWeight: 700, color: C.green }}>{pct}%</span>
                    </div>
                    <div style={{ background: C.grayLight, borderRadius: 6, height: 8, overflow: "hidden" }}>
                      <div style={{ width: `${pct}%`, height: "100%", background: `linear-gradient(90deg, ${C.greenLight}, ${C.green})`, borderRadius: 6 }} />
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section style={{ background: C.white, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <AnimatedSection>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800, color: C.dark, marginBottom: 48 }}>Our Core Values</h2>
          </AnimatedSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div style={{ background: C.beige, borderRadius: 20, padding: "36px 28px", textAlign: "center" }}>
                  <div style={{ fontSize: 52, marginBottom: 16, fontFamily: "'Noto Color Emoji','Segoe UI Emoji',sans-serif" }}>{v.icon}</div>
                  <h3 style={{ fontWeight: 800, color: C.dark, fontSize: 18, marginBottom: 12 }}>{v.title}</h3>
                  <p style={{ color: C.gray, fontSize: 15, lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: C.beigeDeep, padding: "80px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <AnimatedSection>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800, color: C.dark, textAlign: "center", marginBottom: 60 }}>Our Journey</h2>
          </AnimatedSection>
          {milestones.map((m, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div style={{ display: "flex", gap: 24, marginBottom: 32 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: `linear-gradient(135deg, ${C.greenLight}, ${C.green})`, display: "flex", alignItems: "center", justifyContent: "center", color: C.white, fontWeight: 900, fontSize: 11 }}>{m.year}</div>
                  {i < milestones.length - 1 && <div style={{ width: 2, height: 40, background: `${C.greenLight}44`, marginTop: 8 }} />}
                </div>
                <div style={{ background: C.white, borderRadius: 16, padding: "20px 24px", flex: 1, boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                  <h3 style={{ fontWeight: 800, color: C.dark, marginBottom: 8 }}>{m.title}</h3>
                  <p style={{ color: C.gray, fontSize: 15, lineHeight: 1.6 }}>{m.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section style={{ background: `linear-gradient(135deg, ${C.green}, ${C.greenDark})`, padding: "80px 24px", textAlign: "center" }}>
        <AnimatedSection>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 900, color: C.white, marginBottom: 20 }}>Ready to Partner With Us?</h2>
          <p style={{ color: "#a7d9b7", fontSize: 17, marginBottom: 32 }}>Let's discuss how GoFresh UAE can help grow your business in the UAE.</p>
          <Btn variant="orange" onClick={() => { setPage("supplier"); window.scrollTo({ top: 0 }); }}>Start Your Partnership <Icon.ArrowRight /></Btn>
        </AnimatedSection>
      </section>
      <style>{`@media (max-width: 768px) { .gf-two-col { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SERVICES PAGE
// ═══════════════════════════════════════════════════════════════════════════════
function ServicesPage({ setPage }) {
  const services = [
    { icon: "📥", title: "Food Product Import Support", desc: "We manage the full import process—documentation, customs clearance, Dubai Municipality approvals, and more.", features: ["Import permit applications", "Customs documentation", "Dubai Municipality compliance", "ESMA & food safety standards", "Halal certification guidance"] },
    { icon: "🚀", title: "Market Entry Assistance", desc: "Strategic market entry planning tailored to your product category, target consumer, and price point in the UAE.", features: ["Market sizing & analysis", "Competitive landscape review", "Pricing strategy", "Consumer trend insights", "Retailer introduction strategy"] },
    { icon: "🏪", title: "Distribution Network Access", desc: "Instant access to our established network of UAE distributors, supermarket chains, and specialty food retailers.", features: ["Carrefour, Lulu, Spinneys introductions", "Specialty food store placements", "HoReCa channel access", "Online grocery platforms", "Wholesale market connections"] },
    { icon: "🤝", title: "Vendor Partnership Program", desc: "A structured partnership model giving suppliers long-term UAE presence with ongoing sales management.", features: ["Dedicated UAE account manager", "Monthly performance reporting", "Buyer relationship management", "Product promotion support", "Contract negotiation assistance"] },
    { icon: "🚛", title: "Logistics Coordination", desc: "End-to-end logistics including cold chain management, warehousing, and last-mile delivery across the UAE.", features: ["Cold chain management", "Warehousing in Dubai, Abu Dhabi", "Cross-docking services", "Last-mile delivery", "Inventory management support"] },
    { icon: "📋", title: "Compliance & Certifications", desc: "Full compliance with UAE food regulations, halal standards, and product labeling requirements.", features: ["Halal certification support", "Nutritional labeling in Arabic", "Product registration with authorities", "Shelf-life compliance", "Regulatory updates & alerts"] },
  ];

  return (
    <div style={{ paddingTop: 70 }}>
      <section style={{ background: `linear-gradient(135deg, ${C.darkMid}, ${C.greenDark})`, padding: "100px 24px 80px", textAlign: "center" }}>
        <AnimatedSection>
          <h1 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 900, color: C.white, margin: "0 0 20px" }}>Our Services</h1>
          <p style={{ color: "#a7d9b7", fontSize: 18, maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>Comprehensive food import, distribution, and market entry services for international suppliers entering the UAE.</p>
        </AnimatedSection>
        <div style={{ position: "absolute", bottom: -1, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 60" fill={C.beige}><path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" /></svg>
        </div>
      </section>

      <section style={{ background: C.beige, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 28 }}>
            {services.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div style={{ background: C.white, borderRadius: 24, padding: "36px 32px", boxShadow: "0 2px 20px rgba(0,0,0,0.05)", transition: "all 0.25s" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(46,204,113,0.12)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 2px 20px rgba(0,0,0,0.05)"; }}
                >
                  <div style={{ fontSize: 44, marginBottom: 16, fontFamily: "'Noto Color Emoji','Segoe UI Emoji',sans-serif" }}>{s.icon}</div>
                  <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 20, color: C.dark, marginBottom: 14 }}>{s.title}</h3>
                  <p style={{ color: C.gray, fontSize: 15, lineHeight: 1.7, marginBottom: 20 }}>{s.desc}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {s.features.map((f, j) => (
                      <li key={j} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                        <span style={{ color: C.greenLight, flexShrink: 0 }}><Icon.Check /></span>
                        <span style={{ color: C.dark, fontSize: 14 }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: C.white, padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <AnimatedSection>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800, color: C.dark, marginBottom: 60 }}>How It Works</h2>
          </AnimatedSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 24 }}>
            {[
              { step: "01", icon: "📋", title: "Apply", desc: "Submit your supplier application online." },
              { step: "02", icon: "🤝", title: "Consult", desc: "Free strategy call with our market experts." },
              { step: "03", icon: "📦", title: "Onboard", desc: "Product registration, compliance, and logistics setup." },
              { step: "04", icon: "🏪", title: "Distribute", desc: "We connect you with UAE buyers and distributors." },
              { step: "05", icon: "📈", title: "Grow", desc: "Ongoing support, reporting, and market expansion." },
            ].map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: `linear-gradient(135deg, ${C.greenLight}, ${C.green})`, color: C.white, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 15, margin: "0 auto 16px" }}>{step.step}</div>
                  <div style={{ fontSize: 32, marginBottom: 12, fontFamily: "'Noto Color Emoji','Segoe UI Emoji',sans-serif" }}>{step.icon}</div>
                  <h3 style={{ fontWeight: 800, color: C.dark, marginBottom: 8 }}>{step.title}</h3>
                  <p style={{ color: C.gray, fontSize: 14, lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: `linear-gradient(135deg, ${C.orange}, ${C.orangeLight})`, padding: "80px 24px", textAlign: "center" }}>
        <AnimatedSection>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 900, color: C.white, marginBottom: 20 }}>Get Started Today</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 17, marginBottom: 32 }}>Submit your application and receive a free UAE market entry consultation.</p>
          <Btn variant="white" onClick={() => { setPage("supplier"); window.scrollTo({ top: 0 }); }}>Apply as a Supplier <Icon.ArrowRight /></Btn>
        </AnimatedSection>
      </section>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CATEGORIES PAGE
// ═══════════════════════════════════════════════════════════════════════════════
function CategoriesPage({ setPage }) {
  const cats = [
    { name: "Fresh Fruits", emoji: "🍊", bg: "#fef3c7", desc: "Citrus, tropicals, stone fruits, berries, and more. We work with producers across Spain, Egypt, South Africa, India, Thailand, and beyond.", products: ["Oranges & Mandarins", "Mangoes", "Grapes", "Dates", "Bananas", "Avocados", "Berries", "Watermelons"] },
    { name: "Fresh Vegetables", emoji: "🥦", bg: "#d1fae5", desc: "Year-round supply of high-quality fresh vegetables for UAE supermarkets, restaurants, and food service operators.", products: ["Tomatoes", "Lettuce & Greens", "Bell Peppers", "Cucumbers", "Onions", "Garlic", "Herbs", "Broccoli"] },
    { name: "Frozen Foods", emoji: "🧊", bg: "#dbeafe", desc: "Frozen vegetables, fruits, meat alternatives, and convenience foods with full cold chain management.", products: ["Frozen Vegetables", "Frozen Fruits", "Frozen Seafood", "French Fries", "Frozen Ready Meals"] },
    { name: "Dairy Products", emoji: "🥛", bg: "#fce7f3", desc: "Fresh and long-life dairy products including cheese, butter, yogurt, and specialty dairy items.", products: ["Cheese varieties", "Butter & Cream", "Yogurt", "Milk (UHT & Fresh)", "Specialty Dairy"] },
    { name: "Packaged Foods", emoji: "📦", bg: "#f3e8ff", desc: "Canned, bottled, jarred, and packaged food products for retail, wholesale, and food service channels.", products: ["Olive Oil", "Canned Tomatoes", "Sauces & Pastes", "Snacks", "Cereals", "Condiments", "Dried Goods"] },
    { name: "Organic Products", emoji: "🌿", bg: "#ecfdf5", desc: "Certified organic food products meeting the growing UAE consumer demand for healthy, sustainable food options.", products: ["Organic Fruits", "Organic Vegetables", "Organic Grains", "Superfoods", "Herbal Products"] },
  ];

  return (
    <div style={{ paddingTop: 70 }}>
      <section style={{ background: `linear-gradient(135deg, ${C.green}, ${C.greenDark})`, padding: "100px 24px 80px", textAlign: "center" }}>
        <AnimatedSection>
          <h1 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 900, color: C.white, margin: "0 0 20px" }}>Product Categories</h1>
          <p style={{ color: "#a7d9b7", fontSize: 18, maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>We facilitate import and distribution of premium food categories into the UAE market.</p>
        </AnimatedSection>
        <div style={{ position: "absolute", bottom: -1, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 60" fill={C.white}><path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" /></svg>
        </div>
      </section>

      <section style={{ background: C.white, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {cats.map((cat, i) => (
            <AnimatedSection key={i} delay={0.1}>
              <div style={{
                display: "grid", gridTemplateColumns: i % 2 === 0 ? "320px 1fr" : "1fr 320px",
                gap: 0, alignItems: "stretch", marginBottom: 32,
                borderRadius: 24, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
              }} className="gf-cat-card">
                <div style={{ background: cat.bg, padding: "48px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", order: i % 2 === 0 ? 0 : 1 }}>
                  <div style={{ fontSize: 80, marginBottom: 16, fontFamily: "'Noto Color Emoji','Segoe UI Emoji',sans-serif" }}>{cat.emoji}</div>
                  <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 20, fontWeight: 800, color: C.dark, textAlign: "center" }}>{cat.name}</h3>
                </div>
                <div style={{ padding: "40px", background: i % 2 === 0 ? C.white : C.beige, order: i % 2 === 0 ? 1 : 0 }}>
                  <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 24, fontWeight: 800, color: C.dark, marginBottom: 16 }}>{cat.name}</h3>
                  <p style={{ color: C.gray, fontSize: 16, lineHeight: 1.7, marginBottom: 24 }}>{cat.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
                    {cat.products.map(p => (
                      <span key={p} style={{ background: `${C.greenLight}22`, color: C.greenDark, padding: "5px 14px", borderRadius: 50, fontSize: 13, fontWeight: 600, border: `1px solid ${C.greenLight}44` }}>{p}</span>
                    ))}
                  </div>
                  <Btn small onClick={() => { setPage("supplier"); window.scrollTo({ top: 0 }); }}>Supply This Category <Icon.ArrowRight /></Btn>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
      <style>{`@media (max-width: 768px) { .gf-cat-card { grid-template-columns: 1fr !important; } .gf-cat-card > div { order: unset !important; } }`}</style>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SUPPLIER PAGE
// ═══════════════════════════════════════════════════════════════════════════════
function SupplierPage() {
  const [form, setForm] = useState({ company: "", country: "", category: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handle = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));
  const submit = () => {
    if (!form.company || !form.email) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  const inputStyle = {
    width: "100%", padding: "13px 16px", borderRadius: 10, border: `1px solid #e5e7eb`,
    fontSize: 15, color: C.dark, background: C.white, outline: "none", boxSizing: "border-box", transition: "all 0.2s",
  };

  const categories = ["Fresh Fruits", "Fresh Vegetables", "Frozen Foods", "Dairy Products", "Packaged Foods", "Organic Products", "Beverages", "Other"];

  return (
    <div style={{ paddingTop: 70 }}>
      <section style={{ background: `linear-gradient(135deg, ${C.orange}, #c2410c)`, padding: "100px 24px 80px", textAlign: "center" }}>
        <AnimatedSection>
          <h1 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 900, color: C.white, margin: "0 0 20px" }}>Become a Supplier</h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 18, maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>Join 250+ international food suppliers already selling in the UAE through GoFresh UAE.</p>
        </AnimatedSection>
        <div style={{ position: "absolute", bottom: -1, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 60" fill={C.beige}><path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" /></svg>
        </div>
      </section>

      <section style={{ background: C.beige, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 60 }} className="gf-two-col">
            <AnimatedSection>
              <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 800, color: C.dark, marginBottom: 16 }}>Why Partner with GoFresh UAE?</h2>
              <p style={{ color: C.gray, fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>We make it easy for international food producers to access the profitable UAE market — without the complexity.</p>
              {[
                ["🏪", "Access to 100+ UAE distributors, retailers & buyers"],
                ["📋", "Full regulatory & customs support included"],
                ["🤝", "Dedicated account manager for your products"],
                ["📈", "Monthly performance reports & sales tracking"],
                ["🌍", "Part of a global supplier community of 250+ partners"],
                ["⚡", "Market entry in as little as 60 days"],
              ].map(([emoji, text], i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 20 }}>
                  <span style={{ fontSize: 24, flexShrink: 0, fontFamily: "'Noto Color Emoji','Segoe UI Emoji',sans-serif" }}>{emoji}</span>
                  <p style={{ color: C.dark, fontSize: 15, lineHeight: 1.6 }}>{text}</p>
                </div>
              ))}
              <div style={{ background: `${C.greenLight}22`, border: `1px solid ${C.greenLight}44`, borderRadius: 16, padding: "20px 24px", marginTop: 28 }}>
                <p style={{ color: C.greenDark, fontWeight: 700, fontSize: 15 }}>📞 Prefer to talk first?</p>
                <p style={{ color: C.gray, fontSize: 14, marginTop: 6 }}>Call us: <strong>+971 4 000 0000</strong><br />Email: <strong>suppliers@gofreshuae.ae</strong></p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div style={{ background: C.white, borderRadius: 24, padding: "44px 40px", boxShadow: "0 4px 30px rgba(0,0,0,0.08)" }}>
                {submitted ? (
                  <div style={{ textAlign: "center", padding: "40px 0" }}>
                    <div style={{ fontSize: 64, marginBottom: 20, fontFamily: "'Noto Color Emoji','Segoe UI Emoji',sans-serif" }}>🎉</div>
                    <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 26, fontWeight: 800, color: C.dark, marginBottom: 12 }}>Application Received!</h3>
                    <p style={{ color: C.gray, fontSize: 16, lineHeight: 1.7 }}>Our team will review your application and contact you within <strong>48 business hours</strong>.</p>
                  </div>
                ) : (
                  <>
                    <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 22, fontWeight: 800, color: C.dark, marginBottom: 28 }}>Supplier Application Form</h3>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                      {[["Company Name *", "company", "text", "Your company name"], ["Country *", "country", "text", "Country of origin"]].map(([label, key, type, placeholder]) => (
                        <div key={key}>
                          <label style={{ display: "block", fontWeight: 600, fontSize: 13, color: C.dark, marginBottom: 6 }}>{label}</label>
                          <input type={type} placeholder={placeholder} value={form[key]} onChange={handle(key)} style={inputStyle}
                            onFocus={e => { e.target.style.borderColor = C.greenLight; e.target.style.boxShadow = `0 0 0 3px ${C.greenLight}33`; }}
                            onBlur={e => { e.target.style.borderColor = "#e5e7eb"; e.target.style.boxShadow = "none"; }}
                          />
                        </div>
                      ))}
                    </div>
                    <div style={{ marginBottom: 16 }}>
                      <label style={{ display: "block", fontWeight: 600, fontSize: 13, color: C.dark, marginBottom: 6 }}>Product Category *</label>
                      <select value={form.category} onChange={handle("category")} style={{ ...inputStyle, cursor: "pointer" }}
                        onFocus={e => { e.target.style.borderColor = C.greenLight; e.target.style.boxShadow = `0 0 0 3px ${C.greenLight}33`; }}
                        onBlur={e => { e.target.style.borderColor = "#e5e7eb"; e.target.style.boxShadow = "none"; }}
                      >
                        <option value="">Select a category...</option>
                        {categories.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                      {[["Email Address *", "email", "email", "your@company.com"], ["Phone Number", "phone", "tel", "+1 234 567 8900"]].map(([label, key, type, placeholder]) => (
                        <div key={key}>
                          <label style={{ display: "block", fontWeight: 600, fontSize: 13, color: C.dark, marginBottom: 6 }}>{label}</label>
                          <input type={type} placeholder={placeholder} value={form[key]} onChange={handle(key)} style={inputStyle}
                            onFocus={e => { e.target.style.borderColor = C.greenLight; e.target.style.boxShadow = `0 0 0 3px ${C.greenLight}33`; }}
                            onBlur={e => { e.target.style.borderColor = "#e5e7eb"; e.target.style.boxShadow = "none"; }}
                          />
                        </div>
                      ))}
                    </div>
                    <div style={{ marginBottom: 28 }}>
                      <label style={{ display: "block", fontWeight: 600, fontSize: 13, color: C.dark, marginBottom: 6 }}>Tell Us About Your Products</label>
                      <textarea placeholder="Describe your products, production capacity, existing markets, certifications (e.g., halal, organic), and UAE market goals..."
                        value={form.message} onChange={handle("message")} rows={4}
                        style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                        onFocus={e => { e.target.style.borderColor = C.greenLight; e.target.style.boxShadow = `0 0 0 3px ${C.greenLight}33`; }}
                        onBlur={e => { e.target.style.borderColor = "#e5e7eb"; e.target.style.boxShadow = "none"; }}
                      />
                    </div>
                    <button onClick={submit} disabled={loading} style={{
                      width: "100%", padding: "15px", borderRadius: 10, border: "none", cursor: loading ? "not-allowed" : "pointer",
                      background: loading ? "#a7d9b7" : `linear-gradient(135deg, ${C.orange}, ${C.orangeLight})`,
                      color: C.white, fontWeight: 700, fontSize: 16,
                      boxShadow: loading ? "none" : "0 4px 20px rgba(249,115,22,0.4)", transition: "all 0.25s",
                    }}>
                      {loading ? "Submitting..." : "Submit Application →"}
                    </button>
                    <p style={{ color: C.gray, fontSize: 12, textAlign: "center", marginTop: 12 }}>We respond within 48 business hours. Your information is kept confidential.</p>
                  </>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <style>{`@media (max-width: 768px) { .gf-two-col { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CONTACT PAGE
// ═══════════════════════════════════════════════════════════════════════════════
function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const handle = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const inputStyle = {
    width: "100%", padding: "13px 16px", borderRadius: 10, border: "1px solid #e5e7eb",
    fontSize: 15, color: C.dark, background: C.white, outline: "none", boxSizing: "border-box", transition: "all 0.2s",
  };

  return (
    <div style={{ paddingTop: 70 }}>
      <section style={{ background: `linear-gradient(135deg, ${C.darkMid}, ${C.dark})`, padding: "100px 24px 80px", textAlign: "center" }}>
        <AnimatedSection>
          <h1 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 900, color: C.white, margin: "0 0 20px" }}>Contact Us</h1>
          <p style={{ color: "#a7d9b7", fontSize: 18, maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>Whether you're a supplier, distributor, or buyer — we'd love to hear from you.</p>
        </AnimatedSection>
        <div style={{ position: "absolute", bottom: -1, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 60" fill={C.beige}><path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" /></svg>
        </div>
      </section>

      <section style={{ background: C.beige, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 60 }} className="gf-two-col">
            <AnimatedSection>
              <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 28, fontWeight: 800, color: C.dark, marginBottom: 24 }}>Get in Touch</h2>
              <p style={{ color: C.gray, fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>Our team is ready to assist international suppliers, local distributors, and buyers.</p>
              {[
                { icon: <Icon.Mail />, label: "Business Email", value: "info@gofreshuae.ae" },
                { icon: <Icon.Phone />, label: "Phone / WhatsApp", value: "+971 4 000 0000" },
                { icon: <Icon.MapPin />, label: "Office Location", value: "Dubai, United Arab Emirates" },
              ].map(({ icon, label, value }) => (
                <div key={label} style={{ display: "flex", gap: 16, marginBottom: 24, alignItems: "flex-start" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `${C.greenLight}22`, color: C.green, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: C.dark, fontSize: 14 }}>{label}</div>
                    <div style={{ color: C.gray, fontSize: 15, marginTop: 2 }}>{value}</div>
                  </div>
                </div>
              ))}
              <div style={{ borderRadius: 16, overflow: "hidden", marginTop: 24, boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
                <iframe
                  title="GoFresh UAE Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.6828661865!2d54.89784254!3d25.07628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1"
                  width="100%" height="200" style={{ border: 0, display: "block" }} allowFullScreen loading="lazy"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div style={{ background: C.white, borderRadius: 24, padding: "44px 40px", boxShadow: "0 4px 30px rgba(0,0,0,0.08)" }}>
                {submitted ? (
                  <div style={{ textAlign: "center", padding: "40px 0" }}>
                    <div style={{ fontSize: 64, marginBottom: 20, fontFamily: "'Noto Color Emoji','Segoe UI Emoji',sans-serif" }}>✅</div>
                    <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 24, fontWeight: 800, color: C.dark, marginBottom: 12 }}>Message Sent!</h3>
                    <p style={{ color: C.gray, fontSize: 16 }}>We'll get back to you within 24–48 business hours.</p>
                  </div>
                ) : (
                  <>
                    <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 22, fontWeight: 800, color: C.dark, marginBottom: 28 }}>Send Us a Message</h3>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                      {[["Your Name", "name", "text", "John Smith"], ["Email Address", "email", "email", "john@company.com"]].map(([label, key, type, placeholder]) => (
                        <div key={key}>
                          <label style={{ display: "block", fontWeight: 600, fontSize: 13, color: C.dark, marginBottom: 6 }}>{label}</label>
                          <input type={type} placeholder={placeholder} value={form[key]} onChange={handle(key)} style={inputStyle}
                            onFocus={e => { e.target.style.borderColor = C.greenLight; e.target.style.boxShadow = `0 0 0 3px ${C.greenLight}33`; }}
                            onBlur={e => { e.target.style.borderColor = "#e5e7eb"; e.target.style.boxShadow = "none"; }}
                          />
                        </div>
                      ))}
                    </div>
                    <div style={{ marginBottom: 16 }}>
                      <label style={{ display: "block", fontWeight: 600, fontSize: 13, color: C.dark, marginBottom: 6 }}>Subject</label>
                      <input placeholder="How can we help?" value={form.subject} onChange={handle("subject")} style={inputStyle}
                        onFocus={e => { e.target.style.borderColor = C.greenLight; e.target.style.boxShadow = `0 0 0 3px ${C.greenLight}33`; }}
                        onBlur={e => { e.target.style.borderColor = "#e5e7eb"; e.target.style.boxShadow = "none"; }}
                      />
                    </div>
                    <div style={{ marginBottom: 28 }}>
                      <label style={{ display: "block", fontWeight: 600, fontSize: 13, color: C.dark, marginBottom: 6 }}>Message</label>
                      <textarea placeholder="Tell us about your inquiry..." value={form.message} onChange={handle("message")} rows={5}
                        style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                        onFocus={e => { e.target.style.borderColor = C.greenLight; e.target.style.boxShadow = `0 0 0 3px ${C.greenLight}33`; }}
                        onBlur={e => { e.target.style.borderColor = "#e5e7eb"; e.target.style.boxShadow = "none"; }}
                      />
                    </div>
                    <button onClick={() => { if (form.name && form.email) setSubmitted(true); }} style={{
                      width: "100%", padding: "15px", borderRadius: 10, border: "none", cursor: "pointer",
                      background: `linear-gradient(135deg, ${C.greenLight}, ${C.green})`,
                      color: C.white, fontWeight: 700, fontSize: 16,
                      boxShadow: "0 4px 20px rgba(46,204,113,0.4)",
                    }}>
                      Send Message →
                    </button>
                  </>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <style>{`@media (max-width: 768px) { .gf-two-col { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// APP ROOT
// ═══════════════════════════════════════════════════════════════════════════════
export default function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "home": return <HomePage setPage={setPage} />;
      case "about": return <AboutPage setPage={setPage} />;
      case "services": return <ServicesPage setPage={setPage} />;
      case "categories": return <CategoriesPage setPage={setPage} />;
      case "supplier": return <SupplierPage />;
      case "contact": return <ContactPage />;
      default: return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", background: C.beige, minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Noto+Color+Emoji&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; font-family: 'Poppins', sans-serif; }
        section { position: relative; }
        button, input, textarea, select { font-family: 'Poppins', sans-serif; }
        h1, h2, h3, h4, h5, h6 { font-family: 'Poppins', sans-serif !important; }

        /* Flat / Twemoji-style emojis via Noto Emoji */
        .gf-emoji {
          font-family: 'Noto Color Emoji', 'Segoe UI Emoji', sans-serif;
          font-style: normal;
          display: inline-block;
          line-height: 1;
        }

        /* Pill-style emoji badge */
        .emoji-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.12);
          border-radius: 16px;
          padding: 6px 10px;
          font-size: inherit;
        }
      `}</style>
      <Navbar page={page} setPage={setPage} />
      <main>{renderPage()}</main>
      <Footer setPage={setPage} />
    </div>
  );
}
