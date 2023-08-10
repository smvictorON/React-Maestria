import { useState } from 'react'
import './App.css'
import Title from './components/Title'

function App() {
  const [cond] = useState(true)
  return (
    <>
     <h1>Titulo</h1>
     <h1 style={{color: 'blue'}}>Titulo estilizado inline</h1>
     <h1 style={cond ? {color: 'pink'} : {color: 'green'}}>Titulo estilizado inline dinamico</h1>
     <h1 className={cond ? 'green-class': 'lime-class'}>Titulo estilizado class dinamico</h1>
     <Title></Title>
     <h1 className='my_title'>Titulo</h1>
    </>
  )
}

export default App
