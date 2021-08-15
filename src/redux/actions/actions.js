import {  } from 'react-native'
import React from 'react'
import { chosenTypeReducer } from '../reducers/buildReducers';
export const LEVEL = 'LEVEL';
export const TYPE = 'TYPE';
export const RARITY = 'RARITY';
export const CLASSE = 'CLASSE'
export const CASQUE = 'CASQUE'
export const AMU = 'AMU'
export const PLASTRON = 'PLASTRON'
export const ANNEAU1 = 'ANNEAU1'
export const BOTTES = 'BOTTES'
export const SECONDEMAIN = 'SECONDEMAIN'
export const MAIN = 'MAIN'
export const EMBLEME = 'EMBLEME'
export const CAPE = 'CAPE'
export const EPAU = 'EPAU'
export const CEINTURE = 'CEINTURE'
export const ANNEAU2 = 'ANNEAU2'
export const FAMILIER = 'FAMILIER'
export const MONTURE = 'MONTURE'
export const ITEM = 'ITEM'
export const LOAD = 'LOAD'
export const CHOSEN = 'CHOSEN'
export const PV = 'PV'
export const RES ='RES'
export const BAR = 'BAR'
export const SOINR ='SOINR'
export const PVAR = 'PVAR'
export const MELEM ='MELEM'
export const MMONO ='MMONO'
export const MZONE ='MZONE'
export const MMELEE ='MMELEE'
export const MDIST = 'MDIST'
export const PDV = 'PDV'
export const TACESQ = 'TACESQ'
export const ESQ ='ESQ'
export const INIT ='INIT'
export const TAC = 'TAC'
export const VOL = 'VOL'
export const CCP = 'CCP'
export const PARADE = 'PARADE'
export const MCRIT ='MCRIT'
export const MDOS = 'MDOS'
export const MZERK = 'MZERK'
export const MSOIN = 'MSOIN'
export const RDOS = 'RDOS'
export const RCRIT = 'RCRIT'
export const PA = 'PA'
export const PM ='PM'
export const PO = 'PO'
export const PW = 'PW'
export const CTRL = 'CTRL'
export const DI = 'DI'
export const RELEM='RELEM'
export const setLevel = (value)=>{
    return{
        type:LEVEL,
        value:value
    }
}
export const setType = (value)=>{
    return{
        type:TYPE,
        value:value
    }
}
export const setRarity = (value)=>{
    return{
        type:RARITY,
        value:value
    }
}
export const setClasse =(value)=>{
    return{
        type:CLASSE,
        value:value
    }
}
export const setCasque =(value)=>{
    return{
        type:CASQUE,
        value:value
    }
}
export const setAmu =(value)=>{
    return{
        type:AMU,
        value:value
    }
}
export const setPlastron =(value)=>{
    return{
        type:PLASTRON,
        value:value
    }
}
export const setAnneau1 =(value)=>{
    return{
        type:ANNEAU1,
        value:value
    }
}
export const setAnneau2 =(value)=>{
    return{
        type:ANNEAU2,
        value:value
    }
}
export const setBottes =(value)=>{
    return{
        type:BOTTES,
        value:value
    }
}
export const setSecondeMain =(value)=>{
    return{
        type:SECONDEMAIN,
        value:value
    }
}
export const setMain =(value)=>{
    return{
        type:MAIN,
        value:value
    }
}
export const setEmbleme =(value)=>{
    return{
        type:EMBLEME,
        value:value
    }
}
export const setFamilier =(value)=>{
    return{
        type:FAMILIER,
        value:value
    }
}
export const setMonture =(value)=>{
    return{
        type:MONTURE,
        value:value
    }
}
export const setCeinture =(value)=>{
    return{
        type:CEINTURE,
        value:value
    }
}
export const setEpau =(value)=>{
    return{
        type:EPAU,
        value:value
    }
}
export const setCape =(value)=>{
    return{
        type:CAPE,
        value:value
    }
}
export const setBuildLevel =(value)=>{
    return{
        type:LEVEL,
        value:value
    }
}
export const setCurrentItem =(value)=>{
    return{
        type:ITEM,
        value:value
    }
}
export const isLoading =(value)=>{
    return{
        type:LOAD,
      
    }
}
export const setChosen =(value)=>{
    return{
        type:CHOSEN,
        value:value
    }
}
export const setpvP =(value)=>{
    return{
        type:PV,
        value:value
    }
}
export const setRES =(value)=>{
    return{
        type:RES,
        value:value
    }
}
export const setbarrier =(value)=>{
    return{
        type:BAR,
        value:value
    }
}
export const setsoinR =(value)=>{
    return{
        type:SOINR,
        value:value
    }
}
export const setpvAr =(value)=>{
    return{
        type:PVAR,
        value:value
    }
}
export const setmElem =(value)=>{
    return{
        type:MELEM,
        value:value
    }
}
export const setmMono =(value)=>{
    return{
        type:MMONO,
        value:value
    }
}
export const setmZone =(value)=>{
    return{
        type:MZONE,
        value:value
    }
}
export const setmMelee =(value)=>{
    return{
        type:MMELEE,
        value:value
    }
}
export const setmDist =(value)=>{
    return{
        type:MDIST,
        value:value
    }
}
export const setpdv =(value)=>{
    return{
        type:PDV,
        value:value
    }
}
export const settacEsq =(value)=>{
    return{
        type:TACESQ,
        value:value
    }
}
export const setesq =(value)=>{
    return{
        type:ESQ,
        value:value
    }
}
export const setinit =(value)=>{
    return{
        type:INIT,
        value:value
    }
}
export const settac =(value)=>{
    return{
        type:TAC,
        value:value
    }
}
export const setvol =(value)=>{
    return{
        type:VOL,
        value:value
    }
}
export const setccP =(value)=>{
    return{
        type:CCP,
        value:value
    }
}
export const setparade =(value)=>{
    return{
        type:PARADE,
        value:value
    }
}
export const setmCrit =(value)=>{
    return{
        type:MCRIT,
        value:value
    }
}
export const setmDos =(value)=>{
    return{
        type:MDOS,
        value:value
    }
}
export const setmZerk =(value)=>{
    return{
        type:MZERK,
        value:value
    }
}
export const setmSoin =(value)=>{
    return{
        type:MSOIN,
        value:value
    }
}
export const setresDos =(value)=>{
    return{
        type:RDOS,
        value:value
    }
}
export const setresCrit =(value)=>{
    return{
        type:RCRIT,
        value:value
    }
}
export const setpa =(value)=>{
    return{
        type:PA,
        value:value
    }
}
export const setpm =(value)=>{
    return{
        type:PM,
        value:value
    }
}
export const setpo =(value)=>{
    return{
        type:PO,
        value:value
    }
}
export const setpw =(value)=>{
    return{
        type:PW,
        value:value
    }
}
export const setctrl =(value)=>{
    return{
        type:CTRL,
        value:value
    }
}
export const setDI =(value)=>{
    return{
        type:DI,
        value:value
    }
}
export const setresElem =(value)=>{
    return{
        type:RELEM,
        value:value
    }
}