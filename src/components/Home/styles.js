import styled from 'styled-components';

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
  width: 70%;
  height: 80vh;
  border: 0;
  border-radius: 8px;
  overflow: hidden;
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
  font-size: 2rem;
  margin-top: 1rem;
`;

export const Separator = styled.div`
  margin-top: 0.5em;
  border: 1px solid #252525;
  width: 70%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;
