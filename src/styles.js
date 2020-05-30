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

export const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 90%;
  border: 0;
  overflow-y: scroll;
  border-radius: 8px;
  background-color: #e5e5e5;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90vh;
  }
`;

export const Title = styled.h1`
  font-size: ${(props) => `${props.fontSize}rem`};
  margin-top: 1rem;
`;

export const Separator = styled.div`
  margin-top: 0.5em;
  margin-bottom: 2em;
  border: 1px solid #252525;
  width: 70%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;
