import React from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import ResultCard from './ResultCard'
import ResultListSkel from './ResultListSkel'


const ResultList = ({title, results, ready, navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.box}>
        {ready === false 
          ? <ResultListSkel />
          : <FlatList
              horizontal
              data={results}
              keyExtractor={result => result.id}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={function() {
                      return navigation.navigate('MoreInfo', {id: item.id})
                    }}
                  >
                    <ResultCard result={item} />
                  </TouchableOpacity>
                )
              }}
            />}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 3,
    marginBottom: 2,
    marginHorizontal: 3,
    borderRadius: 5,
    backgroundColor: '#546e7a',
  },
  title: {
    marginBottom: 3,
    fontSize: 15,
    color: '#fff',
  },
  box: {
    flex: 1,
    flexDirection: 'row',
  }
})

export default withNavigation(ResultList)