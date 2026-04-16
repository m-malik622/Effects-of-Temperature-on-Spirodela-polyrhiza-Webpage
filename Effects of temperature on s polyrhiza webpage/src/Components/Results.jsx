import { useState } from "react";

const resultsByTemp = {
  20: {
    label: "20°C",
    temp: 20,
    color: "blue",
    note: "This treatment produced the strongest overall coverage by day 21.",
    series: [
      { day: 7, fronds: 1.5, coverage: 0.576 },
      { day: 14, fronds: 3.5, coverage: 3.644 },
      { day: 21, fronds: 8.25, coverage: 22.113 },
    ],
  },
  30: {
    label: "30°C",
    temp: 30,
    color: "green",
    note: "Frond count rises steadily, but final coverage stays below the 20°C treatment.",
    series: [
      { day: 7, fronds: 1.833, coverage: 1.266 },
      { day: 14, fronds: 2.833, coverage: 3.137 },
      { day: 21, fronds: 4.667, coverage: 4.221 },
    ],
  },
  40: {
    label: "40°C",
    temp: 40,
    color: "amber",
    note: "Both frond count and coverage remained comparatively low under sustained heat stress.",
    series: [
      { day: 7, fronds: 1.833, coverage: 1.058 },
      { day: 14, fronds: 1.833, coverage: 1.155 },
      { day: 21, fronds: 1.833, coverage: 1.2 },
    ],
  },
};

const resultFigures = [
  {
    src: "/restults/percent coverage and frond count over time .png",
    alt: "Duckweed growth over time across temperature treatments",
    title: "Figure 1. Duckweed Growth Over Time Across Temperature Treatments",
    caption:
      "Duckweed growth (percent coverage and frond number) increased over time across all treatments, with higher temperature groups showing reduced growth.",
  },
  {
    src: "/restults/HPS7- cpg methylation.png",
    alt: "CpG methylation of HSP70 across temperature treatments",
    title: "Figure 2. CpG Methylation of HSP70 Across Temperature Treatments",
    caption:
      "CpG methylation at HSP70 decreased with increasing temperature. Boxplots show median, interquartile range, and individual data points.",
  },
  {
    src: "/restults/Tukey post hoc comparisions .png",
    alt: "Tukey post-hoc comparison table",
    title:
      "Table 1. Tukey post-hoc comparison of CpG methylation at the HSP70 gene across treatments.",
    caption:
      "Group 1 and Group 2 indicate the compared groups; meandiff is the difference in means; p-adj is the Tukey HSD adjusted p-value (FWER = 0.05); and reject indicates statistical significance (True: p < 0.05, False: not significant). All comparisons were significant.",
  },
];

function formatValue(value, digits = 1) {
  return Number(value).toFixed(digits);
}

