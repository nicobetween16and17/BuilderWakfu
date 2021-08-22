import React from 'react'
import { View,Image } from 'react-native'
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
            initialRouteName="Intel"

            screenOptions={{
                tabBarActiveTintColor: '#d780d9',
                tabBarLabelStyle: { fontSize: 12 },
                tabBarStyle: { backgroundColor: '#191b24' },
                


            }}
        >
            <Tab.Screen
                name="Intel"
                component={Intelligence}
                options={{ tabBarLabel: '',tabBarIcon:({color})=>(
                    <Image source={require('../images/aptitudes/intelligence.webp')} style={{width:40,height:40}}/>
                ) }}
            />
            <Tab.Screen
                name="Force"
                component={Force}
                options={{ tabBarLabel: '',tabBarIcon:({color})=>(
                    <Image source={require('../images/aptitudes/strength.webp')} style={{width:40,height:40}}/>
                ) }}
            />
            <Tab.Screen
                name="Agility"
                component={Agility}
                options={{ tabBarLabel: '',tabBarIcon:({color})=>(
                    <Image source={require('../images/aptitudes/agility.webp')} style={{width:40,height:40}}/>
                ) }}
            />
            <Tab.Screen
                name="Chance"
                component={Chance}
                options={{ tabBarLabel: '',tabBarIcon:({color})=>(
                    <Image source={require('../images/aptitudes/chance.webp')} style={{width:40,height:40}}/>
                ) }}
            />
            <Tab.Screen
                name="Majeur"
                component={Majeur}
                options={{ tabBarLabel: '',tabBarIcon:({color})=>(
                    <Image source={require('../images/aptitudes/major.webp')} style={{width:40,height:40}}/>
                ) }}
            />
            
        </Tab.Navigator>
    )
}
export default AptitudeNavigator