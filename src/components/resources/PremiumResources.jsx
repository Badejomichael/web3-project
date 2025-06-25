import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export const PremiumResources = () => {
  const [showAlpha, setShowAlpha] = useState(true);
  const [showSDK, setShowSDK] = useState(false);

  const variants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto' },
    exit: { opacity: 0, height: 0 },
  };

  return (
    <div className="p-4 border rounded shadow-sm h-100">
          <h5 className="mb-4">📄 Premium Resources</h5>

          {/* Alpha Report Section */}
          <div className="mb-3">
            <div
              className="d-flex justify-content-between align-items-center"
              onClick={() => setShowAlpha(!showAlpha)}
              style={{ cursor: 'pointer' }}
            >
              <h6 className="mb-0 premium-resource">📊 Alpha Report – June 2025</h6>
              <span className="premium-resource-toogler">{showAlpha ? '−' : '+'}</span>
            </div>

            <AnimatePresence initial={false}>
              {showAlpha && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={variants}
                  transition={{ duration: 0.4 }}
                  className="mt-2 ps-3 overflow-hidden"
                >
                  <p>• NFT trading volume increased by <strong>23%</strong> this month.</p>
                  <p>• Most active ecosystems: <em>Bitcoin L2s, Ordinals, SatLayer</em>.</p>
                  <a href="/reports/june2025.pdf" target="_blank" rel="noreferrer" className="btn btn-sm me-2 view-full-report-btn">
                    View Full Report
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <hr />

          {/* Monad SDK Section */}
          <div className="mb-2">
            <div
              className="d-flex justify-content-between align-items-center"
              onClick={() => setShowSDK(!showSDK)}
              style={{ cursor: 'pointer' }}
            >
              <h6 className="mb-0 premium-resource">🛠️ Monad SDK & Dev Tools</h6>
              <span className="premium-resource-toogler">{showSDK ? '−' : '+'}</span>
            </div>

            <AnimatePresence initial={false}>
              {showSDK && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={variants}
                  transition={{ duration: 0.4 }}
                  className="mt-2 ps-3 overflow-hidden"
                >
                  <p>Start building with Monad's tools for token-gating, modular infra & messaging.</p>
                  <ul className="list-unstyled sdk-list">
                    <li>• <a href="/downloads/monad-sdk.zip">Download SDK (.zip)</a></li>
                    <li>• <a href="https://docs.monadreach.io" target="_blank" rel="noreferrer">API Documentation</a></li>
                    <li>• <a href="https://github.com/monadreach/examples" target="_blank" rel="noreferrer">Example Projects</a></li>
                  </ul>
                  <small className="text-muted">Last updated: June 8, 2025</small>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
    </div>
  );
};

export default PremiumResources;