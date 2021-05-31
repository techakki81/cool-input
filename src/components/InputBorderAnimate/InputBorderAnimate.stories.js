import React from 'react'
import InputBorderAnimate  from './InputBorderAnimate';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'InputBorderAnimate',
  component: InputBorderAnimate,  
  argTypes: { onChange: { action: 'clicked' } },
}; 


export const FirstStory = (args) =>  <InputBorderAnimate {...args} />
  FirstStory.args= {
    placeholderText : "my rest",
    errorMsg: "this is the error message"
  };
