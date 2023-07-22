import { useSelector } from "react-redux"
import style from "../CSS/Table.module.scss"
import SideBar from "./SideBar"
import TableRow from "./TableRow";
import { useState } from "react";


const Table = ()=>{

    const TableData = useSelector(store=>store.TableReducer.data);
    const [Data,setData] = useState([]);
    console.log(TableData)

    

    return <div id={style.Table}>

        <table>
            {/* Head */}
            <tr>
                <th style={{width:"2%"}}>No.</th>
                <th style={{width:"15%"}}>Item Name</th>
                <th style={{width:"3.1%"}}>HSN</th>
                <th style={{width:"3%"}}>GST%</th>
                <th style={{width:"5%"}}>Cost</th>
                <th style={{width:"5%"}}>Last SP</th>
                <th style={{width:"5%"}}>Quantity</th>
                <th style={{width:"5%"}}>Meters</th>
                <th style={{width:"8%"}}>Price (Incl. GST)</th>
                <th style={{width:"8%"}}>Price (Excl. GST)</th>
                <th style={{width:"6%"}}>Taxable Amt.</th>
                <th style={{width:"5%"}}>Discount</th>
                <th style={{width:"3%"}}>GST</th>
                <th style={{width:"5%"}}>Total Amt</th>
            </tr>

        {/* Dont Remove this 2 Rows All the aligment is depends on this two row */}
            <tr>
                <td style={{width:"2%"}}></td>
                <td style={{width:"15%"}}></td>
                <td style={{width:"3.2%"}}></td>
                <td style={{width:"3.2%"}}></td>
                <td style={{width:"5%"}}></td>
                <td style={{width:"5%"}}></td>
                <td style={{width:"5%"}}></td>
                <td style={{width:"5%"}}></td>
                <td style={{width:"8%"}}></td>
                <td style={{width:"8%"}}></td>
                <td style={{width:"6%"}}></td>
                <td style={{width:"5%"}}></td>
                <td style={{width:"3%"}}></td>
                <td style={{width:"5%"}}></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>

            {
                TableData?.map((e,i)=> <TableRow i={i+1} {...e} TableData={TableData}/> )
            }
             <TableRow i={TableData?TableData?.length+1:1} />
            
        </table>
    </div>
}

export default Table