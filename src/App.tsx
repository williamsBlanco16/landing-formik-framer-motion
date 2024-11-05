import { ContactForm } from './components/ContactForm/ContactForm'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import InfoScreen from './components/InfoScreen'
import { useState } from 'react'

const descriptText = {
  home: 'Potencia tu proyecto con el análisis tecnológico perfecto.',
  contactForm: 'Potencia tu proyecto con el análisis del mejor modelo de IA para ti.'
}
function App() {
  const [toggleNav, setToggleNav] = useState(true);
  const handlerToggleNav = () => {
    setToggleNav(!toggleNav)
  }
  return (
    <div className='flex flex-col min-h-screen w-full overflow-hidden"'>
      <Header toggleNav={handlerToggleNav}  toggleState={toggleNav} />
      <Hero description={toggleNav ? descriptText.home : descriptText.contactForm}/>
      {toggleNav && <InfoScreen toggleNav={handlerToggleNav}/>}
      {!toggleNav && (
        <ContactForm />
      )}
      <Footer />
    </div>
  )
}

export default App
