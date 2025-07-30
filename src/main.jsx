import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './Components/Navbar/Nav.jsx'
import {BrowserRouter} from "react-router"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Nav />
    <App />
    </BrowserRouter>
  </StrictMode>,
)
