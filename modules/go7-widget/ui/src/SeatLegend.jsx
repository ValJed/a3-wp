import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
  background-color: cyan;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-grow: 1;
`;

function SeatLegend() {
  return (
    <Block>
      <h2>Seat Legend Block</h2>
    </Block>
  );
};

export default SeatLegend;
