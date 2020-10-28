import React from 'react'
import { Text, StyleSheet } from 'react-native'


const ShowErrorMsg = (errorMsg) => {
 
  return (  
    errorMsg
      ? <Text style={styles.error}>{errorMsg}</Text>
      : null
  )
}

const styles = StyleSheet.create({
  error: {
    position: 'absolute',
    top: '40%',
    paddingVertical: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: '#ff1100',
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    backgroundColor: '#ff1100',
    zIndex: 2, 
  },
})

export default ShowErrorMsg