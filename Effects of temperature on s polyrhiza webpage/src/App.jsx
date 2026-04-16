import Hero from './Components/Hero.jsx'
import Introduction from './Components/Introduction.jsx'
import Methods from './Components/Methods.jsx'
import Results from './Components/Results.jsx'
import Conclusion from './Components/Conclusion.jsx'
import Acknowledgements from './Components/Acknowledgements.jsx'
import References from './Components/References.jsx'
import SidebarNav from './Components/SidebarNav.jsx'
import './App.css'

const sectionLinks = [
  { href: '#introduction', label: 'Introduction' },
  { href: '#methods', label: 'Methods' },
  { href: '#results', label: 'Results' },
  { href: '#conclusion', label: 'Conclusion' },
  { href: '#acknowledgements', label: 'Acknowledgements' },
]

const feedbackLink = "https://docs.google.com/forms/d/e/1FAIpQLScWRUHsgwa5GwtCVVkEQ6QS5NY4GruPbPd29ZxoH-Pm3C_l0A/viewform?usp=publish-editor"

/*
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
*/

const references = [
  {
    citation:
      'Appenroth, K.-J., & Nickel, G. (2010). Turion formation in Spirodela polyrhiza: The environmental signals that induce the developmental process in nature. Physiologia Plantarum, 138(3), 312–320.',
    href: 'https://doi.org/10.1111/j.1399-3054.2009.01319.x',
    label: 'doi:10.1111/j.1399-3054.2009.01319.x',
  },
  {
    citation:
      'Dainelli, M., Castellani, M. B., Pignattelli, S., Falsini, S., Ristori, S., Papini, A., Colzi, I., Coppi, A., & Gonnelli, C. (2024). Growth, physiological parameters and DNA methylation in Spirodela polyrhiza (L.) Schleid exposed to PET micro-nanoplastic contaminated waters. Plant Physiology and Biochemistry, 207, 108403.',
    href: 'https://doi.org/10.1016/j.plaphy.2024.108403',
    label: 'doi:10.1016/j.plaphy.2024.108403',
  },
  {
    citation:
      'Hoagland, D. R., & Arnon, D. I. (1950). The water-culture method for growing plants without soil. California Agricultural Experiment Station, Circular 347. University of California, Berkeley.',
  },
  {
    citation:
      'Jacobs, D. L. (1947). An Ecological Life-History of Spirodela Polyrhiza (Greater Duckweed) with Emphasis on the Turion Phase. Ecological Monographs, 17(4), 437–469.',
    href: 'https://doi.org/10.2307/1948596',
    label: 'doi:10.2307/1948596',
  },
  {
    citation:
      'Kakoulidou, I., Avramidou, E. V., Baránek, M., Brunel-Muguet, S., Farrona, S., Johannes, F., Kaiserli, E., Lieberman-Lazarovich, M., Martinelli, F., Mladenov, V., Testillano, P. S., Vassilela, V., & Maury, S. (2021). Epigenetics for crop improvement in times of global change. Biology, 10(8), 766.',
    href: 'https://doi.org/10.3390/biology10080766',
    label: 'doi:10.3390/biology10080766',
  },
  {
    citation:
      'Kuehdorf, K., & Appenroth, K.-J. (2011). Influence of salinity and high temperature on turion formation in the duckweed Spirodela polyrhiza. Aquatic Botany, 97(1), 69–72.',
    href: 'https://doi.org/10.1016/j.aquabot.2011.10.003',
    label: 'doi:10.1016/j.aquabot.2011.10.003',
  },
  {
    citation:
      'Lopez, M.-E., Denoyes, B., & Bucher, E. (2024). Epigenomic and transcriptomic persistence of heat stress memory in strawberry (Fragaria vesca). BMC Plant Biology, 24, 405.',
    href: 'https://doi.org/10.1186/s12870-024-05093-6',
    label: 'doi:10.1186/s12870-024-05093-6',
  },
  {
    citation:
      'Moore, L. D., Le, T., & Fan, G. (2013). DNA methylation and its basic function. Neuropsychopharmacology, 38(1), 23-38.',
    href: 'https://doi.org/10.1038/npp.2012.112',
    label: 'doi:10.1038/npp.2012.112',
  },
  {
    citation:
      'Naydenov, M., Baev, V., Apostolova, E., Gospodinova, N., Sablok, G., Gozmanova, M., & Yahubyan, G. (2015). High-temperature effect on genes engaged in DNA methylation and affected by DNA methylation in Arabidopsis. Plant Physiology and Biochemistry, 87, 102-108.',
    href: 'https://doi.org/10.1016/j.plaphy.2014.12.022',
    label: 'doi:10.1016/j.plaphy.2014.12.022',
  },
  {
    citation:
      'Skinner, M. K. (2023). Environmental epigenetics and climate change. Environmental Epigenetics, 9(1), dvac028.',
    href: 'https://doi.org/10.1093/eep/dvac028',
    label: 'doi:10.1093/eep/dvac028',
  },
  {
    citation:
      'Song, H., Guo, X., Liu, L., Xu, Z., Wang, N., Liu, X., ... & Guo, W. (2022). Role of DNA methylation in ecophysiological responses to salinity in natural populations of Phragmites australis from coastal and inland habitats. Frontiers in Marine Science, 9, 982234.',
    href: 'https://doi.org/10.3389/fmars.2022.982234',
    label: 'doi:10.3389/fmars.2022.982234',
  },
  {
    citation:
      'Van Antro, M., Prelovsek, S., Ivanovic, S., Gawehns, F., Wagemaker, N. C. A. M., Mysara, M., Horemans, N., Vergeer, P., & Verhoeven, K. J. F. (2023). DNA methylation in clonal duckweed (Lemna minor L.) lineages reflects current and historical environmental exposures. Molecular Ecology, 32(2), 428–443.',
    href: 'https://doi.org/10.1111/mec.16757',
    label: 'doi:10.1111/mec.16757',
  },
  {
    citation:
      'Źróbek-Sokolnik, A. (2011). Temperature stress and responses of plants. In Environmental adaptations and stress tolerance of plants in the era of climate change (pp. 113-134). New York, NY: Springer New York.',
    href: 'https://doi.org/10.1007/978-1-4614-0815-4_5',
    label: 'doi:10.1007/978-1-4614-0815-4_5',
  },
]

function App() {
  return (
    <main className="page-shell">
      <SidebarNav />
      <div className="app-content">
        <Hero
          sectionLinks={sectionLinks}
          feedbackLink={feedbackLink}
        />
        <Methods/>
        <Results />
        <Conclusion
          feedbackLink={feedbackLink}
        />
        <Acknowledgements />
        <References references={references} />
      </div>
    </main>
  )
}

export default App
