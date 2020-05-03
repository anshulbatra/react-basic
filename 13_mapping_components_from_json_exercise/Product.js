import React from "react"

function Product(props) {
    
    return(
        <div>
            <h1>{props.nam}</h1>
            <p>{props.pr}$ - {props.des}</p>
            <hr/>
        </div>
    )
}
export default Product