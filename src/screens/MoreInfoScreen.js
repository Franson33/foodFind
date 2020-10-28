import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Image, FlatList } from 'react-native'
import ShowErrorMsg from '../functions/ShowErrorMsg'
import RequestToApi from '../functions/RequesToApi'


const MoreInfoScreen = ({navigation}) => {
  const [result, setResult] = useState(null)
  const [errorMsg, setErrorMsg] = useState('')
  const restId = navigation.getParam('id')

  useEffect(() => {
    RequestToApi(`/${restId}`, setResult, setErrorMsg)
  }, [])

  if (!result) {
    return null
  }

  console.log(result.photos)
  
  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image
          style={styles.imageBig}
          source={
            result.photos[0]
            ? {uri: result.photos[0]}
            : null
          }
        />
        <Image
          style={styles.image}
          source={
            result.photos[1]
            ? {uri: result.photos[1]}
            : null
          }
        />
        <Image
          style={styles.image}
          source={
            result.photos[2]
            ? {uri: result.photos[2]}
            : null
          }
        />
      </View>
      <Text style={styles.name}>{result.name}</Text>
      {ShowErrorMsg(errorMsg)}
    </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 4,
  },
  imageBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#00e',
    borderRadius: 5,

  },
  imageBig: {
    height: 220,
    width: '100%',
    borderRadius: 5,
  },
  image: {
    height: 120,
    width: '50%',
    borderRadius: 5,
  },
  name: {
    flex: 1, 
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'left', 
  } 
})

export default MoreInfoScreen