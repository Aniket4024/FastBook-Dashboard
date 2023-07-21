import {TABLE_SUCCESS} from "../actionType"


const initialState = {
    data:[]
}

export const reducer = (state=initialState,{type,payload})=>{
    switch(type){
        case TABLE_SUCCESS:
            return {...state,data:payload};
        default:
            return state
    }
}