import React from "react";
import {InputContent, ButtonSearch, Content, Icon} from './input.style.js'
import { IoIosSearch } from "react-icons/io";


const Input = () => {
  return (
    <Content>
      <InputContent type="text" placeholder="Movie name." />
      <ButtonSearch>Search <Icon><IoIosSearch /></Icon></ButtonSearch>
      
    </Content>
  );
};

export default Input;
