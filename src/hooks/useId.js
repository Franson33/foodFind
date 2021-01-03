import { useState } from 'react'
import yelp from '../api/yelp'


export default () => { 
  const [result, setResult] = useState(null)
  const [errorMsg, setErrorMsg] = useState(false)

  async function idApi(id) {
    try {
      const response = await yelp.get(`${id}`)
      setResult(response.data)
      setErrorMsg(false)
    } catch (err) {
      setErrorMsg(true)
    }
    return
  }
  return [idApi, result, errorMsg]
}
