import React,{useState} from 'react'
import { } from 'react-native'
import { ITEM, LOAD } from '../actions/actions'

const initialstateItem = {
    nom: 'placeholder',
    lien: 'placeholder',
    rarity: 0,
    type: []
}
const initialstateLoad = {
    content: true
}
let Loading= true
export const itemReducer = (state = initialstateItem, action) => {
    switch (action.type) {
        case ITEM:

            return {
                nom: action.value.title,
                lien: action.value.imageId,
                rarity: action.value.rarity,
                type: action.value.type,
                stats:action.value.stats

            }

    }
    return state
}
export const loadReducer = (state = initialstateLoad,action ) => {
    
    switch (action.type) {
        case LOAD:
            console.log('loadReducer', Loading)
            Loading=!Loading
            return {content:Loading}
    }
    return state
}