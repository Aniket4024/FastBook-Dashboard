import { TABLE_SUCCESS } from "../actionType"

export const TableData = (data)=>(dispatch)=>{
    dispatch({type:TABLE_SUCCESS,payload:data});
}