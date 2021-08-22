import React, { Component, useEffect, useRef, useState } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { resetApPt, setagi, setbarrier, setccP, setchance, setctrl, setDI, setesq, setforce, setinit, setintel, setmajeur, setmCrit, setmDist, setmDos, setmElem, setmMelee, setmMono, setmSoin, setmZerk, setmZone, setpa, setparade, setpdv, setpm, setpo, setpvAr, setpvP, setpw, setRES, setresCrit, setresDos, setresElem, setsoinR, settac, settacEsq, setvol } from '../../redux/actions/actions';
export const Apptitude = ({ apptitudeLink, apptitudeName, value, maxvalue, setter, formule }) => {
    const [lastpress, setlastpress] = useState(0)
    const dispatch = useDispatch()
    const intel = useSelector((state) => state.Buildlevel.aptitude.intell)
    const force = useSelector((state) => state.Buildlevel.aptitude.force)
    const agi = useSelector((state) => state.Buildlevel.aptitude.agility)
    const chance = useSelector((state) => state.Buildlevel.aptitude.chance)
    const majeur = useSelector((state) => state.Buildlevel.aptitude.majeur)
    const [disabled, setdisabled] = useState(false)
    const [lastdelta,setdelta] = useState(1000)
    const aptitudetargeted = (where) => {
        switch (where) {
            case 3: return majeur
            case 2: return intel
            case 1: return force
            case 0: return agi
            case -1: return chance
            default: console.log("AUCUNE VALEUR D'APTITUDE CORRESPONDANTE !!!!",where);
                return intel
        }
    }
    useEffect(() => {
        let value
       value= maxvalue === '∞'? aptitudetargeted(formule) === 0:incr.current===maxvalue || aptitudetargeted(formule) === 0
       setdisabled(value)
    }, [aptitudetargeted(formule)]);
    const isDoubleTap = () => {
        const time = new Date().getTime()
        const delta = time - lastpress
        console.log('DELTA',delta)
        const dbt= (delta < 600)&& lastdelta>600 ? true : false
        setlastpress(time)
        setdelta(delta)
        return dbt
    }
    const whereToDispatch = (where, dispatched) => {
        switch (where) {
            case 3: dispatch(setmajeur(dispatched))

                break;
            case 2: dispatch(setintel(dispatched))

                break;
            case 1: dispatch(setforce(dispatched))

                break;
            case 0: dispatch(setagi(dispatched))

                break;
            case -1: dispatch(setchance(dispatched))

                break;
        }
    }
    const timerId = useRef(null);
    const incr = useRef(0);

    useEffect(() => {
        incr.current = value;
    }, [])
    function minusStart(time) {

        if (incr.current > 0) {

            incr.current = incr.current - 1
            setter(incr.current)
            whereToDispatch(formule, -1)
        }
        timerId.current = setTimeout(() => minusStart(time - 700), time);
    }
    function addStart(time) {
        if (!isDoubleTap()) {
            if ((maxvalue === '∞' || maxvalue > incr.current) && aptitudetargeted(formule) > 0) {

                incr.current = incr.current + 1


                setter(incr.current);
                whereToDispatch(formule, 1)
            }
            timerId.current = setTimeout(() => addStart(time - 700), time);
        } else if (maxvalue === '∞') {
            incr.current = aptitudetargeted(formule)+1
            setter(aptitudetargeted(formule)+1)
            whereToDispatch(formule, aptitudetargeted(formule))
        } else {
            aptitudetargeted(formule) > maxvalue ?
                (setter(maxvalue),whereToDispatch(formule, maxvalue-1),incr.current += maxvalue-1)
                :
                (setter(aptitudetargeted(formule)),whereToDispatch(formule, aptitudetargeted(formule)-1),incr.current += aptitudetargeted(formule)-1)
        }

    }
    function addStop() {
        clearTimeout(timerId.current)
    }
    return (
        <View style={{ justifyContent: 'space-between', borderWidth: 2, borderColor: '#FFFFFF', flexDirection: 'column', width: 320, padding: 3, margin: 2 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                    <Image style={{ width: 30, height: 30 }} source={apptitudeLink} />
                    <Text style={{ color: 'white', fontSize: 20 }}>{apptitudeName}</Text></View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'white', fontSize: 20 }}>{value}/{maxvalue}</Text>
                </View>
            </View >

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 40 }}>
                    <TouchableOpacity disabled={incr.current===0} onPressIn={() => {
                        minusStart(700)
                    }}
                        onPressOut={() => {
                            addStop()
                        }}
                    >
                        {incr.current===0?<Image style={{ resizeMode: 'contain', width: 160, height: 80 }} source={require('../../images/aptitudes/-2_disabled.png')} /> :<Image style={{ resizeMode: 'contain', width: 160, height: 80 }} source={require('../../images/aptitudes/-2.png')} />}
                    </TouchableOpacity>
                    <TouchableOpacity disabled={incr.current===0} onPress={() => {
                        whereToDispatch(formule, -incr.current)
                        incr.current = 0
                        setter(incr.current)
                    }}
                    >
                        {incr.current===0?<Image style={{ resizeMode: 'contain', width: 160, height: 80 }} source={require('../../images/aptitudes/02_disabled.png')} />:<Image style={{ resizeMode: 'contain', width: 160, height: 80 }} source={require('../../images/aptitudes/02.png')} />}
                    </TouchableOpacity>
                    <TouchableOpacity disabled={disabled}
                        onPressIn={() => {
                            addStart(700);
                        }}
                        onPressOut={() => {
                            addStop()
                        }}
                    >
                        {disabled? <Image style={{ resizeMode: 'contain', width: 160, height: 80, }} source={require('../../images/aptitudes/+2_disabled.png')} />:<Image style={{ resizeMode: 'contain', width: 160, height: 80, }} source={require('../../images/aptitudes/+2.png')} />}
                        
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}
