import './App.css'
import Footer from './sections/Footer'
import Header from './sections/Header'
import HeroSection from './sections/HeroSection'
import HeroSectionTwo from './sections/HeroSectionTwo'
import OurProcess from './sections/OurProcess'
import ProjectExperience from './sections/ProjectExperience'
import ReviewSection from './sections/ReviewSection'
import Services from './sections/Services'
import ServicesAnimation from './sections/ServicesAnimation'

function App() {
  return (
    <div>


      <div className=" bg-cover bg-center min-h-screen bg-gray-900">
        <Header />
        <HeroSection />
      </div>
      {/* offer */}
         
      <Services />
   <ServicesAnimation/>
      <HeroSectionTwo />
      {/* project Experience */}
      <ProjectExperience />
      <OurProcess/>
    <ReviewSection/>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
