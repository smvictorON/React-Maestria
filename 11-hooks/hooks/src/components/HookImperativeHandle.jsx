import { useRef } from 'react'
import Other from './Other'

const HookUseImperativeHandle = () => {
  const componentRef = useRef()

  return (
    <>
      <h2>HookUseImperativeHandle</h2>
      <Other ref={componentRef}></Other>
      <button onClick={() => componentRef.current.validate()}>Validar!</button>
    </>
  )
}

export default HookUseImperativeHandle