import 'react-native-gesture-handler'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SearchScreen from './src/screens/SearchScreen'
import MoreInfoScreen from './src/screens/MoreInfoScreen'



const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen name="Search" component={SearchScreen} options={{title: 'foodFind'}} />
        <Stack.Screen name="MoreInfo" component={MoreInfoScreen} options={{title: 'RestaurantDetails'}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App