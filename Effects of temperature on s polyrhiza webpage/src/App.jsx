import Hero from './Components/Hero.jsx'
import Introduction from './Components/Introduction.jsx'
import Methods from './Components/Methods.jsx'
import Results from './Components/Results.jsx'
import Conclusion from './Components/Conclusion.jsx'
import Acknowledgements from './Components/Acknowledgements.jsx'
import References from './Components/References.jsx'
import './App.css'

const sectionLinks = [
  { href: '#introduction', label: 'Introduction' },
  { href: '#methods', label: 'Methods' },
  { href: '#results', label: 'Results' },
  { href: '#conclusion', label: 'Conclusion' },
]

const feedbackLink = "https://docs.google.com/forms/d/e/1FAIpQLScWRUHsgwa5GwtCVVkEQ6QS5NY4GruPbPd29ZxoH-Pm3C_l0A/viewform?usp=publish-editor"

const acknowledgementsLink = '#acknowledgements'

const introductionLinks = [
  {
    label: 'Global warming in freshwater',
    href: '#introduction',
  },
  {
    label: 'Spirodela source paper',
    href: 'https://doi.org/10.1007/s00425-021-03764-4',
    external: true,
  },
]


const resultCards = [
  {
    label: 'Cold stress',
    value: 'Slightly slower early growth',
    accent: 'blue',
  },
  {
    label: 'Control',
    value: 'Steady frond production',
    accent: 'green',
  },
  {
    label: 'Heat stress',
    value: 'Fast decline after exposure',
    accent: 'amber',
  },
]

const conclusionLinks = [
  {
    label: 'Related paper 1',
    href: 'https://doi.org/10.1007/s00425-021-03764-4',
    external: true,
  },
  {
    label: 'Related paper 2',
    href: 'https://doi.org/10.1016/j.ecoenv.2019.05.085',
    external: true,
  },
]

const references = [
  {
    citation:
      'Zhong, Y., Wang, L., Ma, Z., & Du, X. Physiological responses and transcriptome analysis of Spirodela polyrhiza under red, blue, and white light. Planta (2021).',
    doi: '10.1007/s00425-021-03764-4',
  },
  {
    citation:
      'Sha, S., Cheng, M., Hu, K., Zhang, W., Yang, Y., & Xu, Q. Toxic effects of Pb on Spirodela polyrhiza (L.): Subcellular distribution, chemical forms, morphological and physiological disorders. Ecotoxicol. Environ. Saf. (2019).',
    doi: '10.1016/j.ecoenv.2019.05.085',
  },
]

function App() {
  return (
    <main className="page-shell">
      <Hero
        sectionLinks={sectionLinks}
        feedbackLink={feedbackLink}
        acknowledgementsLink={acknowledgementsLink}
      />
      <Introduction links={introductionLinks} />
      <Methods/>
      <Results cards={resultCards} />
      <Conclusion
        links={conclusionLinks}
        feedbackLink={feedbackLink}
      />
      <Acknowledgements />
      <References references={references} />
    </main>
  )
}

export default App
