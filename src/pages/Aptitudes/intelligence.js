import React, { Component, useCallback, useState,useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import { setbarrier, setccP, setctrl, setDI, setesq, setinit, setmCrit, setmDist, setmDos, setmElem, setmMelee, setmMono, setmSoin, setmZerk, setmZone, setpa, setparade, setpdv, setpm, setpo, setpvAr, setpvP, setpw, setRES, setresCrit, setresDos, setresElem, setsoinR, settac, settacEsq, setvol } from '../../redux/actions/actions';
import { Apptitude } from './apptitudes';
const Intelligence=()=>{
    const dispatch = useDispatch()
    const pvP = useSelector((state)=>state.aptitude.pv) 
    const res = useSelector((state)=>state.aptitude.res) 
    const barrier = useSelector((state)=>state.aptitude.barrier) 
    const soinR = useSelector((state)=>state.aptitude.soinR)
    const pvAr = useSelector((state)=>state.aptitude.pvAr)
    const nbpoint = useSelector((state)=>state.Buildlevel.aptitude.intell)

    return(
        <ScrollView style={{ backgroundColor: '#191b24', flex: 1, paddingLeft: 5, }} contentContainerStyle={{ justifyContent: 'space-around' }}>
        <View style={{ alignItems: 'center', justifyContent: 'space-around', marginVertical: 20 }}>
        <Text style={{color:'white',textAlign:'center'}}>{nbpoint}</Text>
                <Apptitude apptitudeLink={require('../../images/aptitudes/apt_hp.webp')} apptitudeName=' % Point de vie' value={pvP} maxvalue='∞' setter={(value) => { dispatch(setpvP(value))}} formule={2}/>
                <Apptitude apptitudeLink={require('../../images/aptitudes/apt_resistanceelem.webp')} apptitudeName=' Resistance' value={res} maxvalue={10} setter={(value) => {dispatch(setRES(value))}} formule={2}/>
                <Apptitude apptitudeLink={require('../../images/aptitudes/apt_bareer.webp')} apptitudeName=' Barrière' value={barrier} maxvalue={10} setter={(value) =>  dispatch(setbarrier(value))} formule={2}/>
                <Apptitude apptitudeLink={require('../../images/aptitudes/apt_healthreceived.webp')} apptitudeName=' Soin Reçu' value={soinR} maxvalue={5} setter={(value) =>  dispatch(setsoinR(value))}formule={2} />
                <Apptitude apptitudeLink={require('../../images/aptitudes/apt_hpasarmor.webp')} apptitudeName=' % Points de vie en armure' value={pvAr} maxvalue={10} setter={(value) =>  dispatch(setpvAr(value))}formule={2} />
            </View></ScrollView>
    )
}
export default Intelligence