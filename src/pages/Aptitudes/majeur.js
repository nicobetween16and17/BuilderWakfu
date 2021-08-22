import React, { Component, useState } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import { setbarrier, setccP, setctrl, setDI, setesq, setinit, setmCrit, setmDist, setmDos, setmElem, setmMelee, setmMono, setmSoin, setmZerk, setmZone, setpa, setparade, setpdv, setpm, setpo, setpvAr, setpvP, setpw, setRES, setresCrit, setresDos, setresElem, setsoinR, settac, settacEsq, setvol } from '../../redux/actions/actions';
import { Apptitude } from './apptitudes';
const Majeur=()=>{
    const dispatch = useDispatch()
    const pa = useSelector((state)=>state.aptitude.PA)
    const pm = useSelector((state)=>state.aptitude.PM)
    const po = useSelector((state)=>state.aptitude.PO)
    const pw = useSelector((state)=>state.aptitude.PW)
    const ctrl = useSelector((state)=>state.aptitude.ctrl)
    const DI = useSelector((state)=>state.aptitude.DI)
    const resElem = useSelector((state)=>state.aptitude.Relelm)
    const nbpoint = useSelector((state)=>state.Buildlevel.aptitude.majeur)
    return(
        <ScrollView style={{ backgroundColor: '#191b24', flex: 1, paddingLeft: 5, }} contentContainerStyle={{ justifyContent: 'space-around' }}>
        <View style={{ alignItems: 'center', justifyContent: 'space-around', marginBottom: 20 }}>
        <Text style={{color:'white',textAlign:'center'}}>{nbpoint}</Text>
                <Apptitude apptitudeLink={require('../../images/aptitudes/apt_pa.webp')} apptitudeName=" Point d'Action" value={pa} maxvalue={1} setter={(value) =>  dispatch(setpa(value))} formule={3}/>
                <Apptitude apptitudeLink={require('../../images/aptitudes/apt_pm.webp')} apptitudeName=' Point de Mouvement' value={pm} maxvalue={1} setter={(value) =>  dispatch(setpm(value))}formule={3} />
                <Apptitude apptitudeLink={require('../../images/aptitudes/apt_range.webp')} apptitudeName=' Portée et Dégats' value={po} maxvalue={1} setter={(value) =>  dispatch(setpo(value))} formule={3}/>
                <Apptitude apptitudeLink={require('../../images/aptitudes/apt_wakfupoint.webp')} apptitudeName='Point de Wakfu' value={pw} maxvalue={1} setter={(value) =>  dispatch(setpw(value))} formule={3}/>
                <Apptitude apptitudeLink={require('../../images/aptitudes/apt_control.webp')} apptitudeName=' Controle et Dégats' value={ctrl} maxvalue={1} setter={(value) =>  dispatch(setctrl(value))} formule={3}/>
                <Apptitude apptitudeLink={require('../../images/aptitudes/apt_rawdamages.webp')} apptitudeName=' % Dommages infligés' value={DI} maxvalue={1} setter={(value) =>  dispatch(setDI(value))} formule={3}/>
                <Apptitude apptitudeLink={require('../../images/aptitudes/apt_reselem.webp')} apptitudeName=' Résistance élémentaire' value={resElem} maxvalue={1} setter={(value) =>  dispatch(setresElem(value))} formule={3}/>
            </View></ScrollView>
    )
}
export default Majeur