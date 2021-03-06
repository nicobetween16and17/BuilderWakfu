import React, { Component, useState } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import { setbarrier, setccP, setctrl, setDI, setesq, setinit, setmCrit, setmDist, setmDos, setmElem, setmMelee, setmMono, setmSoin, setmZerk, setmZone, setpa, setparade, setpdv, setpm, setpo, setpvAr, setpvP, setpw, setRES, setresCrit, setresDos, setresElem, setsoinR, settac, settacEsq, setvol } from '../../redux/actions/actions';
import { Apptitude } from './apptitudes';
const Agility=()=>{
    const dispatch = useDispatch()
    const tacEsq = useSelector((state)=>state.aptitude.tacesq)
    const esq = useSelector((state)=>state.aptitude.esq)
    const init= useSelector((state)=>state.aptitude.Ini)
    const tac = useSelector((state)=>state.aptitude.tac)
    const vol = useSelector((state)=>state.aptitude.vol)
    const nbpoint = useSelector((state)=>state.Buildlevel.aptitude.agility)
    return(
        <ScrollView style={{ backgroundColor: '#191b24', flex: 1, paddingLeft: 5, }} contentContainerStyle={{ justifyContent: 'space-around' }}>
           <Text style={{color:'white',textAlign:'center'}}>{nbpoint}</Text>
        <View style={{ alignItems: 'center', justifyContent: 'space-around', marginBottom: 20 }}>
                <Apptitude apptitudeLink={require('../../images/aptitudes/apt_tackledodge.webp')} apptitudeName=' Tacle/Esquive' value={tacEsq} maxvalue='∞' setter={(value) =>  dispatch(settacEsq(value)) } formule={0}/>
                <Apptitude apptitudeLink={require('../../images/aptitudes/apt_dodge.webp')} apptitudeName=' Esquive' value={esq} maxvalue='∞' setter={(value) =>  dispatch(setesq(value))} formule={0}/>
                <Apptitude apptitudeLink={require('../../images/aptitudes/apt_init.webp')} apptitudeName=' Initiative' value={init} maxvalue={20} setter={(value) =>  dispatch(setinit(value))} formule={0}/>
                <Apptitude apptitudeLink={require('../../images/aptitudes/apt_tackle.webp')} apptitudeName=' Tacle' value={tac} maxvalue='∞' setter={(value) =>  dispatch(settac(value))} formule={0}/>
                <Apptitude apptitudeLink={require('../../images/aptitudes/apt_will.webp')} apptitudeName=' Volonté' value={vol} maxvalue={20} setter={(value) =>  dispatch(setvol(value))} formule={0}/>
            </View></ScrollView>
    )
}
export default Agility