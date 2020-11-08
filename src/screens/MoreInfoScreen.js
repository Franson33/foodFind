import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, ScrollView } from 'react-native'
import ShowErrorMsg from '../components/ShowErrorMsg'
import idApi  from '../hooks/useId'
import ImageBox from '../components/ImageBox'
import InfoBox from '../components/InfoBox'
import ChipsBox from '../components/ChipsBox'


const MoreInfoScreen = ({navigation}) => {
  const restId = navigation.getParam('id')
  const [result, setResult] = useState(null)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    idApi(restId, setResult, setErrorMsg)
  }, [])

  if (!result) {
    return null
  }
  
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <ImageBox
        arr={result.photos} 
      />
      <Text style={styles.name}>{result.name}</Text>
      <InfoBox
        title={'Address:'}
        info={result.location.address1}
      />
      <InfoBox
        title={'Phone:'}
        info={result.phone}
      />
      <ChipsBox 
        title={'Categories:'}
        chipsInfo={result.categories}
      />
      {result.transactions.length === 0
       ? null
       : <ChipsBox
           title={'Transactions:'}
           chipsInfo={result.transactions}
         />}       
      {ShowErrorMsg(errorMsg)}
    </ScrollView>
  ) 
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    padding: 3,
    backgroundColor: '#546e7a',
  },
  name: {
    height: 35,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#fff',
  }, 
})

export default MoreInfoScreen