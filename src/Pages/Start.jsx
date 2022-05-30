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
                    <div style={{flex: 1, width: "100%"}}>
                    <p>
                        <Typewriter onInit={(typewriter) => {
                            typewriter.typeString("Are you ready to challenge your knowledge and discover who you are?").start()
                        }} options={{
                            cursor: "<span style='color:#00ff00'>|</span>",
                            delay: 25
                        }}/>
                    </p>
                    <p>
                        <Typewriter onInit={(typewriter) => {
                            typewriter.pauseFor(3000).typeString("I will ask you a couple of questions").start()
                        }} options={{
                            cursor: "<span style='color:#00ff00'>|</span>",
                            delay: 25
                        }}/>
                    </p>
                    <p>
                        <Typewriter onInit={(typewriter) => {
                            typewriter.pauseFor(5000).typeString("Then it's all up to you").start()
                        }} options={{
                            cursor: "<span style='color:#00ff00'>|</span>",
                            delay: 25
                        }}/>
                    </p>
                    <h2>
                        <Typewriter onInit={(typewriter) => {
                            typewriter.pauseFor(7000).typeString("Take the red pill to proceed").start()
                        }} options={{
                            cursor: "<span style='color:#00ff00'>|</span>",
                            delay: 25
                        }}/>
                    </h2>
                    </div>
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