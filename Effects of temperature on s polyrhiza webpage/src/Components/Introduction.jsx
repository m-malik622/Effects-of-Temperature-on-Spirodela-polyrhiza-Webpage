import heroImg from '../assets/hero.png'
import { useState } from 'react'

const ecosystemStates = {
  cooling: {
    title: 'Cooling water',
    summary: 'Lower temperatures slow metabolism and can delay frond expansion.',
    stream: 'Blue arrows dominate as the pond loses daytime heat.',
    stress: 'Cold stress marker',
  },
  balance: {
    title: 'Balanced spring water',
    summary: 'Moderate conditions keep duckweed photosynthesizing and multiplying steadily.',
    stream: 'Green leaf cover stays stable around the surface.',
    stress: 'Control condition',
  },
  heating: {
    title: 'Warming pool',
    summary: 'Higher temperatures can push the plant beyond its preferred growth range.',
    stream: 'Amber heat spreads through the water column and the canopy thins.',
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
        <h2>Why temperature matters in a freshwater ecosystem</h2>
        <p>
          The diagram below gives a simple interactive view of how warming and cooling can shift
          plant growth, surface shade, and stress responses in a pond or slow-moving water body.
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
              <li>Floating leaves make the plant a sensitive indicator of environmental change.</li>
              <li>Temperature can affect leaf density, color, and overall coverage.</li>
              <li>The site uses blue for cold stress and amber for heat stress throughout.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduction
