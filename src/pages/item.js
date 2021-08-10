import React, { Component } from 'react'
import { View,Image,Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
 const FicheItem=()=>{
     console.log(useSelector((state)=>state.item))
     const lienImage = useSelector((state)=>state.item.lien)
     const linkImage = 'https://static.ankama.com/wakfu/portal/game/item/115/'
     const rarities=['#a4a4a4','#737373','#00b55c','#d47b6a','#e1b336','#d229e7','#5a9bd4','#e9659b']
     const rarity = useSelector((state)=>state.item.rarity)
     const img = linkImage.concat(lienImage).concat('.png')
     console.log('lien: ',lienImage)
     console.log('rarity',useSelector((state)=>state.item.rarity))
     const nom = useSelector((state)=>state.item.nom)
     return(
         <View style={{flex:1,backgroundColor:'#191b24',paddingTop:40,alignItems:'center'}}>
              <Text style = {{color:rarities[rarity],fontSize:20,textAlign:'center'}}>{nom}</Text>
             <Image
             style = {{resizeMode:'contain', height:200,borderColor:rarities[rarity],borderWidth:2,width:'50%'}}
             source={{uri:img}}
             />
            
         </View>
     )

 }
 export default FicheItem