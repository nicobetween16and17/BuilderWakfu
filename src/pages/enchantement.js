import React, { useState } from "react";
import { Text, View, Image, ImageBackground, Modal, StyleSheet, Pressable, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { setruneAmu, setruneAnneau1, setruneAnneau2, setruneArme, setruneBottes, setruneCape, setruneCasque, setruneCeinture, setruneEpau, setrunePlastron } from "../redux/actions/actions";
const Enchant = () => {
    const dispatch = useDispatch()
    const selected = useSelector((state)=>state.currentRune.rune)
    const Runes = useSelector((state) => state.runes)
    const [opacity, setopacity] = useState(0.6);
    const Chasses = [require('../images/forge/shard_white_empty.webp'),
    require('../images/forge/shard_blue_full.webp'),
    require('../images/forge/shard_green_full.webp'),
    require('../images/forge/shard_red_full.webp'),
    require('../images/forge/shard_white_full.webp')]
    const Dispatch = (indice, info,e) => {
        info.effet[1]=indice
        switch (indice) {
            case 0:
                console.log('DISPATCHEDCASQUE')
                dispatch(setruneCasque(info,e))
                break;
            case 1:
                console.log('DISPATCHEDAMU')
                dispatch(setruneAmu(info,e))
                break;
            case 2:
                console.log('DISPATCHEDPLASTRON')
                dispatch(setrunePlastron(info,e))
                break;
            case 3:
                console.log('DISPATCHEDANN1')
                dispatch(setruneAnneau1(info,e))
                break;
            case 4:
                console.log('DISPATCHEDCANN2')
                dispatch(setruneAnneau2(info,e))
                break;
            case 5:
                console.log('DISPATCHEDBOTTES')
                dispatch(setruneBottes(info,e))
                break;
            case 6:
                console.log('DISPATCHEDCAPE')
                dispatch(setruneCape(info,e))
                break;
            case 7:
                console.log('DISPATCHEDEPAU')
                dispatch(setruneEpau(info,e))
                break;
            case 8:
                console.log('DISPATCHEDCEINTURe')
                dispatch(setruneCeinture(info,e))
                break;
            case 9:
                console.log('DISPATCHEDARME')
                dispatch(setruneArme(info,e))
                break;

        }
    }
    const changeRune=(couleur,indicator,e)=>{
        if (couleur<4) {
           
            couleur+=1
   
        }else{
            couleur=0
        }
        Dispatch(indicator,couleur,e)
        
    }
    const Equipement = ({ type, tab,indicator }) => {
       
        return (
            <View style={{ flex: 1, width: 350, flexDirection: 'row', margin: 10, justifyContent: 'space-between' }}>
                <Image style={{ width: 39, height: 39 }} source={type} />
                <TouchableOpacity onPress={() => {
                    Dispatch(indicator,selected,0)
                }}>
                    <Image style={{ width: 39, height: 39 }} source={Chasses[tab[0].couleur]} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    Dispatch(indicator,selected,1)
                }}>
                    <Image style={{ width: 39, height: 39 }} source={Chasses[tab[1].couleur]} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    Dispatch(indicator,selected,2)
                }}>
                    <Image style={{ width: 39, height: 39 }} source={Chasses[tab[2].couleur]} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    Dispatch(indicator,selected,3)
                }}>
                    <Image style={{ width: 39, height: 39 }} source={Chasses[tab[3].couleur]} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    if (opacity === 1) {
                        setopacity(0.6)
                    } else {
                        setopacity(1)
                    }
                }}>
                    <Image style={{ width: 39, height: 39, opacity: opacity }} source={require('../images/forge/sublimation.webp')} /></TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#191b24', alignItems: 'center' }}>
            <Equipement type={require('../images/forge/helmet.png')} tab={Runes.casque} indicator={0} />
            <Equipement type={require('../images/forge/necklace.png')} tab={Runes.amu} indicator={1} />
            <Equipement type={require('../images/forge/breastplate.png')} tab={Runes.plastron} indicator={2} />
            <Equipement type={require('../images/forge/ring.png')} tab={Runes.anneau1} indicator={3} />
            <Equipement type={require('../images/forge/ring.png')} tab={Runes.anneau2} indicator={4} />
            <Equipement type={require('../images/forge/boots.png')} tab={Runes.bottes} indicator={5} />
            <Equipement type={require('../images/forge/cape.png')} tab={Runes.cape} indicator={6} />
            <Equipement type={require('../images/forge/epaulettes.png')} tab={Runes.epau} indicator={7} />
            <Equipement type={require('../images/forge/belt.png')} tab={Runes.ceinture} indicator={8} />
            <Equipement type={require('../images/forge/one_handed_weapon.png')} tab={Runes.arme} indicator={9} />

        </View>
    );
};


export default Enchant