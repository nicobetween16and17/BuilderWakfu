import React from 'react'
import { View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Build from './build'
import CaracView from './caracview'
import Intelligence from './Aptitudes/intelligence'
import Force from './Aptitudes/force'
import Agility from './Aptitudes/agility'
import Chance from './Aptitudes/chance'
import Majeur from './Aptitudes/majeur'
const Tab = createMaterialTopTabNavigator()
const AptitudeNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Buildview"

            screenOptions={{
                tabBarActiveTintColor: '#d47b6a',
                tabBarLabelStyle: { fontSize: 12 },
                tabBarStyle: { backgroundColor: '#191b24' },


            }}
        >
            <Tab.Screen
                name="Intel"
                component={Intelligence}
                options={{ tabBarLabel: 'Intell' }}
            />
            <Tab.Screen
                name="Force"
                component={Force}
                options={{ tabBarLabel: 'Force' }}
            />
            <Tab.Screen
                name="Agility"
                component={Agility}
                options={{ tabBarLabel: 'AgilitÉ' }}
            />
            <Tab.Screen
                name="Chance"
                component={Chance}
                options={{ tabBarLabel: 'Chance' }}
            />
            <Tab.Screen
                name="Majeur"
                component={Majeur}
                options={{ tabBarLabel: 'Majeur' }}
            />
            
        </Tab.Navigator>
    )
}
export default AptitudeNavigator