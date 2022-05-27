import './App.css';
import MatrixBackground from './Background';
import React from 'react'
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Start from './Pages/Start';
import Question from './Pages/Question';
import Explanation from './Pages/Explanation';
import End from './Pages/End';
import Results from './Pages/Results';

function App() {
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
        <MemoryRouter>
          <Routes>
            <Route exact path='/' element={<Start/>}/>
            <Route path='/question' element={<Question/>}/>
            <Route path='/explanation' element={<Explanation/>}/>
            <Route path='/end' element={<End/>}/>
            <Route path='/results' element={<Results/>}/>
          </Routes>
        </MemoryRouter>
      </div>
    </>
  );
}

export default App;
