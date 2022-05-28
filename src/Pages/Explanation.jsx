import React from "react";
import { Link } from "react-router-dom";
import Button from "../Components/Button";

function Explanation ({isCorrect, currentQuestion, answeredQuestions}) {
    return <div>
        <h1>
            <img src={"images/" + (isCorrect ? 'right' : 'wrong') + ".png"} alt="checkmark"/>
            <br/>
            {isCorrect ? "Good Job!" : "Come on!"}
        </h1>
        <p style={{
              padding: "20px 0",
              background: "#00000094",
              fontSize: "20px"
        }}>
            {currentQuestion.description}
        </p>
        <div>
            <Link to={answeredQuestions.length === 9 ? "/end" : "/question"}>
                <Button title="Roger That!"/>
            </Link>
        </div>
    </div>
}

export default Explanation