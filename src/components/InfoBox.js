import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const InfoBox = ({title, info}) => {
  return (
    <View style={styles.infoBox}>
      <Text style={styles.infoTitle}>{title}</Text>
      <Text style={styles.info}>{info}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  infoBox: {
    flex: 1,
    justifyContent: 'space-evenly',
    marginTop: 4,
    paddingHorizontal: 5,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  infoTitle: {
    width: '100%',
    fontSize: 16,
  },
  info: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
})

export default InfoBox