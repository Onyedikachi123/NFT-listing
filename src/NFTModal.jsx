import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const NFTModal = ({ show, handleClose, nft }) => {
  if (!nft) {
    // Return null if nft is null or undefined
    return null;
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{nft.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={nft.image_url} alt={nft.name} style={{ width: '100%' }} />
        <p>{nft.description}</p>
        {nft.owner && <p>Owner: {nft.owner.address}</p>}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <a href={nft.permalink} target="_blank" rel="noreferrer">
          <Button variant="primary">
            Buy on OpenSea
          </Button>
        </a>
      </Modal.Footer>
    </Modal>
  );
};

export default NFTModal;