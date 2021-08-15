
import React, { Component, useState, useEffect,memo } from 'react';
import { Text,Button, View, Image,StyleSheet, VirtualizedList,SafeAreaView, TouchableOpacity } from 'react-native';
import Buildoverview from './buildoverview';
import BuildView from './buildview';



const Build = (route) => {
    const [Afficher, setAfficher] = useState(false)
    
return (
<View style={{backgroundColor:'#191b24',flex:1,alignItems:'center',justifyContent:'center',marginTop:-20}}>
    {Afficher?
    <View>
        <Buildoverview/>
    </View>
    :
    <View>
    <TouchableOpacity onPress={()=>setAfficher(!Afficher)}><Image style={{ width: 180, height: 90 }} source={require('../images/buttonnew.png')}/></TouchableOpacity>
    <TouchableOpacity ><Image style={{ width: 180, height: 90 }} source={require('../images/buttonsaved.png')}/></TouchableOpacity></View>}
    


</View>
)
}
export default Build