import './App.css'
import AboutUs from './sections/AboutUs'
import DevelopmentProcess from './sections/DevelopemntProcess'
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


      <div className=" bg-cover bg-center  bg-gray-900">
        <Header />
        <HeroSection />
      </div>
      {/* offer */}
            <AboutUs/>
            <OurProcess/>
      <Services />
   
   <ServicesAnimation/>
     <DevelopmentProcess/>
      <HeroSectionTwo />
      {/* project Experience */}
      <ProjectExperience />
    
    <ReviewSection/>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
