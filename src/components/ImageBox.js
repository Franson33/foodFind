import React from 'react'
import { View, Image, StyleSheet } from 'react-native'


const ImageBox = ({arr}) => {
  return (
    <View style={styles.imageBox}>
      <Image
        style={styles.imageBig}
        source={
          arr[0]
          ? {uri: arr[0]}
          : null}
      />
      <Image
        style={styles.image}
        source={
          arr[1]
          ? {uri: arr[1]}
          : null}
      />
      <Image
        style={styles.image}
        source={
          arr[2]
          ? {uri: arr[2]}
          : null}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  imageBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 5,
    backgroundColor: '#fff',
    overflow: 'hidden'
  },
  imageBig: {
    height: 200,
    width: '99%',
    margin: 2,
    borderRadius: 5,
  },
  image: {
    height: 100,
    width: '49%',
    marginLeft: 2,
    marginBottom: 2,
    borderRadius: 5,
  },
})

export default ImageBox