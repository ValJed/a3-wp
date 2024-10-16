import React from 'react';
import styled from 'styled-components';

// The vh unit allows to take 100% of the view height with pure css.
const Container = styled.div`
  background-color: #f0f0f0;
  height: 100vh;
`;

const Title = styled.h1`
  margin: 0;
  padding: 1rem;
`;

const Paragraph = styled.p`
  text-align: center;
`;

function App() {
  // This allow to get the window height in pixels.
  // It can be reused to set the height of the widget if the css only solution isn't enough.

  // eslint-disable-next-line no-unused-vars
  const windowHeight = window.innerHeight;

  return (
    <Container>
      <Title>Hello, world!</Title>
      <Paragraph>This is a React component taking 100% of the view height.</Paragraph>
    </Container>
  );
};

export default App;
