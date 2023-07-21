import axios from "axios"
import { SIDEBAR_ACTIVE,  SIDEBAR_CLOSE, SIDEBAR_SUCESS } from "../actionType"

export const SideBarBuyers = (data)=>(dispatch)=>{
    axios.get(`http://localhost:8080/party?q=${data.query}`)
    .then((res)=>{
        dispatch({type:SIDEBAR_SUCESS,payload:{data:res.data,width:"350px",ref:data.ref}});
    })
    .catch((err)=>{
        console.log(err);
    })

}


export const SideBarActive = (data)=>(dispatch)=>{
    dispatch({type:SIDEBAR_ACTIVE,payload:{active:data.active,ref:data.ref}})
}


export const SideBarClose = (data)=>(dispatch)=>{
    dispatch({type:SIDEBAR_CLOSE})
}