import { useState } from 'react'

const HookUseState = () => {
  let userName = "victor"
  const [name, setName] = useState("lamara")
  const [age, setAge] = useState(0)

  const handleName = () => {
    userName = "VICTOR"
    setName("LAMARA")
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(age)
  }

  return (
    <>
      <h2>HookUseState</h2>

      <p>Var: {userName}</p>
      <p>State: {name}</p>

      <button onClick={() => handleName()}>Mudar nomes!</button>

      <form onSubmit={handleSubmit}>
        <input type="number" name="age" value={age} onChange={(e) => setAge(e.target.value)}/>
        <p>Idade: {age}</p>
        <input type="submit" value="Enviar"/>
      </form>
    </>
  )
}

export default HookUseState