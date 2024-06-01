import './App.css'
import CategoriesSection from './components/categories/categories'
import Footer from './components/footer/footer'
import HeroSection from './components/hero/hero'
import Navbar from './components/navbar/navbar'
import ProductsSection from './components/products/products'
import TeamSection from './components/team/team'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TeamSection />
      <CategoriesSection />
      <ProductsSection />
      <Footer />
    </>
  )
}

export default App
