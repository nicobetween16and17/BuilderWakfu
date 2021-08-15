import React, { Component, useState } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import { setbarrier, setccP, setctrl, setDI, setesq, setinit, setmCrit, setmDist, setmDos, setmElem, setmMelee, setmMono, setmSoin, setmZerk, setmZone, setpa, setparade, setpdv, setpm, setpo, setpvAr, setpvP, setpw, setRES, setresCrit, setresDos, setresElem, setsoinR, settac, settacEsq, setvol } from '../redux/actions/actions';
const Aptitudes = () => {
    const dispatch = useDispatch()
    const [timer, settimer] = useState()
    //
    const pvP = useSelector((state)=>state.apptitude.pv) 
    const res = useSelector((state)=>state.apptitude.res) 
    const barrier = useSelector((state)=>state.apptitude.barrier) 
    const soinR = useSelector((state)=>state.apptitude.soinR)
    const pvAr = useSelector((state)=>state.apptitude.pvAr)
    //
    const mElem = useSelector((state)=>state.apptitude.Melem)
    const mMono = useSelector((state)=>state.apptitude.Mmono)
    const mZone = useSelector((state)=>state.apptitude.Mzone)
    const mMelee = useSelector((state)=>state.apptitude.Mmelee)
    const mDist = useSelector((state)=>state.apptitude.Mdist)
    const pdv = useSelector((state)=>state.apptitude.pdv)
    
    const tacEsq = useSelector((state)=>state.apptitude.tacesq)
    const esq = useSelector((state)=>state.apptitude.Ini)
    const init= useSelector((state)=>state.apptitude.tac)
    const tac = useSelector((state)=>state.apptitude.esq)
    const vol = useSelector((state)=>state.apptitude.vol)
    //
    const ccP = useSelector((state)=>state.apptitude.Crit)
    const parade = useSelector((state)=>state.apptitude.PRD)
    const mCrit = useSelector((state)=>state.apptitude.Mcrit)
    const mDos = useSelector((state)=>state.apptitude.Mdos)
    const mZerk = useSelector((state)=>state.apptitude.Mzerk)
    const mSoin = useSelector((state)=>state.apptitude.Msoin)
    const resDos = useSelector((state)=>state.apptitude.Rdos)
    const resCrit = useSelector((state)=>state.apptitude.Rcrit)
    //
    const pa = useSelector((state)=>state.apptitude.PA)
    const pm = useSelector((state)=>state.apptitude.PM)
    const po = useSelector((state)=>state.apptitude.PO)
    const pw = useSelector((state)=>state.apptitude.PW)
    const ctrl = useSelector((state)=>state.apptitude.ctrl)
    const DI = useSelector((state)=>state.apptitude.DI)
    const resElem = useSelector((state)=>state.apptitude.Relelm)

    const Apptitude = ({ apptitudeLink, apptitudeName, value, maxvalue, setter, }) => {
        function add(boolean) {
            if(boolean){
                setter(value+1)
            settimer(setTimeout(add(true),1000))
            }
            
        }
        function stop() {
            clearTimeout(timer)
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
                            <Image style={{ resizeMode: 'contain', width: 15, height: 15 }} source={require('../images/aptitudes/-.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPressIn={() => {
                                console.log('press IN')
                                if(maxvalue==='∞'){
                                    setter(value + 1)
                                }else if(maxvalue>value){
                                    setter(value + 1)
                                }
                            }}
                            onPressOut={() => {
                                console.log('press OUT')
                           
                               
                            }}
                        >
                            <Image style={{ resizeMode: 'contain', width: 15, height: 15, }} source={require('../images/aptitudes/+.png')} />
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
    return (
        <ScrollView style={{ backgroundColor: '#191b24', flex: 1, paddingLeft: 5, }} contentContainerStyle={{ justifyContent: 'space-around' }}>
            <View style={{ alignItems: 'center', justifyContent: 'space-around', marginVertical: 20 }}>
                <Apptitude apptitudeLink={require('../images/aptitudes/apt_hp.webp')} apptitudeName=' % Point de vie' value={pvP} maxvalue='∞' setter={(value) => {
                    console.log(value)
                    dispatch(setpvP(value))
                }} />
                <Apptitude apptitudeLink={require('../images/aptitudes/apt_resistanceelem.webp')} apptitudeName=' Resistance' value={res} maxvalue={10} setter={(value) => {
                    console.log(value)
                    dispatch(setRES(value))
                }} />
                <Apptitude apptitudeLink={require('../images/aptitudes/apt_bareer.webp')} apptitudeName=' Barrière' value={barrier} maxvalue={10} setter={(value) =>  dispatch(setbarrier(value))} />
                <Apptitude apptitudeLink={require('../images/aptitudes/apt_healthreceived.webp')} apptitudeName=' Soin Reçu' value={soinR} maxvalue={5} setter={(value) =>  dispatch(setsoinR(value))} />
                <Apptitude apptitudeLink={require('../images/aptitudes/apt_hpasarmor.webp')} apptitudeName=' % Points de vie en armure' value={pvAr} maxvalue={10} setter={(value) =>  dispatch(setpvAr(value))} />
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'space-around', marginBottom: 20 }}>
                <Apptitude apptitudeLink={require('../images/aptitudes/apt_elemmastery.webp')} apptitudeName=' Maitrise Elementaire' value={mElem} maxvalue='∞' setter={(value) =>  dispatch(setmElem(value))} />
                <Apptitude apptitudeLink={require('../images/aptitudes/apt_masterymono.webp')} apptitudeName=' Maitrise Monocible' value={mMono} maxvalue={20} setter={(value) =>  dispatch(setmMono(value))} />
                <Apptitude apptitudeLink={require('../images/aptitudes/apt_masteryarea.webp')} apptitudeName=' Maitrise Zone' value={mZone} maxvalue={20} setter={(value) =>  dispatch(setmZone(value))} />
                <Apptitude apptitudeLink={require('../images/aptitudes/apt_masterymelee.webp')} apptitudeName=' Maitrise Mélée' value={mMelee} maxvalue={20} setter={(value) =>  dispatch(setmMelee(value))} />
                <Apptitude apptitudeLink={require('../images/aptitudes/apt_masteryrange.webp')} apptitudeName=' Maitrise Distance' value={mDist} maxvalue={20} setter={(value) =>  dispatch(setmDist(value))} />
                <Apptitude apptitudeLink={require('../images/aptitudes/apt_rawhp.webp')} apptitudeName=' Points de vie' value={pdv} maxvalue='∞' setter={(value) => setpdv(value)} />
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'space-around', marginBottom: 20 }}>
                <Apptitude apptitudeLink={require('../images/aptitudes/apt_tackledodge.webp')} apptitudeName=' Tacle/Esquive' value={tacEsq} maxvalue='∞' setter={(value) =>  dispatch(settacEsq(value))} />
                <Apptitude apptitudeLink={require('../images/aptitudes/apt_dodge.webp')} apptitudeName=' Esquive' value={esq} maxvalue='∞' setter={(value) =>  dispatch(setesq(value))} />
                <Apptitude apptitudeLink={require('../images/aptitudes/apt_init.webp')} apptitudeName=' Initiative' value={init} maxvalue={20} setter={(value) =>  dispatch(setinit(value))} />
                <Apptitude apptitudeLink={require('../images/aptitudes/apt_tackle.webp')} apptitudeName=' Tacle' value={tac} maxvalue='∞' setter={(value) =>  dispatch(settac(value))} />
                <Apptitude apptitudeLink={require('../images/aptitudes/apt_will.webp')} apptitudeName=' Volonté' value={vol} maxvalue={20} setter={(value) =>  dispatch(setvol(value))} />
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'space-around', marginBottom: 20 }}>
                <Apptitude apptitudeLink={require('../images/aptitudes/apt_criticalhit.webp')} apptitudeName=' % Coup Critique' value={ccP} maxvalue={20} setter={(value) =>  dispatch(setccP(value))} />
                <Apptitude apptitudeLink={require('../images/aptitudes/apt_block.webp')} apptitudeName=' % Parade' value={parade} maxvalue={20} setter={(value) =>  dispatch(setparade(value))} />
                <Apptitude apptitudeLink={require('../images/aptitudes/apt_masterycritical.webp')} apptitudeName=' Maitrise Critique' value={mCrit} maxvalue='∞' setter={(value) =>  dispatch(setmCrit(value))} />
                <Apptitude apptitudeLink={require('../images/aptitudes/apt_rearmastery.webp')} apptitudeName=' Maitrise Dos' value={mDos} maxvalue='∞' setter={(value) =>  dispatch(setmDos(value))} />
                <Apptitude apptitudeLink={require('../images/aptitudes/apt_berserkmastery.webp')} apptitudeName=' Maitrise Berserk' value={mZerk} maxvalue='∞' setter={(value) =>  dispatch(setmZerk(value))} />
                <Apptitude apptitudeLink={require('../images/aptitudes/apt_masteryhealth.webp')} apptitudeName=' Maitrise Soin' value={mSoin} maxvalue='∞' setter={(value) =>  dispatch(setmSoin(value))} />
                <Apptitude apptitudeLink={require('../images/aptitudes/apt_rearresist.webp')} apptitudeName=' Resistance Dos' value={resDos} maxvalue={20} setter={(value) =>  dispatch(setresDos(value))} />
                <Apptitude apptitudeLink={require('../images/aptitudes/apt_resistcritical.webp')} apptitudeName=' Resistance Critique' value={resCrit} maxvalue={20} setter={(value) =>  dispatch(setresCrit(value))} />
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'space-around', marginBottom: 20 }}>
                <Apptitude apptitudeLink={require('../images/aptitudes/apt_pa.webp')} apptitudeName=" Point d'Action" value={pa} maxvalue={1} setter={(value) =>  dispatch(setpa(value))} />
                <Apptitude apptitudeLink={require('../images/aptitudes/apt_pm.webp')} apptitudeName=' Point de Mouvement' value={pm} maxvalue={1} setter={(value) =>  dispatch(setpm(value))} />
                <Apptitude apptitudeLink={require('../images/aptitudes/apt_range.webp')} apptitudeName=' Portée et Dégats' value={po} maxvalue={1} setter={(value) =>  dispatch(setpo(value))} />
                <Apptitude apptitudeLink={require('../images/aptitudes/apt_wakfupoint.webp')} apptitudeName='Point de Wakfu' value={pw} maxvalue={1} setter={(value) =>  dispatch(setpw(value))} />
                <Apptitude apptitudeLink={require('../images/aptitudes/apt_control.webp')} apptitudeName=' Controle et Dégats' value={ctrl} maxvalue={1} setter={(value) =>  dispatch(setctrl(value))} />
                <Apptitude apptitudeLink={require('../images/aptitudes/apt_rawdamages.webp')} apptitudeName=' % Dommages infligés' value={DI} maxvalue={1} setter={(value) =>  dispatch(setDI(value))} />
                <Apptitude apptitudeLink={require('../images/aptitudes/apt_reselem.webp')} apptitudeName=' Résistance élémentaire' value={resElem} maxvalue={1} setter={(value) =>  dispatch(setresElem(value))} />
            </View>
        </ScrollView>

    )
}
export default Aptitudes