import React from 'react'
import { Text, View, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import cityList from '../api/cityList'


export default function() {
  
  return ( 
    CountriesArr = cityList.map(item => (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => alert(item.count)}
          key={item.id}
        >
          <Text
            style={styles.country}
          >
            {item.count}
          </Text>
        </TouchableOpacity>
        <FlatList
          data={item.cities}
          style={styles.cities}
          keyExtractor={(item) => item}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => setCity(item)}
                style={styles.container}
              >
                <Text
                  style={styles.cities}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )
          }}
        />
      </View>
    ))
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
},
  country: {
    width: 350,
    marginTop: 4,
    marginHorizontal: 4,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#102027',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#29434e',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  cities: {
    marginHorizontal: 10,
    fontSize: 18,
    textAlign: 'center',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: '#fff',
    zIndex: 2,
  }
})