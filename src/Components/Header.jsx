import React from "react";
import CustomTypewriter from "./CustomTypewriter";

export default function Header ({title}) {
    return <>
        <div style={{display: "inline-flex", flexWrap: "wrap"}}>
            <div style={{flex: 0, width: "80px", textAlign: "left", alignSelf: "center", marginRight: "20px"}}>
                <img src="charachters/morpheous.png" style={{borderRadius: "50%", width: "80px"}} alt="morpheous"/>
            </div>
            <div style={{flex: 1, width: "80vw"}}>
                <p style={{
                    fontSize: "20px",
                    padding: "20px",
                    textAlign: "left",
                    background: "black",
                    border: "#00ff00 solid 2px",
                    borderRadius: "10px"
                }}>
                    <CustomTypewriter title={title} />
                </p>
            </div>
        </div>
        
       
    </>
}