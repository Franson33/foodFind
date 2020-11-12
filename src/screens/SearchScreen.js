import React, { useState, useEffect } from 'react'
import { StatusBar, View, StyleSheet, Modal } from 'react-native'
import useResults from '../hooks/useResults'
import FilterResByPrice from '../functions/FilterResByPrice'
import SearchBar from '../components/SearchBar'
import CityButton from '../components/CityButton'
import ResultList from '../components/ResultList'
import ShowErrorMsg from '../components/ShowErrorMsg'
import ModalCloseButton from '../components/ModalCloseButton'
import CitiesArr from '../components/CitiesArr'


const SearchScreen = () => {
  const [term, setTerm] = useState('pizza')
  const [city, setCity] = useState('new york')
  const [modalVisible, setModalVisible] = useState(false)
  const [searchApi, results, errorMsg, contentReady] = useResults()

  const filteredRes = FilterResByPrice(results)

  if (!results) {
    return null
  }

  useEffect(() => {
    searchApi(term, city)
  }, [city])

  return (
    <>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="#102027"
      />
      <View style={styles.search}>
        <SearchBar
          term={term}
          onTermChange={(newTerm) => setTerm(newTerm)}
          onTermSubmit={() => searchApi(term, city)}
        />
        <CityButton 
          toOpenModal={() => setModalVisible(true)}
        />
      </View>
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
      <Modal
        animationType="slide"
        visible={modalVisible}
      >
        <ModalCloseButton 
          toCloseModal={() => setModalVisible(false)}
        />
          <CitiesArr 
            toChangeCity={(newCity) => {
              return (
                setCity(newCity), 

                setModalVisible(false)
              )
            }}
          />
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
  },
  modalContent: {
    flex: 1,
  },
})

export default SearchScreen