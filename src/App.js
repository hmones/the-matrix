import './App.css';
import MatrixBackground from './Background';
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Start from './Pages/Start';
import Question from './Pages/Question';
import Explanation from './Pages/Explanation';
import End from './Pages/End';
import Results from './Pages/Results';

function App() {
  const [isCorrect, setIsCorrect] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState({id:null, description: "Empty Question", options: []})
  const [answeredQuestions, setAnsweredQuestions] = useState([])
  const [currentLevel, setCurrentLevel] = useState(1)
  const [score, setScore] = useState(0)

  return (
    <>
      <MatrixBackground/>
      <div style={{
        width:'80vw',
        height: '80vh',
        marginTop:'10vh',
        marginLeft: '10vw',
        backgroundColor: 'transparent',
        zIndex: '1',
        color:'white',
        textAlign: 'center'
      }}>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Start/>}/>
            <Route path='/question' element={
                <Question 
                  setIsCorrect={setIsCorrect}
                  currentQuestion={currentQuestion}
                  setCurrentQuestion={setCurrentQuestion}
                  currentLevel={currentLevel}
                  setCurrentLevel={setCurrentLevel}
                  score={score}
                  setScore={setScore}
                  setAnsweredQuestions={setAnsweredQuestions}
                  answeredQuestions={answeredQuestions}
                />
              }/>
            <Route path='/explanation' element={
                <Explanation
                  isCorrect={isCorrect} 
                  currentQuestion={currentQuestion}
                  answeredQuestions={answeredQuestions}
                />
              }/>
            <Route path='/end' element={<End score={score} answeredQuestions={answeredQuestions}/>}/>
            <Route path='/results' element={<Results score={score}/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
