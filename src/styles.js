import styled from 'styled-components';
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

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 5em 3em;
  flex-direction: column;
  align-items: flex-start;
  border: 0;
  background-color: #e5e5e5;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
