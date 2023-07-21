import axios from "axios"
import { BUYER_SUCESS } from "../actionType";

export const BuyerItems = (data)=>(dispatch)=>{
    axios.get(`http://localhost:8080/party/${data}`)
    .then((res)=>{
        dispatch({type:BUYER_SUCESS,payload:res.data})
    })
    .catch((err)=>{
        console.log(err);
    })
}