import React, {useState} from 'react'

const ManageData2 = ({handleMessage}) => {
  return (
    <>
      <button onClick={() => handleMessage("mudou")}>Mudar</button>
    </>
  )
}

export default ManageData2