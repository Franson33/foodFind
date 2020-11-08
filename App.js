import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen'
import MoreInfoScreen from './src/screens/MoreInfoScreen'
import CityScreen from './src/screens/CityScreen'
import HeaderButton from './src/components/HeaderButton'



const navigator = createStackNavigator(
{
  Search: SearchScreen,
  MoreInfo: MoreInfoScreen,
  City: CityScreen
}, 
{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'FoodFind',
    headerStyle: {
      backgroundColor: '#29434e',
    },
    headerTintColor: '#fff',
    headerRightContainerStyle: {
      marginRight: 20,
    },
    headerRight: () => (
      <HeaderButton />
    )
  }  
})

export default createAppContainer(navigator) 