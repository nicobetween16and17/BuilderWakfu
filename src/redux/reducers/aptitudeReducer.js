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
};

export const AptitudeReducer = (state = initialstateAptitude, action) => {

    const aptiState = { ...state }; // Clone du state

    switch (action.type) {
        case PV:
            aptiState.pv = action.value; break;
        case RES:
            aptiState.res = action.value; break;
        case BAR:
            aptiState.barrier = action.value; break;
        case SOINR:
            aptiState.soinR = action.value; break;
        case PVAR:
            aptiState.pvAr = action.value; break;
        case MELEM:
            aptiState.Melem = action.value; break;
        case MMONO:
            aptiState.Mmono = action.value; break;
        case MZONE:
            aptiState.Mzone = action.value; break;
        case MMELEE:
            aptiState.MMELEE = action.value; break;
        case MDIST:
            aptiState.Mdist = action.value; break;
        case PDV:
            aptiState.pdv = action.value; break;
        case TACESQ:
            aptiState.tacesq = action.value; break;
        case ESQ:
            aptiState.esq = action.value; break;
        case INIT:
            aptiState.Ini = action.value; break;
        case TAC:
            aptiState.tac = action.value; break;
        case VOL:
            aptiState.vol = action.value; break;
        case CCP:
            aptiState.Crit = action.value; break;
        case PARADE:
            aptiState.PRD = action.value; break;
        case MCRIT:
            aptiState.Mcrit = action.value; break;
        case MDOS:
            aptiState.Mdos = action.value; break;
        case MZERK:
            aptiState.Mzerk = action.value; break;
        case MSOIN:
            aptiState.Msoin = action.value; break;
        case RDOS:
            aptiState.Rdos = action.value; break;
        case RCRIT:
            aptiState.Rcrit = action.value; break;
        case PA:
            aptiState.PA = action.value; break;
        case PM:
            aptiState.M = action.value; break;
        case PO:
            aptiState.PO = action.value; break;
        case PW:
            aptiState.PW = action.value; break;
        case CTRL:
            aptiState.ctrl = action.value; break;
        case DI:
            aptiState.DI = action.value; break;
        case RELEM:
            aptiState.Relelm = action.value; break;
        default:
            return state;
    }

    return aptiState;
}