import heroImg from '../assets/hero.png'
import { useState } from 'react'

const ecosystemStates = {
  cooling: {
    title: 'Cooling water',
    summary: 'Lower temperatures can slow metabolism, change membrane behavior, and delay growth.',
    stream: 'Cold stress alters enzyme activity and plant function in freshwater habitats.',
    stress: 'Cold stress marker',
  },
  balance: {
    title: 'Balanced spring water',
    summary: 'Temperature is one of the ecological drivers that shapes plant growth and gene expression.',
    stream: 'A stable pond can still shift as the climate changes over time.',
    stress: 'Control condition',
  },
  heating: {
    title: 'Warming pool',
    summary: 'Higher temperatures can push duckweed beyond its preferred growth range.',
    stream: 'Heat stress can affect membrane properties, enzymes, and water-tissue viscosity.',
    stress: 'Heat stress marker',
  },
}

function Introduction({ links }) {
  const [mode, setMode] = useState('balance')
  const active = ecosystemStates[mode]

  return (
    <section className="section introduction-section" id="introduction">
      <div className="section-heading">
        <p className="eyebrow">Introduction</p>
        <h2>Why temperature matters in a changing freshwater ecosystem</h2>
        <p>
          Global climate change affects air quality, food availability, water quality, and
          temperature. In freshwater systems, those shifts can alter plant growth, stress
          responses, and the way genes are expressed over time.
        </p>
      </div>

      <div className="intro-grid">
        <div className="diagram-card">
          <div className="scenario-switcher" role="tablist" aria-label="Ecosystem scenarios">
            {Object.keys(ecosystemStates).map((key) => (
              <button
                key={key}
                className={key === mode ? 'chip chip-active' : 'chip'}
                type="button"
                onClick={() => setMode(key)}
              >
                {ecosystemStates[key].title}
              </button>
            ))}
          </div>

          <div className={`diagram diagram-${mode}`} aria-live="polite">
            <div className="diagram-layer diagram-sky" />
            <div className="diagram-layer diagram-water" />
            <div className="diagram-layer diagram-plant">
              <span className="diagram-label">Spirodela canopy</span>
            </div>
            <div className="diagram-layer diagram-thermo">
              <span>{active.stress}</span>
            </div>
          <div className="diagram-copy">
            <strong>{active.title}</strong>
            <p>{active.summary}</p>
            <p>{active.stream}</p>
          </div>
          </div>

          <div className="diagram-links">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="intro-aside">
          <img className="section-image" src={heroImg} alt="Spirodela polyrhiza close-up placeholder" />
          <div className="info-card">
            <h3>What to notice</h3>
            <ul>
              <li>Temperature changes membrane properties, enzyme activity, and transport in plants.</li>
              <li>Spirodela polyrhiza, or greater duckweed, grows quickly in slow-moving freshwater.</li>
              <li>This study focuses on longer-term temperature stress instead of only short-term effects.</li>
            </ul>
          </div>
          <div className="info-card">
            <h3>Research gap</h3>
            <p>
              A major gap in the literature is how climate change affects aquatic plants over longer
              periods and how those responses may be inherited across generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduction
