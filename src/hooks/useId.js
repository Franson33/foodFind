import { useState } from 'react'
import yelp from '../api/yelp'


export default () => {
  const [result, setResult] = useState(null)
  const [errorMsg, setErrorMsg] = useState('')
  
  const idApi = (id) => {
    (async () => {
      try {
        const response = await yelp.get(`${id}`)
        setResult(response.data)
      } catch (err) {
        setErrorMsg(
          'We are so sorry, but there is no answer from the server, please try again later!'
        )
      }
    })()
  }

  return [idApi, result, errorMsg]
}