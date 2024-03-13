import React, { useState } from 'react';
import "./style/OrdersManagement.css";

function OrdersManagement() {
  const [orders, setOrders] = useState([
    { id: 1, orderId: 'ORD123', customerName: 'John Doe', orderDate: '2024-03-08', status: 'Pending' },
    { id: 2, orderId: 'ORD456', customerName: 'Jane Smith', orderDate: '2024-03-09', status: 'Shipped' },
    // Add more orders here
  ]);

  return (
    <div>
      <h2>Orders Management</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.orderId}</td>
              <td>{order.customerName}</td>
              <td>{order.orderDate}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersManagement;
