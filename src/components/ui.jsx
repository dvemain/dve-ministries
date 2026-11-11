import { Link } from "react-router-dom";

/** Resolve a content image key to its path in /public/img. */
export const img = (key) => `/img/${key}.${key === "logo" ? "png" : "jpg"}`;

export const Btn = ({ to, href, kind = "primary", children, ...rest }) => {
  const cls = `btn btn-${kind}`;
  if (to) return <Link className={cls} to={to} {...rest}>{children}</Link>;
  return <a className={cls} href={href} {...rest}>{children}</a>;
};

export function Section({ eyebrow, title, lede, children, className = "", id }) {
  return (
    <section className={`band ${className}`} id={id}>
      <div className="wrap">
        {(eyebrow || title) && (
          <header className="sec-head">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2>{title}</h2>}
            {lede && <p className="lede">{lede}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

export function StoryCard({ story }) {
  return (
    <article className="story">
      <figure><img src={img(story.img)} alt="" loading="lazy" /></figure>
      <div className="story-body">
        <p className="story-meta">{story.date}{story.host && <> · <span>{story.host}</span></>}</p>
        <h3>{story.title}</h3>
        {story.body && <p>{story.body}</p>}
      </div>
    </article>
  );
}

export function PersonGrid({ ids, people }) {
  return (
    <ul className="people">
      {ids.map((id) => (
        <li key={id}>
          <img src={img(people[id].img)} alt={people[id].name} loading="lazy" />
          <span>{people[id].name}</span>
        </li>
      ))}
    </ul>
  );
}

export function LogoStrip({ items, size = "md" }) {
  return (
    <ul className={`logos logos-${size}`}>
      {items.map((it) => (
        <li key={it.img}>
          {it.href
            ? <a href={it.href} target="_blank" rel="noopener"><img src={img(it.img)} alt={it.name} loading="lazy" /></a>
            : <img src={img(it.img)} alt={it.name} loading="lazy" />}
        </li>
      ))}
    </ul>
  );
}
