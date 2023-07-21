import { useRef } from "react";
import { SIDEBAR_ACTIVE, SIDEBAR_CLOSE,SIDEBAR_SUCESS } from "../actionType"


const initialState = {
    data:[],
    width:"0px",
    active:0,
    ref:"",
    itemsData:[],
    itemRef:"",
    activeItem:0
}

export const reducer = (state=initialState,{type,payload})=>{
    switch(type){
        case SIDEBAR_SUCESS:
            return {...state,data:payload.data,width:payload.width,ref:payload.ref};
        case SIDEBAR_ACTIVE:
            return {...state,active:payload.active,ref:payload.ref};
        case SIDEBAR_CLOSE:
            return {
                ...state,
                width:"0px",
                active:0
            }
        default:
            return state
    }
}