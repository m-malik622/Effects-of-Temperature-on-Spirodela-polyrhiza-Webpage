const contributors = [
  {
    label: "LSU College of Science",
    href: "https://www.lsu.edu/science/index.php",
    detail:
      "For academic support and the setting that made the project possible.",
  },
  {
    label: "Mindy McCallum",
    href: "https://www.lsu.edu/science/biosci/faculty-and-staff/faculty-pages/mccallum.php",
    detail: "Instructor",
  },
  {
    label: "Jada Daniels",
    href: "https://www.linkedin.com/in/jadadaniels/",
    detail:
      "Teaching Assistant. For guidance, feedback, and help shaping the experiment.",
  },
  {
    label: "Mujtaba Malik",
    href: "https://mmalik.space/",
    detail: "Project design and webpage development.",
  },
  {
    label: "Reece Fulton",
    href: "mailto:Reece.Fulton@lsu.edu",
    detail: "Lab Partner",
  },
  {
    label: "Asiah Moore",
    href: "mailto:Asiah.Moore@lsu.edu",
    detail: "Lab Partner",
  },
];

function Acknowledgements() {
  return (
    <section className="section acknowledgements-section" id="acknowledgements">
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
        <p className="eyebrow">Acknowledgements</p>
        <h2 style={{ textAlign: "center" }}>
          Support, guidance, and collaboration
        </h2>
        <p
          style={{
            maxWidth: 620,
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          This project was strengthened by faculty guidance, institutional
          support, and the classmates who helped prepare the experiment.
        </p>
      </div>

      <div className="ack-card">
        <p>
          Thank you to everyone who helped shape the experiment, from lab
          preparation to feedback on the poster and website draft.
        </p>

        <div className="reference-list">
          {contributors.map((person) => (
            <div key={person.label} className="reference-item">
              <h3>{person.label}</h3>
              <p>{person.detail}</p>
              <a href={person.href} target="_blank" rel="noreferrer">
                Open link
              </a>
            </div>
          ))}
        </div>

        <p>
          Additional thanks to the classmates involved in preparing the
          experiment, setting up the microplates, and helping keep the workflow
          on track.
        </p>
      </div>
    </section>
  );
}

export default Acknowledgements;
