import { useState } from 'react'
import './App.css'
import City from './assets/city.jpeg'
import ManageData from './components/ManageData'
import ManageData2 from './components/ManageData_2'

function App() {
  const [othername] = useState("mussio")
  const [msg, setMsg] = useState("message")

  const handleMessage = (msg) => {
    setMsg(msg)
  }

  const showMessage = () => {
    console.log("log do pai")
  }

  return (
    <>
      {/* <img src="/img1.jpeg" alt="paisagem"></img>
      <img src={City} alt="Cidade" /> */}
      <ManageData name="victor" othername={othername} fn={showMessage} msg={msg}>
        <p>tag do elemento pai</p>
      </ManageData>
      <br />
      <ManageData2 handleMessage={handleMessage}></ManageData2>
    </>
  )
}

export default App
