import { useState, useEffect, useRef } from 'react'

const HookUseRef = () => {
  const numberRef = useRef(0)
  const inputRef = useRef(0)
  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)
  const [text, setText] = useState("")

  useEffect(() => {
    numberRef.current = numberRef.current + 1
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setText("")
    inputRef.current.focus()
  }

  return (
    <>
      <h2>HookUseRef</h2>
      <p>{numberRef.current}</p>

      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Counter1</button>
      <p>{counter2}</p>
      <button onClick={() => setCounter2(counter2 + 1)}>Counter2</button>

      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} value={text} onChange={(e) => setText(e.target.value)} />
        <input type="submit" value="Enviar"/>
      </form>
    </>
  )
}

export default HookUseRef