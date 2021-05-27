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
&:focus {
  border:1px solid red;
}
`
const PlaceHolder =  styled.span`
  position:absolute;
  color:#d4d1cd;
  left:5%;
  top:23%;  
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
