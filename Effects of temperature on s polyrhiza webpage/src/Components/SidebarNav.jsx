import { useState } from 'react'
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'

const sections = [
  //{ id: 'introduction', label: 'Introduction' },
  { id: 'methods', label: 'Methods' },
  { id: 'results', label: 'Results' },
  { id: 'conclusion', label: 'Conclusion' },
  { id: 'acknowledgements', label: 'Acknowledgements' },
  { id: 'references', label: 'References' },
]

function SidebarNav() {
  const [toggled, setToggled] = useState(false)

  const handleNavigate = () => {
    setToggled(false)
  }

  return (
    <>
      <button
        className="sidebar-toggle-button"
        type="button"
        onClick={() => setToggled(true)}
        aria-label="Open section navigation"
        >
        Navigate
      </button>

      {toggled && (
        <aside className="sidebar-rail" aria-label="Page sections">
          <Sidebar
            width="280px"
            toggled={toggled}
            onBackdropClick={() => setToggled(false)}
            backgroundColor="transparent"
            rootStyles={{
              height: '100%',
              border: 'none',
              color: 'var(--ink)',
            }}
          >
            <div className="sidebar-shell">
              <div className="sidebar-header">
                <button
                  className="sidebar-close-button"
                  type="button"
                  onClick={() => setToggled(false)}
                  aria-label="Close section navigation"
                >
                  Close
                </button>
                <p className="sidebar-eyebrow">Navigate</p>
                <h2>Page Sections</h2>
                <p>Jump straight to the part you want to read.</p>
              </div>

              <Menu
                rootStyles={{ border: 'none' }}
                menuItemStyles={{
                  button: {
                    color: 'var(--forest)',
                    borderRadius: '999px',
                    margin: '4px 0',
                    paddingLeft: '12px',
                    paddingRight: '12px',
                    backgroundColor: 'rgba(138,184,74,0.12)',
                    fontWeight: 700,
                    '&:hover': {
                      backgroundColor: 'rgba(138,184,74,0.18)',
                    },
                  },
                  label: {
                    fontSize: '0.95rem',
                  },
                }}
              >
                {sections.map((section) => (
                  <MenuItem key={section.id} href={`#${section.id}`} onClick={handleNavigate}>
                    {section.label}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </Sidebar>
        </aside>
      )}
    </>
  )
}

export default SidebarNav
