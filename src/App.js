import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/pages/Home';
import { Dashboard } from './components/pages/Dashboard';
import { ExploreNFTs } from './components/pages/ExploreNFTs';
import { MessagingHub } from './components/pages/MessagingHub';


function App() {
  return (

    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ExploreNFTs" element={<ExploreNFTs />} />
          <Route path="/MessagingHub" element={<MessagingHub />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
