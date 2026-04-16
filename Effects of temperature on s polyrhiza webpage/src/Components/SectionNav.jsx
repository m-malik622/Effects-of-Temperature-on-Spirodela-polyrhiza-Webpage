const sections = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'methods', label: 'Methods' },
  { id: 'results', label: 'Results' },
  { id: 'conclusion', label: 'Conclusion' },
  { id: 'acknowledgements', label: 'Acknowledgements' },
  { id: 'references', label: 'References' },
]

function SectionNav() {
  return (
    <nav className="section-nav" aria-label="Page sections">
      <div className="section-nav-label">Jump to section</div>
      <div className="section-nav-links">
        {sections.map((section) => (
          <a
            key={section.id}
            className="section-nav-link"
            href={`#${section.id}`}
          >
            {section.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default SectionNav
