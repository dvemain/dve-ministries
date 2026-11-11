import { useParams, Navigate } from "react-router-dom";
import { pages, people, initiatives } from "../data/content.js";
import { img, Btn, Section, StoryCard, PersonGrid } from "../components/ui.jsx";

export default function Initiative() {
  const { slug } = useParams();
  const p = pages[slug];
  const meta = initiatives.find((i) => i.slug === slug);
  if (!p || !meta) return <Navigate to="/" replace />;

  return (
    <>
      <section className={`init-head init-head-${p.accent}`}>
        <img className="init-head-bg" src={img(p.hero)} alt="" />
        <div className="wrap init-head-inner">
          <img className="init-logo" src={img(p.logo)} alt="" width="120" height="120" />
          <div>
            <p className="eyebrow light">{meta.region} · {meta.short}</p>
            <h1>{p.title}</h1>
            <p className="lede">{p.intro}</p>
          </div>
        </div>
      </section>

      <Section eyebrow="Focus areas" className="pillars-band">
        <ul className="pill-list big">{p.pillars.map((x) => <li key={x}>{x}</li>)}</ul>
        <p className="note">{p.note}</p>
        <div className="ctas"><Btn to="/contact">Get involved in future events and initiatives</Btn></div>
      </Section>

      {p.certificate && (
        <Section eyebrow="Registration" className="cert-band">
          <figure className="cert"><img src={img(p.certificate)} alt="Certificate of registration as a Community Based Organization, Kibera, Kenya" loading="lazy" /></figure>
        </Section>
      )}

      <Section eyebrow="Impact Team" className="board">
        <PersonGrid ids={p.team} people={people} />
      </Section>

      <Section eyebrow="Our Story" className="stories-band">
        <div className="story-list">{p.stories.map((s) => <StoryCard key={s.img + s.date} story={s} />)}</div>
      </Section>
    </>
  );
}
