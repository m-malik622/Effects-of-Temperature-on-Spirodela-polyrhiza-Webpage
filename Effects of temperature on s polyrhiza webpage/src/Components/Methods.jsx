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
          href="https://ij.imjoy.io/"
          target="_blank"
          rel="noreferrer"
        >
          Link to image JS online playground
        </a>
      </div>
    </section>
  )
}

export default Methods
