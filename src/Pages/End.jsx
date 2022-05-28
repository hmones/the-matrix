import React, { useState } from "react";
import { charachters } from "../Data/Data";

function End ({score}) {
    const [charachter] = useState(charachters.find((charachter) => (score <= charachter.maxScore && score >= charachter.minScore)))

    return <div>
        <h1>{score > 6 ? "Congratulations, you're out of the matrix" : "It's better for you to be kept in the matrix"}</h1>
        <h2>Your are {charachter.name}</h2>
        <img src={charachter.image} alt={charachter.name}/>
    </div>
}

export default End