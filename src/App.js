import React from 'react';
import { Container } from 'react-bootstrap';
import NFTList from './NFTList';

function App() {
  const userAddress = '0xc986295b3212d9d78ff342f2656d5f331f72ff53'; // Replace with the user's address

  return (
    <Container>
      <NFTList address={userAddress} />
    </Container>
  );
}

export default App;
