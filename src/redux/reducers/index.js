import { combineReducers } from 'redux'
import { amuReducer, anneau1Reducer, anneau2Reducer, bottesReducer, BuildlevelReducer, capeReducer, casqueReducer, ceintureReducer, classeReducer, emblemeReducer, epauReducer, familierReducer, mainReducer, montureReducer, plastronReducer, secondemainReducer } from './buildReducers'
import { itemReducer } from './resultReducer'
import {levelReducer,typeReducer,rarityReducer} from './SearchReducer'

const allReducers = combineReducers({
    level : levelReducer,
    type : typeReducer,
    rarity : rarityReducer,
    classe: classeReducer,
    casque:casqueReducer,
    cape: capeReducer,
    amu: amuReducer,
    epau: epauReducer,
    plastron:plastronReducer,
    ceinture:ceintureReducer,
    anneau1: anneau1Reducer,
    anneau2: anneau2Reducer,
    bottes:bottesReducer,
    familier:familierReducer,
    secondemain:secondemainReducer,
    main:mainReducer,
    embleme:emblemeReducer,
    monture:montureReducer,
    Buildlevel:BuildlevelReducer,
    item:itemReducer
})
export default allReducers