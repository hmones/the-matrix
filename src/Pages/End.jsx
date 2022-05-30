import React, { useEffect, useState } from "react";
import { db } from "../Clients/Main";
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import {
    EmailShareButton,
    FacebookShareButton,
    TelegramShareButton,
    TwitterShareButton,
    VKShareButton,
    WhatsappShareButton,
} from "react-share";
import {
    EmailIcon,
    FacebookIcon,
    TelegramIcon,
    TwitterIcon,
    VKIcon,
    WhatsappIcon,
} from "react-share";
import Header from "../Components/Header";
import { charachters } from "../Data/Data";
import Button from "../Components/Button";
import { Link } from "react-router-dom";

function End ({score, answeredQuestions}) {
    const [charachter] = useState(charachters.find((charachter) => (score <= charachter.maxScore && score >= charachter.minScore)))
    const shareText = () => {
        return score > 6 ? "I took the red pill and now I'm " + charachter.name + " and I'm out of the matrix, join me now #taketheredpill"
        : "I took the red pill but unfortunately I was sent back to the matrix, I'm " + charachter.name + ". Try it yourself #taketheredpill"
    }
    const url = "https://red-pill-challenge.com"
    useEffect(() => {
        if (answeredQuestions.length >= 9) {
            const record = doc(db, 'results/' + charachter.id)
            getDoc(record).then((data) => {
                updateDoc(record, {
                    count: data.data().count + 1
                })
            })
        }
    }, [])

    return <div>
        <Header title={score > 6 ? "Congratulations, you're out of the matrix" : "It's better for you to be kept in the matrix"}/>
        <h2>Your are {charachter.name}</h2>
        <img src={charachter.image} alt={charachter.name}/>
        <br/><br/>
        <h3>Share your results on social media:</h3>
        <FacebookShareButton url={url} quote={shareText()} children={<FacebookIcon size={32} round={true}/>}/>
        <TwitterShareButton url={url} title={shareText()}  children={<TwitterIcon size={32} round={true}/>}/>
        <WhatsappShareButton url={url} title={shareText()}  children={<WhatsappIcon size={32} round={true}/>}/>
        <EmailShareButton url={url} subject="I took the red pill" body={shareText()}  children={<EmailIcon size={32} round={true}/>}/>
        <TelegramShareButton url={url} title={shareText()}  children={<TelegramIcon size={32} round={true}/>}/>
        <VKShareButton url={url} title={shareText()}  children={<VKIcon size={32} round={true}/>}/>
        <br/><br/>
        <Link to="/results">
            <Button title="Compare with others"/>
        </Link>
    </div>
}

export default End