import React, { useState, useEffect } from 'react'
import { TouchableHighlight, View, Image, TouchableOpacity, Text, ImageBackground } from 'react-native'
import { SliderPicker } from 'react-native-slider-picker';
import { Picker } from '@react-native-picker/picker';
import { setBuildLevel, setClasse, setLevel, setRarity, setType } from '../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
const Buildoverview = () => {

    const [classe, setclasse] = useState(2)
    const classes = ['Ecaflip', 'Feca', 'Xelor', 'Zobal', 'Huppermage', 'Eliotrope', 'Sacrieur', 'Cra', 'Ouginak', 'Pandawa', 'Steamer', 'Sram', 'Roublard', 'Eniripsa', 'Sadida', 'Iop', 'Enutrof', 'Osamodas']
    const [level, setlevel] = useState(useSelector((state) => state.level.content))
    const nav = useNavigation()
    const casque = useSelector((state) => state.casque.content)
    const cape = useSelector((state) => state.cape.content)
    const amu = useSelector((state) => state.amu.content)
    const epau = useSelector((state) => state.epau.content)
    const plastron = useSelector((state) => state.plastron.content)
    const ceinture = useSelector((state) => state.ceinture.content)
    const anneau1 = useSelector((state) => state.anneau1.content)
    const anneau2 = useSelector((state) => state.anneau2.content)
    const bottes = useSelector((state) => state.bottes.content)
    const familier = useSelector((state) => state.familier.content)
    const monture = useSelector((state) => state.monture.content)
    const secondemain = useSelector((state) => state.secondemain.content)
    const main = useSelector((state) => state.main.content)
    const embleme = useSelector((state) => state.embleme.content)
    const laclasse = useSelector((state) => state.classe.content)
    const test = {
        Steamer: require('../images/modèles/steam.png'),
        Eca: require('../images/modèles/eca.png'),
        Feca: require('../images/modèles/feca.png'),
        Osa: require('../images/modèles/osa.png'),
        Enu: require('../images/modèles/enu.png'),
        Sram: require('../images/modèles/sram.png'),
        Xelor: require('../images/modèles/xelor.png'),
        Eni: require('../images/modèles/eni.png'),
        Iop: require('../images/modèles/iop.png'),
        Cra: require('../images/modèles/cra.png'),
        Sadi: require('../images/modèles/sadida.png'),
        Sacrieur: require('../images/modèles/sacrieur.png'),
        Panda: require('../images/modèles/panda.png'),
        Roublard: require('../images/modèles/roub.png'),
        Zob: require('../images/modèles/zobal.png'),
        Ougi: require('../images/modèles/ougi.png'),
        Elio: require('../images/modèles/elio.png'),
        Hupper: require('../images/modèles/hupper.png')
    }
    useEffect(() => {
        setImgClasse(laclasseu)
    }, [laclasse])
    const laclasseu = () => {
        switch (laclasse) {
            case 'Steamer':
                return test.Steamer
                break;
            case 'Ouginak':
                return test.Ougi
                break;
            case 'Sacrieur':
                return test.Sacrieur
                break;
            case 'Ecaflip':
                return test.Eca
                break;
            case 'Enutrof':
                return test.Enu
                break;
            case 'Eniripsa':
                return test.Eni
                break;
            case 'Zobal':
                return test.Zob
                break;
            case 'Pandawa':
                return test.Panda
                break;
            case 'Huppermage':
                return test.Hupper
                break;
            case 'Eliotrope':
                return test.Elio
                break;
            case 'Sram':
                return test.Sram
                break;
            case 'Xelor':
                return test.Xelor
                break;
            case 'Roublard':
                return test.Roublard
                break;
            case 'Sadida':
                return test.Sadi
                break;
            case 'Osamodas':
                return test.Osa
                break;
            case 'Feca':
                return test.Feca
                break;
            case 'Cra':
                return test.Cra
                break;
            case 'Iop':
                return test.Iop
                break;
        }
    }
    const [ImgClasse, setImgClasse] = useState(laclasseu)
    console.log('classe: ', laclasse)
    const dispatch = useDispatch()
    return (
        <View style={{ marginTop: 0, width: 412, height: '100%', alignItems: 'center' }}>


            <Picker
                style={{ width: 300 }}
                dropdownIconColor='#d47b6a'
                mode='dropdown'
                color='#d47b6a'
                selectedValue={classe}
                onValueChange={(itemValue, itemIndex) => {
                    setclasse(itemValue)

                    console.log('TEST', classes[itemValue]);
                    dispatch(setClasse(classes[itemValue]))

                }
                }>
                <Picker.Item style={{ color: '#d47b6a' }} label="Eca" value={0} />
                <Picker.Item style={{ color: '#d47b6a' }} label="Feca" value={1} />
                <Picker.Item style={{ color: '#d47b6a' }} label="Xelor" value={2} />
                <Picker.Item style={{ color: '#d47b6a' }} label="Zobal" value={3} />
                <Picker.Item style={{ color: '#d47b6a' }} label="Hupper" value={4} />
                <Picker.Item style={{ color: '#d47b6a' }} label="Elio" value={5} />
                <Picker.Item style={{ color: '#d47b6a' }} label="Sacri" value={6} />
                <Picker.Item style={{ color: '#d47b6a' }} label="Cra" value={7} />
                <Picker.Item style={{ color: '#d47b6a' }} label="Ougi" value={8} />
                <Picker.Item style={{ color: '#d47b6a' }} label="Panda" value={9} />
                <Picker.Item style={{ color: '#d47b6a' }} label="Steamer" value={10} />
                <Picker.Item style={{ color: '#d47b6a' }} label="Sram" value={11} />
                <Picker.Item style={{ color: '#d47b6a' }} label="Roub" value={12} />
                <Picker.Item style={{ color: '#d47b6a' }} label="Eni" value={13} />
                <Picker.Item style={{ color: '#d47b6a' }} label="Sadi" value={14} />
                <Picker.Item style={{ color: '#d47b6a' }} label="Iop" value={15} />
                <Picker.Item style={{ color: '#d47b6a' }} label="Enu" value={16} />
                <Picker.Item style={{ color: '#d47b6a' }} label="Osa" value={17} />
            </Picker>
            <SliderPicker minLabel={''} midLabel={''} maxLabel={''} maxValue={215}
                callback={position => {
                    let tranchelevel = 0
                    switch (true) {
                        case position < 20: tranchelevel = position
                            break;
                        case position < 35: tranchelevel = 20
                            break;
                        case position < 50: tranchelevel = 35
                            break;
                        case position < 65: tranchelevel = 50
                            break;
                        case position < 80: tranchelevel = 65
                            break;
                        case position < 95: tranchelevel = 80
                            break;
                        case position < 110: tranchelevel = 95
                            break;
                        case position < 125: tranchelevel = 110
                            break;
                        case position < 140: tranchelevel = 125
                            break;
                        case position < 155: tranchelevel = 140
                            break;
                        case position < 170: tranchelevel = 155
                            break;

                        case position < 185: tranchelevel = 170
                            break;
                        case position < 200: tranchelevel = 185
                            break;
                        case position < 215: tranchelevel = 200
                            break;
                        case position === 215: tranchelevel = 215
                            break;
                    }
                    setlevel(tranchelevel)
                    dispatch(setBuildLevel(tranchelevel))
                }}
                defaultValue={0}
                labelFontColor={"white"}
                labelFontWeight={'600'}
                showFill={true}
                fillColor={'green'}
                labelFontWeight={'bold'}
                showNumberScale={true}
                showSeparatorScale={true}
                buttonBackgroundColor={'#d47b6a'}
                buttonBorderColor={"#d47b6a"}
                buttonBorderWidth={1}
                scaleNumberFontWeight={'300'}
                buttonDimensionsPercentage={6}
                heightPercentage={1}
                widthPercentage={60}
            />
            <Text style={{ color: '#d47b6a' }}>{level}</Text>
            <View style={{}}>
                <TouchableOpacity onPress={() => {
                    //cape
                    dispatch(setLevel(level))
                    dispatch(setType([132, 118]))
                    dispatch(setRarity(4))
                    nav.navigate('Search', { screen: 'Result' })
                }} style={{ position: 'absolute', top: 40, left: 130 }}>
                    {cape === '../images/equipement/cape.png' ? <Image style={{ height: 65, width: 65, }} source={require('../images/equipement/cape.png')} />
                        :
                        <ImageBackground style={{ height: 65, width: 65, }}source ={require('../images/equipement/cadre.png')}>
                            <Image style = {{resizeMode:'contain'}} source={{uri:''}}/>
                        </ImageBackground>}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    //epau
                    dispatch(setLevel(level))
                    dispatch(setType([138, 118]))
                    dispatch(setRarity(4))
                    nav.navigate('Search', { screen: 'Result' })
                }} style={{ position: 'absolute', top: 105, left: 130 }}>
                    <Image style={{ height: 65, width: 65, }} source={require('../images/equipement/épau.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    //ceinture
                    dispatch(setLevel(level))
                    dispatch(setType([133, 118]))
                    dispatch(setRarity(4))
                    nav.navigate('Search', { screen: 'Result' })
                }} style={{ position: 'absolute', top: 170, left: 130 }}>
                    <Image style={{ height: 65, width: 65, }} source={require('../images/equipement/ceinture.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    //anneau
                    dispatch(setLevel(level))
                    dispatch(setType([103, 118]))
                    dispatch(setRarity(4))
                    nav.navigate('Search', { screen: 'Result' })
                }} style={{ position: 'absolute', top: 235, left: 130 }}>
                    <Image style={{ height: 65, width: 65, }} source={require('../images/equipement/anneau2.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    //familier
                    dispatch(setLevel(level))
                    dispatch(setType([]))
                    dispatch(setRarity(4))
                    nav.navigate('Search', { screen: 'Result' })
                }} style={{ position: 'absolute', top: 300, left: 130 }}>
                    <Image style={{ height: 65, width: 65, }} source={require('../images/equipement/pet.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    //casque
                    dispatch(setLevel(level))
                    dispatch(setType([134, 118]))
                    dispatch(setRarity(4))
                    nav.navigate('Search', { screen: 'Result' })
                }} style={{ position: 'absolute', top: 40, right: 130 }}>
                    <Image style={{ height: 65, width: 65, }} source={require('../images/equipement/casque.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    //amu
                    dispatch(setLevel(level))
                    dispatch(setType([120, 118]))
                    dispatch(setRarity(4))
                    nav.navigate('Search', { screen: 'Result' })
                }} style={{ position: 'absolute', top: 105, right: 130 }}>
                    <Image style={{ height: 65, width: 65, }} source={require('../images/equipement/amu.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    //plastron
                    dispatch(setLevel(level))
                    dispatch(setType([136, 118]))
                    dispatch(setRarity(4))
                    nav.navigate('Search', { screen: 'Result' })
                }} style={{ position: 'absolute', top: 170, right: 130 }}>
                    <Image style={{ height: 65, width: 65, }} source={require('../images/equipement/plastron.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    //anneau
                    dispatch(setLevel(level))
                    dispatch(setType([103, 118]))
                    dispatch(setRarity(4))
                    nav.navigate('Search', { screen: 'Result' })
                }} style={{ position: 'absolute', top: 235, right: 130 }}>
                    <Image style={{ height: 65, width: 65, }} source={require('../images/equipement/anneau1.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    //bottes
                    dispatch(setLevel(level))
                    dispatch(setType([119, 118]))
                    dispatch(setRarity(4))
                    nav.navigate('Search', { screen: 'Result' })
                }} style={{ position: 'absolute', top: 300, right: 130 }}>
                    <Image style={{ height: 65, width: 65, }} source={require('../images/equipement/bottes.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    //secondemain
                    dispatch(setLevel(level))
                    dispatch(setType([112, 189, 520]))
                    dispatch(setRarity(4))
                    nav.navigate('Search', { screen: 'Result' })
                }} style={{ position: 'absolute', top: 400, right: 65 }}>
                    <Image style={{ height: 65, width: 65, }} source={require('../images/equipement/mainG.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    //unemain/deuxmain
                    dispatch(setLevel(level))
                    dispatch(setType([108, 110, 113, 115, 254, 518, 101, 111, 114, 117, 223, 519]))
                    dispatch(setRarity(4))
                    nav.navigate('Search', { screen: 'Result' })
                }} style={{ position: 'absolute', top: 400, right: 0 }}>
                    <Image style={{ height: 65, width: 65, }} source={require('../images/equipement/mainD.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    //embleme
                    dispatch(setLevel(level))
                    dispatch(setType([646, 521]))
                    dispatch(setRarity(4))
                    nav.navigate('Search', { screen: 'Result' })
                }} style={{ position: 'absolute', top: 400, left: 0 }}>
                    <Image style={{ height: 65, width: 65, }} source={require('../images/equipement/embleme.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    //monture 
                    dispatch(setLevel(level))
                    dispatch(setType([]))
                    dispatch(setRarity(4))
                    nav.navigate('Search', { screen: 'Result' })
                }} style={{ position: 'absolute', top: 400, left: 65 }}>
                    <Image style={{ height: 65, width: 65, }} source={require('../images/equipement/pet.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 60, width: 300, alignItems: 'center' }}>
                <Image style={{ resizeMode: 'contain', height: 325 }} source={ImgClasse} />
            </View>



        </View>
    )
}
export default Buildoverview