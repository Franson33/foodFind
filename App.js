import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen'
import MoreInfoScreen from './src/screens/MoreInfoScreen'


const navigator = createStackNavigator(
{
  Search: SearchScreen,
  MoreInfo: MoreInfoScreen,
}, 
{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'FoodFind',
    headerStyle: {
      backgroundColor: '#29434e',
    },
    headerTintColor: '#fff',
  }
})

export default createAppContainer(navigator) 