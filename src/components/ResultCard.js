import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'


const ResultCard = ({result}) => {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.image}
        source={
          result.image_url
          ? {uri: result.image_url} 
          : null
        }
      /> 
      <Text style={styles.title}>{result.name}</Text>
      <Text 
        style={styles.textInfo}
      >
        {result.rating} Stars, {result.review_count} Reviews
      </Text> 
    </View>
  )  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 5,
    marginRight: 5,
    padding: 4,
    backgroundColor: '#fff',
  }, 
  title: {
    fontWeight: 'bold',
    textAlignVertical: 'center',
    overflow: 'hidden'
  },
  image: {
    width: 200,
    height: 105,
    borderRadius: 5,
  },
  textInfo: {
    fontSize: 15,
  }
})

export default ResultCard