import logo from './logo.svg';
import './App.css';
import InputTextOut from './components/InputTextOut/InputTextOut'
import {useState} from 'react'

function App() {

 const [errMsg, setErrMsg] =  useState("") 

 const handleValidation = (e)=>{
   e.preventDefault()

   e.target.value?.length>6?setErrMsg(""):setErrMsg("at least 6 characters expected")
 }


  return (
    <div className="App">
       <InputTextOut 
        onValidation={handleValidation} 
        placeholderText ="Enter some text"
        errorMsg= {errMsg}/>
    </div>
  );
}

export default App;
