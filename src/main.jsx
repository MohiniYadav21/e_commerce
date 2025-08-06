import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './Components/Navbar/Nav.jsx'
import {BrowserRouter} from "react-router"
import Footer from './Components/Footer.jsx'
import HomeCategory from './Components/HomeCategory.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Nav />
     <HomeCategory/>
    <App />
    <Footer/> 
    </BrowserRouter>
  </StrictMode>,
)
