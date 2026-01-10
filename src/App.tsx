import Nav from './components/Nav'
import Hero from './components/Hero'
import Projets from './components/Projets'
import Testimomials from "./components/Testimomials"
import Footer from './components/Footer'
function App() {
 

  return (
    <>
        <div className="bg-indigo-600">
            <Nav />
            
          </div >
          <div><Hero/></div>
          <div><Projets/></div>
          <div><Testimomials /></div>
          <div><Footer /></div>
    </>
  )
}

export default App
