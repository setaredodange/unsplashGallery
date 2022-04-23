import React from "react";
import "./LoadingIcon.css"

const LoadingIcon = ()=>{
    return(
        <div className={`loading-container`}>
            <div className={"lds-grid"}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default LoadingIcon