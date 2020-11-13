import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'


const ResultCard = ({result}) => {
  return (
    <View style={styles.container}>
       <Text style={styles.title}>
        {result.name}
      </Text>
      <Text style={styles.titleBackground}>
        {result.name}
      </Text>
      <Image 
        style={styles.image}
        source={
          result.image_url
          ? {uri: result.image_url} 
          : null}
      /> 
      <Text style={styles.textStars}>
        {result.rating} Stars
      </Text>
      <Text style={styles.textRev}>
        {result.review_count} Reviews
      </Text>
    </View>
  )  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#fff',
    borderRadius: 5,
    marginRight: 5,
    overflow: 'hidden'
  }, 
  title: {
    position: 'absolute',
    flexShrink: 2,
    width: 250,
    paddingLeft: 5,
    paddingBottom: 3,
    fontSize: 20,
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 2,
  },
  titleBackground: {
    position: 'absolute',
    top: 1,
    paddingLeft: 4,
    fontSize: 20,
    height: '15%',
    zIndex: 1,
  },
  image: {
    width: 230,
    height: 150,
    resizeMode: 'stretch',
  },
  textStars: {
    position: 'absolute',
    bottom: 0,
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#fff',
    paddingHorizontal: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  textRev: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    paddingHorizontal: 10,
    fontSize: 16,
    fontStyle: 'italic',
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  }
})

export default ResultCard