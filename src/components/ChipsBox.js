import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const ChipsBox = ({title, chipsInfo}) => {
  return (
    <View style={styles.chipsBox}>
      <Text style={styles.chipsTitle}>{title}</Text>
      {chipsInfo[0]
        ? <Text style={styles.chip}>{
            chipsInfo[0]['title']
            ? chipsInfo[0]['title']
            : chipsInfo[0]}
          </Text>
        : null}
      {chipsInfo[1]
        ? <Text style={styles.chip}>{
            chipsInfo[1]['title']
            ? chipsInfo[1]['title']
            : chipsInfo[1]}
          </Text>
        : null}
      {chipsInfo[2]
        ? <Text style={styles.chip}>{
            chipsInfo[2]['title']
            ? chipsInfo[2]['title']
            : chipsInfo[2]}
          </Text>
        : null}
    </View>
  )
}

const styles = StyleSheet.create({
  chipsBox: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4,
    paddingHorizontal: 5,
    paddingBottom: 4,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  chipsTitle: {
    width: '100%',
    marginBottom: 3,
    fontSize: 16,
    
  },
  chip: {
    flexShrink: 1,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginRight: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    borderRadius: 15,
    color: '#fff',
    backgroundColor: '#819ca9'
  }
})

export default ChipsBox