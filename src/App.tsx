import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Process from './components/Process'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="overflow-x-clip">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
