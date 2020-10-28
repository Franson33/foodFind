import { useState, useEffect } from 'react'
import yelp from '../api/yelp'


export default () => {
  const [results, setResults] = useState([])
  const [errorMsg, setErrorMsg] = useState('')
  const [contentReady, setContentReady] = useState(false)
  
  const searchApi = (searchTerm) => {
    (async () => {  
      try {
        const response = await yelp.get('/search', {
          params: {
            term: searchTerm,
            location: 'san francisco',
            limit: 50
          }
        })
        setResults(response.data.businesses) 
        setContentReady(true)
      } catch (err) {
        setErrorMsg('We are so sorry, but there is no answer from the server, please try again later!')
      }
    })()
  }
  
  useEffect(() => {
    searchApi('pizza')
   }, [])
  
  return [searchApi, errorMsg, results, contentReady]
}