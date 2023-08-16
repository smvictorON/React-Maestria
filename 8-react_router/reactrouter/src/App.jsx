import './App.css'
import { useState } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Product from './pages/Product'
import Info from './pages/Info'
import NotFound from './pages/NotFound'
import SearchForm from './components/SearchForm'
import Search from './pages/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Router</h1>

      <BrowserRouter>
        <Navbar></Navbar>

        <SearchForm></SearchForm>

        <Routes>
          {/* rotas estaticas */}
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          {/* rotas dinamicas */}
          <Route path="/product/:id" element={<Product/>}></Route>
          {/* rotas aninhadas */}
          <Route path="/product/:id/info" element={<Info/>}></Route>
          {/* busca */}
          <Route path="/search" element={<Search/>}></Route>
          {/* redirect */}
          <Route path="/spec" element={<Navigate to="/about"/>}></Route>
          {/* pagina nao encontrada */}
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
