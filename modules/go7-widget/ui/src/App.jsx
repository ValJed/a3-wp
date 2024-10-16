import React from 'react';
import styled from 'styled-components';
import SelectPassenger from './SelectPassenger';
import SeatLegend from './SeatLegend';
import Seats from './Seats';

// The vh unit allows to take 100% of the view height with pure css.
const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f0f0f0;
  height: 100vh;
`;

const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  width: 50%;
`;

const RightBlock = styled.div`
  width: 50%;
`;

function App() {
  // This allow to get the window height in pixels.
  // It can be reused to set the height of the widget if the css only solution isn't enough.

  // eslint-disable-next-line no-unused-vars
  const windowHeight = window.innerHeight;

  return (
    <Container>
      <LeftBlock className='left'>
        <SelectPassenger />
        <SeatLegend />
      </LeftBlock>
      <RightBlock className='right'>
        <Seats />
      </RightBlock>
    </Container>
  );
};

export default App;
