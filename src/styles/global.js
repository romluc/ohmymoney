import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #0F2027;  
    background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  
    background: linear-gradient(to right, #2C5364, #203A43, #0F2027); 
    -webkit-font-smoothing: antialiased;
  }
  html, body, #root {
    height: 100%;

  }
  body, input, button {
    font-family: 'Source Sans Pro', sans-serif;
  }
  
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
 
  button {
    cursor: pointer;
  }
`;
