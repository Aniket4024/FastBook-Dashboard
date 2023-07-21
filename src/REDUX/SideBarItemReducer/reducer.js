import { SIDEBAR_ITEM_ACTIVE, SIDEBAR_ITEM_CLOSE, SIDEBAR_ITEM_SUCCESS } from "../actionType"


const initialState = {
    Data:[],
    width:"0px",
    ref:"",
    active:0
}

export const reducer = (state=initialState,{type,payload})=>{
    switch(type){
        case SIDEBAR_ITEM_SUCCESS:
            return {...state,Data:payload.Data,width:"500px",ref:payload.ref,active:payload.active}
        case SIDEBAR_ITEM_ACTIVE:
            return {...state,ref:payload.ref,active:payload.active};
        case SIDEBAR_ITEM_CLOSE:
            return{...state,width:"0px"};
        default :
            return state
    }
}