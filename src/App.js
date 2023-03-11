import React from 'react';
import { Container } from 'react-bootstrap';
import NFTList from './NFTList';

function App() {
  const userAddress = '0x1234567890'; // Replace with the user's address

  return (
    <Container>
      <NFTList address={userAddress} />
    </Container>
  );
}

export default App;
