import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import AboutUsePage from './Pages/AboutUsePage';
import ServicesPage from './Pages/ServicesPage';
import AboutCompanies from './Pages/AboutCompanies';
import TeamMember from './Pages/TeamMember';
import ContactPage from './Pages/ContactPage';
import CivilCalculator from './Pages/CivilCalculator';

// ✅ Landing Page (সব সেকশন একসাথে)
function LandingPage() {
  return (
    <>
      <div className="bg-cover bg-center bg-gray-900">
        <HeroSection />
      </div>
      <AboutUs />
      <OurProcess />
      <Services />
      <ServicesAnimation />
      <DevelopmentProcess />
      <HeroSectionTwo />
      <ProjectExperience />
      <ReviewSection />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header সব পেজে */}
        <Header />

        <main className="flex-grow">
          <Routes>
            {/* Landing Page */}
            <Route path="/" element={<LandingPage />} />

            {/* আলাদা পেজ */}
            <Route path="/about" element={<AboutUsePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/companies" element={<AboutCompanies />} />
            <Route path="/team" element={<TeamMember />} />
            <Route path="/contact" element={<ContactPage />} />
             <Route path="/civil" element={<CivilCalculator />} />
          </Routes>
        </main>

        {/* Footer সব পেজে */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
