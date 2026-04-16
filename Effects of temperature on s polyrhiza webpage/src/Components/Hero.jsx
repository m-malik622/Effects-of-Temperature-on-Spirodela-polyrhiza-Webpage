import heroImg from '../assets/hero.png'

function Hero({ sectionLinks, feedbackLink, acknowledgementsLink }) {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <a className="eyebrow" href='https://mmalik.space/'>Mujtaba Malik; </a>
        <a className="eyebrow" href=''>Reece Fulton, </a>
        <a className="eyebrow" href=''>Asiah Moore</a>
        <h1>Effects of temperature on Spirodela polyrhiza</h1>
        <p className="hero-lead">
          Explore how a tiny floating freshwater plant responds to cold and heat stress through
          an eye-catching, mobile-friendly story built for poster presentation and feedback.
        </p>

        <div className="hero-actions">
          {sectionLinks.map((link) => (
            <a key={link.href} className="button button-primary" href={link.href}>
              {link.label}
            </a>
          ))}
          <a className="button button-secondary" href={feedbackLink} target="_blank" rel="noreferrer">
            Feedback form
          </a>
          <a className="button button-secondary" href={acknowledgementsLink}>
            Acknowledgements
          </a>
        </div>

        <div className="hero-metrics" aria-label="Project highlights">
          <div>
            <span>Theme</span>
            <strong>Freshwater climate stress</strong>
          </div>
          <div>
            <span>Focus</span>
            <strong>Growth, color, and recovery</strong>
          </div>
          <div>
            <span>Format</span>
            <strong>Single-page guided showcase</strong>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-card">
          <img src={heroImg} alt="Spirodela polyrhiza floating plant illustration" />
          <div className="hero-card-caption">
            <span>Featured organism</span>
            <strong>Spirodela polyrhiza</strong>
          </div>
        </div>

        <div className="hero-orbit hero-orbit-cold">Survival in extreme Cold</div>
        <div className="hero-orbit hero-orbit-neutral">Aids in Bioremediation</div>
        <div className="hero-orbit hero-orbit-heat">Protein Dense</div>
      </div>
    </section>
  )
}

export default Hero
