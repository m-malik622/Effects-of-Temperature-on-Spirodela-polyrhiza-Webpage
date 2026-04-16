function SunBadge() {
  return (
    <div
      aria-hidden="true"
      style={{
        width: 92,
        height: 92,
        borderRadius: "50%",
        display: "grid",
        placeItems: "center",
        background:
          "radial-gradient(circle at 35% 35%, rgba(255,245,170,0.98), rgba(245,158,11,0.55) 58%, rgba(201,123,46,0.15) 100%)",
        boxShadow: "0 16px 32px rgba(201,123,46,0.18)",
        border: "1px solid rgba(201,123,46,0.18)",
        marginBottom: 12,
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        width="34"
        height="34"
      >
        <circle cx="12" cy="12" r="4.5" />
        <path d="M12 1.5v3M12 19.5v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M1.5 12h3M19.5 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
      </svg>
    </div>
  );
}

function Conclusion({ feedbackLink }) {
  return (
    <section className="section conclusion-section" id="conclusion">
      <div
        className="section-heading"
        style={{
          maxWidth: 860,
          margin: "0 auto 28px",
          display: "grid",
          justifyItems: "center",
          textAlign: "center",
          padding: "28px 24px",
          borderRadius: 28,
          background:
            "linear-gradient(180deg, rgba(244,240,230,0.96), rgba(244,240,230,0.9)), linear-gradient(135deg, rgba(90,140,46,0.1), rgba(42,107,138,0.06))",
          border: "1px solid rgba(45,80,22,0.12)",
          boxShadow: "var(--shadow)",
        }}
      >
        <p className="eyebrow">Conclusion</p>
        <h2 style={{ textAlign: "center" }}>
          Discussion, methylation, and climate stress
        </h2>
      </div>

      <div className="conclusion-grid">
        <div className="conclusion-card">
          <p className="results-label">Discussion</p>
          <h3>
            Temperature shaped growth, while methylation shifted more clearly
          </h3>
          <p>
            Higher temperatures trended toward reduced frond count and percent
            coverage, but the growth differences did not reach statistical
            significance. In contrast, CpG methylation at the HSP70 and ONSEN
            stress loci decreased as temperature increased, showing that heat
            stress affected the epigenetic response more strongly than the
            visible growth response.
          </p>
          <p>
            This suggests that temperature is a meaningful environmental
            stressor in Spirodela polyrhiza, with methylation acting as a
            dynamic signal linked to stress regulation and developmental change.
          </p>
          <div
            style={{
              padding: 16,
              borderRadius: 20,
              background: "rgba(138,184,74,0.12)",
              border: "1px solid rgba(45,80,22,0.12)",
            }}
          >
            <strong style={{ color: "var(--forest)" }}>Key takeaway:</strong>
            <p
              style={{
                margin: "8px 0 0",
                color: "var(--muted)",
                lineHeight: 1.7,
              }}
            >
              Heat stress may not always change growth enough to be
              statistically significant, but it can still leave a clear
              molecular imprint through DNA methylation.
            </p>
          </div>
        </div>

        <div className="conclusion-card">
          <SunBadge />
          <p className="results-label">Climate signal</p>
          <h3>Why the sun matters</h3>
          <p>
            The sun icon represents rising thermal stress and the climate change
            context behind the study. As temperatures climb, duckweed may
            experience both direct growth suppression and heritable epigenetic
            changes that affect future generations.
          </p>
          <p>
            That matters because Spirodela polyrhiza supports freshwater
            ecosystems and bioremediation efforts. If warming reshapes
            methylation patterns, the impact can extend beyond one experiment
            and into the stability of the broader system.
          </p>
          <a
            className="button button-primary"
            href={feedbackLink}
            target="_blank"
            rel="noreferrer"
          >
            Give feedback
          </a>
        </div>
      </div>
    </section>
  );
}

export default Conclusion;
