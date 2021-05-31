import React from 'react'
import InputTextOut  from './InputTextOut';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'InputTextOut',
  component: InputTextOut,  
  argTypes: { onChange: { action: 'clicked' } },
}; 


export const FirstStory = (args) =>  <InputTextOut {...args} />
  FirstStory.args= {
    placeholderText : "my rest",
    errorMsg: "this is the error message"
  };
