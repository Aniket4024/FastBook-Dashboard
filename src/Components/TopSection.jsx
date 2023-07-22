import { useEffect, useRef, useState } from "react";
import style from "../CSS/TopSection.module.scss"
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import { SideBarActive, SideBarBuyers, SideBarClose } from "../REDUX/SideBarReducer/action";
import axios from "axios";
import { BuyerItems } from "../REDUX/BuyerReducer/action";
import { TableData } from "../REDUX/TableReducer/action";
import SideBarItems from "./SideBarItems";

const TopSection = ()=>{

    const [BuyerName,setBuyerName] = useState("")  
    const [BuyerAddress,setBuyerAddress] = useState("")  
    const [BuyerGSTID,setBuyerGSTID] = useState("")  
    const [BuyerMobile,setBuyerMobile] = useState("")  

    const [activeList,setActiveList] = useState(0);


    const BuyerWidth = useSelector(store=>store.SideBarReducer.width);

    const dispatch = useDispatch();

    const data = useSelector(store=>store.SideBarReducer.data)
    const active = useSelector(store=>store.SideBarReducer.active)
    const width = useSelector(store=>store.SideBarReducer.width)


    const BuyerActiveList = useRef(null);

    const BuyerData = useSelector(store=>store.BuyerReducer.data);

    // console.log(BuyerData);
    


    // OnChange Functions -
    
    const handleBuyerName = (e)=>{
        setBuyerName(e.target.value)
        dispatch(SideBarBuyers({query:e.target.value,ref:BuyerActiveList}));
    }
    

    useEffect(()=>{
        dispatch(SideBarActive({active:activeList,ref:BuyerActiveList}))
    },[activeList])
    
    useEffect(()=>{
        setBuyerName(BuyerData.name)
        setBuyerAddress(BuyerData.address)
        setBuyerGSTID(BuyerData.gstID)
        setBuyerMobile(BuyerData.mobile)
        
    },[BuyerData])

    return <div id={style.TopSection}>
        
        <div>
            <div>
                <div id={style.Details}>
                    <div>
                        <h4>
                            Buyer Name :
                        </h4>
                        <input 
                            type="text" 
                            placeholder="e.g. Mahesh Agarwal"
                            onChange={handleBuyerName}
                            value={BuyerName}
                            id="BuyerName"
                            onKeyDown={(e)=>{
                                if(e.keyCode===40){
                                    if(width!=="0px"){
                                        setActiveList(active===data.length-1 ? 0 : active+1);
                                    }
                                }
                                if(e.keyCode===13 || (e.keyCode===39 && e.ctrlKey)){
                                    // console.log(BuyerActiveList.current.value)
                                    if(width!=="0px"){

                                        

                                        dispatch(BuyerItems(BuyerActiveList.current.value))
                                        dispatch(SideBarClose())
                                        setActiveList(1)

                                    }
                                    else{
                                        document.getElementById("address").focus()
                                        setActiveList(1)
                                    }
                                }
                                if(e.keyCode===38){
                                    setActiveList(active!==0 ? active-1 : data.length-1);
                                }

                            }}
                            onBlur={()=>dispatch(SideBarClose())}


                        />
                    </div>
                    <div>
                        <h4>
                            Address :
                        </h4>
                        <input 
                            type="text" 
                            placeholder="e.g. Shah Market, Bhaglapur"
                            onChange={(e)=>setBuyerAddress(e.target.value)}
                            value={BuyerAddress}
                            id="address"
                            onKeyDown={(e)=>{
                                if(e.keyCode===13 || (e.keyCode===39 && e.ctrlKey)){
                                    document.getElementById("gstId").focus()
                                }
                                if(e.keyCode===37 && e.ctrlKey){
                                    document.getElementById("BuyerName").focus()
                                }
                            }}
                        />
                    </div>
                    <div>
                        <h4>
                            GSTID :
                        </h4>
                        <input 
                            type="text" 
                            placeholder="e.g. 10AABKD1495N1ZG1"
                            onChange={(e)=>setBuyerGSTID(e.target.value)}
                            value={BuyerGSTID}
                            id="gstId"
                            onKeyDown={(e)=>{
                                if(e.keyCode===13 || (e.keyCode===39 && e.ctrlKey)){
                                    document.getElementById("mobile").focus()
                                }
                                if(e.keyCode===37 && e.ctrlKey){
                                    document.getElementById("address").focus()
                                }
                            }}
                        />
                    </div>
                    <div>
                        <h4>
                            Mobile :
                        </h4>
                        <input 
                            type="text" 
                            placeholder="e.g. 9528028271"
                            onChange={(e)=>setBuyerMobile(e.target.value)}
                            value={BuyerMobile}
                            id="mobile"
                            onKeyDown={(e)=>{
                                if(e.keyCode===37 && e.ctrlKey){
                                    document.getElementById("gstId").focus()
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div id={style.InvoiceNumber}>
                <h4>Invoice Number :</h4>
                <input 
                    type="text"
                    placeholder="Invoice Number" 
                />
            </div>
            <div id={style.InvoiceDate}>
                <h4>Invoice Date :</h4>
                <input 
                    type="text" 
                    placeholder="DD/MM/YY" 
                />
            </div>
            <div id={style.date}>
                <h4>Date :</h4>
                <input 
                    type="text" 
                    placeholder="DD/MM/YY"
                />
            </div>
        </div>
        {
            BuyerWidth!=="0px" ?
            
            <SideBar/>

            :

            <SideBarItems/>
        }
    </div>
}

export default TopSection;