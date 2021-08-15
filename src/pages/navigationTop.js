import React from 'react'
import { View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Build from './build'
import CaracView from './caracview'
const Tab = createMaterialTopTabNavigator()
const NavigatorTop =()=>{
    return(
        <Tab.Navigator
      initialRouteName="Buildview"
      
      screenOptions={{
        tabBarActiveTintColor: '#d47b6a',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: '#191b24' },
        
        
      }}
    >
      <Tab.Screen
        name="Buildview"
        component={Build}
        options={{ tabBarLabel: 'Build' }}
      />
      <Tab.Screen
        name="Caracview"
        component={CaracView}
        options={{ tabBarLabel: 'Carac' }}
      />
    </Tab.Navigator>
    )
}
export default NavigatorTop