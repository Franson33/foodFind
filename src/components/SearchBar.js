import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'


function SearchBar({term, onTermChange, onTermSubmit}) {
  return (
    <View style={styles.background}>
      <Feather
        name="search"
        style={styles.iconStyle}
      />
      <TextInput
        style={styles.input}
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 3,
    marginVertical: 5,
    width: '75%',
    height: 35,
    borderRadius: 5,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
  },
  input: {
    flex: 1,
  },
  iconStyle: {
    fontSize: 30,
    marginLeft: 5,
    marginRight: 10,
    alignSelf: 'center',
  },
})

export default SearchBar