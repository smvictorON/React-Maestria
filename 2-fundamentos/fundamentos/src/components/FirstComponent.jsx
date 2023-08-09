const FirstComponent = () => {
  const renderSomething = (x) => {
    if(x)
      return <h3>h3</h3>
    else
      return <h1>H1</h1>
  }

  return (
    <div>
      <h1>Primeiro Component</h1>
      {2*2}
      {console.log("log")}
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  )
}

export default FirstComponent