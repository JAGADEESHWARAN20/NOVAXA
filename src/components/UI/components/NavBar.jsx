import React from 'react';
import { withRouter } from 'react-router-dom';

// Functional component with access to history via props
const NavBar = ({ history }) => {
  // Function to navigate back and reload the page
  const handleBackAndReload = () => {
    history.goBack(); // Navigate to the previous page
    setTimeout(() => {
      window.location.reload(); // Reload the page after navigation
    }, 100); // Small delay to ensure navigation completes
  };

  return (
    <nav className="navbar w-full h-[30px] border-black text-white flex justify-between">
      <div>nav</div>
      <button onClick={handleBackAndReload}>Back & Reload</button>
    </nav>
  );
};

// Wrap component with withRouter to get access to history
export default withRouter(NavBar);
