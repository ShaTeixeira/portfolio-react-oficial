import { Header } from './components/Header'
import { Nav } from './components/Nav'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Services } from './components/Services'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

