import React from 'react'
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
margin:15px;
&:focus + span {
    top: -10px;
    font-size: 10px;
    color: #222;
}
`
const PlaceHolder =  styled.span`
  position:absolute;
  color:#d4d1cd;
  left:5%;
  top:23%;  

  transition: top 0.3s ease-in, color 0.3s ease-in, font-size 0.3s ease-in;
`
const ErrorMessage = styled.span``

export default function CoolInput({placeholderText}) {
    return (        
       <Parent> 
        <Label>
          <Input></Input>
          <PlaceHolder>{placeholderText}</PlaceHolder>
          <ErrorMessage></ErrorMessage>
        </Label>
       </Parent>
    )
}
