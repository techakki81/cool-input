import InputTextOut from './components/InputTextOut/InputTextOut'
import InputTextBorder from './components/InputTextBorder/InputTextBorder'

import {useState} from 'react'
import  { createGlobalStyle} from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
 *, *::before, *::after {
  box-sizing: border-box;
 }

 body{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    font-size: 16px;
}

#id{
  display:flex;
  flex-direction:column  
}

`

function App() {

 const [errMsg, setErrMsg] =  useState("") 
 const [errMsgBorderOut, setErrMsgBorderOut] =  useState("") 

 const handleValidation = (e)=>{
   e.preventDefault()

   e.target.value?.length>6?setErrMsg(""):setErrMsg("at least 6 characters expected")
 }

 const handleValidationOnBorder = (e)=>{
  e.preventDefault()
  e.target.value?.length>6?setErrMsgBorderOut(""):setErrMsgBorderOut("at least 6 characters expected")
}



  return (
    <>
    <GlobalStyle/>

    <div id="root">
       
       <InputTextOut 
        onValidation={handleValidation} 
        placeholderText ="Enter some text"
        errorMsg= {errMsg}/> 


       <InputTextBorder 
        onValidation={handleValidationOnBorder} 
        placeholderText ="Enter some text"
        errorMsg= {errMsgBorderOut}/>


    </div>
    </>
  );
}

export default App;
