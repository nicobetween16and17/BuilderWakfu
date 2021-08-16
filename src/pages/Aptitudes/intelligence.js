import React, { Component, useCallback, useState } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import { setbarrier, setccP, setctrl, setDI, setesq, setinit, setmCrit, setmDist, setmDos, setmElem, setmMelee, setmMono, setmSoin, setmZerk, setmZone, setpa, setparade, setpdv, setpm, setpo, setpvAr, setpvP, setpw, setRES, setresCrit, setresDos, setresElem, setsoinR, settac, settacEsq, setvol } from '../../redux/actions/actions';
import { Apptitude } from './apptitudes';
const Intelligence=()=>{
    const dispatch = useDispatch()
    const pvP = useSelector((state)=>state.Apv.pv) 
    const res = useSelector((state)=>state.Ares.res) 
    const barrier = useSelector((state)=>state.Abar.barrier) 
    const soinR = useSelector((state)=>state.Asoinr.soinR)
    const pvAr = useSelector((state)=>state.Apvar.pvAr)


    return(
        <ScrollView style={{ backgroundColor: '#191b24', flex: 1, paddingLeft: 5, }} contentContainerStyle={{ justifyContent: 'space-around' }}>
        <View style={{ alignItems: 'center', justifyContent: 'space-around', marginVertical: 20 }}>
                <Apptitude apptitudeLink={require('../../images/aptitudes/apt_hp.webp')} apptitudeName=' % Point de vie' value={pvP} maxvalue='∞' setter={(value) => {
                    console.log(value)
                    dispatch(setpvP(value))
                }} />
                <Apptitude apptitudeLink={require('../../images/aptitudes/apt_resistanceelem.webp')} apptitudeName=' Resistance' value={res} maxvalue={10} setter={(value) => {
                    console.log(value)
                    dispatch(setRES(value))
                }} />
                <Apptitude apptitudeLink={require('../../images/aptitudes/apt_bareer.webp')} apptitudeName=' Barrière' value={barrier} maxvalue={10} setter={(value) =>  dispatch(setbarrier(value))} />
                <Apptitude apptitudeLink={require('../../images/aptitudes/apt_healthreceived.webp')} apptitudeName=' Soin Reçu' value={soinR} maxvalue={5} setter={(value) =>  dispatch(setsoinR(value))} />
                <Apptitude apptitudeLink={require('../../images/aptitudes/apt_hpasarmor.webp')} apptitudeName=' % Points de vie en armure' value={pvAr} maxvalue={10} setter={(value) =>  dispatch(setpvAr(value))} />
            </View></ScrollView>
    )
}
export default Intelligence