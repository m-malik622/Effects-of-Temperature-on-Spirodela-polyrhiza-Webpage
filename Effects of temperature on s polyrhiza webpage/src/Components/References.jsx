function References({ references }) {
  return (
    <section className="section references-section" id="references">
      <div className="section-heading">
        <p className="eyebrow">References</p>
        <h2>All source links in one place</h2>
        <p>Use DOI links here so the citations stay durable and easy to verify later.</p>
      </div>

      <div className="reference-list">
        {references.map((reference) => (
          <article className="reference-item" key={reference.doi}>
            <p>{reference.citation}</p>
            <a href={`https://doi.org/${reference.doi}`} target="_blank" rel="noreferrer">
              doi:{reference.doi}
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default References
