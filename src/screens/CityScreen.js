import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import CountriesArr from '../components/CountriesArr'


const CityScreen = () => {
  const arr = CountriesArr()
  return (
    <FlatList
      style={styles.container}
      data={arr}
      renderItem={({item, index}) => {
        return (
          <View 
            style={styles.item}
            key={index}
          >
            {item}
          </View>
        )
      }}
    />
  )
} 
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
  }
})

export default CityScreen