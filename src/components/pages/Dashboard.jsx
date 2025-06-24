import '../../styles/dashboard.css'
import React from 'react';
import { motion } from 'framer-motion';
import { PremiumResources } from '../resources/PremiumResources'
import { RewardsSection } from '../resources/RewardSection';

export const Dashboard = () => {
    const walletAddress = '0x1234...abcd';

  return (
    <div> <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      className="container dashboard-container"
    >
      <div class="px-4 py-2 my-2 text-center">
        <h2 class="fw-bold hero-text">🎉 Welcome, Verified Holder!</h2> 
        <div class="col-lg-6 mx-auto"> 
          <p class=" mb-4 sub-hero-text">Your wallet: <strong>{walletAddress}</strong></p>
        </div> 
      </div>

      <div className="container">
        <h3 className="mb-4 fw-bold">Exclusive Content</h3>

        <div className="row g-4">
          <div className="col-md-6 content-card">
            <PremiumResources />
          </div>

          <div className="col-md-6 content-card">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5>✅ Holder Hub</h5>
              <ul className="list-unstyled mt-3">
                <li><a className='discord-link' href='#'>Join Discord</a></li>
                <li><a className='discord-link' href=''>Send a message to admins (Coming soon)</a></li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 content-card">
            <RewardsSection />
          </div>

          <div className="col-md-6 content-card">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5>📊 Your NFT Stats</h5>
              <p>You hold <strong>3 NFTs</strong> from the verified collection</p>
              <p>Floor price: 1.2 MON | Total Supply: 888</p>
            </div>
          </div>
        </div>
      </div>
     </motion.div>

     <footer className="text-center text-muted py-4 mt-5">
          <div className="container">
            <small>© 2025 MonadReach • <a href="#">Privacy</a> • <a href="#">Terms</a></small>
          </div>
      </footer> </div>
  )
}