import { useEffect, useState } from "react"

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [config, setConfig] = useState(null)
  const [method, setMethod] = useState(null)
  const [callFetch, setCallFetch] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const httpConfig = (data, method) => {
    if(method === "POST"){
      setConfig({
        method,
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })

      setMethod(method)
    }
  }

  //get
  useEffect(() => {
    async function fetchData(){
      setLoading(true)

      try {
        const res = await fetch(url)
        const json = await res.json()
        setData(json)
      }catch(err) {
        console.log(err.message)
        setError("Houve algum erro!")
      }

      setLoading(false)
    }

    fetchData()
  },[url, callFetch])

  //post
  useEffect(() => {
    const httpReq = async() => {
      if(method === "POST"){
        let fetchOptions = [url, config]
        const res = await fetch(...fetchOptions)
        const json = await res.json()
        setCallFetch(json)
      }
    }
    httpReq()
  },[config, method, url])

  return { data, httpConfig, loading, error }
}