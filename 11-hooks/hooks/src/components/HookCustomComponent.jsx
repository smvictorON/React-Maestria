import {useState} from 'react'
import { usePrevious } from '../custom_hooks/usePrevious'

const HookCustomComponent = () => {
  const [number, setNumber] = useState(0)
  const previousValue = usePrevious(number)

  return (
    <>
      <div>HookCustomComponent</div>
      <p>Atual {number}</p>
      <p>Anterior {previousValue}</p>
      <button onClick={() => setNumber(Math.random())} >Alterar</button>
    </>

  )
}

export default HookCustomComponent