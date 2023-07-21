import { useSelector } from "react-redux"
import style from "../CSS/SideBarItems.module.scss"
import { useEffect, useRef } from "react";


const SideBarItems = ()=>{

    const Data = useSelector(store=>store.SideBarItemReducer.Data);
    const active  = useSelector(store=>store.SideBarItemReducer.active);
    const width = useSelector(store=>store.SideBarItemReducer.width);
    const ref = useSelector(store=>store.SideBarItemReducer.ref);

    const defaultRef = useRef(null)
    const MainRef = useRef(null)

    useEffect(()=>{
        MainRef.current.scrollTop+=10
        if(active==0){
            MainRef.current.scrollTop=0
        }
    },[active])


    return <div id={style.SideBarItems} style={{width:width!=="0px" ? width : "0px"}} ref={MainRef}>
         <ul>
            {
                Data?.map((e,i)=><li value={e.id} key={e.id} ref={active===i ? ref : defaultRef} id={active===i ? style.activeList : ""} >{e.name} »»»» {e.description}</li>)
            }
        </ul>
    </div>
}

export default SideBarItems