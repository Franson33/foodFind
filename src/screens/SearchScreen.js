import React, { useState } from 'react'
import useResults from '../hooks/useResults'
import FilterResByPrice from '../functions/FilterResByPrice'
import SearchBar from '../components/SearchBar'
import ResultList from '../components/ResultList'
import ShowErrorMsg from '../functions/ShowErrorMsg'



const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [searchApi, results, errorMsg, contentReady] = useResults()

  if (!results) {
    return null
  }

  const filteredRes = FilterResByPrice(results)

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {ShowErrorMsg(errorMsg)}
      <ResultList
        results = {filteredRes[0]}
        title="An Easy Rate"
        ready={contentReady}
      />
      <ResultList
        results = {filteredRes[1]}
        title="Average Price"
        ready={contentReady}
      />
      <ResultList 
        results = {filteredRes[2]}
        title="Big Spender"
        ready={contentReady}
      />
    </>
  )
}

export default SearchScreen