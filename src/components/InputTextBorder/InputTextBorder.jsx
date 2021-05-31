import React, {useState} from 'react'
import styled from 'styled-components/macro'

//  use google font
const Parent = styled.div`
 display:flex;
 flex-direction:column;
 align-item:center;
 font-family:sans-serif;
 font-size:20px;
`
const Label = styled.label`
  position:relative;
  font-size:15px;  
`
const Input = styled.input`
padding:0.5rem;
width:17rem;
background-color:#faf7f2;
border:none;
:focus-visible{
  border:none;
}

&:focus + span {
    top: -4px;
    font-size: 10px;
    color: #222;
    background-color:#faf7f2;
    padding:0 3px 0  3px;

}
`
const PlaceHolder =  styled.span`
  position:absolute;
  color:#d4d1cd;
  left:5%;
  top:23%;  
  transition: 
    top 0.3s ease-in, 
    color 0.3s ease-in, 
    font-size 0.3s ease-in;
`
const ErrorMessage = styled.span`
    width: 17rem;
    display: flex;
    align-items: center;
    padding: 0 8px;
    font-size: 12px;
    background: #d30909;
    color: #fff;
    height: 24px;
`

export default function InputTextBorder({placeholderText,errorMsg,onValidation}) {

  const [inptVal, setInptVal] = useState("")
  
  const checkboxHandler =()=>{
    onValidation(inptVal)
  }

  //TODO put valudation
  console.log(inptVal)
  //const isError = onValidation

    return (        
       <Parent> 
        <Label>

          <Input 
            value={inptVal} 
           >
           </Input>
          
          <PlaceHolder>{placeholderText}</PlaceHolder>
          <ErrorMessage>{errorMsg} </ErrorMessage>
        </Label>
       </Parent>
    )
}
