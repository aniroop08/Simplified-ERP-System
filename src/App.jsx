// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProductsManagement from './components/ProductsManagement';
import OrdersManagement from './components/OrdersManagement';
import "./App.css"

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<ProductsManagement />} />
          <Route path="/orders" element={<OrdersManagement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
