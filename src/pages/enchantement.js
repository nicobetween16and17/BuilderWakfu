import React, { Component } from 'react';
import { Text,View,Image,ImageBackground } from 'react-native';
import ImageOverlay from "react-native-image-overlay";
const Enchant=()=>{
    const liens = ['1','2','3','4','5','6','7','8']
    const test = 5
    const img = '../images/fondItem'+test+'.png'
    return(
        <View style={{flex:1}}>
            <Text>TEST IMAGE</Text>
            <ImageBackground style={{width:180,height:180,margin:20}} source={require(img) }>
                <Image style={{width:180,height:180}} source = {{uri:'https://static.ankama.com/wakfu/portal/game/item/115/13627640.png'}}/>
            </ImageBackground>
            
        </View>
    )
}
export default Enchant