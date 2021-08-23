import { combineReducers } from 'redux'
import { ApptitudepointsReducer, AptitudeReducer } from './aptitudeReducer'
import { amuReducer, anneau1Reducer, anneau2Reducer, bottesReducer, BuildlevelReducer, capeReducer, casqueReducer, ceintureReducer, chosenTypeReducer, classeReducer, emblemeReducer, epauReducer, familierReducer, mainReducer, montureReducer, plastronReducer, secondemainReducer } from './buildReducers'
import { CurrentRuneReducer, RuneLvReducer, RunesReducer } from './forgeReducer'
import { itemReducer, loadReducer } from './resultReducer'
import { ItemListReducer, SelectedElementReducer } from './resumeReducer'
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
    item:itemReducer,
    load:loadReducer,
    chosen:chosenTypeReducer,
    aptitude : AptitudeReducer,
    items:ItemListReducer,
    runes:RunesReducer,
    runeLV:RuneLvReducer,
    currentRune:CurrentRuneReducer,
    selectedElem:SelectedElementReducer,
    
})
export default allReducers