import React, { Component, useState } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import { setbarrier, setccP, setctrl, setDI, setesq, setinit, setmCrit, setmDist, setmDos, setmElem, setmMelee, setmMono, setmSoin, setmZerk, setmZone, setpa, setparade, setpdv, setpm, setpo, setpvAr, setpvP, setpw, setRES, setresCrit, setresDos, setresElem, setsoinR, settac, settacEsq, setvol } from '../../redux/actions/actions';
import { Apptitude } from './apptitudes';
const Chance=()=>{
    const dispatch = useDispatch()
    const ccP = useSelector((state)=>state.aptitude.Crit)
    const parade = useSelector((state)=>state.aptitude.PRD)
    const mCrit = useSelector((state)=>state.aptitude.Mcrit)
    const mDos = useSelector((state)=>state.aptitude.Mdos)
    const mZerk = useSelector((state)=>state.aptitude.Mzerk)
    const mSoin = useSelector((state)=>state.aptitude.Msoin)
    const resDos = useSelector((state)=>state.aptitude.Rdos)
    const resCrit = useSelector((state)=>state.aptitude.Rcrit)
    return(
        <ScrollView style={{ backgroundColor: '#191b24', flex: 1, paddingLeft: 5, }} contentContainerStyle={{ justifyContent: 'space-around' }}>
        <View style={{ alignItems: 'center', justifyContent: 'space-around', marginBottom: 20 }}>
                <Apptitude apptitudeLink={require('../../images/aptitudes/apt_criticalhit.webp')} apptitudeName=' % Coup Critique' value={ccP} maxvalue={20} setter={(value) =>  dispatch(setccP(value))} />
                <Apptitude apptitudeLink={require('../../images/aptitudes/apt_block.webp')} apptitudeName=' % Parade' value={parade} maxvalue={20} setter={(value) =>  dispatch(setparade(value))} />
                <Apptitude apptitudeLink={require('../../images/aptitudes/apt_masterycritical.webp')} apptitudeName=' Maitrise Critique' value={mCrit} maxvalue='∞' setter={(value) =>  dispatch(setmCrit(value))} />
                <Apptitude apptitudeLink={require('../../images/aptitudes/apt_rearmastery.webp')} apptitudeName=' Maitrise Dos' value={mDos} maxvalue='∞' setter={(value) =>  dispatch(setmDos(value))} />
                <Apptitude apptitudeLink={require('../../images/aptitudes/apt_berserkmastery.webp')} apptitudeName=' Maitrise Berserk' value={mZerk} maxvalue='∞' setter={(value) =>  dispatch(setmZerk(value))} />
                <Apptitude apptitudeLink={require('../../images/aptitudes/apt_masteryhealth.webp')} apptitudeName=' Maitrise Soin' value={mSoin} maxvalue='∞' setter={(value) =>  dispatch(setmSoin(value))} />
                <Apptitude apptitudeLink={require('../../images/aptitudes/apt_rearresist.webp')} apptitudeName=' Resistance Dos' value={resDos} maxvalue={20} setter={(value) =>  dispatch(setresDos(value))} />
                <Apptitude apptitudeLink={require('../../images/aptitudes/apt_resistcritical.webp')} apptitudeName=' Resistance Critique' value={resCrit} maxvalue={20} setter={(value) =>  dispatch(setresCrit(value))} />
            </View></ScrollView>
    )
}
export default Chance