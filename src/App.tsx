import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'

function App() {

  return (
    <div className='flex w-full flex-colflex flex-col min-h-screen'>
      <Header />
      <Hero />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
