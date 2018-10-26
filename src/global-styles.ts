import reset from "styled-reset";
import { createGlobalStyle } from "./typed-components";

// tslint:disable-next-line
export const GlobalStyle = createGlobalStyle`
${reset};
@import url("https://use.fontawesome.com/releases/v5.0.13/css/all.css");
@import url('https://fonts.googleapis.com/css?family=Nanum+Gothic|Nanum+Myeongjo|Nanum+Pen+Script');
  * {
      box-sizing: border-box;
  }
  body{
    font-family: 'Nanum Gothic', sans-serif;
      overflow: hidden;
    color: white;
  }
  a{ 
      color:inherit;
      text-decoration:none;
  }
  button{
    cursor: pointer;
  }


`;
