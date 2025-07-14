import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from "./components/Footer"
import Erection from "./pages/Erection"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact";
import Fabrication from "./pages/Fabrication";
import Piping from "./pages/Piping";
import Painting from "./pages/Painting";
import ManpowerSupply from "./pages/ManpowerSupply";
import Equipment from "./pages/Equipment";
import Hiring from "./pages/Hiring";
import CellElement from "./pages/CellElement";

function App() {

  return (
      <>
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<About/>} path="/about"/>
        <Route element={<Erection/>} path="/erection"/>
        <Route element={<Fabrication/>} path="/fabrication"/>
        <Route element={<Piping/>} path="/piping"/>
        <Route element={<Equipment/>} path="/equipment"/>
        <Route element={<Painting/>} path="/painting"/>
        <Route element={<ManpowerSupply/>} path="/manpower"/>
        <Route element={<Hiring/>} path="/hiring"/>
        <Route element={<Gallery/>} path="/gallery"/>
        <Route element={<Contact/>} path="/contact"/>
        <Route element={<CellElement/>} path="/cell-element"/>
      </Routes>
      <Footer/>
      </>
  )
}

export default App
