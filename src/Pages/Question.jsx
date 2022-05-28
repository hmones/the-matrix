import React, { useEffect } from "react";
import { data } from '../Data/Data'
import BluePill from '../Images/blue-pill.png';
import Button from "../Components/Button";
import { Link, useNavigate } from "react-router-dom";

function Question ({setIsCorrect, currentQuestion, setCurrentQuestion, currentLevel, setCurrentLevel, score, setScore, setAnsweredQuestions, answeredQuestions}) {
    const navigate = useNavigate()
    const GetRandomQuestion = (questions) => {
        return questions[Math.floor(Math.random() * questions.length)]
    }
    const calculateScore = (option) => {
        setAnsweredQuestions([...answeredQuestions, currentQuestion.id])
        setIsCorrect(false)
        if (option === currentQuestion.country) {
            setScore(score + currentQuestion.score)
            setIsCorrect(true)
        }
        if ([2, 5].includes(answeredQuestions.length)) {
            setCurrentLevel(currentLevel + 1)
        }
        navigate("/explanation")
    }
    useEffect(() => {
        setCurrentQuestion(
            GetRandomQuestion(
                data.filter((question) => !answeredQuestions.includes(question.id) && question.level === currentLevel)
            )
        )
    }, [])

    return <>
        <img src="charachters/morpheous.png" style={{borderRadius: "50%", width: "87px"}} alt="morpheous"/>
        <h1>Where is this picture?</h1>
        <img src={currentQuestion.imagePath} style={{width: "100%", border: "solid #00e700 3px", borderRadius: "10px"}} alt={currentQuestion.image}/>
        <br />
        <div style={{display: "inline-flex", paddingTop: "20px", paddingBottom: "20px", width: "100%"}}>
            {currentQuestion.options.map((option, i) => (
                <div style={{flex: "1"}} key={i}>
                    <Button onClick={() => calculateScore(option)} title={option} />
                </div>
            ))}
        </div>
        <div style={{position: "absolute", top: "-8px", right: "-5px"}}>
            <Link to='/end'>
                <img src={BluePill} alt="blue pill" style={{width: "75px"}}/>
            </Link>
        </div>
    </>
}

export default Question