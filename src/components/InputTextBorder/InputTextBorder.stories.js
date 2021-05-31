import React from 'react'
import InputTextBorder  from './InputTextBorder';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'InputTextBorder',
  component: InputTextBorder,  
  argTypes: { onChange: { action: 'clicked' } },
}; 


export const FirstStory = (args) =>  <InputTextBorder {...args} />
  FirstStory.args= {
    placeholderText : "my rest",
    errorMsg: "this is the error message"
  };
