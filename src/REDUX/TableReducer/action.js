import { TABLE_SUCCESS } from "../actionType"

export const TableData1 = (data)=>(dispatch)=>{
    dispatch({type:TABLE_SUCCESS,payload:data});
}