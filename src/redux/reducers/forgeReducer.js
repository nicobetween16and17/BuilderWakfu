import { RUNEAMU, RUNEANNEAU1, RUNEANNEAU2, RUNEARME, RUNEBOTTES, RUNECAPE, RUNECASQUE, RUNECEINTURE, RUNEEPAU, RUNEPLASTRON,RUNELV, CURRENTRUNE } from "../actions/actions"

const initialstateRune = {
    casque:
    [{lv:10,effet:[0,0],couleur:0}
    , {lv:10,effet:[0,0],couleur:0}
    , {lv:10,effet:[0,0],couleur:0}
    , {lv:10,effet:[0,0],couleur:0}],
    amu: 
    [{lv:10,effet:[0,0],couleur:0}
    , {lv:10,effet:[0,0],couleur:0}
    , {lv:10,effet:[0,0],couleur:0}
    , {lv:10,effet:[0,0],couleur:0}],
    plastron:
    [{lv:10,effet:[0,0],couleur:0}
    , {lv:10,effet:[0,0],couleur:0}
    , {lv:10,effet:[0,0],couleur:0}
    , {lv:10,effet:[0,0],couleur:0}],
    anneau1:
    [{lv:10,effet:[0,0],couleur:0}
    , {lv:10,effet:[0,0],couleur:0}
    , {lv:10,effet:[0,0],couleur:0}
    , {lv:10,effet:[0,0],couleur:0}],
    anneau2: 
    [{lv:10,effet:[0,0],couleur:0}
    , {lv:10,effet:[0,0],couleur:0}
    , {lv:10,effet:[0,0],couleur:0}
    , {lv:10,effet:[0,0],couleur:0}],
    bottes: 
    [{lv:10,effet:[0,0],couleur:0}
    , {lv:10,effet:[0,0],couleur:0}
    , {lv:10,effet:[0,0],couleur:0}
    , {lv:10,effet:[0,0],couleur:0}],
    cape: 
    [{lv:10,effet:[0,0],couleur:0}
    , {lv:10,effet:[0,0],couleur:0}
    , {lv:10,effet:[0,0],couleur:0}
    , {lv:10,effet:[0,0],couleur:0}],
    epau: 
    [{lv:10,effet:[0,0],couleur:0}
    , {lv:10,effet:[0,0],couleur:0}
    , {lv:10,effet:[0,0],couleur:0}
    , {lv:10,effet:[0,0],couleur:0}],
    ceinture: 
    [{lv:10,effet:[0,0],couleur:0}
    , {lv:10,effet:[0,0],couleur:0}
    , {lv:10,effet:[0,0],couleur:0}
    , {lv:10,effet:[0,0],couleur:0}],
    arme: 
    [{lv:10,effet:[0,0],couleur:0}
    , {lv:10,effet:[0,0],couleur:0}
    , {lv:10,effet:[0,0],couleur:0}
    , {lv:10,effet:[0,0],couleur:0}]



}

export const RunesReducer = (state = initialstateRune, action) => {
    const currentState = { ...state }
    switch (action.type) {
        case RUNECASQUE:
            currentState.casque[action.element] = action.value;
            
            break;


        case RUNEAMU:

            currentState.amu[action.element] = action.value;break;


        case RUNEPLASTRON:

            currentState.plastron[action.element] = action.value;break;


        case RUNEANNEAU1:

            currentState.anneau1[action.element] = action.value;break;


        case RUNEANNEAU2:

            currentState.anneau2[action.element] = action.value;break;


        case RUNEBOTTES:

            currentState.bottes[action.element] = action.value;break;

        case RUNECAPE:

            currentState.cape[action.element] = action.value;break;

        case RUNEEPAU:

            currentState.epau[action.element] = action.value;break;

        case RUNECEINTURE:

            currentState.ceinture[action.element] = action.value;break;

        case RUNEARME:

            currentState.arme[action.element] = action.value;break;
        

    }
    return currentState
}
const initialstateRunelv={
    lv:10
}
export const RuneLvReducer=(state = initialstateRunelv, action)=>{
    switch (action.type) {
        case RUNELV:
            return { lv: action.value }
            
          
    }
    return state
}
const initialrune={
    rune:{lv:10,effet:[0,0],couleur:0}
}
export const CurrentRuneReducer=(state = initialrune, action)=>{
    switch (action.type) {
        case CURRENTRUNE:
            return { rune: action.value }
            
          
    }
    return state
}