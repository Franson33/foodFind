import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; 


const ModalCloseButton = ({toCloseModal}) => {
  return (
    <TouchableOpacity
      onPress={toCloseModal}
    >
      <MaterialIcons
        style={styles.modalClose}
        name="close"
        size={40}
        color="#29434e"
      />
    </TouchableOpacity>
  )
} 

const styles = StyleSheet.create({
  modalClose: {
    alignSelf: 'flex-end',
    marginVertical: 3,
    marginHorizontal: 7,
    paddingHorizontal: 10,
    textAlign: 'right',
  }
})

export default ModalCloseButton