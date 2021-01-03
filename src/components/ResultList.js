import React from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import ResultCard from './ResultCard'
import ResultListSkel from './ResultListSkel'


const ResultList = ({title, results, ready, onPress}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.box}>
      {(!ready)  
        ? <ResultListSkel />
        : <FlatList
            horizontal
            data={results}
            keyExtractor={result => result.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity 
              onPress={() => onPress(item.id)}
              >
                <ResultCard result={item} />
              </TouchableOpacity>
            )}
          />
      }
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 3,
    marginBottom: 2,
    marginHorizontal: 2,
    borderRadius: 5,
    backgroundColor: '#546e7a',
  },
  title: {
    marginBottom: 2,
    marginLeft: 5,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  box: {
    flex: 1,
    flexDirection: 'row',
  }
})

export default ResultList