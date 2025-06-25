import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import monadLogo from "../assets/monad-logo.jpg";





export const Navbar = () => {
  
  const location = useLocation();
  const [activePage, setActivePage] = useState(localStorage.getItem("activePage"));
  const [walletAddress, setWalletAddress] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setActivePage(location.pathname);
    localStorage.setItem("activePage", location.pathname);
    setSidebarOpen(false); // Close menu on route change
  }, [location.pathname]);

  const handleConnect = () => {
    setWalletAddress('0x1234...abcd'); // Placeholder
  };



  

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="navbar-container container">
      <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="navbar custom-navbar d-flex justify-content-between align-items-center px-4"
      >
        <Link to="/" className="Hero-logo d-flex align-items-center">
          <img src={monadLogo} alt="Monad Logo" className="monad-logo me-2" />
          MonadReach
        </Link>

        {/* Desktop Menu */}
        <ul className="d-none d-lg-flex gap-4 mb-0 navbar-linkss">
          <li><Link to="/" className={activePage === "/" ? "active" : ""}>Home</Link></li>
          <li><Link to="/Dashboard" className={activePage === "/Dashboard" ? "active" : ""}>Dashboard</Link></li>
          <li><Link to="/ExploreNFTs" className={activePage === "/ExploreNFTs" ? "active" : ""}>Explore NFTs</Link></li>
          <li><Link to="/MessagingHub" className={activePage === "/MessagingHub" ? "active" : ""}>Messaging Hub</Link></li>
        </ul>

        {/* Wallet Button */}
        <button className="btn connect-wallet-btn d-none d-lg-block"  onClick={handleConnect}>
          {walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 'Connect Wallet'}
        </button>

        {/* Hamburger Toggler (Mobile) */}
        <button
          className={`mobile-toggle d-lg-none ${sidebarOpen ? "open" : ""}`}
          onClick={toggleSidebar}
        >
          <span className="hamburger-icon"></span>
        </button>
      </motion.nav>

      {/* Sidebar Menu for Mobile */}

      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              className="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleSidebar} // clicking outside closes it
            />
            <motion.div
              className="mobile-sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
            >
              <ul className="sidebar-links">
                <li><Link to="/" className={activePage === "/" ? "active" : ""}>Home</Link></li>
                <li><Link to="/Dashboard" className={activePage === "/Dashboard" ? "active" : ""}>Dashboard</Link></li>
                <li><Link to="/ExploreNFTs" className={activePage === "/ExploreNFTs" ? "active" : ""}>Explore NFTs</Link></li>
                <li><Link to="/MessagingHub" className={activePage === "/MessagingHub" ? "active" : ""}>Messaging Hub</Link></li>
                <li>
                  <button className="btn connect-wallet-btn w-100 mt-3" onClick={handleConnect}>
                    {walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 'Connect Wallet'}
                  </button>
                </li>
              </ul>
            </motion.div>
            </>
          )}
        </AnimatePresence>
      </>
    </div>
  );
};