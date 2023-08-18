import { useState, useEffect, useMemo } from 'react'

const HookUseMemo = () => {
  const [number, setNumber] = useState(0)
  //dessa forma ele sempre vai disparar o useEffect pois ao atualizar o state, ele vai
  //definicar novamente a variavel com os valores que dispara o useEffect
  // const premiumNumber = ["0", "100", "200"]


  const premiumNumber = useMemo(() => {
    return ["0", "100", "200"]
  },[])

  useEffect(() => {
    console.log("renderizou")
  }, [premiumNumber])

  return (
    <>
      <h2>HookUseMemo</h2>
      <input type="text" onChange={(e) => setNumber(e.target.value)}/>
      {premiumNumber.includes(number) ? <p>Acertou</p> : ""}
    </>
  )
}

export default HookUseMemo