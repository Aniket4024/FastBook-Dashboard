import axios from "axios"
import { SIDEBAR_ITEM_ACTIVE, SIDEBAR_ITEM_CLOSE, SIDEBAR_ITEM_SUCCESS } from "../actionType"

export const SideBarItemSuccess = (data)=>(dispatch)=>{
    axios.get(`http://localhost:8080/item?q=${data.query}`)
    .then((res)=>{
        dispatch({type:SIDEBAR_ITEM_SUCCESS,payload:{Data:res.data,active:data.active,ref:data.ref}})
    })
}
export const SideBarItemActive = (data)=>(dispatch)=>{
    dispatch({type:SIDEBAR_ITEM_ACTIVE,payload:{active:data.active,ref:data.ref}})
}
export const SideBarItemClose = (data)=>(dispatch)=>{
    dispatch({type:SIDEBAR_ITEM_CLOSE})
}