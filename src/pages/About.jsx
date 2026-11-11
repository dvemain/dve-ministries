import { about, people, sponsors } from "../data/content.js";
import { Btn, Section, StoryCard, PersonGrid, LogoStrip } from "../components/ui.jsx";

export default function About() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="eyebrow">About Us</p>
          <h1>Stewards of our father's work.</h1>
          <p className="lede">{about.intro}</p>
          <div className="ctas"><Btn to="/contact">Get Involved</Btn><Btn to="/contact" kind="outline">Donate</Btn></div>
        </div>
      </section>

      <Section eyebrow="Board of Directors" className="board">
        <PersonGrid ids={about.board} people={people} />
      </Section>

      <Section eyebrow="Our Story" lede={about.storyIntro} className="stories-band">
        <div className="story-list">{about.stories.map((s) => <StoryCard key={s.img} story={s} />)}</div>
      </Section>

      <Section eyebrow="Our Future" title="Future endeavors and events." className="future">
        <div className="future-grid">
          {about.future.map((f) => (
            <div key={f.group} className="future-card">
              <h3>{f.group}</h3>
              <ul>{f.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </div>
        <h3 className="future-sub">Future initiatives</h3>
        <ul className="pill-list">{about.futureInitiatives.map((i) => <li key={i}>{i}</li>)}</ul>
      </Section>

      <Section eyebrow="Corporate Sponsors" className="sponsors-band">
        <LogoStrip items={sponsors} />
      </Section>
    </>
  );
}
