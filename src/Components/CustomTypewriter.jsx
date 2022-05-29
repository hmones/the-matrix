import React from "react";
import Typewriter from "typewriter-effect";

export default function CustomTypewriter ({title}) {
    return <Typewriter options={{
        cursor: "<span style='color:#00ff00'>_</span>",
        delay: 25
    }} onInit={(typewriter) => {
        typewriter.typeString(title).pauseFor(1000).start()
    }}/>
}