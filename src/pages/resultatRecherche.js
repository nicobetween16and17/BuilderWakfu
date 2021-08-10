import { Text, View, Image, StyleSheet, TouchableOpacity, ImageBackground,Modal } from 'react-native';
import React, { Component, useState, useEffect } from 'react';
import GridList from 'react-native-grid-list';
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentItem } from '../redux/actions/actions';
const ResultatRecherche = () => {
    const rarityColors = ['1', '2', '3', '4', '5', '6', '7', '8']
    const dispatch = useDispatch()
    const nav = useNavigation()
    const [Json, setJson] = useState([])
    const [Loading, setLoading] = useState('Loading.')
    const [image, setimage] = useState(require('../images/fondItem5.png'))
    const linkImage = 'https://static.ankama.com/wakfu/portal/game/item/115/'
    const rarity = useSelector((state) => state.rarity.content)
    const level = useSelector((state) => state.level.content)
    const equipementType = useSelector((state) => state.type.content)
    console.log('rarity:', rarity, 'typesItem:', equipementType, 'level:', level)
    const API = 'https://wakfu.cdn.ankama.com/gamedata/1.72.1.181678/items.json'
    const [Load, setLoad] = useState(true)
    function rarityColor() {
        return rarityColors[rarity]
    }
   
    function imgRendering(input) {
        console.log('Dans la fonction rendering')
        switch (input) {
            case 0:
                setimage(require('../images/fondItem1.png'))
                console.log('len: ', image)
                break;
            case 1:
                setimage(require('../images/fondItem2.png'))
                console.log('len: ', image)
                break;
            case 2:
                setimage(require('../images/fondItem3.png'))
                console.log('len: ', image)
                break;
            case 3:
                setimage(require('../images/fondItem4.png'))
                console.log('len: ', image)
                break;
            case 4:
                setimage(require('../images/fondItem5.png'))
                console.log('len: ', image)
                break;
            case 5:
                setimage(require('../images/fondItem6.png'))
                console.log('len: ', image)
                break;
            case 6:
                setimage(require('../images/fondItem7.png'))
                console.log('lien7: ', image.toString())
                break;
            case 7:
                setimage(require('../images/fondItem8.png'))
                console.log('lien: ', image)
                break;
        }

    }


    function changeLoading() {
        console.log('Loading? ', Load)
        setTimeout(() => {
            switch (Loading) {
                case 'Loading.':
                    setLoading('Loading..')
                    break;
                case 'Loading..':
                    setLoading('Loading...')
                    break;
                case 'Loading...':
                    setLoading('Loading.')
                    break;
            }


        }, 1300)
    }






    useEffect(() => {
        console.log('REFRESHINGGG...')
        fetch(API)
            .then((response) => response.json())
            .then((responseJson) => {

                let JsonTempo = []
                responseJson.forEach((element, index) => {
                    if (element.definition.item.level >= level - 15 && element.definition.item.baseParameters.rarity === rarity && element.definition.item.level <= level && equipementType.includes(element.definition.item.baseParameters.itemTypeId)) {
                        var child = {
                            title: element.title.fr,
                            imageId: element.definition.item.graphicParameters.gfxId,
                            rarity: element.definition.item.baseParameters.rarity
                        }
                        JsonTempo.push(child)
                    }

                }

                );
                setJson(JsonTempo)
                imgRendering(rarity)
                setLoad(false)

            }).then((JsonTempo) => {
                JsonTempo = []
               
            })
            .catch(function (error) {
                console.log('ERROR', error)
            })

    }, [])
    const setLinkimage = (idImage) => {
        return linkImage + idImage + '.png'
    }
    const Item = (item) => {
        { /*console.log('titre: ', item.title, 'lien: ', item.imageId)*/ }

        return (

            <View style={{ alignItems: 'center', width: 180, height: 180, margin: 20 }}>
                 
                <TouchableOpacity onPress={()=>{
                    console.log('LIEN',item.imageId,'NOM',item.title)
                    dispatch(setCurrentItem(item))
                    nav.navigate('Search', { screen: 'Item'})
                    
                  

                }}>
                    <ImageBackground source={image} style={{ height: 180, width: 180 }}>
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
            {Load ?
                <TouchableOpacity onPress={changeLoading()}><View><Text style={{ color: 'white', textAlign: 'center', marginTop: '60%', fontSize: 30 }}>{Loading}</Text></View></TouchableOpacity>
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
