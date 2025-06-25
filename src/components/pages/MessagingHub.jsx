import { useEffect, useState } from 'react';
import '../../styles/messagingHub.css';



export const MessagingHub = () => {
  const alerts = [
  "New airdrop for NFT holders! Snapshot on June 15th",
  "Reminder: Connect your wallet to unlock new features",
  "You’ve earned a reward! Claim it before June 20th",
];


  const [currentAlert, setCurrentAlert] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAlert(prev => (prev + 1) % alerts.length);
    }, 4000); // Rotate every 4 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div> <div className="container message-hub-container">

      {/* Rotating Alert */}
      <div className="alert alerttt rounded-4 px-4 py-3 d-flex align-items-center fade-in">
        <i className="bi bi-megaphone-fill fs-4 me-2 text-primary"></i>
        <span className="fw-medium">{alerts[currentAlert]}</span>
      </div>

      {/* Rest of the UI stays the same... */}
      {/* Direct Messaging */}
      <div className="mt-4">
        <h5 className="fw-bold d-flex align-items-center">
          <i className="bi bi-chat-left-text-fill fs-5 me-2 text-secondary"></i>
          Direct Messaging
        </h5>
        <p className="text-muted mb-2">You’ll soon be able to send secure messages directly to other holders.</p>
      </div>

      {/* Feedback Form */}
      <div className="mt-4">
        <h5 className="fw-bold d-flex align-items-center">
          <i className="bi bi-envelope-fill fs-5 me-2 text-primary"></i>
          Holder Feedback
        </h5>

        <form className="mt-3">
          <div className="mb-3">
            <textarea className="form-control" rows="4" placeholder="Enter your message"></textarea>
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Email or Discord (optional)" />
          </div>
          <button type="submit" className="btn send-btn w-100">Send</button>
        </form>
      </div>

      {/* Notifications */}
      <div className="mt-5">
        <h5 className="fw-bold d-flex align-items-center">
          <i className="bi bi-bell-fill fs-5 me-2 text-primary"></i>
          Notifications
        </h5>
        <ul className="list-unstyled mt-2">
          <li>• Reminder: Claim your re-exclusive airdrop</li>
          <li>• Invite-only event: Early access to new feature</li>
        </ul>
      </div>
    </div>

    {/*footer*/}
      <footer className="text-center text-muted py-4 mt-5">
        <div className="container">
          <small>© 2025 MonadReach • <a href="#">Privacy</a> • <a href="#">Terms</a></small>
        </div>
      </footer> </div>
  );
};