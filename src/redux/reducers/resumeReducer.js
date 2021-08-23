import { ADDITEM, ELEMENTSELECTED } from "../actions/actions"

const initialstateItems={
    listItem:[]
}
export const ItemListReducer = (state = initialstateItems, action) => {
    const currenState = {...state}
    switch (action.type) {
        case ADDITEM:
            let mustBeReplaced = false
            let indexToReplace
            currenState.listItem.forEach((element,index) => {
                if(element.type === action.value.type){
                    mustBeReplaced =true
                    indexToReplace = index
                }
            });
            mustBeReplaced ? currenState.listItem.slice(indexToReplace,1):console.log('Nothing to replace')
        
            currenState.listItem.push(action.value)
        

    }
    return currenState
}
const initialstateSelectedElement={
    Mfeu:false,
    Mair:true,
    Meau:true,
    Mterre:true,
    Rfeu:false,
    Rair:true,
    Reau:true,
    Rterre:true
}
export const SelectedElementReducer = (state=initialstateSelectedElement,action)=>{
    switch (action.type) {
        case ELEMENTSELECTED:{return action.value}
            
    }
    return state
}