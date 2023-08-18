import { forwardRef, useRef, useImperativeHandle } from 'react'

const Other = forwardRef((props, ref) => {
  const localInputRef = useRef()

  useImperativeHandle(ref, () => {
    return {
      validate: () => {
        if(localInputRef.current.value.length > 3)
          localInputRef.current.value = ""
      }
    }
  })

  return (
    <>
      <div>Insira no maximo 3 caracteres</div>
      <input type="text" ref={localInputRef} />
    </>
  )
})

export default Other