import React from 'react'
import { Text, TouchableOpacity, StyleSheet, SectionList } from 'react-native'
import cityList from '../data/cityList'


const CitiesArr = ({toChangeCity}) => {
  
  const Item = ({title}) => {
    return (
      <>
        <TouchableOpacity
          onPress={() => toChangeCity(title)}
          style={styles.cityBox}
        >
          <Text
            style={styles.city}
          >
            {title}
          </Text>
        </TouchableOpacity>
      </>
    )
  }

  return (
    <SectionList 
      sections={cityList}
      keyExtractor={(city) => city}
      renderItem={({item}) => <Item title={item} />}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.country}>{title}</Text>
      )}
    />
  ) 
}

const styles = StyleSheet.create({
  country: {
    flex: 1,
    width: 350,
    marginTop: 4,
    marginHorizontal: 4,
    paddingHorizontal: 15,
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#fff',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#29434e',
    borderRadius: 5,
    backgroundColor: '#29434e',
},
  cityBox: {
    marginHorizontal: 10,
  },
  city: {
    flex: 1,
    paddingRight: 25,
    paddingVertical: 5,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#29434e',
    textAlign: 'right',
    borderBottomWidth: 1,
    borderColor: '#fee',
    borderLeftWidth: 1,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  }
})

export default CitiesArr