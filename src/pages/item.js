import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react'
import { View, Image, Text, Button, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { setAmu, setAnneau1, setAnneau2, setBottes, setCape, setCasque, setCeinture, setEmbleme, setEpau, setMain, setPlastron, setSecondeMain, isLoading, addItem } from '../redux/actions/actions';
import actions from './Aptitudes/action.json'
const FicheItem = () => {

    const nav = useNavigation()
    const dispatch = useDispatch()
    const Currentitem = useSelector((state) => state.item)
    const lienImage = useSelector((state) => state.item.lien)
    const linkImage = 'https://static.ankama.com/wakfu/portal/game/item/115/'
    const rarities = ['#a4a4a4', '#737373', '#00b55c', '#d47b6a', '#e1b336', '#d229e7', '#5a9bd4', '#e9659b']
    const rarity = useSelector((state) => state.item.rarity)
    const img = linkImage.concat(lienImage).concat('.png')
    const type = useSelector((state) => state.item.type)
    const chosen = useSelector(state => state.chosen.content)
    const nom = useSelector((state) => state.item.nom)
    const stats = useSelector((state) => state.item.stats)
    const Statistique = (stat) => {
       
        let statString = ''
        actions.forEach(element => {
            
            if (element.definition.id === stat.item.actionId && element.description !== undefined) {
                statString = element.description.fr.replace('[#1]', stat.item.params[0]).replace('[el1]', 'FEU').replace('[el2]', 'EAU').replace('[el3]', 'TERRE').replace('[el4]', 'AIR').replace('[#2]', stat.item.params[2])
            }
        });
        return (
            <View >
                <Text style={{ color: 'lightgreen', textAlign: 'center' }}>{statString}</Text>
            </View>
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#191b24', paddingTop: 40, alignItems: 'center' }}>
            <Text style={{ color: rarities[rarity], fontSize: 20, textAlign: 'center' }}>{nom}</Text>
            <Image
                style={{ resizeMode: 'contain', height: 200, borderColor: rarities[rarity], borderWidth: 2, width: '50%' }}
                source={{ uri: img }}
            />
            <FlatList
                data={stats}
                renderItem={(item) => <Statistique item={item.item} />}
                keyExtractor={item => item.id}
            />
            <View>
                <Button title='<--' onPress={() => {
                    nav.navigate('Search', { screen: 'Result' })
                }} />
                <Button title='add' onPress={() => {
                    switch (chosen) {
                        case 1:
                            //arme a une main + 2 main
                            [108, 110, 113, 115, 254, 518].includes(type) ? dispatch(setMain(img)) : dispatch(setSecondeMain(img)), dispatch(setMain(img))
                            dispatch(addItem(Currentitem))
                            nav.navigate('Build')
                            break;
                        case 2:
                            //seconde main
                            dispatch(setSecondeMain(img))
                            dispatch(addItem(Currentitem))
                            nav.navigate('Build')
                            break;

                        case 3:
                            //casque
                            dispatch(setCasque(img))
                            dispatch(addItem(Currentitem))
                            nav.navigate('Build')
                            break;
                        case 4:
                            //cape
                            dispatch(setCape(img))
                            dispatch(addItem(Currentitem))
                            nav.navigate('Build')
                            break;
                        case 5:
                            //bottes
                            dispatch(setBottes(img))
                            dispatch(addItem(Currentitem))
                            nav.navigate('Build')
                            break;
                        case 6:
                            //ceinture
                            dispatch(setCeinture(img))
                            dispatch(addItem(Currentitem))
                            nav.navigate('Build')
                            break;
                        case 7:
                            //anneau
                            dispatch(setAnneau1(img))
                            dispatch(addItem(Currentitem))
                            nav.navigate('Build')
                            break;
                        case 8:
                            //anneau
                            dispatch(setAnneau2(img))
                            dispatch(addItem(Currentitem))
                            nav.navigate('Build')
                            break;
                        case 9:
                            dispatch(setEpau(img))
                            dispatch(addItem(Currentitem))
                            nav.navigate('Build')
                            //epau
                            break;
                        case 10:
                            //plastron
                            dispatch(setPlastron(img))
                            dispatch(addItem(Currentitem))
                            nav.navigate('Build')
                            break;
                        case 11:
                            //amu
                            dispatch(setAmu(img))
                            dispatch(addItem(Currentitem))
                            nav.navigate('Build')
                            break;
                        case 12:
                            //embleme
                            dispatch(setEmbleme(img))
                            dispatch(addItem(Currentitem))
                            nav.navigate('Build')
                            break;


                    }
                }} />
            </View>

        </View>
    )

}
export default FicheItem