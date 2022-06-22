import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import ROUTES from '../constants/Routes'
import Home from '../screens/HomeScreen'
import Map from '../screens/MapScreen'

const { Navigator, Screen } = createStackNavigator()

const Navigation = () => {
  return (
    <Navigator initialRouteName={ROUTES.home}>
      <Screen
        name={ROUTES.home}
        component={Home}
        options={{ headerShown: false }}
      />
      <Screen
        name={ROUTES.map}
        options={{ headerShown: false }}
        component={Map}
      />
    </Navigator>
  )
}

export default Navigation
