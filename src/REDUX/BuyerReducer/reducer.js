import { BUYER_SUCESS } from "../actionType";

const initialState = {
    data:[],
}

export const reducer = (state=initialState,{type,payload})=>{
    switch(type){
        case BUYER_SUCESS:
            return {...state,data:payload};
        default:
            return state
    }
}