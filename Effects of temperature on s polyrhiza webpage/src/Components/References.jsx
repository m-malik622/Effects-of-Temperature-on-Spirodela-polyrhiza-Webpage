function References({ references }) {
  return (
    <section className="section references-section" id="references">
      <div className="section-heading">
        <h2>References</h2>
      </div>

      <div className="reference-list">
        {references.map((reference) => (
          <article className="reference-item" key={reference.href || reference.citation}>
            <p>{reference.citation}</p>
            {reference.href ? (
              <a href={reference.href} target="_blank" rel="noreferrer">
                {reference.label || reference.href}
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}

export default References
