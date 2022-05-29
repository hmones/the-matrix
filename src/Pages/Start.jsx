import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import BluePill from '../Images/blue-pill-o.png';
import RedPill from '../Images/red-pill.png';
import Typewriter from 'typewriter-effect'

function Start () {
    const [showContent, setShowContent] = useState(false)
    const [showChoice, setShowChoice] = useState(false)
    useEffect(() => {
        setTimeout(() => setShowContent(true), 2000)
        setTimeout(() => setShowChoice(true), 11000)
    }, [])
    return <>
        <Header title="Welcome to the Matrix"/>
        {showContent ? <>
                <div style={{display: "flex", backgroundColor: 'black', padding: '20px', border: "#00ff00 solid 2px", borderRadius: "10px", textAlign: "left"}}>
                    <Typewriter onInit={(typewriter) => {
                        typewriter.typeString("<p>Are you ready to challenge your knowledge and discover who you are?</p>")
                        .pauseFor(1000)
                        .start()
                        .typeString("<p>I will ask you a couple of questions</p>")
                        .pauseFor(1000)
                        .typeString("<p>Then it's all up to you ...</p>")
                        .pauseFor(1000)
                        .typeString("<h2>Take the red pill to proceed ...</h2>")
                        .start()
                        .stop()
                    }} options={{
                        cursor: "<span style='color:#00ff00'>__</span>",
                        delay: 25
                    }}/>
                </div>
            </> : <></>}
        <br/><br/>
        {showChoice ? <div>
            <Link to='/end'>
                <img src={BluePill} alt="blue pill"/>
            </Link>
            <Link to='/question'>
                <img src={RedPill} alt="red pill"/>
            </Link>
        </div> : <></>}
    </>
}

export default Start