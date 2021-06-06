import styled  from 'styled-components/macro'

 const Parent = styled.div`
 display:flex;
 flex-direction:column;
 align-item:center;
 font-family:sans-serif;
 font-size:20px;
 margin:50px;
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

&:focus{
  boder:none;
}

// &:valid + span,--> tell this later to show placeholder comes back
&:focus + span,
&.dirty+span 
{
  top: -25px;
  font-size: 16px;
  color: #222;
}`
 
const PlaceHolder =  styled.span`
  position:absolute;
  color:#d4d1cd;
  left:5%; 
 
  top:23%;
  font-size:12px;
  color:#dedcdc;     

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
    color:red;
    height: 24px;
`
export {
    Parent,
    Label,
    Input,
    PlaceHolder,
    ErrorMessage    
}