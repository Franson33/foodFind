import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const ChipsBox = ({title, chipsInfo}) => {
  const arr = chipsInfo.map((chip, i) => {
    return (
        chipsInfo[i]
        ? <Text 
            style={styles.chip}
            key={'chip200' + `${i}`}
          >{
            chipsInfo[i]['title']
            ? chipsInfo[i]['title']
            : chipsInfo[i]}
          </Text>
        : null
    )  
  })

  return (
    <View style={styles.chipsBox}>
      <Text style={styles.chipsTitle}>{title}</Text>
      {arr} 
    </View>
  )
}

const styles = StyleSheet.create({
  chipsBox: {
    flexDirection: 'row',
    flexShrink: 1,
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