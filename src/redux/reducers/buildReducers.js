import { CLASSE, AMU, ANNEAU1, ANNEAU2, BOTTES, CAPE, CASQUE, CEINTURE, EMBLEME, EPAU, FAMILIER, MAIN, MONTURE, PLASTRON, SECONDEMAIN, LEVEL, CHOSEN, INTELL, FORCE, AGI, CHANCE, MAJEUR } from "../actions/actions"

const initialstatelevel = {
    content: 215,
    aptitude: {
        intell: 54,
        force: 54,
        agility: 53,
        chance: 53,
        majeur: 4,
    }
}
const initialstateClasse = {
    content: 'Iop'
}
const initialstateCasque = {
    content: '../images/equipement/casque.png'
}
const initialstateCape = {
    content: '../images/equipement/cape.png'
}
const initialstateAnneau1 = {
    content: '../images/equipement/anneau1.png'
}
const initialstateAnneau2 = {
    content: '../images/equipement/anneau2.png'
}
const initialstateAmu = {
    content: '../images/equipement/amu.png'
}
const initialstatePlastron = {
    content: '../images/equipement/plastron.png'
}
const initialstateBottes = {
    content: '../images/equipement/bottes.png'
}
const initialstateSecondeMain = {
    content: '../images/equipement/mainG.png'
}
const initialstateMain = {
    content: '../images/equipement/mainD.png'
}
const initialstateEpau = {
    content: '../images/equipement/épau.png'
}
const initialstateCeinture = {
    content: '../images/equipement/ceinture.png'
}
const initialstateEmbleme = {
    content: '../images/equipement/embleme.png'
}
const initialstateFamilier = {
    content: '../images/equipement/pet.png'
}
const initialstateMonture = {
    content: '../images/equipement/pet.png'
}
const chosenType = {
    content: 0
}
export const classeReducer = (state = initialstateClasse, action) => {
    switch (action.type) {
        case CLASSE:

            return { content: action.value }

    }
    return state
}
export const casqueReducer = (state = initialstateCasque, action) => {

    switch (action.type) {
        case CASQUE:
            console.log('casqueReducer: ', action.value)
            return { content: action.value }

    }
    return state
}
export const capeReducer = (state = initialstateCape, action) => {
    switch (action.type) {
        case CAPE:

            return { content: action.value }

    }
    return state
}
export const epauReducer = (state = initialstateEpau, action) => {
    switch (action.type) {
        case EPAU:

            return { content: action.value }

    }
    return state
}
export const bottesReducer = (state = initialstateBottes, action) => {
    switch (action.type) {
        case BOTTES:

            return { content: action.value }

    }
    return state
}
export const anneau1Reducer = (state = initialstateAnneau1, action) => {
    switch (action.type) {
        case ANNEAU1:

            return { content: action.value }

    }
    return state
}
export const anneau2Reducer = (state = initialstateAnneau2, action) => {
    switch (action.type) {
        case ANNEAU2:

            return { content: action.value }

    }
    return state
}
export const secondemainReducer = (state = initialstateSecondeMain, action) => {
    switch (action.type) {
        case SECONDEMAIN:

            return { content: action.value }

    }
    return state
}
export const mainReducer = (state = initialstateMain, action) => {
    switch (action.type) {
        case MAIN:

            return { content: action.value }

    }
    return state
}
export const emblemeReducer = (state = initialstateEmbleme, action) => {
    switch (action.type) {
        case EMBLEME:

            return { content: action.value }

    }
    return state
}

export const familierReducer = (state = initialstateFamilier, action) => {
    switch (action.type) {
        case FAMILIER:

            return { content: action.value }

    }
    return state
}
export const montureReducer = (state = initialstateMonture, action) => {
    switch (action.type) {
        case MONTURE:

            return { content: action.value }

    }
    return state
}
export const amuReducer = (state = initialstateAmu, action) => {
    switch (action.type) {
        case AMU:

            return { content: action.value }

    }
    return state
}
export const plastronReducer = (state = initialstatePlastron, action) => {
    switch (action.type) {
        case PLASTRON:

            return { content: action.value }

    }
    return state
}
export const ceintureReducer = (state = initialstateCeinture, action) => {
    switch (action.type) {
        case CEINTURE:

            return { content: action.value }

    }
    return state
}
export const BuildlevelReducer = (state = initialstatelevel, action) => {
    const major = (lv) => {
        switch (true) {
            case lv >= 185:
                return 4
            case lv >= 125:
                return 3
            case lv >= 75:
                return 2
            case lv >= 25:
                return 1

            default:
                return 0
        }
    }
    const currentState = { ...state }
    switch (action.type) {
        case INTELL: currentState.aptitude.intell -= action.value; break;
        case FORCE: currentState.aptitude.force -= action.value; break;
        case AGI: currentState.aptitude.agility -= action.value; break;
        case CHANCE: currentState.aptitude.chance -= action.value; break;
        case MAJEUR: currentState.aptitude.majeur -= action.value; break;
        case LEVEL:
            return {
                content: action.value,
                aptitude: {
                    intell: ((action.value + 2) / 4)-((action.value + 2) / 4)%1,
                    force: ((action.value + 1) / 4)-((action.value + 1) / 4)%1,
                    agility: ((action.value) / 4)-((action.value) / 4)%1,
                    chance: ((action.value - 1) / 4)-((action.value -1) / 4)%1,
                    majeur: major(action.value)
                }

            }


    }
    return currentState
}
export const chosenTypeReducer = (state = chosenType, action) => {
    switch (action.type) {
        case CHOSEN:

            return { content: action.value }

    }
    return state
}