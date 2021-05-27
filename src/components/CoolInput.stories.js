import React from 'react'
import CoolInput  from './CoolInput';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'CoolInput',
  component: CoolInput,  
}; 


export const FirstStory = (args) =>  <CoolInput {...args} />
  FirstStory.args= {
    placeholderText : "my rest"
  };
