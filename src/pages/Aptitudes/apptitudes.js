import React, { Component, useRef, useState } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setbarrier, setccP, setctrl, setDI, setesq, setinit, setmCrit, setmDist, setmDos, setmElem, setmMelee, setmMono, setmSoin, setmZerk, setmZone, setpa, setparade, setpdv, setpm, setpo, setpvAr, setpvP, setpw, setRES, setresCrit, setresDos, setresElem, setsoinR, settac, settacEsq, setvol } from '../../redux/actions/actions';
export const Apptitude = ({ apptitudeLink, apptitudeName, value, maxvalue, setter, }) => {

    const timerId = useRef(null);

    function addStart() {
        if (maxvalue !== '∞' && maxvalue <= value ) {
            return;
        }

        setter(value + 1);
        timerId.current = setTimeout(addStart, 100);

    }
    function addStop() {
        clearTimeout(timerId.current)
    }
    console.log('COUCOU');
    return (
        <View style={{ justifyContent: 'space-between', borderWidth: 2, borderColor: '#d780d9', flexDirection: 'row', width: 320, padding: 3, margin: 2 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <Image source={apptitudeLink} />
                <Text style={{ color: 'white' }}>{apptitudeName}</Text>
            </View >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: 'white' }}>{value}/{maxvalue}</Text></View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5 }}>
                    <TouchableOpacity onPress={() => {
                        if (value > 0) {
                            setter(value - 1)
                        }
                    }}
                    >
                        <Image style={{ resizeMode: 'contain', width: 15, height: 15 }} source={require('../../images/aptitudes/-.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPressIn={() => {
                            console.log('press IN')
                            addStart();
                        }}
                        onPressOut={() => {
                            console.log('press OUT')
                            addStop()
                        }}
                    >
                        <Image style={{ resizeMode: 'contain', width: 15, height: 15, }} source={require('../../images/aptitudes/+.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setter(0)
                    }}
                    >
                        <Text style={{ color: 'white' }}>0</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
