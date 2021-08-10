import React from 'react'
import {  } from 'react-native'
import { ITEM } from '../actions/actions'

const initialstateItem ={
    nom:'placeholder',
    lien:'placeholder',
    rarity:0
}
export const itemReducer= (state =initialstateItem,action)=>{
    switch (action.type) {
        case ITEM:
            
            return {
                nom: action.value.title,
                lien: action.value.imageId,
                rarity:action.value.rarity
              
            }
              
    }
    return state
}