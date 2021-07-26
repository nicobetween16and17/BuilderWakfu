/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,Image} from 'react-native';
import Build from './src/pages/build';
import Enchant from './src/pages/enchantement';
import Calculator from './src/pages/calculator';
import Aptitudes from './src/pages/apptitudes';
import Search from './src/pages/search';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


const App= () => {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Build" component={Build} options={{
          title:'Build',tabBarColor:'#d47b6a',
          tabBarIcon: ({color})=>(
            <Image source={require('./src/images/sword.png')} style={{width:26,height:26}}></Image>
        )
        }} />
        <Tab.Screen name="Search" component={Search}  options={{
          title:'Search',tabBarColor:'#89d6ce',
          tabBarIcon: ({color})=>(
            <Image source={require('./src/images/search.png')} style={{width:26,height:26}}></Image>
        )
        }}/>
        <Tab.Screen name="Enchant" component={Enchant}  options={{
          title:'Enchantement',tabBarColor:'#8cf089',
          tabBarIcon: ({color})=>(
            <Image source={require('./src/images/enchant.png')} style={{width:26,height:26}}></Image>
        )
        }}/>

        
        <Tab.Screen name="Aptitudes" component={Aptitudes} options={{
          title:'Aptitudes',tabBarColor:'#d780d9',
          tabBarIcon: ({color})=>(
            
            <Image source={require('./src/images/book.png')} style={{width:26,height:26}}></Image>
        )
        }}/>
        <Tab.Screen name="Calculator" component={Calculator} options={{
          title:'Sorts',
          tabBarColor:'#fafc83',
          tabBarIcon: ({color})=>(
            <Image source={require('./src/images/sorts.png')} style={{width:26,height:26}}></Image>
        )
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
};


export default App;
