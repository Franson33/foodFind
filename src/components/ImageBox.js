import React from 'react'
import { View, Image, StyleSheet } from 'react-native'


const ImageBox = ({images}) => (
  <View style={styles.imageBox}>
    {images.map((image, i) => (
      <Image
        key={`${image}`}
        style={i === 0 ? styles.imageBig : styles.image }
        source={{uri: image}}
      />
    ))}
  </View>
)

const styles = StyleSheet.create({
  imageBox: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    borderRadius: 5,
    backgroundColor: '#fff',
    overflow: 'hidden'
  },
  imageBig: {
    height: '68%',
    width: '99%',
    marginTop: 2,
    borderRadius: 5,
  },
  image: {
    height: '30%',
    width: '49%',
    marginVertical: 2,
    borderRadius: 5,
  },
})

export default ImageBox