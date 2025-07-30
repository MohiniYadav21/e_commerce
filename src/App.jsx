import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Login from './Components/Login'
import ProductDetail from './pages/ProductDetail'


const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<ProductDetail />} />
        <Route path='/login' element={<Login />} />
      </Routes>
  )
}

export default App
