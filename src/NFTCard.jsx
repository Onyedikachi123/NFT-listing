import React from 'react';
import { Card } from 'react-bootstrap';

const NFTCard = ({ nft }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={nft.image_url} />
      <Card.Body>
        <Card.Title>{nft.name}</Card.Title>
        <Card.Text>
          {nft.description}
        </Card.Text>
        <Card.Text>
          Owner: {nft.owner.address}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <a href={nft.permalink} target="_blank" rel="noreferrer">
          Buy on OpenSea
        </a>
      </Card.Footer>
    </Card>
  );
};

export default NFTCard;