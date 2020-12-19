import { useState } from 'react'
import yelp from '../api/yelp'


export default () => {
  const [results, setResults] = useState([])
  const [errorMsg, setErrorMsg] = useState(false)
  const [contentReady, setContentReady] = useState(false)
 
  
  async function searchApi(searchTerm, searchCity) {
    try {
      const response = await yelp.get('/search', {
        params: {
          term: searchTerm,
          location: searchCity,
          limit: 50
        }
      })
      setResults(response.data.businesses) 
      setContentReady(true)
      setErrorMsg(false)
    } catch (err) {
      setErrorMsg(true)
    }
    return 
  }
  
  return [searchApi, results, errorMsg, contentReady]
}