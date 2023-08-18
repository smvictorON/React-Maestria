import { useState, useCallback } from 'react'
import List from './List'

const HookUseCallback = () => {
  const [counter, setCounter] = useState(0)

  //sempre re renderiza sem o useCallback
  // const getItems = () => {
  //   return ['a', 'b', 'c']
  // }

  const getItems = useCallback(() => {
    return ['a', 'b', 'c']
  },[])

  return (
    <>
      <h2>HookUseCallback</h2>

      <List getItems={getItems}></List>

      <button onClick={() => setCounter(counter + 1)}>Alterar</button>
      <p>{counter}</p>
    </>
  )
}

export default HookUseCallback