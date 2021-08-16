import React, { Component, useEffect, useRef, useState } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setbarrier, setccP, setctrl, setDI, setesq, setinit, setmCrit, setmDist, setmDos, setmElem, setmMelee, setmMono, setmSoin, setmZerk, setmZone, setpa, setparade, setpdv, setpm, setpo, setpvAr, setpvP, setpw, setRES, setresCrit, setresDos, setresElem, setsoinR, settac, settacEsq, setvol } from '../../redux/actions/actions';
export const Apptitude = ({ apptitudeLink, apptitudeName, value, maxvalue, setter, }) => {

    const timerId = useRef(null);
    const incr = useRef(0);

    useEffect(() => {
        incr.current = value;
    }, [])

    function addStart(time) {
        if (maxvalue !== '∞' && maxvalue <= value ) {
            return;
        }
        

        incr.current = incr.current + 1;
        console.log(`AddStart -> ${value} / ${incr.current} (${time})`);
        setter(incr.current);

        timerId.current = setTimeout(() => addStart(time - 200), time);
    }
    function addStop() {
        clearTimeout(timerId.current)
    }
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
                            console.log(`Press -> ${value}`);
                            console.log('press IN')
                            addStart(1000);
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
