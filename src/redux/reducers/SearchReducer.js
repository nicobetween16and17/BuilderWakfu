import React from 'react'
import {  } from 'react-native'
import { RARITY,TYPE,LEVEL } from '../actions/actions'

const initialstateLevel ={
    content:1
}
const initialstateType ={
    content:[]
}
const initialstateRarity ={
    content:4
}
export const levelReducer= (state =initialstateLevel,action)=>{
    switch (action.type) {
        case LEVEL:
            
            return {content: action.value}
              
    }
    return state
}
export const typeReducer= (state =initialstateType,action)=>{
    switch (action.type) {
        case TYPE:
            return {content: action.value}
              
    }
    return state
}
export const rarityReducer= (state =initialstateRarity,action)=>{
    switch (action.type) {
        case RARITY:
            return {content: action.value}
              
    }
    return state
}