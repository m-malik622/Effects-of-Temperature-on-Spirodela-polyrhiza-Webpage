import { useState } from 'react'

const resultsByTemp = {
  cold: {
    label: 'Cold',
    temp: 8,
    growth: 54,
    color: 'blue',
    note: 'Growth slows, but the plant stays intact.',
  },
  control: {
    label: 'Control',
    temp: 22,
    growth: 88,
    color: 'green',
    note: 'This range gives the strongest baseline recovery.',
  },
  heat: {
    label: 'Heat',
    temp: 32,
    growth: 41,
    color: 'amber',
    note: 'Heat stress pulls the curve downward fastest.',
  },
}

function Results({ cards }) {
  const [selection, setSelection] = useState('control')
  const active = resultsByTemp[selection]

  return (
    <section className="section results-section" id="results">
      <div className="section-heading">
        <p className="eyebrow">Results</p>
        <h2>Let visitors play with the temperature response</h2>
        <p>
          The controls below act like a lightweight analysis API: the selected treatment updates the
          highlighted value, the interpretation, and the visual emphasis without leaving the page.
        </p>
      </div>

      <div className="results-layout">
        <div className="results-controls" role="tablist" aria-label="Temperature treatments">
          {Object.entries(resultsByTemp).map(([key, item]) => (
            <button
              key={key}
              className={selection === key ? 'chip chip-active' : 'chip'}
              type="button"
              onClick={() => setSelection(key)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className={`results-panel results-${active.color}`}>
          <div className="results-summary">
            <p className="results-label">{active.label} treatment</p>
            <strong>{active.temp} C</strong>
            <span>Relative growth index: {active.growth}</span>
          </div>

          <div className="results-bar">
            <div className="results-bar-fill" style={{ width: `${active.growth}%` }} />
          </div>

          <p className="results-note">{active.note}</p>

          <div className="results-grid">
            {cards.map((card) => (
              <article key={card.label} className={`results-card results-card-${card.accent}`}>
                <span>{card.label}</span>
                <strong>{card.value}</strong>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Results
