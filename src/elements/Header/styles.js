import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 2em;
  background-color: #444;
  position: fixed;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.2);
`;
export const NavHeader = styled.div`
  display: flex;
  max-width: 1100px;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5em 2em;
  width: 100%;
`;

export const Brand = styled.h1`
  font-size: ${(props) => `${props.fontSize}px`};
  color: #f0f0f0;
`;

export const NavLeft = styled.div``;
