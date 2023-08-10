import React, {useState} from 'react'

const ManageData = ({name, othername, children, fn, msg}) => {
  const [data, setData] = useState(0)

  const handleChange = () => {
    setData(prevState => prevState + 2)
  }

  return (
    <>
      <div>ManageData</div>
      <br />
      <button onClick={() => handleChange()}></button>
      <br />
      {data}
      <br />
      {name}
      <br />
      {othername}
      <br />
      {children}
      <br />
      <button onClick={() => fn()}></button>
      <br />
      {msg}
    </>
  )
}

export default ManageData