import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const steps = [
  {
    date: "Step 1",
    title: "Experimental Design",
    subtitle: "Microplate Setup · Three Temperature Treatments",
    image: "/methods/microwells.png",
    imageAlt: "Microplate wells setup for the experiment",
    body: "Eighteen turions of Spirodela polyrhiza were distributed across sterile six-well microplates, with six replicates assigned to each temperature treatment: 20°C, 30°C, and 40°C. Each well was filled with 10 mL of Hoagland's nutrient solution, chosen for its reliability across a wide range of plant species. Individual turions were transferred using sterilized inoculation loops, then the plates were labeled and placed into incubation chambers for the 21-day growth period.",
    badge: "n = 18 replicates",
    iconColor: "var(--cold)",
    contentTint: "rgba(42,107,138,0.08)",
    borderTint: "rgba(42,107,138,0.22)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        width="22"
        height="22"
      >
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18" />
      </svg>
    ),
  },
  {
    date: "Step 2",
    title: "Data Collection",
    subtitle: "Weekly Imaging · ImageJ Analysis",
    image: "/methods/imagejs.png",
    imageAlt: "ImageJ analysis workspace",
    body: "Top-down photographs of each microplate were captured weekly over three weeks and analyzed in ImageJ. Fronds were counted manually, surface area was measured with the Freehand tool, and percent coverage was calculated from the well diameter and duckweed area. These metrics tracked growth and stress response across temperature treatments.",
    badge: "Weeks 1 – 3",
    iconColor: "var(--accent-green)",
    contentTint: "rgba(90,140,46,0.08)",
    borderTint: "rgba(90,140,46,0.22)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        width="22"
        height="22"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    date: "Step 3",
    title: "Genetic Sequencing",
    subtitle: "DNA Extraction · Bisulfite Conversion · MSP",
    image: "/methods/msp.png",
    imageAlt: "Methylation-specific PCR gel image",
    body: "Following the 21-day growth period, high-quality turion DNA was extracted using the Quick-DNA Plant/Seed Miniprep Kit. The DNA was stored before bisulfite conversion with the EZ DNA Methylation Kit, then analyzed with Methylation-Specific PCR. Amplified products were visualized by gel electrophoresis to determine methylation status at the ONSEN and HSFA1 loci.",
    badge: "MSP · ONSEN · HSFA1",
    iconColor: "var(--heat)",
    contentTint: "rgba(201,123,46,0.08)",
    borderTint: "rgba(201,123,46,0.22)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        width="22"
        height="22"
      >
        <path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
      </svg>
    ),
  },
  {
    date: "Step 4",
    title: "Data Analysis",
    subtitle: "Two-Way ANOVA · Tukey HSD · Python / Matplotlib",
    image: "/methods/collab.png",
    imageAlt: "Collaborative data analysis setup",
    body: "Growth variables were evaluated with a two-way ANOVA to compare temperature treatments and time points. Tukey HSD identified which treatment pairs differed significantly, using a p < 0.05 threshold. Methylation data were analyzed with a one-way ANOVA followed by Tukey's HSD, and all figures and tables were generated in Python with Matplotlib.",
    badge: "p < 0.05 threshold",
    iconColor: "var(--forest)",
    contentTint: "rgba(45,80,22,0.08)",
    borderTint: "rgba(45,80,22,0.22)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        width="22"
        height="22"
      >
        <path d="M3 3v18h18" />
        <path d="M18 9l-5 5-4-4-3 3" />
      </svg>
    ),
  },
];

const timelineLineColor = "rgba(45,80,22,0.16)";

export default function MethodsTimeline() {
  return (
    <div
      style={{
        width: "100%",
        color: "var(--ink)",
        padding: "8px 0 28px",
      }}
    >
      <div
        style={{
          width: "min(1180px, calc(100% - 32px))",
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
        <div
          style={{
            display: "inline-block",
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--accent-green)",
            border: "1px solid rgba(90,140,46,0.18)",
            background: "rgba(138,184,74,0.12)",
            padding: "5px 14px",
            borderRadius: 999,
            marginBottom: 18,
          }}
        >
          Spirodela polyrhiza · Temperature Stress · DNA Methylation
        </div>
        <h1
          style={{
            fontSize: "clamp(24px, 4vw, 34px)",
            fontWeight: 700,
            color: "var(--forest)",
            letterSpacing: "-0.02em",
            margin: "0 0 12px",
            lineHeight: 1.3,
          }}
        >
          Methods
        </h1>
        <p
          style={{
            fontSize: 13,
            color: "var(--muted)",
            maxWidth: 620,
            margin: "0 auto",
            lineHeight: 1.7,
            fontWeight: 400,
          }}
        >
          A sequential overview of the workflow, from experimental setup to
          statistical analysis.
        </p>
      </div>

      <VerticalTimeline
        lineColor={timelineLineColor}
        layout="1-column-left"
        animate={false}
        className="methods-vertical-timeline"
      >
        {steps.map((step) => (
          <VerticalTimelineElement
            key={step.date}
            dateClassName="methods-timeline-date"
            contentStyle={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.74), rgba(244,240,230,0.96))",
              color: "var(--ink)",
              borderRadius: "24px",
              border: `1px solid ${step.borderTint}`,
              boxShadow: "0 14px 30px rgba(26,26,26,0.08)",
            }}
            contentArrowStyle={{
              borderRight: `7px solid rgba(244,240,230,0.96)`,
            }}
            iconStyle={{
              background: "rgba(244,240,230,0.98)",
              color: step.iconColor,
              border: `1px solid ${step.borderTint}`,
              boxShadow: "0 10px 22px rgba(26,26,26,0.08)",
            }}
            icon={step.icon}
          >
            <div style={{ display: "grid", gap: 12 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: step.iconColor,
                    fontWeight: 700,
                  }}
                >
                  {step.date}
                </span>
                <span
                  style={{
                    fontSize: 10,
                    background: step.contentTint,
                    color: step.iconColor,
                    border: `1px solid ${step.borderTint}`,
                    borderRadius: 999,
                    padding: "2px 8px",
                    letterSpacing: "0.08em",
                  }}
                >
                  {step.badge}
                </span>
              </div>

              <div>
                <h3
                  className="vertical-timeline-element-title"
                  style={{
                    margin: "0 0 4px",
                    color: "var(--forest)",
                    fontSize: "1.05rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {step.title}
                </h3>
                <h4
                  className="vertical-timeline-element-subtitle"
                  style={{
                    margin: 0,
                    color: "var(--muted)",
                    fontSize: "0.84rem",
                    fontWeight: 500,
                  }}
                >
                  {step.subtitle}
                </h4>
              </div>

              <p
                style={{
                  margin: 0,
                  color: "var(--muted)",
                  lineHeight: 1.8,
                  fontSize: "0.96rem",
                }}
              >
                {step.body}
              </p>

              <div
                style={{
                  marginTop: 4,
                  borderRadius: 20,
                  overflow: "hidden",
                  border: `1px solid ${step.borderTint}`,
                  background: step.contentTint,
                  boxShadow: "0 10px 22px rgba(26,26,26,0.06)",
                }}
              >
                <img
                  src={step.image}
                  alt={step.imageAlt}
                  style={{
                    display: "block",
                    width: "100%",
                    maxHeight: 350,
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}
