function Hero({ sectionLinks, feedbackLink, acknowledgementsLink }) {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <div className="p-1">
          <a className="eyebrow" href="https://mmalik.space/">
            Mujtaba Malik,{" "}
          </a>
          <a className="eyebrow" href="Reece.Fulton@lsu.edu">
            Reece Fulton,{" "}
          </a>
          <a className="eyebrow" href="Asiah.Moore@lsu.edu">
            Asiah Moore
          </a>
        </div>
        <h1>Effects of temperature on Spirodela polyrhiza</h1>
        <p className="hero-lead">
          Explore how a tiny floating freshwater plant responds to cold and heat
          stress through an eye-catching, mobile-friendly story built for poster
          presentation and feedback.
        </p>

        <h3>Navigate</h3>
        <div className="hero-actions">
          {sectionLinks.map((link) => (
            <a
              key={link.href}
              className="button button-secondary"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div>
          <h3>Thoughts ?</h3>
          <a
            className="button button-primary"
            href={feedbackLink}
            target="_blank"
            rel="noreferrer"
          >
            Feedback form
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-card">
          <a
            href="https://en.wikipedia.org/wiki/Spirodela_polyrhiza"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/spolyrhiza.png"
              alt="Spirodela polyrhiza floating plant illustration"
            />
          </a>
          <div className="hero-card-caption">
            <span>Featured organism</span>
            <strong>Spirodela polyrhiza</strong>
          </div>
        </div>

        <div className="hero-orbit hero-orbit-cold">
          Survival in extreme Cold
        </div>
        <div className="hero-orbit hero-orbit-neutral">
          Aids in Bioremediation
        </div>
        <div className="hero-orbit hero-orbit-heat">Protein Dense</div>
      </div>
    </section>
  );
}

export default Hero;
