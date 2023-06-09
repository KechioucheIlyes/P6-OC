import {BrowserRouter as Router , Routes , Route, Link} from "react-router-dom"
import { NavBar } from "./components/NavBar/NavBar"


import { Home } from "./pages/Home/Home"
import { Propos } from "./pages/À Propos/Propos"
import { Footer } from "./components/Footer/Footer"
import { Error } from "./pages/Error/Error"
import backgroundPng from "./assets/Background.png"
import { FicheLogement } from "./pages/Fiche-Logement/FicheLogement"
import styled from "styled-components"


function App() {

  
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/propos" element={<Propos/>} />
        <Route path="/fiche-logement/:locationId" element={<FicheLogement/>} />
        <Route path="*"  element={ <Error/> }/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
