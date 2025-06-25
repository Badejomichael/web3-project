import '../../styles/home.css'
import { motion } from "framer-motion";




export const Home = () => {


  return (
    <div>
      <div class="px-4 py-5 my-5 text-center homepage-container">
        <motion.h1 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          class="fw-bold hero-text">Reach Your NFT Holders
        </motion.h1> 
        <div class="col-lg-6 mx-auto"> 
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }} 
            class=" mb-4 sub-hero-text">Engage with your NFT audience effortly - using our web3 platform.
          </motion.p> 
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center"> 
            <motion.button
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              type="button" 
              class="btn btn-lg px-4 gap-3 connect-wallet-btn"
              >
                  Connect Wallet
            </motion.button> 
          </div>
        </div> 
      </div>

      <motion.footer
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.8 }}
        className="footer"
      >
        <div className="footer-links">
          <span>Targeted Access</span>
          <span>Gated Content</span>
          <span>Community Perks</span>
        </div>
      </motion.footer>
    </div>
    
  )
}