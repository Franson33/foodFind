import React, { useEffect } from 'react'
import { Text, StyleSheet, ScrollView } from 'react-native'
import ShowErrorMsg from '../components/ShowErrorMsg'
import useId  from '../hooks/useId'
import ImageBox from '../components/ImageBox'
import InfoBox from '../components/InfoBox'
import ChipsBox from '../components/ChipsBox'


const MoreInfoScreen = ({route}) => {
  const {id} = route.params
  const [idApi, result, errorMsg] = useId()

  useEffect(() => {
    idApi(id)
  }, [])

  if (!result) {
    return null
  }
  
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <ImageBox
        images={result.photos} 
      />
      <Text style={styles.name}>{result.name}</Text>
      <InfoBox
        title={'Address:'}
        info={result.location.display_address}
      />
      <InfoBox
        title={'Phone:'}
        info={result.phone}
      />
      <ChipsBox 
        title={'Categories:'}
        chipsInfo={result.categories}
      />
      {(result.transactions.length === 0)
         ? null
         : <ChipsBox
             title={'Transactions:'}
             chipsInfo={result.transactions}
           />
      }       
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