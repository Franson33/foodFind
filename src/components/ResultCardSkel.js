import React from 'react'
import { View, StyleSheet } from 'react-native'
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient'
import { Rect } from 'react-native-svg'


const ResultCardSkel = () => {
  return (
    <View style={styles.container}>
      <SvgAnimatedLinearGradient
        primaryColor="#808080"
        secondaryColor="#C0C0C0"
        duration={1300}
        width="230"
        height="150"
      >
        <Rect x="0" y="0" rx="5" ry="5" width="100%" height="14%" />
        <Rect x="0" y="25" rx="5" ry="5" width="100%" height="66%" />
        <Rect x="0" y="130" rx="5" ry="5" width="75%" height="14%" />
      </SvgAnimatedLinearGradient>
    </View>
  )
} 

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    marginRight: 5,
    padding: 4,
    backgroundColor: '#fff',
  },
})

export default ResultCardSkel