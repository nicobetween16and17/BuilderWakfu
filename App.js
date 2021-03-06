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
import Enchant from './src/pages/enchantement';
import Calculator from './src/pages/calculator';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import NavigationStacked from './src/pages/navigationStacked';
import {Provider} from 'react-redux'
import { Store } from './src/redux/store';
import NavigatorTop from './src/pages/navigationTop';
import AptitudeNavigator from './src/pages/aptitudeNavigator';
import ForgeNavigator from './src/pages/forgeNavigator';
const Tab = createMaterialBottomTabNavigator();
const App= () => {
  
  return (
<Provider store={Store}>
      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Build" component={NavigatorTop} options={{
          title:'Build',tabBarColor:'#d47b6a',
          tabBarIcon: ({color})=>(
            <Image source={require('./src/images/sword.png')} style={{width:26,height:26}}></Image>
        )
        }} />
        <Tab.Screen name="Search" component={NavigationStacked}  options={{
          title:'Search',tabBarColor:'#89d6ce',
          tabBarIcon: ({color})=>(
            <Image source={require('./src/images/search.png')} style={{width:26,height:26}}></Image>
        )
        }}/>
        <Tab.Screen name="Enchantement" component={ForgeNavigator}  options={{
          title:'Enchantement',tabBarColor:'#8cf089',
          tabBarIcon: ({color})=>(
            <Image source={require('./src/images/enchant.png')} style={{width:26,height:26}}></Image>
        )
        }}/>

        
        <Tab.Screen name="Aptitudes" component={AptitudeNavigator} options={{
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
    </NavigationContainer></Provider>

  );
};


export default App;
