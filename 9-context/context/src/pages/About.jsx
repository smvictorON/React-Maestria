import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'
import ChangeCounter from '../components/ChangeCounter'
import { useTitleColorContext } from '../hooks/useTitleColorContext'

const About = () => {
  const {counter} = useContext(CounterContext)
  const {color} = useTitleColorContext()

  return (
    <>
      <h1 style={{color: color}}>About</h1>
      <p>{counter}</p>
      <ChangeCounter></ChangeCounter>
    </>
  )
}

export default About