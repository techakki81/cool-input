import React, {createRef} from 'react'
import styled,{css} from 'styled-components'
import {Parent,Label,Input,PlaceHolder,ErrorMessage} from '../styles'

const InputBorder = styled(Input)`   
   &:focus + span,&.dirty+span 
     {      
       top: -10px;
       font-size: 16px;
       color: #222;  
       background-color: #faf7f2;
       padding: 0 4px 0 4px;
     }
   `
  
   const inputRef= createRef()


export default function InputTextBorder({placeholderText,errorMsg, onValidation,}) {

  const handleFocusOut =(e)=>{

    if(e.target.value)    
     inputRef.current.classList.add("dirty")    
    else
      inputRef.current.classList.remove("dirty")

     onValidation(e)
  }

    return (        
       <Parent> 
        <Label>
          <InputBorder
           onBlur ={handleFocusOut} 
           ref={inputRef}

          ></InputBorder>          
          <PlaceHolder>{placeholderText}</PlaceHolder>
          <ErrorMessage>{errorMsg} </ErrorMessage>
        </Label>
       </Parent>
    )
}
