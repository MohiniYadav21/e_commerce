import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './Components/Navbar/Nav.jsx'
import {BrowserRouter} from "react-router"
import Footer from './Components/Footer.jsx'
import  {CartProvider} from './context/CartContext.jsx'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
 
    <StrictMode>
    <BrowserRouter>
    <CartProvider>
      <Nav />
    <App />
    <Footer/> 
    </CartProvider>
    <ToastContainer />
    </BrowserRouter>
  </StrictMode>,
)
