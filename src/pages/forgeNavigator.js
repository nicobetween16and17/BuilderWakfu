import React from 'react'
import { View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Enchant from './enchantement'
import Runes from './rune'
import Subli from './sublimation'

const Tab = createMaterialTopTabNavigator()
const ForgeNavigator =()=>{
    return(
        <Tab.Navigator
      initialRouteName="Enchant"
      
      screenOptions={{
        tabBarActiveTintColor: '#d47b6a',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: '#191b24' },
        
        
      }}
    >
      <Tab.Screen
        name="Enchant"
        component={Enchant}
        options={{ tabBarLabel: 'Runes' }}
      />
      <Tab.Screen
        name="Rune"
        component={Runes}
        options={{ tabBarLabel: 'Enchantement' }}
      />
       <Tab.Screen
        name="Sublimation"
        component={Subli}
        options={{ tabBarLabel: 'Sublimation' }}
      />
    </Tab.Navigator>
    )
}
export default ForgeNavigator