import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './Components/Navbar/Nav.jsx'
import {BrowserRouter} from "react-router"
import Footer from './Components/Footer.jsx'
import HomeCategory from './Components/HomeCategory.jsx'
import  {CartProvider} from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
 
    <StrictMode>
    <BrowserRouter>
    <CartProvider>
      <Nav />
     <HomeCategory/>
    <App />
    <Footer/> 
    </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)
