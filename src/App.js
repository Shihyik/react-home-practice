import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Product from './pages/Product'
import Layout from './pages/User/layout'

import MyMenubar from './layout/MyMenubar'
import MyFooter from './layout/MyFooter'
import MyContent from './layout/MyContent'
import Register from './pages/User/Register'
import Login from './pages/User/Login'

function App() {
  return (
    <BrowserRouter>
      <MyMenubar />
      <MyContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="product" element={<Product />} />

          <Route path="user" element={<Layout />}>
            <Route index element={<Register />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </MyContent>

      <MyFooter />
    </BrowserRouter>
  )
}

export default App
