import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import NFTCard from './NFTCard';
import NFTModal from './NFTModal';

const NFTList = ({ address }) => {
  const [nfts, setNFTs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedNFT, setSelectedNFT] = useState(null);

  useEffect(() => {
    const fetchNFTs = async () => {
      const response = await axios.get(`https://api.opensea.io/api/v1/assets?owner=${address}&order_direction=desc&offset=0&limit=20`);
      setNFTs(response.data.assets);
    };

    fetchNFTs();
  }, [address]);

  const handleCardClick = (nft) => {
    setSelectedNFT(nft);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Row>
        {nfts.map((nft) => (
          <Col key={nft.token_id}>
            <div onClick={() => handleCardClick(nft)}>
              <NFTCard nft={nft} />
            </div>
          </Col>
        ))}
      </Row>
      <NFTModal
        show={showModal}
        handleClose={handleCloseModal}
        nft={selectedNFT}
      />
    </>
  );
};

export default NFTList;
    