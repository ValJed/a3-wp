import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
  background-color: gold;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 200px;
`;

function SelectPassenger() {
  return (
    <Block>
      <h2>Select Passenger Block</h2>
    </Block>
  );
};

export default SelectPassenger;
