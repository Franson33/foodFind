import React from 'react'
import { View, StyleSheet } from 'react-native'
import ResultCardSkel from './ResultCardSkel'

const ResultListSkel = () => {
  return (
    <>
      <View style={styles.container}>
        <ResultCardSkel />
        <ResultCardSkel />  
      </View>
    </>  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  }
})

export default ResultListSkel