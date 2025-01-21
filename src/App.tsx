import React from 'react';
import styled from 'styled-components';
import Display from './components/Display.tsx';

function App() {
  return (
    <StyledContainer>
      <Display />
    </StyledContainer>
  );
}

export default App;

const StyledContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 80%;
    max-width: 1440px;
    min-height: 100vh;
    padding: 1rem;
`;