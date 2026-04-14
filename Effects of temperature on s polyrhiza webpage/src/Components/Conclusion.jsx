function Conclusion({ links, feedbackLink }) {
  return (
    <section className="section conclusion-section" id="conclusion">
      <div className="section-heading">
        <p className="eyebrow">Conclusion</p>
        <h2>End with clear takeaways and next steps</h2>
        <p>
          The conclusion should invite readers to compare this project with similar work and send
          feedback on the poster and webpage design.
        </p>
      </div>

      <div className="conclusion-grid">
        <div className="conclusion-card">
          <h3>Call to action</h3>
          <p>
            Use the project to spark discussion about freshwater warming, plant resilience, and
            experimental design.
          </p>
          <a className="button button-primary" href={feedbackLink} target="_blank" rel="noreferrer">
            Give feedback
          </a>
        </div>

        <div className="conclusion-card">
          <h3>Similar papers</h3>
          <ul className="link-list">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Conclusion
