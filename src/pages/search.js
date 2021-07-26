import React, { Component, useState, useEffect } from 'react';
import { Button, FlatList, Text, View, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { SliderPicker } from 'react-native-slider-picker';
import ResultatRecherche from './resultatRecherche.js';

const Search = () => {

    const [rarity, setrarity] = useState(1)
    const [levelmin, setlevelmin] = useState(15)
    const [rarityName, setrarityName] = useState(optionname(rarity))
    const [Afficher, setAfficher] = useState(false)
    useEffect(()=>{
        console.log('Afficher: ', Afficher)
    },[Afficher])
    useEffect(() => {
        console.log('RARETÉ_INT: ', rarity)
        setAfficher(false)
    }, [rarity])
    useEffect(() => {
        console.log('RARETÉ_STRING: ', rarityName)
    }, [rarityName])
    useEffect(() => {
        console.log('LEVEL: ', levelmin - 15, '-', levelmin)
        setAfficher(false)
    }, [levelmin])
    function optionname(prop) {
        switch (prop) {
            case 1: return ('Commun')
            case 2: return ('Inhabituel')
            case 3: return ('Rare')
            case 4: return ('Mythique')
            case 5: return ('Légendaire')
            case 6: return ('Relique')
            case 7: return ('Souvenir')
            case 8: return ('Epique')
        }
    }
    const setPosition = (position) => {
        returnedValue = 0
        positionIndex = (position * 2.15) - (position * 2.15) % 1
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
        <View style={{ flex: 1, backgroundColor: '#191b24' }}>
             {/* Picker rareté */}
            <Picker id='picker'
                dropdownIconColor='#89d6ce'
                mode='dropdown'
                color='#89d6ce'
                selectedValue={rarity}
                onValueChange={(itemValue, itemIndex) => {
                    setrarity(itemValue)
                    setrarityName(optionname(itemValue))

                }
                }>
                <Picker.Item style={{ color: '#89d6ce' }} label="Inhabituel" value={1} />
                <Picker.Item style={{ color: '#89d6ce' }} label="Normal" value={2} />
                <Picker.Item style={{ color: '#89d6ce' }} label="Rare" value={3} />
                <Picker.Item style={{ color: '#89d6ce' }} label="Mythique" value={4} />
                <Picker.Item style={{ color: '#89d6ce' }} label="Légendaire" value={5} />
                <Picker.Item style={{ color: '#89d6ce' }} label="Relique" value={6} />
                <Picker.Item style={{ color: '#89d6ce' }} label="Souvenir" value={7} />
                <Picker.Item style={{ color: '#89d6ce' }} label="Épique" value={8} />
            </Picker>
            {/* Picker stuff */}
            <Picker id='picker2'
                dropdownIconColor='#89d6ce'
                mode='dropdown'
                color='#89d6ce'
                selectedValue={rarity}
                onValueChange={(itemValue, itemIndex) => {
                    setrarity(itemValue)
                    setrarityName(optionname(itemValue))

                }
                }>
                <Picker.Item style={{ color: '#89d6ce' }} label="Arme à une main" value={1} />
                <Picker.Item style={{ color: '#89d6ce' }} label="Seconde main" value={2} />
                <Picker.Item style={{ color: '#89d6ce' }} label="Rare" value={3} />
                <Picker.Item style={{ color: '#89d6ce' }} label="Mythique" value={4} />
                <Picker.Item style={{ color: '#89d6ce' }} label="Légendaire" value={5} />
                <Picker.Item style={{ color: '#89d6ce' }} label="Relique" value={6} />
                <Picker.Item style={{ color: '#89d6ce' }} label="Souvenir" value={7} />
                <Picker.Item style={{ color: '#89d6ce' }} label="Épique" value={8} />
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
            <Button title='SEARCH' onPress={()=>{setAfficher(true)}} />
            {Afficher ?
                 (<ResultatRecherche />)
                :
                (<View><Text style={{color:'#89d6ce',textAlign:'center',margin:2}}>Tranche de niveau: [{levelmin - 15}-{levelmin}]</Text></View>)
            }

        </View>
    )
}
export default Search