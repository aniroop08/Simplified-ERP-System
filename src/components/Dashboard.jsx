// Dashboard.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./style/Dashboard.css";

function Dashboard(props) {
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="dashboard-metrics">
        <div className="dashboard-metric-item">Total number of products: 80</div>
        {/* Add more metrics here */}
      </div>
      <Link to="/products">
        <button>Add Product</button>
      </Link>
    </div>
  );
}

export default Dashboard;
