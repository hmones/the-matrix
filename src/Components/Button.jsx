import React from "react"

export default function Button (props) {
    return <button style={{
        fontSize: "20px", padding: "10px", backgroundColor: "black", color: "#00ff00", border: "solid #00e700 3px", borderRadius: "10px", cursor: "pointer"
    }} {...props}>{props.title}</button>
}