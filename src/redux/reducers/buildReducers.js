import { CLASSE,AMU, ANNEAU1, ANNEAU2, BOTTES, CAPE, CASQUE, CEINTURE, EMBLEME, EPAU, FAMILIER, MAIN, MONTURE, PLASTRON, SECONDEMAIN,LEVEL } from "../actions/actions"

const initialstatelevel={
    content:1
}
const initialstateClasse = {
    content:'Iop'
}
const initialstateCasque = {
    content:'../images/equipement/casque.png'
}
const initialstateCape = {
    content:'../images/equipement/cape.png'
}
const initialstateAnneau1 = {
    content:'../images/equipement/anneau1.png'
}
const initialstateAnneau2 = {
    content:'../images/equipement/anneau2.png'
}
const initialstateAmu = {
    content:'../images/equipement/amu.png'
}
const initialstatePlastron = {
    content:'../images/equipement/plastron.png'
}
const initialstateBottes = {
    content:'../images/equipement/bottes.png'
}
const initialstateSecondeMain = {
    content:'../images/equipement/mainG.png'
}
const initialstateMain = {
    content:'../images/equipement/mainD.png'
}
const initialstateEpau = {
    content:'../images/equipement/épau.png'
}
const initialstateCeinture = {
    content:'../images/equipement/ceinture.png'
}
const initialstateEmbleme = {
    content:'../images/equipement/embleme.png'
}
const initialstateFamilier = {
    content:'../images/equipement/pet.png'
}
const initialstateMonture = {
    content:'../images/equipement/pet.png'
}
export const classeReducer= (state =initialstateClasse,action)=>{
    switch (action.type) {
        case CLASSE:
            
            return {content: action.value}
              
    }
    return state
}
export const casqueReducer= (state =initialstateCasque,action)=>{
    switch (action.type) {
        case CASQUE:
            
            return {content: action.value}
              
    }
    return state
}
export const capeReducer= (state =initialstateCape,action)=>{
    switch (action.type) {
        case CAPE:
            
            return {content: action.value}
              
    }
    return state
}
export const epauReducer= (state =initialstateEpau,action)=>{
    switch (action.type) {
        case EPAU:
            
            return {content: action.value}
              
    }
    return state
}
export const bottesReducer= (state =initialstateBottes,action)=>{
    switch (action.type) {
        case BOTTES:
            
            return {content: action.value}
              
    }
    return state
}
export const anneau1Reducer= (state =initialstateAnneau1,action)=>{
    switch (action.type) {
        case ANNEAU1:
            
            return {content: action.value}
              
    }
    return state
}
export const anneau2Reducer= (state =initialstateAnneau2,action)=>{
    switch (action.type) {
        case ANNEAU2:
            
            return {content: action.value}
              
    }
    return state
}
export const secondemainReducer= (state =initialstateSecondeMain,action)=>{
    switch (action.type) {
        case SECONDEMAIN:
            
            return {content: action.value}
              
    }
    return state
}
export const mainReducer= (state =initialstateMain,action)=>{
    switch (action.type) {
        case MAIN:
            
            return {content: action.value}
              
    }
    return state
}
export const emblemeReducer= (state =initialstateEmbleme,action)=>{
    switch (action.type) {
        case EMBLEME:
            
            return {content: action.value}
              
    }
    return state
}

export const familierReducer= (state =initialstateFamilier,action)=>{
    switch (action.type) {
        case FAMILIER:
            
            return {content: action.value}
              
    }
    return state
}
export const montureReducer= (state =initialstateMonture,action)=>{
    switch (action.type) {
        case MONTURE:
            
            return {content: action.value}
              
    }
    return state
}
export const amuReducer= (state =initialstateAmu,action)=>{
    switch (action.type) {
        case AMU:
            
            return {content: action.value}
              
    }
    return state
}
export const plastronReducer= (state =initialstatePlastron,action)=>{
    switch (action.type) {
        case PLASTRON:
            
            return {content: action.value}
              
    }
    return state
}
export const ceintureReducer= (state =initialstateCeinture,action)=>{
    switch (action.type) {
        case CEINTURE:
            
            return {content: action.value}
              
    }
    return state
}
export const BuildlevelReducer= (state =initialstatelevel,action)=>{
    switch (action.type) {
        case LEVEL:
            
            return {content: action.value}
              
    }
    return state
}