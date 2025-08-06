import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();




  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>🌟 Welcome to Your Dashboard</h1>
        <button onClick={handleLogout}>Logout</button>
      </header>

      <section className="dashboard-content">
        <div className="card">
          <h3>👥 Users</h3>
          <p>Manage user access and activity.</p>
        </div>
        <div className="card">
          <h3>📈 Analytics</h3>
          <p>Track performance and metrics.</p>
        </div>
        <div className="card">
          <h3>⚙️ Settings</h3>
          <p>Customize system preferences.</p>
        </div>
      </section>
      <Link to="/rewards"
      className="text-purple-700 font-semibold hover:underline">
        <button className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition">
          🎁 View My Rewards
        </button>
      </Link>
    </div>
  );
};

export default Dashboard;
