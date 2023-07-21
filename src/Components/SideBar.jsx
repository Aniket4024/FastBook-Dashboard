import { useSelector } from "react-redux"
import style from "../CSS/SideBar.module.scss"
import { useEffect, useRef, useState } from "react";

const SideBar = ()=>{

    const [data,setData] = useState([]);

    const data1 = useSelector(store=>store.SideBarReducer.data)
    const width = useSelector(store=>store.SideBarReducer.width);
    const active = useSelector(store=>store.SideBarReducer.active);
    const ref = useSelector(store=>store.SideBarReducer.ref);

    const MainRef = useRef(null)

    const defaultRef = useRef(null)


    useEffect(()=>{
        MainRef.current.scrollTop+=10
        if(active==0){
            MainRef.current.scrollTop=0
        }
    },[active])

    useEffect(()=>{
        setData(data1)
    },[data1])





    return <div  id={style.sideBar} style={{width:width?width:"0px"}} ref={MainRef}>
        <ul>
            {
                data?.map((e,i)=><li value={e.id} key={e.id} ref={active===i? ref : defaultRef } id={active===i?style.activeList : ""}   >{e.name} {e.description ? `»»» ${e.description}` : ""}</li>)
            }
        </ul>
    
    </div>

}

export default SideBar