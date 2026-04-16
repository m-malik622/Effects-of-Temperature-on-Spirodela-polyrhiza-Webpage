import MethodsTimeline from './MethodsTimeline'

function Methods() {
  return (
    <section className="section methods-section" id="methods">
      <div className="section-heading">
        <p className="eyebrow">Methods</p>
      </div>

      <MethodsTimeline />
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
