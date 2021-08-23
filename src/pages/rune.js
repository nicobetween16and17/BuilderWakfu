import React from 'react'
import { FlatList, TouchableOpacity, View, Image, Text, ScrollView } from 'react-native'
import { SliderPicker } from 'react-native-slider-picker';
import { useSelector,useDispatch } from 'react-redux';
import { setCurrentRune } from '../redux/actions/actions';
const Runes = () => {
    const dispatch=useDispatch()
    const RuneLv = useSelector((state)=>state.runeLV.lv)
    const selected = useSelector((state)=>state.currentRune.rune.effet[0])
    const Chasses = [require('../images/forge/shard_white_empty.webp'),
    require('../images/forge/shard_blue_full.webp'),
    require('../images/forge/shard_green_full.webp'),
    require('../images/forge/shard_red_full.webp'),
    require('../images/forge/shard_white_full.webp')]
    const equips = [
        { id: 0, source: require('../images/forge/helmet.png') }
        , { id: 1, source: require('../images/forge/necklace.png') }
        , { id: 2, source: require('../images/forge/breastplate.png') }
        , { id: 3, source: require('../images/forge/ring.png') }
        , { id: 4, source: require('../images/forge/ring.png') }
        , { id: 5, source: require('../images/forge/boots.png') }
        , { id: 6, source: require('../images/forge/cape.png') }
        , { id: 7, source: require('../images/forge/epaulettes.png') }
        , { id: 8, source: require('../images/forge/belt.png') }
        , { id: 9, source: require('../images/forge/one_handed_weapon.png') }
       
    ]

    const Items = ({ nom, image, bonus,effet }) => {
        let couleur=0
        effet <6 ?couleur = 3:effet<11?couleur=2 :couleur=1 
        let opacity
        effet === selected ? opacity=1:opacity=0.6
        return (
            <View style={{ width: 400, margin: 2 }}>
                <TouchableOpacity style={{ flexDirection: 'row', opacity: opacity }} onPress={()=>{
                   dispatch(setCurrentRune({lv:RuneLv,effet:[effet,0],couleur:couleur}))
                }}>
                    <Image style={{ width: 39, height: 39 }} source={image} />
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row',borderColor:'white',borderWidth:2,width:350  }}>
                        <Text style={{ color: 'white', fontSize: 19 }}>{nom}</Text>
                        <View style={{flexDirection:'row'}}>
                       <Image style={{ width: 39, height: 39 }} source={bonus[0].source} />
                       <Image style={{ width: 39, height: 39 }} source={bonus[1].source} /></View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <ScrollView style={{ backgroundColor: '#191b24', flex: 1}} contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
            <SliderPicker minLabel={''} midLabel={''} maxLabel={''} maxValue={10}
                callback={position => {

                }}
                defaultValue={10}
                labelFontColor={"white"}
                labelFontWeight={'600'}
                showFill={true}
                fillColor={'#d47b6a'}
                labelFontWeight={'bold'}
                showNumberScale={false}
                showSeparatorScale={true}
                buttonBackgroundColor={'#d47b6a'}
                buttonBorderColor={"#d47b6a"}
                buttonBorderWidth={1}
                scaleNumberFontWeight={'150'}
                buttonDimensionsPercentage={6}
                heightPercentage={1}
                widthPercentage={80}
            />
            <View style={{justifyContent: 'center',alignItems: 'center', width:400,margin:1,borderColor:'white',borderWidth:2 }}>
                <Items nom='Maitrise Monocible' image={Chasses[3]} bonus={[equips[0], equips[5]]}  effet={0}/>
                <Items nom='Maitrise Zone' image={Chasses[3]} bonus={[equips[1], equips[8]]}  effet={1}/>
                <Items nom='Maitrise Mélée' image={Chasses[3]} bonus={[equips[0], equips[6]]}  effet={2}/>
                <Items nom='Maitrise Distance' image={Chasses[3]} bonus={[equips[8], equips[9]]} effet={3}/>
                <Items nom='Maitrise Berserk' image={Chasses[3]} bonus={[equips[1], equips[6]]} effet={4}/>
                <Items nom='Résistance Terre' image={Chasses[3]} bonus={[equips[2], equips[5]]} effet={5}/>
                <Items nom='Maitrise Critique' image={Chasses[2]} bonus={[equips[7], equips[9]]} effet={6}/>
                <Items nom='Maitrise Dos' image={Chasses[2]} bonus={[equips[8], equips[5]]} effet={7}/>
                <Items nom='Esquive' image={Chasses[2]} bonus={[equips[3], equips[4]]} effet={8}/>
                <Items nom='Initiative' image={Chasses[2]} bonus={[equips[1], equips[6]]} effet={9}/>
                <Items nom='Résistance Feu' image={Chasses[2]} bonus={[equips[2], equips[8]]} effet={10}/>
                <Items nom='Maitrise Elémentaire' image={Chasses[1]} bonus={[equips[2], equips[6]]} effet={11}/>
                <Items nom='Tacle' image={Chasses[1]} bonus={[equips[3], equips[4]]} effet={12}/>
                <Items nom='Résistance Eau' image={Chasses[1]} bonus={[equips[2], equips[7]]} effet={13}/>
                <Items nom='Résistance Air' image={Chasses[1]} bonus={[equips[2], equips[6]]} effet={14}/>
                <Items nom='Vie' image={Chasses[1]} bonus={[equips[0], equips[9]]} effet={15}/>
                <Items nom='Maitrise Soin' image={Chasses[1]} bonus={[equips[1], equips[7]]} effet={16}/>
            </View>
        </ScrollView>
    )
}
export default Runes