function Results() {
  const [selection, setSelection] = useState(20);
  const active = resultsByTemp[selection];
  const maxFronds = Math.max(...active.series.map((point) => point.fronds), 1);
  const maxCoverage = Math.max(
    ...active.series.map((point) => point.coverage),
    1,
  );
  const finalPoint = active.series[active.series.length - 1];
  const firstPoint = active.series[0];
  const frondDelta = finalPoint.fronds - firstPoint.fronds;
  const coverageDelta = finalPoint.coverage - firstPoint.coverage;

  return (
    <section className="section results-section" id="results">
        <div
          className="section-heading"
          style={{
            maxWidth: 860,
            margin: "0 auto 28px",
            textAlign: "center",
            padding: "28px 24px",
            borderRadius: 28,
            background:
              "linear-gradient(180deg, rgba(244,240,230,0.96), rgba(244,240,230,0.9)), linear-gradient(135deg, rgba(90,140,46,0.1), rgba(42,107,138,0.06))",
            border: "1px solid rgba(45,80,22,0.12)",
            boxShadow: "var(--shadow)",
          }}
        >
          <p className="eyebrow">Results</p>
          <h2>Growth across 20°C, 30°C, and 40°C</h2>
          <p>
            The controls below let visitors compare frond count and percent
            coverage across the three temperature treatments using the
            measurements from the experiment.
          </p>
        </div>

        <div className="results-layout">
          <div className="results-panel">
            <div className="results-summary">
              <strong>{active.temp}°C</strong>
              <span>Day 21 frond count: {formatValue(finalPoint.fronds)}</span>
              <span>
                Day 21 percent coverage: {formatValue(finalPoint.coverage, 3)}%
              </span>
            </div>

            <div className="results-note">
              {active.note} Over the full time course, frond count changed by{" "}
              {formatValue(frondDelta)}
              and percent coverage changed by {formatValue(coverageDelta, 3)}%.
            </div>

            <div
              style={{
                display: "grid",
                gap: 16,
              }}
            >
              <div
                style={{
                  display: "grid",
                  gap: 10,
                  padding: "16px",
                  borderRadius: 20,
                  background: "rgba(244,240,230,0.88)",
                  border: "1px solid rgba(45,80,22,0.12)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 12,
                    alignItems: "baseline",
                  }}
                >
                  <h3 style={{ margin: 0, color: "var(--forest)" }}>
                    Frond count
                  </h3>
                  <span style={{ color: "var(--muted)", fontSize: "0.85rem" }}>
                    Average across replicates
                  </span>
                </div>
                {active.series.map((point) => (
                  <div
                    key={point.day}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "64px 1fr 56px",
                      gap: 10,
                      alignItems: "center",
                    }}
                  >
                    <span style={{ color: "var(--muted)", fontWeight: 700 }}>
                      Day {point.day}
                    </span>
                    <div
                      style={{
                        height: 12,
                        borderRadius: 999,
                        overflow: "hidden",
                        background: "rgba(45,80,22,0.08)",
                      }}
                    >
                      <div
                        style={{
                          width: `${(point.fronds / maxFronds) * 100}%`,
                          height: "100%",
                          borderRadius: 999,
                          background:
                            "linear-gradient(90deg, var(--cold), var(--accent-green), var(--heat))",
                        }}
                      />
                    </div>
                    <strong
                      style={{ color: "var(--forest)", textAlign: "right" }}
                    >
                      {formatValue(point.fronds)}
                    </strong>
                  </div>
                ))}
              </div>

              <div
                style={{
                  display: "grid",
                  gap: 10,
                  padding: "16px",
                  borderRadius: 20,
                  background: "rgba(244,240,230,0.88)",
                  border: "1px solid rgba(45,80,22,0.12)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 12,
                    alignItems: "baseline",
                  }}
                >
                  <h3 style={{ margin: 0, color: "var(--forest)" }}>
                    Percent coverage
                  </h3>
                  <span style={{ color: "var(--muted)", fontSize: "0.85rem" }}>
                    Average percent of well area covered
                  </span>
                </div>
                {active.series.map((point) => (
                  <div
                    key={point.day}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "64px 1fr 56px",
                      gap: 10,
                      alignItems: "center",
                    }}
                  >
                    <span style={{ color: "var(--muted)", fontWeight: 700 }}>
                      Day {point.day}
                    </span>
                    <div
                      style={{
                        height: 12,
                        borderRadius: 999,
                        overflow: "hidden",
                        background: "rgba(45,80,22,0.08)",
                      }}
                    >
                      <div
                        style={{
                          width: `${(point.coverage / maxCoverage) * 100}%`,
                          height: "100%",
                          borderRadius: 999,
                          background:
                            "linear-gradient(90deg, var(--cold), var(--accent-green), var(--heat))",
                        }}
                      />
                    </div>
                    <strong
                      style={{ color: "var(--forest)", textAlign: "right" }}
                    >
                      {formatValue(point.coverage, 3)}%
                    </strong>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="results-controls"
              role="tablist"
              aria-label="Temperature treatments"
              style={{ justifyContent: "center", marginTop: 18 }}
            >
              {Object.entries(resultsByTemp).map(([key, item]) => (
                <button
                  key={key}
                  className={
                    selection === Number(key) ? "chip chip-active" : "chip"
                  }
                  type="button"
                  onClick={() => setSelection(Number(key))}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div
              style={{
                display: "grid",
                gap: 18,
                marginTop: 22,
              }}
            >
              {resultFigures.map((figure) => (
                <figure
                  key={figure.title}
                  style={{
                    margin: 0,
                    padding: 16,
                    borderRadius: 24,
                    background: "rgba(244,240,230,0.9)",
                    border: "1px solid rgba(45,80,22,0.12)",
                    boxShadow: "0 12px 26px rgba(26,26,26,0.08)",
                  }}
                >
                  <div
                    style={{
                      borderRadius: 20,
                      overflow: "hidden",
                      border: "1px solid rgba(45,80,22,0.12)",
                      background: "rgba(255,255,255,0.5)",
                    }}
                  >
                    <img
                      src={figure.src}
                      alt={figure.alt}
                      style={{
                        display: "block",
                        width: "100%",
                        maxHeight: 560,
                        objectFit: "contain",
                        background: "rgba(255,255,255,0.4)",
                      }}
                    />
                  </div>
                  <figcaption
                    style={{ marginTop: 14, display: "grid", gap: 8 }}
                  >
                    <strong
                      style={{ color: "var(--forest)", fontSize: "1rem" }}
                    >
                      {figure.title}
                    </strong>
                    <p
                      style={{
                        margin: 0,
                        color: "var(--muted)",
                        lineHeight: 1.7,
                      }}
                    >
                      {figure.caption}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
}

export default Results;
