import { useState } from 'react';
import Confetti from 'react-confetti';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const RewardsSection = () => {
  const [claimed, setClaimed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [history, setHistory] = useState([]);

  const handleClaim = () => {
    setLoading(true);

    setTimeout(() => {
      setClaimed(true);
      setLoading(false);
      setShowConfetti(true);

      toast.success("Reward Claimed Successfully!");

      const newEntry = {
        date: new Date().toLocaleString(),
        amount: "250 MONAD",
        status: "Success"
      };

      setHistory([newEntry, ...history]);

      setTimeout(() => setShowConfetti(false), 3000);
    }, 2000);
  };

  return (
    <div className="container mt-4">
      <ToastContainer position="top-right" />

      {showConfetti && <Confetti />}

      <div className="card shadow-sm p-4 border rounded shadow-sm h-100">
        <h5 className="mb-3">🎁 Rewards</h5>
        <p>You have <strong>250 MONAD</strong> tokens available to claim.</p>

        <button
          style={
            loading ? {
              backgroundColor: '#5B29A3',
              opacity: 0.5,
              color: 'white',
              cursor: 'not-allowed',
            }
            : {}
          }
          className={`btn ${claimed ? 'btn-success' : 'claim-btn'} mt-2`}
          onClick={handleClaim}
          disabled={claimed || loading}
        >
          {loading ? 'Claiming...' : claimed ? 'Reward Claimed ✔️' : 'Claim Reward'}
        </button>
      </div>

      {history.length > 0 && (
        <div className="card mt-4 p-3 shadow-sm">
          <h6 className="mb-3">📝 Claim History</h6>
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {history.map((entry, idx) => (
                <tr key={idx}>
                  <td>{entry.date}</td>
                  <td>{entry.amount}</td>
                  <td><span className="badge bg-success">{entry.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};