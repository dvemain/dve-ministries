import { outreach, partners, sponsors } from "../data/content.js";
import { Btn, Section, LogoStrip } from "../components/ui.jsx";

export default function Partners() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="eyebrow">Outreach Partners</p>
          <h1>{outreach.title}</h1>
          <p className="lede">{outreach.body}</p>
          <div className="ctas"><Btn to="/contact">Get involved in future events and initiatives</Btn></div>
        </div>
      </section>
      <Section eyebrow="Outreach partners" className="partners-band"><LogoStrip items={partners} size="lg" /></Section>
      <Section eyebrow="Corporate sponsors" className="sponsors-band"><LogoStrip items={sponsors} /></Section>
    </>
  );
}
