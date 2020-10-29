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
        width="200"
      >
        <Rect x="0" y="0" rx="5" ry="5" width="200" height="105" />
        <Rect x="0" y="115" rx="5" ry="5" width="80" height="10" />
        <Rect x="0" y="130" rx="5" ry="5" width="150" height="10" />
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