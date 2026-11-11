import { useEffect, useState } from "react";
import { NavLink, Link, Outlet, useLocation } from "react-router-dom";
import { org, nav } from "../data/content.js";
import { img, Btn } from "./ui.jsx";

export default function Layout() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => { setOpen(false); window.scrollTo({ top: 0 }); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <header className="site">
        <div className="wrap">
          <button type="button" className="menu-btn" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
          <Link to="/" className="brand" aria-label={`${org.name} home`}>
            <img src={img("logo")} alt="" width="150" height="90" />
          </Link>
          <nav className="primary" aria-label="Primary">
            {nav.map((n) => <NavLink key={n.to} to={n.to} end={n.to === "/"}>{n.label}</NavLink>)}
          </nav>
          <Btn to="/contact" kind="primary" className="btn btn-primary hdr-cta">Get Involved</Btn>
        </div>
        {open && <div className="menu-backdrop" onClick={() => setOpen(false)} />}
        <nav className={"menu-panel" + (open ? " is-open" : "")} aria-label="Mobile" aria-hidden={!open}>
          {nav.map((n) => <NavLink key={n.to} to={n.to} end={n.to === "/"}>{n.label}</NavLink>)}
          <Link to="/contact" className="btn btn-primary">Get Involved</Link>
        </nav>
      </header>

      <main id="main"><Outlet /></main>

      <footer className="site-foot">
        <div className="wrap foot-grid">
          <div>
            <img src={img("logo")} alt={org.name} width="150" height="90" className="foot-logo" />
            <p className="foot-motto">{org.motto}</p>
            <p className="foot-sub">Part of <a href={org.parent.href} target="_blank" rel="noopener">{org.parent.label}</a></p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>{nav.map((n) => <li key={n.to}><Link to={n.to}>{n.label}</Link></li>)}</ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>{org.city}</li>
              <li><a href={org.phoneHref}>{org.phone}</a></li>
              <li><a href={`mailto:${org.email}`}>{org.email}</a></li>
            </ul>
          </div>
        </div>
        <div className="wrap foot-base">© {new Date().getFullYear()} {org.name} · {org.status} · Made with ❤ by DVE Media</div>
      </footer>
    </>
  );
}
