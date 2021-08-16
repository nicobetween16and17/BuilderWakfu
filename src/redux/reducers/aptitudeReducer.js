import { BAR, CCP, CTRL, DI, ESQ, INIT, MCRIT, MDIST, MDOS, MELEM, MMELEE, MMONO, MSOIN, MZERK, MZONE, PA, PARADE, PDV, PM, PO, PV, PVAR, PW, RCRIT, RDOS, RELEM, RES, SOINR, TAC, TACESQ, VOL } from "../actions/actions"


const initialstateAptitude = {
    pv: 0,
    res: 0,
    barrier: 0,
    soinR: 0,
    pvAr: 0,
    Melem: 0,
    Mzone: 0, Mmono: 0, Mmelee: 0, Mdist: 0,
    pdv: 0,
    tacesq: 0,
    Ini: 0,
    tac: 0, esq: 0,
    vol: 0,
    Crit: 0,
    PRD: 0,
    Mzerk: 0, Mcrit: 0, Msoin: 0, Mdos: 0,
    Rcrit: 0, Rdos: 0,
    PA: 0,
    PM: 0,
    PO: 0,
    PW: 0,
    ctrl: 0,
    DI: 0,
    Relelm: 0,
}
export const AptitudePvReducer = (state = initialstateAptitude, action) => {
    switch (action.type) {
        case PV:
            return { pv: action.value }
    }
    return state
}
export const AptitudeResReducer = (state = initialstateAptitude, action) => {
    switch (action.type) {
        case RES:
            return { res: action.value }
    }
    return state
}
export const AptitudeBarReducer = (state = initialstateAptitude, action) => {
    switch (action.type) {
        case BAR:
            return { barrier: action.value }
    }
    return state
}
export const AptitudeSoinrReducer = (state = initialstateAptitude, action) => {
    switch (action.type) {
        case SOINR:
            return { soinR: action.value}

    }
    return state
}
export const AptitudePvarReducer = (state = initialstateAptitude, action) => {
    switch (action.type) {
        case PVAR:
            return { pvAr: action.value}

    }
    return state
}
export const AptitudeMelemReducer = (state = initialstateAptitude, action) => {
    switch (action.type) {
        case MELEM:
            return { Melem: action.value}

    }
    return state
}
export const AptitudeMmonoReducer = (state = initialstateAptitude, action) => {
    switch (action.type) {
        case MMONO:
            return { Mmono: action.value }
    }
    return state
}
export const AptitudeMzoneReducer = (state = initialstateAptitude, action) => {
    switch (action.type) {
        case MZONE:
            return { Mzone: action.value}

    }
    return state
}
export const AptitudeMmeleeReducer = (state = initialstateAptitude, action) => {
    switch (action.type) {
        case MMELEE:
            return { MMELEE: action.value}
    }
    return state
}
export const AptitudeMdistReducer = (state = initialstateAptitude, action) => {
    switch (action.type) {
        case MDIST:
            return { Mdist: action.value }

    }
    return state
}
export const AptitudePdvReducer = (state = initialstateAptitude, action) => {
    switch (action.type) {
        case PDV:
            return { pdv: action.value}
    }
    return state
}
export const AptitudeTacesqReducer = (state = initialstateAptitude, action) => {
    switch (action.type) {
        case TACESQ:
            return { tacesq: action.value}
    }
    return state
}
export const AptitudeEsqReducer = (state = initialstateAptitude, action) => {
    switch (action.type) {
        case ESQ:
            return { esq: action.value}
    }
    return state
}
export const AptitudeInitReducer = (state = initialstateAptitude, action) => {
    switch (action.type) {
        case INIT:
            return { Ini: action.value}
    }
    return state
}
export const AptitudeTacReducer = (state = initialstateAptitude, action) => {
    switch (action.type) {
        case TAC:
            return { tac: action.value}
    }
    return state
}
export const AptitudeVolReducer = (state = initialstateAptitude, action) => {
    switch (action.type) {
        case VOL:
            return { vol: action.value }
    }
    return state
}
export const AptitudeCcpReducer = (state = initialstateAptitude, action) => {
    switch (action.type) {
        case CCP:
            return { Crit: action.value }

    }
    return state
}
export const AptitudeParadeReducer = (state = initialstateAptitude, action) => {
    switch (action.type) {
        case PARADE:
            return { PRD: action.value }

    }
    return state
}
export const AptitudeMcritReducer = (state = initialstateAptitude, action) => {
    switch (action.type) {
        case MCRIT:
            return { Mcrit: action.value}
    }
    return state
}
export const AptitudeMdosReducer = (state = initialstateAptitude, action) => {
    switch (action.type) {
        case MDOS:
            return { Mdos: action.value}
    }
    return state
}
export const AptitudeMzerkReducer = (state = initialstateAptitude, action) => {
    switch (action.type) {
        case MZERK:
            return { Mzerk: action.value}
    }
    return state
}
export const AptitudeMsoinReducer = (state = initialstateAptitude, action) => {
    switch (action.type) {
        case MSOIN:
            return { Msoin: action.value}
    }
    return state
}
export const AptitudeRdosReducer = (state = initialstateAptitude, action) => {
    switch (action.type) {
        case RDOS:
            return { Rdos: action.value}

    }
    return state
}
export const AptitudeRcritReducer = (state = initialstateAptitude, action) => {
    switch (action.type) {
        case RCRIT:
            return { Rcrit: action.value}

    }
    return state
}
export const AptitudePAReducer = (state = initialstateAptitude, action) => {
    switch (action.type) {
        case PA:
            return { PA: action.value }
    }
    return state
}
export const AptitudePMReducer = (state = initialstateAptitude, action) => {
    switch (action.type) {
        case PM:
            return{ PM:action.value }
    }
    return state
}
export const AptitudePOReducer = (state = initialstateAptitude, action) => {
    switch (action.type) {
        case PO:
            return { PO: action.value}

    }
    return state
}
export const AptitudePWReducer = (state = initialstateAptitude, action) => {
    switch (action.type) {
        case PW:
            return { PW: action.value }
    }
    return state
}
export const AptitudeCtrlReducer = (state = initialstateAptitude, action) => {
    switch (action.type) {
        case CTRL:
            return { ctrl: action.value }

    }
    return state
}
export const AptitudeDIReducer = (state = initialstateAptitude, action) => {
    switch (action.type) {
        case DI:
            return { DI: action.value }

    }
    return state
}
export const AptitudeRelemReducer = (state = initialstateAptitude, action) => {
    switch (action.type) {
        case RELEM:
            return { Relelm: action.value }
    }
    return state
}