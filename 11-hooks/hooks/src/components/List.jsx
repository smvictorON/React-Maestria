import React, { useEffect, useState } from 'react'

const List = ({getItems}) => {
  const [myItems, setMyItems] = useState([])

  useEffect(() => {
    console.log('buscando...')
    setMyItems(getItems)
  }, [getItems])

  return (
    <>
      <div>List</div>
      {myItems && myItems.map(item => (
        <p key={item}>{item}</p>
      ))}
    </>

  )
}

export default List