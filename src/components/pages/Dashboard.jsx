import '../../styles/dashboard.css'
import { motion } from 'framer-motion';
import { PremiumResources } from '../resources/PremiumResources'
import { RewardsSection } from '../resources/RewardSection';

export const Dashboard = () => {
    const walletAddress = '0x1234...abcd';

  return (
    <div> <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="container dashboard-container"
    >
       <motion.div
          className="px-4 py-2 my-2 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.h2
            className="fw-bold hero-text"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >🎉 Welcome, Verified Holder!
          </motion.h2> 
          
          <div className="col-lg-6 mx-auto">
            <motion.p
              className="mb-4 sub-hero-text"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Your wallet: <strong>{walletAddress}</strong>
            </motion.p>
          </div> 
      </motion.div>

       {/* Exclusive Content Grid with Staggered Animation */}
        <motion.div
          className="container"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
        <h3 className="mb-4 fw-bold">Exclusive Content</h3>

        <div className="row g-4">
            {/* Card 1 */}
            <motion.div
              className="col-md-6 content-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <PremiumResources />
            </motion.div>

          {/* Card 2 */}
            <motion.div
              className="col-md-6 content-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="p-4 border rounded shadow-sm h-100">
                <h5>✅ Holder Hub</h5>
                <ul className="list-unstyled mt-3">
                  <li><a className='discord-link' href='#'>Join Discord</a></li>
                  <li><a className='discord-link' href=''>Send a message to admins (Coming soon)</a></li>
                </ul>
              </div>
            </motion.div>

          {/* Card 3 */}
            <motion.div
              className="col-md-6 content-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <RewardsSection />
            </motion.div>


            {/* Card 4 */}
            <motion.div
              className="col-md-6 content-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="p-4 border rounded shadow-sm h-100">
                <h5>📊 Your NFT Stats</h5>
                <p>You hold <strong>3 NFTs</strong> from the verified collection</p>
                <p>Floor price: 1.2 MON | Total Supply: 888</p>
              </div>
            </motion.div>
        </div>
      </motion.div>
     </motion.div>

     {/* Footer Fade In */}
      <motion.footer
        className="text-center text-muted py-4 mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}>
        <div className="container">
          <small>© 2025 MonadReach • <a href="#">Privacy</a> • <a href="#">Terms</a></small>
        </div>
      </motion.footer> </div>
  )
}