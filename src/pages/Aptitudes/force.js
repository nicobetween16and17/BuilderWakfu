import React, { Component, useState } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import { setbarrier, setccP, setctrl, setDI, setesq, setinit, setmCrit, setmDist, setmDos, setmElem, setmMelee, setmMono, setmSoin, setmZerk, setmZone, setpa, setparade, setpdv, setpm, setpo, setpvAr, setpvP, setpw, setRES, setresCrit, setresDos, setresElem, setsoinR, settac, settacEsq, setvol } from '../../redux/actions/actions';
import { Apptitude } from './apptitudes';
const Force=()=>{
    const dispatch = useDispatch()
    const mElem = useSelector((state)=>state.Amelem.Melem)
    const mMono = useSelector((state)=>state.Ammono.Mmono)
    const mZone = useSelector((state)=>state.Amzone.Mzone)
    const mMelee = useSelector((state)=>state.Ammelee.Mmelee)
    const mDist = useSelector((state)=>state.Amdist.Mdist)
    const pdv = useSelector((state)=>state.Apdv.pdv)
    return(
        <ScrollView style={{ backgroundColor: '#191b24', flex: 1, paddingLeft: 5, }} contentContainerStyle={{ justifyContent: 'space-around' }}>
        <View style={{ alignItems: 'center', justifyContent: 'space-around', marginBottom: 20 }}>
                <Apptitude apptitudeLink={require('../../images/aptitudes/apt_elemmastery.webp')} apptitudeName=' Maitrise Elementaire' value={mElem} maxvalue='∞' setter={(value) =>  dispatch(setmElem(value))} />
                <Apptitude apptitudeLink={require('../../images/aptitudes/apt_masterymono.webp')} apptitudeName=' Maitrise Monocible' value={mMono} maxvalue={20} setter={(value) =>  dispatch(setmMono(value))} />
                <Apptitude apptitudeLink={require('../../images/aptitudes/apt_masteryarea.webp')} apptitudeName=' Maitrise Zone' value={mZone} maxvalue={20} setter={(value) =>  dispatch(setmZone(value))} />
                <Apptitude apptitudeLink={require('../../images/aptitudes/apt_masterymelee.webp')} apptitudeName=' Maitrise Mélée' value={mMelee} maxvalue={20} setter={(value) =>  dispatch(setmMelee(value))} />
                <Apptitude apptitudeLink={require('../../images/aptitudes/apt_masteryrange.webp')} apptitudeName=' Maitrise Distance' value={mDist} maxvalue={20} setter={(value) =>  dispatch(setmDist(value))} />
                <Apptitude apptitudeLink={require('../../images/aptitudes/apt_rawhp.webp')} apptitudeName=' Points de vie' value={pdv} maxvalue='∞' setter={(value) => setpdv(value)} />
            </View></ScrollView>
    )
}
export default Force