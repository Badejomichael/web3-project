import { useState, useEffect } from "react";
import "../../styles/exploreNFTS.css"
import { motion, AnimatePresence } from 'framer-motion';

import monadSpike from "../../assets/monad-spike.jpg"
import monadMonkey from "../../assets/monad-monkey.jpg"

const mockNFTs = [
  {
    name: "Monad Monkeys",
    image: monadMonkey,
    totalSupply: 1000,
    holders: 742,
    description: "The premier monkey-themed NFT collection on Monad chain.",
    contract: "0x1234...abcd",
    category: "PFP",
  },
  {
    name: "MonadPunks",
    image: "https://robohash.org/punk.png?size=300x300",
    totalSupply: 5000,
    holders: 3201,
    description: "A tribute to crypto art history, MonadPunks live here.",
    contract: "0xabcd...5678",
    category: "Art",
  },
  {
    name: "MonadSpikes",
    image: monadSpike,
    totalSupply: 1500,
    holders: 1540,
    description: "A charming collection of spike-themed NFTs on Monad chain.",
    contract: "0x4321...efgh",
    category: "PFP",
  },
  {
    name: "Tech Tigers",
    image: "https://robohash.org/tiger.png?size=300x300",
    totalSupply: 1200,
    holders: 989,
    description: "A fierce fusion of tech and nature, embodied by digital tigers.",
    contract: "0x5678...ijkl",
    category: "Gaming",
  },
  {
    name: "MonadPunks",
    image: "https://robohash.org/punk.png?size=300x300",
    totalSupply: 5000,
    holders: 3201,
    description: "A tribute to crypto art history, MonadPunks live here.",
    contract: "0xabcd...5678",
    category: "Art",
  },
   {
    name: "MonadSpikes",
    image: monadSpike,
    totalSupply: 1500,
    holders: 1540,
    description: "A charming collection of spike-themed NFTs on Monad chain.",
    contract: "0x4321...efgh",
    category: "PFP",
  },
  {
    name: "Tech Tigers",
    image: "https://robohash.org/tiger.png?size=300x300",
    totalSupply: 1200,
    holders: 989,
    description: "A fierce fusion of tech and nature, embodied by digital tigers.",
    contract: "0x5678...ijkl",
    category: "Gaming",
  },
  {
    name: "Monad Monkeys",
    image: monadMonkey,
    totalSupply: 1000,
    holders: 742,
    description: "The premier monkey-themed NFT collection on Monad chain.",
    contract: "0x1234...abcd",
    category: "PFP",
  },
];

export const ExploreNFTs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNFT, setSelectedNFT] = useState(null);
   const [loading, setLoading] = useState(true);

  const filteredNFTs = mockNFTs.filter((nft) =>
    nft.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    nft.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulate loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div> <motion.div 
      className="explore-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="hero-text">Explore NFT Collections</h1>
      <p className="subtitle">Discover featured NFTs on Monad Chain (Demo)</p>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search NFTs by name or category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="nft-grid">
          {[...Array(4)].map((_, i) => (
            <div className="skeleton-card" key={i}></div>
          ))}
        </div>
      ) : filteredNFTs.length > 0 ? (
        <div className="nft-grid">
          <AnimatePresence>
            {filteredNFTs.map((nft, index) => (
              <motion.div 
                className="nft-card"
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <img src={nft.image} alt={nft.name} />
                <h2>{nft.name}</h2>
                <p className="description">{nft.description}</p>
                <p className="holders">Holders: {nft.holders}</p>
                <button onClick={() => setSelectedNFT(nft)}>View Details</button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <p>No NFTs found for your search.</p>
      )}

      <AnimatePresence>
        {selectedNFT && (
          <motion.div 
            className="modal-overlay"
            onClick={() => setSelectedNFT(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: "-50px", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-50px", opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img src={selectedNFT.image} alt={selectedNFT.name} />
              <h2>{selectedNFT.name}</h2>
              <p>{selectedNFT.description}</p>
              <p><strong>Total Supply:</strong> {selectedNFT.totalSupply}</p>
              <p><strong>Holders:</strong> {selectedNFT.holders}</p>
              <p><strong>Contract:</strong> {selectedNFT.contract}</p>
              <button onClick={() => setSelectedNFT(null)}>Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
    
    {/* Footer Fade In */}
      <motion.footer
        className="text-center text-muted py-4 mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}>
        <div className="container">
          <small>© 2025 MonadReach • <a href="#">Privacy</a> • <a href="#">Terms</a></small>
        </div>
      </motion.footer> </div>
  );
};
