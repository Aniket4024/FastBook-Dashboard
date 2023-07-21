import style  from "../CSS/BottomSection.module.scss"

const Total = ()=>{
    return <div id={style.Total}>
        <div>
            <div>
                <h4>
                    Final Discount
                </h4>
                <h4>
                    Total CGST
                </h4>
                <h4>
                    SGST
                </h4>
                <h4>
                    IGST
                </h4>
                <h4>
                    ROUND OFF
                </h4>
            </div>
            <div>
                <h4>890.00</h4>
                <h4>18</h4>
                <h4>289.00</h4>
                <h4> 36.00</h4>
            </div>
            <div>
                <h4>Rs.</h4>
                <h4>%</h4>
                <h4>Rs.</h4>
                <h4>Rs.</h4>
            </div>
        </div>
    </div>
}

export default Total