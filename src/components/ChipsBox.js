import React, { useMemo } from 'react'
import { View, Text, StyleSheet } from 'react-native'


const ChipsBox = ({title, chipsInfo}) => {
  const arr = useMemo(() => 
    chipsInfo.map((chip, i) => {
      return (
        chipsInfo[i]
          ? <Text 
              style={styles.chip}
              key={'chip200' + `${i}`}
            >
              {chip?.title || chip}           
            </Text>
          : null
      )  
    }), [chipsInfo])
    
  return (
    <View style={styles.chipsBox}>
      <Text style={styles.chipsTitle}>{title}</Text>
      {arr} 
    </View>
  )
}

const styles = StyleSheet.create({
  chipsBox: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexShrink: 1,
    flexWrap: 'wrap',
    marginTop: 4,
    paddingHorizontal: 5,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  chipsTitle: {
    marginBottom: 3,
    marginLeft: 0,
    fontSize: 15,
    textAlignVertical: 'center',
  },
  chip: {
    flex: 0,
    flexShrink: 2,
    paddingVertical: 4,
    paddingHorizontal: 15,
    marginHorizontal: 3,
    marginVertical: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    borderRadius: 15,
    color: '#fff',
    backgroundColor: '#819ca9'
  }
})

export default ChipsBox