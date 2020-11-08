import React, { useState } from 'react'
import { StatusBar } from 'react-native'
import useResults from '../hooks/useResults'
import FilterResByPrice from '../functions/FilterResByPrice'
import SearchBar from '../components/SearchBar'
import ResultList from '../components/ResultList'
import ShowErrorMsg from '../components/ShowErrorMsg'


const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [searchApi, results, errorMsg, contentReady] = useResults()

  const filteredRes = FilterResByPrice(results)

  if (!results) {
    return null
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#102027" />
      <SearchBar
        term={term}
        onTermChange={function(newTerm) {
          return setTerm(newTerm)
        }}
        onTermSubmit={function() {
          return searchApi(term)
        }}
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