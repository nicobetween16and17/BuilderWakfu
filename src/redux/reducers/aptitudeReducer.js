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
export const AptitudeReducer = (state = initialstateAptitude, action) => {
    switch (action.type) {
        case PV:
            return { pv: action.value }
           
        case RES:
            return { res: action.value }

        case BAR:
            return { barrier: action.value }

        case SOINR:
            return { soinR: action.value}

        case PVAR:
            return { pvAr: action.value}

        case MELEM:
            return { Melem: action.value}

        case MMONO:
            return { Mmono: action.value }

        case MZONE:
            return { Mzone: action.value}

        case MMELEE:
            return { MMELEE: action.value}

        case MDIST:
            return { Mdist: action.value }

        case PDV:
            return { pdv: action.value}

        case TACESQ:
            return { tacesq: action.value}

        case ESQ:
            return { esq: action.value}

        case INIT:
            return { Ini: action.value}

        case TAC:
            return { tac: action.value}

        case VOL:
            return { vol: action.value }

        case CCP:
            return { Crit: action.value }

        case PARADE:
            return { PRD: action.value }

        case MCRIT:
            return { Mcrit: action.value}

        case MDOS:
            return { Mdos: action.value}

        case MZERK:
            return { Mzerk: action.value}

        case MSOIN:
            return { Msoin: action.value}

        case RDOS:
            return { Rdos: action.value}

        case RCRIT:
            return { Rcrit: action.value}

        case PA:
            return { PA: action.value }

        case PM:
            return{ PM:action.value }

        case PO:
            return { PO: action.value}

        case PW:
            return { PW: action.value }

        case CTRL:
            return { ctrl: action.value }

        case DI:
            return { DI: action.value }

        case RELEM:
            return { Relelm: action.value }


    }
    return state
}