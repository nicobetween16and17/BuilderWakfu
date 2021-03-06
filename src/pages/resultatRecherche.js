import { Text, View, Image, StyleSheet, TouchableOpacity, ImageBackground,Modal,Button} from 'react-native';
import React, { Component, useState, useEffect } from 'react';
import GridList from 'react-native-grid-list';
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentItem,isLoading } from '../redux/actions/actions';
const ResultatRecherche = () => {
    const rarityColors = ['1', '2', '3', '4', '5', '6', '7', '8']
    const dispatch = useDispatch()
    const nav = useNavigation()
    const [Json, setJson] = useState([])
    const [image, setimage] = useState(require('../images/fondItem5.png'))
    const linkImage = 'https://static.ankama.com/wakfu/portal/game/item/115/'
    const rarity = useSelector((state) => state.rarity.content)
    const level = useSelector((state) => state.level.content)
    const equipementType = useSelector((state) => state.type.content)
    
    const API = 'https://wakfu.cdn.ankama.com/gamedata/1.72.1.181678/items.json'
    const Load=useSelector(state => state.load.content)
    const fonds = [require('../images/fondItem1.png'),
    require('../images/fondItem2.png'),
    require('../images/fondItem3.png'),
    require('../images/fondItem4.png'),
    require('../images/fondItem5.png'),
    require('../images/fondItem6.png'),
    require('../images/fondItem7.png'),
    require('../images/fondItem8.png')]
    function rarityColor() {
        return rarityColors[rarity]
    }
   
    function imgRendering(input) {
   
        switch (input) {
            case 0:
                setimage(require('../images/fondItem1.png'))
            
                break;
            case 1:
                setimage(require('../images/fondItem2.png'))
            
                break;
            case 2:
                setimage(require('../images/fondItem3.png'))
             
                break;
            case 3:
                setimage(require('../images/fondItem4.png'))
              
                break;
            case 4:
                setimage(require('../images/fondItem5.png'))
              
                break;
            case 5:
                setimage(require('../images/fondItem6.png'))
                
                break;
            case 6:
                setimage(require('../images/fondItem7.png'))
               
                break;
            case 7:
                setimage(require('../images/fondItem8.png'))
               
                break;
        }

    }

    useEffect(() => {
        console.log('REFRESHINGGG...')
        fetch(API)
            .then((response) => response.json())
            .then((responseJson) => {

                let JsonTempo = []
                responseJson.forEach((element, index) => {
                    if (element.definition.item.level >= level - 15 && rarity.includes(element.definition.item.baseParameters.rarity) && element.definition.item.level <= level && equipementType.includes(element.definition.item.baseParameters.itemTypeId)) {
                        var stats =[]
                         element.definition.equipEffects.forEach((element,index)=>{
                            var stat = {
                                id:element.effect.definition.id,
                                actionId:element.effect.definition.actionId,
                                params:element.effect.definition.params
                            }
                            stats.push(stat)
                         })
                        var child = {
                            title: element.title.fr,
                            imageId: element.definition.item.graphicParameters.gfxId,
                            rarity: element.definition.item.baseParameters.rarity,
                            type:element.definition.item.baseParameters.itemTypeId,
                            stats:stats
                        }
                        JsonTempo.push(child)
                    }

                }

                );
                setJson(JsonTempo)
                
                dispatch(isLoading())

            }).then((JsonTempo) => {
                JsonTempo = []
               
            })
            .catch(function (error) {
              
            })

    }, [equipementType])
    const setLinkimage = (idImage) => {
        return linkImage + idImage + '.png'
    }
    const Item = (item) => {
        { /*console.log('titre: ', item.title, 'lien: ', item.imageId)*/ }
        
        return (

            <View style={{ alignItems: 'center', width: 180, height: 180, margin: 20 }}>
                 
                <TouchableOpacity onPress={()=>{
                
                    dispatch(setCurrentItem(item))
                    dispatch(isLoading())
                    nav.navigate('Search', { screen: 'Item'})
                    
                  

                }}>
                    <ImageBackground source={fonds[item.rarity]} style={{ height: 180, width: 180 }}>
                        <View>
                            <Image style={{ height: 180, width: 180 }} source={{ uri: setLinkimage(item.imageId) }} />

                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        )
    }


    return (
    
        <View style={{ flex: 1, backgroundColor: '#191b24', zIndex: 10, marginRight: 0 }}>
           
            <Button color='#89d6ce' title='Recherche sp??cifiques'onPress={()=>{
                nav.navigate('Search',{screen:'Searchtool'})
            }}/>
            {Load ?
                <Image style={{resizeMode:'contain',position:'absolute',top:250,left:50,height:140}}source={require('../images/gifs/loading3.gif')}/>
                 :
                <GridList
                    onScroll={(event) => {
                        {


                        }
                    }}
                    showSeparator
                    data={Json}
                    numColumns={2}
                    renderItem={({ item }) => Item(item)}
                />}
        </View>
    )
}
export default ResultatRecherche
