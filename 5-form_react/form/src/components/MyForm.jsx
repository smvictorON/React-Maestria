import React from 'react'
import styles from './MyForm.module.css'
import { useState } from 'react'

const MyForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const changeName = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(name)
    console.log(email)
    console.log("enviando")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome:</label>
        <input type="text" name="name" placeholder="Nome" onChange={(e) => changeName(e)}/>

        {/* forma recomendada */}
        <label>
          <span>Email:</span>
          <input type="text" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
        </label>

        <div>
          <input type="submit" value="Enviar"/>
        </div>
      </form>
    </div>
  )
}

export default MyForm