import './App.css'
import Header from './sections/Header'
import HeroSection from './sections/HeroSection'
import HeroSectionTwo from './sections/HeroSectionTwo'

function App() {
  return (
    <div className='bg-gray-900  overflow-x-clip antialiased'>
      <Header/>
      {/* Hero section */}
      <HeroSection/>
      {/* hero section 2 */}
      <HeroSectionTwo/>
    </div>
  )
}

export default App