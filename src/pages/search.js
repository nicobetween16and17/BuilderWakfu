import React, { Component, useState, useEffect } from 'react';
import { Button, FlatList, Text, View, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { SliderPicker } from 'react-native-slider-picker';
import { useNavigation } from '@react-navigation/native';
import { levelReducer } from '../redux/reducers/SearchReducer';
import { setLevel, setRarity, setType } from '../redux/actions/actions';
import { useDispatch } from 'react-redux';

const Search = () => {
const nav = useNavigation()
const dispatch = useDispatch()
    const [rarity, setrarity] = useState(1)
    const [levelmin, setlevelmin] = useState(15)
    const [rarityName, setrarityName] = useState(optionname(rarity))
    const [equipType, setequipType] = useState([108, 110, 113, 115, 254, 518])
   
    const [selected, setselected] = useState(0)

    useEffect(() => {
        console.log('RARETÉ_INT: ', rarity)
    }, [rarity])
    useEffect(() => {
        console.log('RARETÉ_STRING: ', rarityName)
    }, [rarityName])
    useEffect(() => {
        console.log('LEVEL: ', levelmin - 15, '-', levelmin)
    }, [levelmin])
    function optionname(prop) {
        switch (prop) {
            
            case 0: return ('Inhabituel')
            case 1: return ('Commun')
            case 2: return ('Rare')
            case 3: return ('Mythique')
            case 4: return ('Légendaire')
            case 5: return ('Relique')
            case 6: return ('Souvenir')
            case 7: return ('Epique')
        }
    }
    const setRange = (position) => {
        let returnedRange = []
        switch (position) {
            case 1: returnedRange = [108, 110, 113, 115, 254, 518]
                break;
            case 2: returnedRange = [112, 189, 520]
                break;
            case 3: returnedRange = [101, 111, 114, 117, 223, 519]
                break;
            case 4: returnedRange = [134, 118]
                break;
            case 5: returnedRange = [132, 118]
                break;
            case 6: returnedRange = [119, 118]
                break;
            case 7: returnedRange = [133, 118]
                break;
            case 8: returnedRange = [103, 118]
                break;
            case 9: returnedRange = [138, 118]
                break;
            case 10: returnedRange = [136, 118]
                break;
            case 11: returnedRange = [120, 118]
                break;
            case 12: returnedRange = [646, 521]
                break;


        }
        console.log('TYPE_EQUIP: ',returnedRange,'test 118 in range: ',returnedRange.includes(118))
        return returnedRange
    }
    const setPosition = (position) => {
        let returnedValue = 0
        let positionIndex = (position * 2.15) - (position * 2.15) % 1
        console.log('position index:', positionIndex)
        switch (true) {
            case position === 0: returnedValue = 15
                break;
            case ((position * 2.15) - (position * 2.15) % 1) <= 20: returnedValue = 20
                break;
            case ((position * 2.15) - (position * 2.15) % 1) <= 35: returnedValue = 35
                break;
            case ((position * 2.15) - (position * 2.15) % 1) <= 50: returnedValue = 50
                break;
            case ((position * 2.15) - (position * 2.15) % 1) <= 65: returnedValue = 65
                break;
            case ((position * 2.15) - (position * 2.15) % 1) <= 80: returnedValue = 80
                break;
            case ((position * 2.15) - (position * 2.15) % 1) <= 95: returnedValue = 95
                break;
            case ((position * 2.15) - (position * 2.15) % 1) <= 110: returnedValue = 110
                break;
            case ((position * 2.15) - (position * 2.15) % 1) <= 125: returnedValue = 125
                break;
            case ((position * 2.15) - (position * 2.15) % 1) <= 140: returnedValue = 140
                break;
            case ((position * 2.15) - (position * 2.15) % 1) <= 155: returnedValue = 155
                break;
            case ((position * 2.15) - (position * 2.15) % 1) <= 170: returnedValue = 170
                break;
            case ((position * 2.15) - (position * 2.15) % 1) <= 185: returnedValue = 185
                break;
            case ((position * 2.15) - (position * 2.15) % 1) <= 200: returnedValue = 200
                break;
            case ((position * 2.15) - (position * 2.15) % 1) <= 215: returnedValue = 215
                break;
        }
        return returnedValue;
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#191b24',zIndex:2}}>
            <View style={{backgroundColor: '#191b24',position:'absolute',top:0,right:0,left:0}}>
            {/* Picker rareté */}
            <Picker
            
             id='picker'
                dropdownIconColor='#89d6ce'
                mode='dropdown'
                color='#89d6ce'
                selectedValue={rarity}
                onValueChange={(itemValue, itemIndex) => {
                    setrarity(itemValue)
                    setrarityName(optionname(itemValue))

                }
                }>
                <Picker.Item style={{ color: '#89d6ce' }} label="Inhabituel" value={0} />
                <Picker.Item style={{ color: '#89d6ce' }} label="Normal" value={1} />
                <Picker.Item style={{ color: '#89d6ce' }} label="Rare" value={2} />
                <Picker.Item style={{ color: '#89d6ce' }} label="Mythique" value={3} />
                <Picker.Item style={{ color: '#89d6ce' }} label="Légendaire" value={4} />
                <Picker.Item style={{ color: '#89d6ce' }} label="Relique" value={5} />
                <Picker.Item style={{ color: '#89d6ce' }} label="Souvenir" value={6} />
                <Picker.Item style={{ color: '#89d6ce' }} label="Épique" value={7} />
            </Picker>
            {/* Picker stuff */}
            <Picker id='picker2'
            
                dropdownIconColor='#89d6ce'
                mode='dropdown'
                color='#89d6ce'
                selectedValue={selected}
                onValueChange={(itemValue, itemIndex) => {
                    setequipType(setRange(itemValue))
                    setselected(itemValue)
                    
                    

                }
                }>
                <Picker.Item style={{ color: '#89d6ce' }} label="Arme à une main" value={1} />
                <Picker.Item style={{ color: '#89d6ce' }} label="Seconde main" value={2} />
                <Picker.Item style={{ color: '#89d6ce' }} label="Arme a deux main" value={3} />
                <Picker.Item style={{ color: '#89d6ce' }} label="Coiffe" value={4} />
                <Picker.Item style={{ color: '#89d6ce' }} label="Cape" value={5} />
                <Picker.Item style={{ color: '#89d6ce' }} label="Bottes" value={6} />
                <Picker.Item style={{ color: '#89d6ce' }} label="Ceinture" value={7} />
                <Picker.Item style={{ color: '#89d6ce' }} label="Anneaux" value={8} />
                <Picker.Item style={{ color: '#89d6ce' }} label="Épaulettes" value={9} />
                <Picker.Item style={{ color: '#89d6ce' }} label="Plastron" value={10} />
                <Picker.Item style={{ color: '#89d6ce' }} label="Amulette" value={11} />
                <Picker.Item style={{ color: '#89d6ce' }} label="Embleme" value={12} />
            </Picker>
            {/* Picker level */}
            <SliderPicker
            
                minLabel={'0'}
                midLabel={'110'}
                maxLabel={'215'}
                maxValue={100}

                callback={position => {
                    setlevelmin(setPosition(position))
                
                }}
                defaultValue={0}
                labelFontColor={"white"}
                labelFontWeight={'600'}
                showFill={true}
                fillColor={'green'}
                labelFontWeight={'bold'}
                showNumberScale={true}
                showSeparatorScale={true}
                buttonBackgroundColor={'#fff'}
                buttonBorderColor={"#6c7682"}
                buttonBorderWidth={1}
                scaleNumberFontWeight={'300'}
                buttonDimensionsPercentage={6}
                heightPercentage={1}
                widthPercentage={80}
            />
            <View style={{alignItems:'center'}}>
            <Button  color='#89d6ce' title='SEARCH' onPress={() => {    
                 dispatch(setLevel(levelmin))
                 dispatch(setType(equipType))
                 dispatch(setRarity(rarity))           
                 nav.navigate('Search', { screen: 'Result'}) }} />
            </View></View>
           
            <View style={{marginTop:250}}><Text style={{ color: '#89d6ce', textAlign: 'center', margin: 2 }}>Tranche de niveau: [{levelmin - 15}-{levelmin}] | Rareté:{rarityName}</Text></View>
            

        </View>
    )
   
}
export default Search