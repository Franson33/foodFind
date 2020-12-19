import React, { useState, useEffect, useMemo } from 'react'
import { StatusBar, View, StyleSheet, Modal } from 'react-native'
import useResults from '../hooks/useResults'
import FilterResByPrice from '../functions/FilterResByPrice'
import SearchBar from '../components/SearchBar'
import CityButton from '../components/CityButton'
import ResultList from '../components/ResultList'
import ShowErrorMsg from '../components/ShowErrorMsg'
import ModalCloseButton from '../components/ModalCloseButton'
import CitiesArr from '../components/CitiesArr'


const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState('ice cream')
  const [city, setCity] = useState('new york')
  const [modalVisible, setModalVisible] = useState(false)
  const [shopId, setShopId] = useState('')
  const [searchApi, results, errorMsg, contentReady] = useResults()

  const filteredRes = useMemo(() => 
    FilterResByPrice(results), [results])

  useEffect(() => {
    if (results) {
      searchApi(term, city)
    }
  }, [city])

  if (!results) {
    return null
  }

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
          onEditStart={() => setTerm('')}
        />
        <CityButton 
          onPress={() => setModalVisible(true)}
        />
      </View>
      {ShowErrorMsg(errorMsg)}
      <ResultList
        results = {filteredRes[0]}
        title="An Easy Rate"
        ready={contentReady}
        onPress={newId => (
          setShopId(newId),
          navigation.navigate('MoreInfo', {id: shopId})
        )}
      />
          <ResultList
        results = {filteredRes[1]}
        title="Average Price"
        ready={contentReady}
        onPress={newId => (
          setShopId(newId),
          navigation.navigate('MoreInfo', {id: shopId})
        )}
      />
       <ResultList
        results = {filteredRes[2]}
        title="Big Spender"
        ready={contentReady}
        onPress={newId => (
          setShopId(newId),
          navigation.navigate('MoreInfo', {id: shopId})
        )}
      />
      <Modal
        animationType="slide"
        visible={modalVisible}
      >
        <ModalCloseButton 
          onPress={() => setModalVisible(false)}
        />
          <CitiesArr 
            changeCity={(newCity) => (
              setCity(newCity), 
              setModalVisible(false)
            )}
          />
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    width: '100%',
  },
  modalContent: {
    flex: 1,
  },
})

export default SearchScreen