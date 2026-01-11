import Nav from './components/Nav'
import Hero from './components/Hero'
import Projets from './components/Projets'
import Footer from './components/Footer'
import About from './components/About'
import Skills from './components/Skills'
function App() {
 

  return (
    <>
        <div className="sticky top-0 bg-indigo-600">
            <Nav />
            
          </div >
          <div><Hero/></div>
          <div><About/></div>
          <div className='text-5xl font-sans flex items-center justify-center'>My skills</div>
          <div className='mt-5'><Skills/></div>
          <div className='text-5xl font-sans flex items-center justify-center'>My projects</div>
          <div><Projets/></div>
          <div><Footer /></div>
    </>
  )
}

export default App
