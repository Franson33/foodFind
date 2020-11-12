import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


const CityButton = ({toOpenModal}) => {
  return (
    <TouchableOpacity 
      onPress={toOpenModal}
    >
      <View style={styles.container}>
        <Text style={styles.title}>
          City
        </Text>
        <MaterialCommunityIcons
          name="city-variant"
          size={25}
          color="#1c313a"
          style={{alignSelf: 'center'}}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: 3,
    marginVertical: 5,
    width: '95%',
    height: 35,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#fff'
  },
  title: {
    alignSelf: 'center',
    paddingRight: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1c313a'
  }
})

export default CityButton
               