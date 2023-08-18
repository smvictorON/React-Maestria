import { useEffect, useState } from 'react'

const HookUseEffect = () => {
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)

  useEffect(() => {
    console.log("Executo sempre")
  })

  useEffect(() => {
    console.log("Executo ao iniciar")

    return () => {
      console.log("Executo sair")
    }
  },[])

  useEffect(() => {
    if (number1 > 0)
      console.log("Executo quando n1 muda")
  },[number1])

  return (
    <>
      <h2>HookUseEffect</h2>
      <button onClick={() => setNumber1(number1 + 1)}>Mudar</button>
      <p> n1 : {number1} </p>
      <button onClick={() => setNumber2(number2 + 1)}>Mudar</button>
      <p> n2: {number2} </p>
    </>
  )
}

export default HookUseEffect