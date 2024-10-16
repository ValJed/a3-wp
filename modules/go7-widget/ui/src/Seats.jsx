import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
  background-color: darkred;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 100%;
`;

function Seats() {
  return (
    <Block>
      <h2>Seats Block</h2>
    </Block>
  );
}

export default Seats;
