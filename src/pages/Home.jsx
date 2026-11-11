import { Link } from "react-router-dom";
import { org, home, initiatives, partners, sponsors } from "../data/content.js";
import { img, Btn, Section, LogoStrip } from "../components/ui.jsx";

export default function Home() {
  return (
    <>
      <section className="hero">
        <img className="hero-bg" src={img("hero")} alt="" fetchPriority="high" />
        <div className="wrap hero-inner">
          <p className="eyebrow light">{org.name} · {org.status}</p>
          <h1>{org.tagline}</h1>
          <p className="lede">{home.heroSub}</p>
          <div className="ctas">
            <Btn to="/contact">Get Involved</Btn>
            <Btn to="/about" kind="ghost">Our Story</Btn>
          </div>
        </div>
      </section>

      <Section eyebrow="What we do" title="Bigger projects, local hands." className="what">
        <div className="what-grid">
          <p className="what-copy">{home.what}</p>
          <Link to="/about" className="text-link">Read more →</Link>
        </div>
      </Section>

      <Section eyebrow="Our initiatives" title="Four initiatives, two continents." className="inits">
        <ul className="init-grid">
          {initiatives.map((i) => (
            <li key={i.slug} className={`init init-${i.accent}`}>
              <Link to={`/${i.slug}`}>
                <img src={img(i.logo)} alt="" loading="lazy" />
                <div>
                  <p className="init-region">{i.region}</p>
                  <h3>{i.name} <span>({i.short})</span></h3>
                  <p>{i.blurb}</p>
                  <span className="text-link">Read more →</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="From the field" title="Moments that mattered." className="stories-band">
        <ul className="story-grid">
          {home.stories.map((s) => (
            <li key={s.img}>
              <figure>
                <img src={img(s.img)} alt="" loading="lazy" />
                <figcaption>{s.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Outreach partners" title="Organizations we work alongside." className="partners-band">
        <LogoStrip items={partners} size="lg" />
        <p className="center"><Link to="/outreach-partners" className="text-link">About our partnerships →</Link></p>
      </Section>

      <Section eyebrow="Corporate sponsors" title="Funded by the companies that make up The DVE Project." className="sponsors-band">
        <LogoStrip items={sponsors} />
      </Section>

      <section className="cta-band">
        <div className="wrap">
          <h2>One act of kindness is enough.</h2>
          <p>Volunteer, donate, or bring an initiative to your community.</p>
          <Btn to="/contact" kind="light">Get Involved</Btn>
        </div>
      </section>
    </>
  );
}
