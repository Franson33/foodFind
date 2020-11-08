import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


const HeaderButton = ({navigation}) => {
  return (
    <TouchableOpacity 
      onPress={function() {
        return navigation.navigate('City')
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>
          Choose city
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
    paddingHorizontal: 10,
    paddingVertical: 3,
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

export default withNavigation(HeaderButton)
               