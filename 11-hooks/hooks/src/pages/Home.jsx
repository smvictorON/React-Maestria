import React, { useContext } from 'react'
import HookUseState from '../components/HookUseState'
import HookUseReducer from '../components/HookUseReducer'
import HookUseEffect from '../components/HookUseEffect'
import { SomeContext } from '../components/HookUseContext'
import HookUseRef from '../components/HookUseRef'
import HookUseCallback from '../components/HookUseCallback'
import HookUseMemo from '../components/HookUseMemo'
import HookUseLayoutEffect from '../components/HookUseLayoutEffect'
import HookUseImperativeHandle from '../components/HookImperativeHandle'
import HookCustomComponent from '../components/HookCustomComponent'

const Home = () => {
  // const { contextValue } = useContext(SomeContext)

  return (
    <div>
      {/* <HookUseState></HookUseState> */}
      {/* <HookUseReducer></HookUseReducer> */}
      {/* <HookUseEffect></HookUseEffect> */}
      {/* <p>From context: {contextValue}</p> */}
      {/* <HookUseRef></HookUseRef> */}
      {/* <HookUseCallback></HookUseCallback> */}
      {/* <HookUseMemo></HookUseMemo> */}
      {/* <HookUseLayoutEffect></HookUseLayoutEffect> */}
      {/* <HookUseImperativeHandle></HookUseImperativeHandle> */}
      <HookCustomComponent></HookCustomComponent>
    </div>
  )
}

export default Home