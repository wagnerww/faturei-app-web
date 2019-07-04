import { createGlobalStyle } from "styled-components";

import "@fortawesome/fontawesome-free/css/all.min.css";

const GlobalStyled = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");

  * {
    padding:0;
    margin:0;
    box-sizing:border-box;
    outline:0;
  }

  html{
    font-size:16px;
  }

  body{
    background:#0A2F4E;
    color:#FFFFFF;
    font-size:1em;
    font-family: 'Roboto', sans-serif;
    line-height:1.5;
  }

  & * a{
    text-decoration:none;
  }
  & * input button{
    font-family:'Roboto', sans-serif;
  }
  & * button{
    cursor:pointer;
  }

  & * i {
    font-size: 1.75em;
  }

`;

export default GlobalStyled;
