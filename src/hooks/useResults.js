import { useState } from 'react'
import yelp from '../api/yelp'


export default () => {
  const [results, setResults] = useState([])
  const [errorMsg, setErrorMsg] = useState('')
  const [contentReady, setContentReady] = useState(false)
  
  async function searchApi(searchTerm = 'pizza', searchCity = 'new york') {
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
    } catch (err) {
      setErrorMsg(err)
    }
    return 
  }
  
  return [searchApi, results, errorMsg, contentReady]
}