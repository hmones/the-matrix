import React, { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"
import { db } from '../Clients/Main'
import { charachters } from "../Data/Data";

function Results ({score}) {
    const [charachter] = useState(charachters.find((charachter) => score >= charachter.minScore && score <= charachter.maxScore))
    const [results, setResults] = useState([])
    const [totalCount, setTotalCount] = useState(0)
    const getWidth = (count) => {
        let width = (count === 0) ? 0 : ((count * 60) / totalCount)
        return  width === 0 ? "20px" : (Math.floor(width).toString() + "vw")
    }
    const getBackground = (id) => id === charachter.id ? "#00ff00" : "#cecece"
    const getBorder = (id) => id === charachter.id ? "#00ff00 solid 2px" : "#cecece solid 2px"

    useEffect(() => {
        const q = query(collection(db, 'results'), orderBy('id', 'asc'))
        onSnapshot(q, (querySnapshot) => {
            setResults(querySnapshot.docs.map(doc => doc.data()))
            setTotalCount(querySnapshot.docs.map(doc => doc.data()).reduce((prevValue, currentValue) => prevValue + currentValue.count, 0))
        })
    }, [])

    return <>
        <h2>You are {charachter.name}</h2>
        <div>
            {results ? results.map((charachter) => <div style={{display: "inline-flex"}} key={charachter.id}>
                <div style={{flex: 0, width: "70px"}}>
                    <img style={{width: "70px", borderRadius: "50%", border: getBorder(charachter.id)}} 
                        src={charachters.find((item) => item.id === charachter.id).image}
                        alt={charachter.id}/>
                </div>
                <div style={{flex: 1, width: "80vw", textAlign: "left", alignSelf: "center", paddingLeft: "10px"}}>
                    <span style={{
                            width: getWidth(charachter.count),
                            display: "block",
                            height: "20px",
                            background: getBackground(charachter.id),
                            textAlign: "right",
                            padding: "10px",
                            color: "black"
                        }}>
                        {Math.floor((charachter.count / totalCount) * 100)}%
                    </span>
                </div>
            </div>) : <></>}
        </div>
    </>
}

export default Results