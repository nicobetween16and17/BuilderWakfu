import React, { Component, useState, useEffect } from 'react'
import { Text, View, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { MELEM, setSelectedElement } from '../redux/actions/actions'

const CaracView = () => {
    const dispatch = useDispatch()
    const selectedElem = useSelector((state) => state.selectedElem)
    let TotalStates = {
        pv: 0,
        pa: 6,
        pm: 3,
        pw: 6,
        Meau: 0,
        Mfeu: 0,
        Mair: 0,
        Mterre: 0,
        DI: 0,
        soinR: 0,
        ccp: 0,
        prd: 0,
        ini: 0,
        po: 0,
        esq: 0,
        tac: 0,
        sasa: 0,
        pp: 0,
        ctrl: 1,
        adb: 0,
        vol: 0,
        Mcrit: 0,
        Rcrit: 0,
        Mdos: 0,
        Rdos: 0,
        Mmelee: 0, Mdist: 0, Mmono: 0, Mzone: 0, Msoin: 0, Mzerk: 0,
        ard: 0, arr: 0,
        Rfeu: 0, Reau: 0, Rair: 0, Rterre: 0
    }
    const runes = useSelector((state) => state.runes)
    const runeFormat = [runes.casque, runes.amu, runes.plastron, runes.anneau1, runes.anneau2, runes.bottes, runes.cape, runes.epau, runes.ceinture, runes.arme]
    const aptitude = useSelector((state) => state.aptitude)
    const ListeItems = useSelector((state) => state.items.listItem)
   
    ListeItems.forEach(element => {
        element.stats.forEach(item => {
            switch (item.actionId) {
                case 20: TotalStates.pv += item.params[0]

                    break;
                case 26: TotalStates.Msoin += item.params[0]

                    break;
                case 31: TotalStates.pa += item.params[0]

                    break;
                case 41: TotalStates.pm += item.params[0]

                    break;
                case 56: TotalStates.pa -= item.params[0]

                    break;
                case 57: TotalStates.pm -= item.params[0]

                    break;
                case 71: TotalStates.Rdos += item.params[0]

                    break;
                case 80: TotalStates.Reau += item.params[0], TotalStates.Rfeu += item.params[0], TotalStates.Rterre += item.params[0], TotalStates.Rair += item.params[0]

                    break;
                case 82: TotalStates.Rfeu += item.params[0]

                    break;
                case 83: TotalStates.Reau += item.params[0]

                    break;
                case 84: TotalStates.Rterre += item.params[0]

                    break;
                case 85: 
                TotalStates.Rair += item.params[0]

                    break;

                case 96:
                     TotalStates.Rterre -= item.params[0]

                    break;
                case 97:
                     TotalStates.Rfeu -= item.params[0]

                    break;
                case 98:
                     TotalStates.Reau -= item.params[0]

                    break;
                case 100: 
                     TotalStates.Reau -= item.params[0], TotalStates.Reau -= item.params[0], TotalStates.Rfeu -= item.params[0], TotalStates.Rair -= item.params[0], TotalStates.Rterre -= item.params[0]

                    break;
                case 120: TotalStates.Mterre += item.params[0], TotalStates.Mfeu += item.params[0], TotalStates.Mair += item.params[0], TotalStates.Meau += item.params[0]

                    break;
                case 122: TotalStates.Mfeu += item.params[0]

                    break;
                case 123: TotalStates.Mterre += item.params[0]

                    break;
                case 124: TotalStates.Meau += item.params[0]

                    break;
                case 125: TotalStates.Mair += item.params[0]

                    break;
                case 130: TotalStates.Mterre -= item.params[0], TotalStates.Mfeu -= item.params[0], TotalStates.Mair -= item.params[0], TotalStates.Meau -= item.params[0]

                    break;
                case 132: TotalStates.Mfeu -= item.params[0]

                    break;
                case 149: TotalStates.Mcrit += item.params[0]

                    break;
                case 150: TotalStates.ccp += item.params[0]

                    break;
                case 160: TotalStates.po += item.params[0]

                    break;
                case 161: TotalStates.po -= item.params[0]

                    break;
                case 162: TotalStates.pp += item.params[0]

                    break;
                case 166: TotalStates.sasa += item.params[0]

                    break;
                case 167: TotalStates.sasa -= item.params[0]

                    break;
                case 168: TotalStates.ccp -= item.params[0]

                    break;
                case 171: TotalStates.ini += item.params[0]

                    break;
                case 172: TotalStates.ini -= item.params[0]

                    break;
                case 173: TotalStates.tac += item.params[0]

                    break;
                case 174: TotalStates.tac -= item.params[0]

                    break;
                case 175: TotalStates.esq += item.params[0]

                    break;
                case 176: TotalStates.esq -= item.params[0]

                    break;
                case 177: TotalStates.vol += item.params[0]

                    break;
                case 180: TotalStates.Mdos += item.params[0]

                    break;
                case 181: TotalStates.Mdos -= item.params[0]

                    break;
                case 184: TotalStates.ctrl += item.params[0]

                    break;
                case 191: TotalStates.pw += item.params[0]

                    break;
                case 192: TotalStates.pm -= item.params[0]

                    break;

                case 194: TotalStates.pw -= item.params[0]

                    break;
                case 234: TotalStates.adb += item.params[0]

                    break;
                case 875: TotalStates.prd += item.params[0]

                    break;
                case 876: TotalStates.prd -= item.params[0]

                    break;
                case 988: TotalStates.Rcrit += item.params[0]

                    break;
                case 1050: TotalStates.Mzone += item.params[0]

                    break;
                case 1051: TotalStates.Mmono += item.params[0]

                    break;
                case 1052: TotalStates.Mmelee += item.params[0]

                    break;
                case 1053: TotalStates.Mdist += item.params[0]

                    break;
                case 1055: TotalStates.Mzerk += item.params[0]

                    break;
                case 1056: TotalStates.Mcrit -= item.params[0]

                    break;
                case 1060: TotalStates.Mdist -= item.params[0]

                    break;
                case 1061: TotalStates.Mzerk -= item.params[0]

                    break;
                case 1062: TotalStates.Rcrit -= item.params[0]

                    break;
                case 1063: TotalStates.Rdos -= item.params[0]

                    break;
                case 1068: let boucle = 0
                    switch (item.params[2]) {
                        case 1:

                          
                            switch (true) {
                                case selectedElem.Mair: TotalStates.Mair += item.params[0]; 
                                case selectedElem.Mfeu: TotalStates.Mfeu += item.params[0]; 
                                case selectedElem.Meau: TotalStates.Meau += item.params[0]; 
                                case selectedElem.Mterre: TotalStates.Mterre += item.params[0]; 
                            }

                            break;
                        case 2:

                           
                            switch (true) {
                                case selectedElem.Mair: TotalStates.Mair += item.params[0]; 
                                case selectedElem.Mfeu: TotalStates.Mfeu += item.params[0]; 
                                case selectedElem.Meau: TotalStates.Meau += item.params[0]; 
                                case selectedElem.Mterre: TotalStates.Mterre += item.params[0]; 
                            }

                        case 3:

                            switch (true) {
                                case selectedElem.Mair: TotalStates.Mair += item.params[0]; 
                                case selectedElem.Mfeu: TotalStates.Mfeu += item.params[0]; 
                                case selectedElem.Meau: TotalStates.Meau += item.params[0]; 
                                case selectedElem.Mterre: TotalStates.Mterre += item.params[0]; 
                            }


                            break;
                    }
                    break;
                case 1069: 
                    switch (item.params[2]) {
                        case 1:

                            
                            switch (true) {

                                case selectedElem.Rair: TotalStates.Rair += item.params[0]; boucle++
                                case selectedElem.Rfeu: TotalStates.Rfeu += item.params[0]; boucle++
                                case selectedElem.Reau: TotalStates.Reau += item.params[0]; boucle++
                                case selectedElem.Rterre: TotalStates.Rterre += item.params[0]; boucle++
                            }


                        case 2:

                            
                            switch (true) {
                                case selectedElem.Rair: TotalStates.Rair += item.params[0]; boucle++
                                case selectedElem.Rfeu: TotalStates.Rfeu += item.params[0]; boucle++
                                case selectedElem.Reau: TotalStates.Reau += item.params[0]; boucle++
                                case selectedElem.Rterre: TotalStates.Rterre += item.params[0]; boucle++
                            }

                        case 3:

                          
                            switch (true) {
                                case selectedElem.Rair: TotalStates.Rair += item.params[0]; boucle++
                                case selectedElem.Rfeu: TotalStates.Rfeu += item.params[0]; boucle++
                                case selectedElem.Reau: TotalStates.Reau += item.params[0]; boucle++
                                case selectedElem.Rterre: TotalStates.Rterre += item.params[0]; boucle++
                            }

                    }
                    break;
            }
        })
    });
    runeFormat.forEach(item => {
        item.forEach(element => {
            let value = 0
            if (element.couleur !== 0) {
    let maitrsies = [0, 1, 3, 4, 6, 10, 13, 15, 18, 24, 30]
                switch (element.effet[0]) {
                    case 0:
                        
                        value = maitrsies[element.lv]
                        if (element.effet[1] === 0 || element.effet[1] === 5) {
                            TotalStates.Mmono += 2 * value
                        } else {
                            TotalStates.Mmono += value
                        }
                        break;
                    case 1:
                       
                        value = maitrsies[element.lv]
                        if (element.effet[1] === 1 || element.effet[1] === 8) {
                            TotalStates.Mzone += 2 * value
                        } else {
                            TotalStates.Mzone += value
                        }
                        break;
                    case 2:
                       
                        value = maitrsies[element.lv]
                        if (element.effet[1] === 0 || element.effet[1] === 6) {
                            TotalStates.Mmelee += 2 * value
                        } else {
                            TotalStates.Mmelee += value
                        }
                        break;
                    case 3:
                       
                        value = maitrsies[element.lv]
                        if (element.effet[1] === 7 || element.effet[1] === 9) {
                            TotalStates.Mdist += 2 * value
                        } else {
                            TotalStates.Mdist += value
                        }
                        break;
                    case 4:
                        value = element.lv <= 5 ? element.lv * 2 : element.lv === 6 ? 14 : element.lv <= 9 ? 14 + (element.lv - 6) * 6 : 40
                        if (element.effet[1] === 1 || element.effet[1] === 6) {
                            TotalStates.Mzerk += 2 * value
                        } else {
                            TotalStates.Mzerk += value
                        }
                        break;
                    case 5:
                        value = element.lv % 2 === 0 ? (element.lv / 2) * 5 : (((element.lv - 1) / 2) * 5) + 2
                        if (element.effet[1] === 2 || element.effet[1] === 5) {
                            TotalStates.Rterre += 2 * value
                        } else {
                            TotalStates.Rterre += value
                        }
                        break;
                    case 6:
                
                        value = maitrsies[element.lv]
                        if (element.effet[1] === 6 || element.effet[1] === 9) {
                            TotalStates.Mcrit += 2 * value
                        } else {
                            TotalStates.Mcrit += value
                        }
                        break;
                    case 7:
      
                        value = maitrsies[element.lv]
                        if (element.effet[1] === 7 || element.effet[1] === 5) {
                            TotalStates.Mdos += 2 * value
                        } else {
                            TotalStates.Mdos += value
                        }
                        break;
                    case 8:
                        value = element.lv <= 5 ? element.lv * 3 : element.lv === 6 ? 21 : element.lv <= 9 ? 21 + (element.lv - 6) * 9 : 60
                        if (element.effet[1] === 3 || element.effet[1] === 4) {
                            TotalStates.esq += 2 * value
                        } else {
                            TotalStates.esq += value
                        }
                        break;
                    case 9:
                        value = element.lv <= 5 ? element.lv * 2 : element.lv === 6 ? 14 : element.lv <= 9 ? 14 + (element.lv - 6) * 6 : 40
                        if (element.effet[1] === 1 || element.effet[1] === 6) {
                            TotalStates.ini += 2 * value
                        } else {
                            TotalStates.ini += value
                        }
                        break;
                    case 10:
                        value = element.lv % 2 === 0 ? (element.lv / 2) * 5 : (((element.lv - 1) / 2) * 5) + 2
                        if (element.effet[1] === 2 || element.effet[1] === 8) {
                            TotalStates.Rfeu += 2 * value
                        } else {
                            TotalStates.Rfeu += value
                        }
                        break;
                    case 11:
                        value = element.lv <= 5 ? element.lv  : element.lv === 6 ? 7 : element.lv <= 9 ? 7 + (element.lv - 6) * 3 : 20
                        if (element.effet[1] === 2 || element.effet[1] === 6) {
                            TotalStates.Mfeu += 2 * value
                            TotalStates.Meau += 2 * value
                            TotalStates.Mair += 2 * value
                            TotalStates.Mterre += 2 * value


                        } else {
                            TotalStates.Mfeu += value
                            TotalStates.Meau += value
                            TotalStates.Mair += value
                            TotalStates.Mterre += value
                        }
                        break;
                    case 12:
                        value = element.lv <= 5 ? element.lv * 3 : element.lv === 6 ? 21 : element.lv <= 9 ? 21 + (element.lv - 6) * 9 : 60
                        if (element.effet[1] === 3 || element.effet[1] === 4) {
                            TotalStates.tac += 2 * value
                        } else {
                            TotalStates.tac += value
                        }
                        break;
                    case 13:
                        value = element.lv % 2 === 0 ? (element.lv / 2) * 5 : (((element.lv - 1) / 2) * 5) + 2
                        if (element.effet[1] === 2 || element.effet[1] === 7) {
                            TotalStates.Reau += 2 * value
                        } else {
                            TotalStates.Reau += value
                        }
                        break;
                    case 14:
                        value = element.lv % 2 === 0 ? (element.lv / 2) * 5 : (((element.lv - 1) / 2) * 5) + 2
                        if (element.effet[1] === 2 || element.effet[1] === 6) {
                            TotalStates.Rair += 2 * value
                        } else {
                            TotalStates.Rair += value
                        }
                        break;
                    case 15:
                        value = element.lv <= 5 ? element.lv * 4 : element.lv === 6 ? 28 : element.lv <= 9 ? 28 + (element.lv - 6) * 12 : 80
                        if (element.effet[1] === 0 || element.effet[1] === 9) {
                            TotalStates.pv += 2 * value
                        } else {
                            TotalStates.pv += value
                        }
                        break;
                    case 16:
                        value = element.lv <= 5 ? element.lv * 2 : element.lv === 6 ? 14 : element.lv <= 9 ? 14 + (element.lv - 6) * 6 : 40
                        if (element.effet[1] === 1 || element.effet[1] === 7) {
                            TotalStates.Msoin += 2 * value
                        } else {
                            TotalStates.Msoin += value
                        }
                        break;


                }
            }
        })
    })
    TotalStates.pv=(TotalStates.pv+(aptitude.pdv*20))*(1+((aptitude.pv*4)/100))-((TotalStates.pv+(aptitude.pdv*20))*(1+((aptitude.pv*4)/100))%1)
    TotalStates.pa+=aptitude.PA
    TotalStates.pm+=aptitude.PM
    TotalStates.pw+=aptitude.PW
    TotalStates.Meau+= aptitude.Melem*5
    TotalStates.Mfeu+= aptitude.Melem*5
    TotalStates.Mair+=aptitude.Melem*5
    TotalStates.Mterre+= aptitude.Melem*5
    TotalStates.DI+= aptitude.DI*10
    TotalStates.soinR+= aptitude.soinR*6
    TotalStates.ccp+= aptitude.Crit
    TotalStates.prd+= aptitude.PRD
    TotalStates.ini+= aptitude.Ini*4
    TotalStates.po+= aptitude.PO
    TotalStates.esq+= aptitude.tacesq*4+aptitude.esq*6
    TotalStates.tac+=aptitude.tacesq*4+aptitude.tac*6
    TotalStates.ctrl+= aptitude.ctrl
    TotalStates.vol+= aptitude.vol
    TotalStates.Mcrit+= aptitude.Mcrit*4
    TotalStates.Rcrit+= aptitude.Rcrit*4
    TotalStates.Mdos+= aptitude.Mdos*6
    TotalStates.Rdos+= aptitude.Rdos*4
    TotalStates.Mmelee+= aptitude.Mmelee*8
    TotalStates.Mdist+= aptitude.Mdist*8
    TotalStates.Mmono+=aptitude.Mmono *8
    TotalStates.Mzone+=aptitude.Mzone*8
    TotalStates.Msoin+=aptitude.Msoin*6
    TotalStates.Mzerk+=aptitude.Mzerk*8
    TotalStates.Rfeu+= aptitude.res*10+aptitude.Relelm*50
    TotalStates.Reau+=aptitude.res*10+aptitude.Relelm*50
    TotalStates.Rair+= aptitude.res*10+aptitude.Relelm*50
    TotalStates.Rterre+= aptitude.res*10+aptitude.Relelm*50
    
    const Stat = ({ image, titre, value }) => {
        const length = value.toString().length
        return (
            <View style={{ flexDirection: 'row', borderColor: '#d47b6a', borderWidth: 2, borderRadius: 7, alignItems: 'center' }}>

                <Image style={{}} source={image} />
                <Text style={{ color: 'white', paddingRight: 20 - (2 * length), fontSize: 15 }}>{titre}</Text>
                <Text style={{ color: 'white', paddingRight: 10, fontSize: 15 }}>{value}</Text>
            </View>
        )
    }
    const StatCombat = ({ image, titre, value }) => {
        return (
            <View style={{ flexDirection: 'row', borderColor: '#d47b6a', borderWidth: 2, borderRadius: 7, padding: 3, width: 190, justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={{ marginRight: 6, resizeMode: 'contain', width: 20 }} source={image} />
                    <Text style={{ color: 'white', textAlign: 'left' }}>{titre}</Text></View>
                <Text style={{ color: 'white', textAlign: 'right' }}>{value}</Text>
            </View>
        )
    }
    const Maitrise = ({ ??l??ment, degat, resistance, value1, value2 }) => {
        const resistanceP = (1 - Math.pow(0.8, value2 / 100)) * 100 - ((1 - Math.pow(0.8, value2 / 100)) * 100) % 1
        return (
            <View style={{ flexDirection: 'row', borderColor: '#d47b6a', borderWidth: 2, borderRadius: 7, padding: 3, height: 35, width: 190, alignItems: 'center', flexWrap: 'nowrap' }}>
                <Image style={{ resizeMode: 'contain', width: 25 }} source={??l??ment} />
                <Image style={{ resizeMode: 'contain', width: 25 }} source={degat} />
                <Text style={{ color: 'white', }}>{value1}</Text>
                <Image style={{ resizeMode: 'contain', width: 25 }} source={resistance} />
                <Text style={{ color: 'white', }}>{resistanceP}%({value2})</Text>
            </View>)
    }
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#191b24' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', height: 30 }}>
                <TouchableOpacity style={selectedElem.Meau ? { margin: 10, opacity: 1 } : { margin: 10, opacity: 0.6 }} onPress={() => {
                    dispatch(setSelectedElement({
                        Mfeu: true,
                        Mair: true,
                        Meau: false,
                        Mterre: true,
                        Rfeu: selectedElem.Rfeu,
                        Rair: selectedElem.Rair,
                        Reau: selectedElem.Reau,
                        Rterre: selectedElem.Rterre
                    }))
                }}>
                    <ImageBackground style={{ width: 30, height: 30 }} source={require('../images/caracs/h-mastery.png')}>
                        <Image style={{ resizeMode: 'contain', width: 25 }} source={require('../images/caracs/water.png')} /></ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={selectedElem.Mfeu ? { margin: 10, opacity: 1 } : { margin: 10, opacity: 0.6 }} onPress={() => {
                    dispatch(setSelectedElement({
                        Mfeu: false,
                        Mair: true,
                        Meau: true,
                        Mterre: true,
                        Rfeu: selectedElem.Rfeu,
                        Rair: selectedElem.Rair,
                        Reau: selectedElem.Reau,
                        Rterre: selectedElem.Rterre
                    }))
                }}>
                    <ImageBackground style={{ width: 30, height: 30 }} source={require('../images/caracs/h-mastery.png')}>
                        <Image style={{ resizeMode: 'contain', width: 25 }} source={require('../images/caracs/fire.png')} /></ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={selectedElem.Mair ? { margin: 10, opacity: 1 } : { margin: 10, opacity: 0.6 }} onPress={() => {
                    dispatch(setSelectedElement({
                        Mfeu: true,
                        Mair: false,
                        Meau: true,
                        Mterre: true,
                        Rfeu: selectedElem.Rfeu,
                        Rair: selectedElem.Rair,
                        Reau: selectedElem.Reau,
                        Rterre: selectedElem.Rterre
                    }))
                }}>
                    <ImageBackground style={{ width: 30, height: 30 }} source={require('../images/caracs/h-mastery.png')}>
                        <Image style={{ resizeMode: 'contain', width: 25 }} source={require('../images/caracs/wind.png')} /></ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={selectedElem.Mterre ? { margin: 10, opacity: 1 } : { margin: 10, opacity: 0.6 }} onPress={() => {
                    dispatch(setSelectedElement({
                        Mfeu: true,
                        Mair: true,
                        Meau: true,
                        Mterre: false,
                        Rfeu: selectedElem.Rfeu,
                        Rair: selectedElem.Rair,
                        Reau: selectedElem.Reau,
                        Rterre: selectedElem.Rterre
                    }))
                }}>
                    <ImageBackground style={{ width: 30, height: 30 }} source={require('../images/caracs/h-mastery.png')}>
                        <Image style={{ resizeMode: 'contain', width: 25 }} source={require('../images/caracs/earth.png')} /></ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={selectedElem.Reau ? { margin: 10, opacity: 1 } : { margin: 10, opacity: 0.6 }} onPress={() => {
                    dispatch(setSelectedElement({
                        Mfeu: selectedElem.Mfeu,
                        Mair: selectedElem.Mair,
                        Meau: selectedElem.Meau,
                        Mterre: selectedElem.Mterre,
                        Rfeu: true,
                        Rair: true,
                        Reau: false,
                        Rterre: true
                    }))
                }}>
                    <ImageBackground style={{ width: 30, height: 30 }} source={require('../images/caracs/h-resistance.png')}>
                        <Image style={{ resizeMode: 'contain', width: 25 }} source={require('../images/caracs/water.png')} /></ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={selectedElem.Rfeu ? { margin: 10, opacity: 1 } : { margin: 10, opacity: 0.6 }} onPress={() => {
                    dispatch(setSelectedElement({
                        Mfeu: selectedElem.Mfeu,
                        Mair: selectedElem.Mair,
                        Meau: selectedElem.Meau,
                        Mterre: selectedElem.Mterre,
                        Rfeu: false,
                        Rair: true,
                        Reau: true,
                        Rterre: true
                    }))
                }}>
                    <ImageBackground style={{ width: 30, height: 30 }} source={require('../images/caracs/h-resistance.png')}>
                        <Image style={{ resizeMode: 'contain', width: 25 }} source={require('../images/caracs/fire.png')} /></ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={selectedElem.Rair ? { margin: 10, opacity: 1 } : { margin: 10, opacity: 0.6 }} onPress={() => {
                    dispatch(setSelectedElement({
                        Mfeu: selectedElem.Mfeu,
                        Mair: selectedElem.Mair,
                        Meau: selectedElem.Meau,
                        Mterre: selectedElem.Mterre,
                        Rfeu: true,
                        Rair: false,
                        Reau: true,
                        Rterre: true
                    }))
                }}>
                    <ImageBackground style={{ width: 30, height: 30 }} source={require('../images/caracs/h-resistance.png')}>
                        <Image style={{ resizeMode: 'contain', width: 25 }} source={require('../images/caracs/wind.png')} /></ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={selectedElem.Rterre ? { margin: 10, opacity: 1 } : { margin: 10, opacity: 0.6 }} onPress={() => {
                    dispatch(setSelectedElement({
                        Mfeu: selectedElem.Mfeu,
                        Mair: selectedElem.Mair,
                        Meau: selectedElem.Meau,
                        Mterre: selectedElem.Mterre,
                        Rfeu: true,
                        Rair: true,
                        Reau: true,
                        Rterre: false
                    }))
                }}>
                    <ImageBackground style={{ width: 30, height: 30 }} source={require('../images/caracs/h-resistance.png')}>
                        <Image style={{ resizeMode: 'contain', width: 25 }} source={require('../images/caracs/earth.png')} /></ImageBackground>
                </TouchableOpacity>
            </View>

            <ImageBackground style={{ width: 420, height: 750, marginTop: 10, marginRight: 7, marginTop: 5 }} source={require('../images/caracs/body2.png')}>
                <View style={{ width: 400, marginHorizontal: 3, marginTop: 34, flexDirection: 'row', justifyContent: 'space-around' }} >
                    <Stat image={require('../images/caracs/hp.webp')} titre='PV' value={TotalStates.pv} />
                    <Stat image={require('../images/caracs/pa.webp')} titre='PA' value={TotalStates.pa} />
                    <Stat image={require('../images/caracs/pm.webp')} titre='PM' value={TotalStates.pm} />
                    <Stat image={require('../images/caracs/pw.webp')} titre='PW' value={TotalStates.pw} />
                </View>
                <View style={{ flexWrap: 'wrap', flexDirection: 'row', width: 390, marginLeft: 8, marginTop: 42, justifyContent: 'space-around' }}>
                    <Maitrise ??l??ment={require('../images/caracs/water.png')} degat={require('../images/caracs/h-mastery.png')} resistance={require('../images/caracs/h-resistance.png')} value1={TotalStates.Meau} value2={TotalStates.Reau} />
                    <Maitrise ??l??ment={require('../images/caracs/wind.png')} degat={require('../images/caracs/h-mastery.png')} resistance={require('../images/caracs/h-resistance.png')} value1={TotalStates.Mair} value2={TotalStates.Rair} />
                    <Maitrise ??l??ment={require('../images/caracs/fire.png')} degat={require('../images/caracs/h-mastery.png')} resistance={require('../images/caracs/h-resistance.png')} value1={TotalStates.Mfeu} value2={TotalStates.Rfeu} />
                    <Maitrise ??l??ment={require('../images/caracs/earth.png')} degat={require('../images/caracs/h-mastery.png')} resistance={require('../images/caracs/h-resistance.png')} value1={TotalStates.Mterre} value2={TotalStates.Rterre} />
                </View>
                <View style={{ flexWrap: 'wrap', flexDirection: 'row', width: 390, marginLeft: 7, marginTop: 35, justifyContent: 'space-between' }}>
                    <StatCombat image={require('../images/caracs/damage.webp')} titre='Dommages inflig??s' value={TotalStates.DI} />
                    <StatCombat image={require('../images/caracs/healing_done.webp')} titre='Soin r??alis??s' value={TotalStates.soinR} />
                    <StatCombat image={require('../images/caracs/criticalhit.webp')} titre='Coup critique' value={TotalStates.ccp} />
                    <StatCombat image={require('../images/caracs/block.webp')} titre='Parade' value={TotalStates.prd} />
                    <StatCombat image={require('../images/caracs/initiative.webp')} titre='Initiative' value={TotalStates.ini} />
                    <StatCombat image={require('../images/caracs/range.webp')} titre='PO' value={TotalStates.po} />
                    <StatCombat image={require('../images/caracs/dodge.webp')} titre='Esquive' value={TotalStates.esq} />
                    <StatCombat image={require('../images/caracs/tackle.webp')} titre='Tacle' value={TotalStates.tac} />
                    <StatCombat image={require('../images/caracs/wisdom.webp')} titre='Sagesse' value={TotalStates.sasa} />
                    <StatCombat image={require('../images/caracs/prospection.webp')} titre='Prospection' value={TotalStates.pp} />
                    <StatCombat image={require('../images/caracs/control.webp')} titre='Controle' value={TotalStates.ctrl} />
                    <StatCombat image={require('../images/caracs/kit_skill.webp')} titre='Art du Barda' value={TotalStates.adb} />

                </View >
                <View style={{ marginLeft: 7 }}>
                    <StatCombat image={require('../images/caracs/will.webp')} titre='Volont??' value={0} /></View>
                <View style={{ flexWrap: 'wrap', flexDirection: 'row', width: 390, marginLeft: 7, marginTop: 37, justifyContent: 'space-between' }}>
                    <StatCombat image={require('../images/caracs/critical_mastery.webp')} titre='Maitrise Critique' value={TotalStates.Mcrit} />
                    <StatCombat image={require('../images/caracs/critical_resistance.webp')} titre='Resistance Critique' value={TotalStates.Rcrit} />
                    <StatCombat image={require('../images/caracs/rear_mastery.webp')} titre='Maitrise Dos' value={TotalStates.Mdos} />
                    <StatCombat image={require('../images/caracs/rear_resistance.webp')} titre='Resistance Dos' value={TotalStates.Rdos} />
                    <StatCombat image={require('../images/caracs/melee_mastery.webp')} titre='Maitrise Melee' value={TotalStates.Mmelee} />
                    <StatCombat image={require('../images/caracs/range_mastery.webp')} titre='Maitrise Distance' value={TotalStates.Mdist} />
                    <StatCombat image={require('../images/caracs/singletarget_mastery.webp')} titre='Maitrise Monocible' value={TotalStates.Mmono} />
                    <StatCombat image={require('../images/caracs/area_mastery.webp')} titre='Maitrise Zone' value={TotalStates.Mzone} />
                    <StatCombat image={require('../images/caracs/healing_done.webp')} titre='Maitrise Soin' value={TotalStates.Msoin} />
                    <StatCombat image={require('../images/caracs/berserk_mastery.webp')} titre='Maitrise Berserk' value={TotalStates.Mzerk} />
                    <StatCombat image={require('../images/caracs/given_armor.webp')} titre='% Armure donn??e' value={TotalStates.ard} />
                    <StatCombat image={require('../images/caracs/received_armor.webp')} titre='% Armure re??ue' value={TotalStates.arr} />
                </View>
            </ImageBackground>
        </ScrollView>
    )
}
export default CaracView