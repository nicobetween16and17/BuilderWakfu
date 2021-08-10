import {  } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ResultatRecherche from './resultatRecherche';
import Search from './search';
import FicheItem from './item';
const Stack = createNativeStackNavigator();

const NavigationStacked=()=>{
  
  return(
      <Stack.Navigator>
          <Stack.Screen name = 'Searchtool' component = {Search}/>
          <Stack.Screen name = 'Result' component = {ResultatRecherche}/>
          <Stack.Screen name = 'Item' component = {FicheItem}/>
      </Stack.Navigator>
  )
}
export default NavigationStacked