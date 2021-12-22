import React from 'react';
import Home from "./Home";
import "./index.css";
import {BrowserRouter, Route ,Routes } from  'react-router-dom';
import  NotFound  from './NotFound';



function App() {
    return (
    <div className="App" data-testid="App">
      <BrowserRouter>
       <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='*' element={<NotFound/>}/>
        <Route/>
       </Routes>
      </BrowserRouter>
    </div>
        
    );
  }
  
  export default App;