import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'

function App() {
  return (
    <>
      <h1>React Router</h1>

      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
