import * as React from 'react'
import './App.css'
import Header from './Components/Header'
import HeroPresentation from './Components/HeroPresentation'
import SobreMi from './Components/SobreMi'
import Skills from './Components/Skills'
import Proyects from './Components/Proyects'
import Academico from './Components/Academico'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (
    <ChakraProvider>
    <div className="App">
      
        <Header/>

        <HeroPresentation/>

        <SobreMi/>

        <Skills/>

        <Proyects/>

        <Academico/>

        <Contact/>

        <Footer/>

    </div>
    </ChakraProvider>
  )
}

export default App;
