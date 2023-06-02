import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import { NavBar } from "./components/NavBar/NavBar"


import { Home } from "./pages/Home/Home"
import { Propos } from "./pages/À Propos/Propos"
import { Footer } from "./components/Footer/Footer"
import { Error } from "./pages/Error/Error"

function App() {


  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/propos" element={<Propos/>} />
        
        <Route path="*"  element={ <Error/> }/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
