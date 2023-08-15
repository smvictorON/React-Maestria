import { useState } from 'react'
import { useFetch } from './hooks/useFetch'
import './App.css'

const url = "http://localhost:3000/products"

function App() {
  const { data: items, httpConfig, loading, error } = useFetch(url)

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const handleSubmit = async(e) => {
    e.preventDefault()

    const product = {
      name,
      price
    }

    httpConfig(product, "POST")

    setName("")
    setPrice("")
  }

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}

      {!error &&
        <ul>
          {items && items.map((product) => (
            <li key={product.id}>{product.name} - R$ {product.price}</li>
          ))}
        </ul>
      }

      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} value={name}/>
          </label>
          <label>
            Preço:
            <input type="number" name="price" id="price" onChange={(e) => setPrice(e.target.value)} value={price}/>
          </label>

          <input type="submit" value="Criar" disabled={loading}/>
        </form>
      </div>
    </div>
  )
}

export default App
