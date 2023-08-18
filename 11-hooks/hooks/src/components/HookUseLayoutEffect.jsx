import { useState, useEffect, useLayoutEffect } from 'react'

const HookUseLayoutEffect = () => {
  //monta o DOM
  const [name, setName] = useState("victor")

  //altera antes de mostrar o DOM
  useLayoutEffect(() => {
    // console.log(1)
    setName("victor1")
  },[])

  //altera após mostrar o DOM
  useEffect(() => {
    // console.log(2)
    setName("victor2")
  },[])


  console.log(name)

  return (
    <>
      <h2>HookUseLayoutEffect</h2>
      {name}
    </>
  )
}

export default HookUseLayoutEffect