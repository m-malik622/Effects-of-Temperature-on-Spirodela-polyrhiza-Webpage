import heroImg from '../assets/hero.png'

function Methods({ steps }) {
  return (
    <section className="section methods-section" id="methods">
      <div className="section-heading">
        <p className="eyebrow">Methods</p>
        <h2>A visual workflow that reads like a tree</h2>
        <p>
          This section uses a branching layout to show how the experiment moves from setup to
          observation to analysis, with room to drop in the exact photos and pasted protocol text
          from your poster.
        </p>
      </div>

      <div className="method-tree">
        {steps.map((step, index) => (
          <article className="method-node" key={step.title}>
            <div className="method-node-index">{index + 1}</div>
            <img className="method-image" src={heroImg} alt={`${step.title} step placeholder`} />
            <div className="method-node-copy">
              <p className="method-kicker">{step.subtitle}</p>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="method-footnote">
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noreferrer"
        >
          Link to image JS reference
        </a>
        <span>Swap this for your portfolio tree library if you want the exact reusable component.</span>
      </div>
    </section>
  )
}

export default Methods
