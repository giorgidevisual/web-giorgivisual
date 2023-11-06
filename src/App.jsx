import '/src/styles/css/reset.css'
import '/src/styles/css/App.css'
import Navbar from './components/Navbar'
import MainHome from './components/MainHome'
import ServicesSection from './components/ServicesSection'
import HighlightsSection from './components/HighlightsSection'
import FormSection from './components/FormSection'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <div className="layout">
      <Navbar className="navbar" />
      <MainHome className="mainHome" />
      <ServicesSection className="servicesSection"/>
      <HighlightsSection className="highlightsSecion"/>
      <FormSection className="formSection"/>
      <Footer className="footer" />
    </div>
    </>
  )
}

export default App
