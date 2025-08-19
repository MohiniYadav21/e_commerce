import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Login from './Components/Login'
import ProductDetail from './pages/ProductDetail'
import  Search from './pages/Search'
import Category from './pages/Category'
import Blog from './pages/Blog'
import BlogDetail from './pages/blogDetail'
import Signup from './pages/Signup'
import Cart from './pages/Cart'



const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<ProductDetail />} />
        <Route path='/login' element={<Login />} />
        <Route path='/search' element={<Search/>}/>
        <Route path='/categories/:slug' element={<Category/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/blog/:slug' element={<BlogDetail />}/>
        <Route path='/signup' element={<Signup />}/>
         <Route path="/cart" element={<Cart />} />
        
        
      </Routes>
  )
}

export default App
