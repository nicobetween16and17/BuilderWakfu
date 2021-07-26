import { Text, View, Image } from 'react-native';
import React, { Component, useState, useEffect } from 'react';
import GridList from 'react-native-grid-list';
const ResultatRecherche = () => {
    const [List, setList] = useState([])
    
    const [Json, setJson] = useState([])
    const linkImage = 'https://static.ankama.com/wakfu/portal/game/item/115/'

    const API = 'https://wakfu.cdn.ankama.com/gamedata/1.72.1.181678/items.json'


    useEffect(() => {
        console.log('REFRESHINGGG...')
        fetch(API)
            .then((response) => response.json())
            .then((responseJson) => {
                setList(responseJson)
                let JsonTempo = []
                responseJson.forEach((element, index) => {
                    if (element.definition.item.level >= 185 && element.definition.item.baseParameters.rarity === 4 && element.definition.item.level <= 200 && element.definition.item.baseParameters.itemTypeId === 120) {
                        var child = {
                            title: element.title.fr,
                            imageId: element.definition.item.graphicParameters.gfxId
                        }
                        JsonTempo.push(child)
                    }
                });
                setJson(JsonTempo)
                JsonTempo = []
                console.log('Json: ', Json, 'Json-Size', Json.length);
            }).catch(function (error) {
                console.log('ERROR', error)
            })

    }, [])
    const Item = (item) => {
        { console.log('titre: ', item.title, 'lien: ', item.imageId) }
        return (

            <View style={{ alignItems: 'center' }}>
                <View><Text style={{ color: '#f5d973' }}>{item.title}</Text></View>
                <Image style={{ width: 150, height: 150 }} source={{ uri: setLinkimage(item.imageId) }} />
            </View>)
    }

    const setLinkimage = (idImage) => {
        return linkImage + idImage + '.png'
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#191b24' }}>
            <GridList
                showSeparator
                data={Json}
                numColumns={2}
                renderItem={({ item }) => Item(item)}
            />
        </View>
    )
}
export default ResultatRecherche
