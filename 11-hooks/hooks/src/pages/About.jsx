import React, {useContext} from 'react'
import { SomeContext } from '../components/HookUseContext'

const About = () => {
  const { contextValue } = useContext(SomeContext)

  return (
    <>
      <div>About</div>
      <p>From context {contextValue}</p>
    </>
  )
}

export default About