import axios from "axios"
import style from "../CSS/TableRow.module.scss"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import {  SideBarBuyers, SideBarClose, SideBarItems } from "../REDUX/SideBarReducer/action";
import { SideBarItemActive, SideBarItemClose, SideBarItemSuccess } from "../REDUX/SideBarItemReducer/action";

const TableRow = ({i,name,hsnId,GST,unitId,openingStock,openingValue,alias,TableData})=>{

    const [ItemName,setItemName] = useState(name);
    const [ItemHsnId,setItemHsnId] = useState(hsnId);
    const [ItemGST,setItemGST] = useState(GST);
    const [ItemUnitId,setItemUnitID] = useState(unitId);
    const [ItemOpeningStock,setItemOpeningStock] = useState(openingStock);
    const [ItemAlias,setItemAlias] = useState(alias);
    const [ItemOpeningValue,setItemOpeningValue] = useState(openingValue);

    const [activeItem,setActiveItem] = useState(0); 
    const ActiveRef = useRef(null);


    const dispatch = useDispatch();

    const width = useSelector(store=>store.SideBarItemReducer.width);



    useEffect(()=>{
        dispatch(SideBarItemActive({active:activeItem,ref:ActiveRef}))
    },[activeItem])


    return <tr>
        <td>{i}</td>
        <td className={style.name}>
            <input 
                type="text"
                value={ItemName}
                id={`name${i}`}
                onChange={(e)=>{
                    setItemName(e.target.value)
                    dispatch(SideBarItemSuccess({query:e.target.value,active:activeItem,ref:ActiveRef}))
                }}
                onKeyDown={(e)=>{
                    if(e.keyCode===40 ){
                        if(width!=="0px"){
                            setActiveItem(prev=>prev+1)
                        }   
                        else{
                            document.getElementById(`name${i+1!==TableData.length+1 ? i+1 : 1}`).focus()
                        }
                    }
                    if(e.keyCode===38){
                        if(width!=="0px"){
                            setActiveItem(prev=>prev-1)
                        }  
                        else{
                            document.getElementById(`name${i-1!==0 ? i-1 : TableData.length}`).focus()
                        } 
                    }
                    if(e.keyCode===39 && e.ctrlKey){
                        document.getElementById(`HSNID${i}`).focus()
                    }
                    if(e.keyCode===13){
                        if(width!=="0px"){
                            axios.get(`http://localhost:8080/item/${ActiveRef.current.value}`)
                            .then((res)=>{
                                setItemName(res.data.name)
                                setItemHsnId(res.data.hsnId)
                                setItemGST(res.data.GST)
                                setItemUnitID(res.data.unitId)
                                setItemOpeningStock(res.data.openingStock)
                                setItemOpeningValue(res.data.openingValue)
                                setItemAlias(res.data.alias)
                            })
                            .catch((err)=>{
                                console.log(err);
                            })
                            dispatch(SideBarItemClose())
                        }   
                        
                    }

                }}
                onBlur={()=>dispatch(SideBarItemClose())}
            />
        </td>
        <td className={style.hsn}>
            <input 
                type="text" 
                value={ItemHsnId}
                id={`HSNID${i}`}
                onChange={(e)=>{
                    setItemHsnId(e.target.value)
                }}
                onKeyDown={(e)=>{
                    if(e.keyCode===37 && e.ctrlKey){
                        document.getElementById(`name${i}`).focus()
                    }
                    if(e.keyCode===39 && e.ctrlKey){
                        document.getElementById(`gst${i}`).focus()
                    }
                    if(e.keyCode===38){
                        document.getElementById(`HSNID${i-1!==0 ? i-1 : TableData.length}`).focus()
                    }
                    if(e.keyCode===40){
                        document.getElementById(`HSNID${i+1!==TableData.length+1 ? i+1 : 1}`).focus()
                    }
                    
                }}
            />
        </td>
        <td className={style.gst}>
            <input 
                type="text"
                id={`gst${i}`}
                value={ItemGST}
                onChange={(e)=>{
                    setItemGST(e.target.value)
                }}
                onKeyDown={(e)=>{
                    if(e.keyCode===37 && e.ctrlKey){
                        document.getElementById(`HSNID${i}`).focus()
                    }
                    if(e.keyCode===39 && e.ctrlKey){
                        document.getElementById(`cost${i}`).focus()
                    }
                    if(e.keyCode===38){
                        document.getElementById(`gst${i-1!==0 ? i-1 : TableData.length}`).focus()
                    }
                    if(e.keyCode===40){
                        document.getElementById(`gst${i+1!==TableData.length+1 ? i+1 : 1}`).focus()
                    }
                }}
            />
        </td>
        <td className={style.cost}>
            <input 
                type="text" 
                id={`cost${i}`}
                value={ItemOpeningStock}
                onChange={(e)=>{
                    setItemOpeningStock(e.target.value)
                }}
                onKeyDown={(e)=>{
                    if(e.keyCode===37 && e.ctrlKey){
                        document.getElementById(`gst${i}`).focus()
                    }
                    if(e.keyCode===39 && e.ctrlKey){
                        document.getElementById(`lastSp${i}`).focus()
                    }
                    if(e.keyCode===38){
                        document.getElementById(`cost${i-1!==0 ? i-1 : TableData.length}`).focus()
                    }
                    if(e.keyCode===40){
                        document.getElementById(`cost${i+1!==TableData.length+1 ? i+1 : 1}`).focus()
                    }
                }}
            />Rs.
        </td>
        <td className={style.lastSP}>
            <input 
                type="text" 
                id={`lastSp${i}`}
                value={ItemOpeningValue}
                onChange={(e)=>{
                    setItemOpeningValue(e.target.value)
                }}
                onKeyDown={(e)=>{
                    if(e.keyCode===37 && e.ctrlKey){
                        document.getElementById(`cost${i}`).focus()
                    }
                    if(e.keyCode===39 && e.ctrlKey){
                        document.getElementById(`quantity${i}`).focus()
                    }
                    if(e.keyCode===38){
                        document.getElementById(`lastSp${i-1!==0 ? i-1 : TableData.length}`).focus()
                    }
                    if(e.keyCode===40){
                        document.getElementById(`lastSp${i+1!==TableData.length+1 ? i+1 : 1}`).focus()
                    }
                }}
                
            />Rs.
        </td>
        <td className={style.quantity}>
            <input 
                type="text"
                id={`quantity${i}`}
                value={ItemUnitId}
                onChange={(e)=>{
                    setItemUnitID(e.target.value)
                }}
                onKeyDown={(e)=>{
                    if(e.keyCode===37 && e.ctrlKey){
                        document.getElementById(`lastSp${i}`).focus()
                    }
                    if(e.keyCode===39 && e.ctrlKey){
                        document.getElementById(`meters${i}`).focus()
                    }
                    if(e.keyCode===38){
                        document.getElementById(`quantity${i-1!==0 ? i-1 : TableData.length}`).focus()
                    }
                    if(e.keyCode===40){
                        document.getElementById(`quantity${i+1!==TableData.length+1 ? i+1 : 1}`).focus()
                    }
                }}
            /> PCS
        </td>
        <td className={style.meters}>
            <input 
                type="text" 
                id={`meters${i}`}
                value={ItemAlias}
                onChange={(e)=>{
                    setItemAlias(e.target.value)
                }}
                onKeyDown={(e)=>{
                    if(e.keyCode===37 && e.ctrlKey){
                        document.getElementById(`quantity${i}`).focus()
                    }
                    if(e.keyCode===38){
                        document.getElementById(`meters${i-1!==0 ? i-1 : TableData.length}`).focus()
                    }
                    if(e.keyCode===40){
                        document.getElementById(`meters${i+1!==TableData.length+1 ? i+1 : 1}`).focus()
                    }
                }}
            />
        </td>
        <td className={style.priceIN}>
            <input 
                type="text" 
                value={Math.floor(ItemOpeningValue/10)}
                disabled
            />Rs.
        </td>
        <td className={style.priceEX}>
            <input 
                type="text" 
                value={Math.floor(ItemOpeningStock/3)}
                disabled
            />Rs.
        </td>
        <td className={style.taxable}>
            <input 
                type="text" 
                value={Math.floor((ItemOpeningStock/3)*18/100)}
                disabled
            />Rs.
        </td>
        <td className={style.discount}>
            <input 
                type="text" 
                value={Math.floor((ItemOpeningStock/3)*10/100)}
                disabled
            />Rs.
        </td>
        <td className={style.gst}>
            <input 
                type="text" 
                value={ItemGST}
                disabled
            />
        </td>
        <td className={style.totalAMT}>
            <input 
                type="text"
                value={ItemOpeningStock/2} 
                disabled
            />Rs.
        </td>
    </tr>
}

export default TableRow