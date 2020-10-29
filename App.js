import React from 'react'
import { Button, StatusBarStyle } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen'
import MoreInfoScreen from './src/screens/MoreInfoScreen'

const navigator = createStackNavigator(
{
  Search: SearchScreen,
  MoreInfo: MoreInfoScreen
}, 
{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'FoodFind',
    StatusBarStyle: 'light-content',
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#78909c',
    },
    headerRightContainerStyle: {
      marginRight: 25,
    },
    headerRight: () => (
      <Button 
        onPress={() => alert('This is a button!')}
        title="Settings"
      />
    )
  }  
}
)

export default createAppContainer(navigator) 