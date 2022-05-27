import React from "react";
import { Link } from "react-router-dom";
import BluePill from '../Images/blue-pill-o.png';
import RedPill from '../Images/red-pill.png';

function Start () {
    return <>
        <h1>Welcome to the Matrix</h1>
        <div style={{backgroundColor: 'black', padding: '30px'}}>
            <p>You are about to dive in a game that will show you who you are</p>
            <p>The game is a series of questions, but make sure to answer carefully</p>
            <p>If you don't know the answer make a guess</p>
            <p><small>* The game is designed for 18+ people, you may see some graphic pictures.</small></p>
        </div>
        <h2>Are you sure?</h2>
        <div>
            <Link to='/end'>
                <img src={BluePill} alt="blue pill"/>
            </Link>
            <Link to='/question'>
                <img src={RedPill} alt="red pill"/>
            </Link>
        </div>
    </>
}

export default Start