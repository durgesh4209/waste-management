import React, { useEffect, useState } from 'react'; 
import Tabs from './tabs';
import Card from './card';
import api from '../../utils/api';  
import Footer from '../Commons/footer'; 
import DispatcherHeaderProvider from '../../context/dispacherHeaderProvider';

const OrderPageDispatcher = () => {
  const [orders, setOrders] = useState({ confirmed: [], received: [], shipped: [] });

  useEffect(() => {
    api.get('/ecobin/dispatcher')
      .then(response => {
        const confirmed = response.data.filter(order => order.orderStatus === 'Confirmed');
        const received = response.data.filter(order => order.orderStatus === 'Delivered');
        const shipped = response.data.filter(order => order.orderStatus === 'Shipped');

        setOrders({ confirmed, received, shipped });
      })
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  return (
    <>
      <DispatcherHeaderProvider/>
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-4">Order Management</h2>
        <Tabs>
          <div label="Confirmed Orders">
            {orders.confirmed.map(order => <Card key={order.id} order={order} />)}
          </div>

          <div label="Shipped Orders">
            {orders.shipped.map(order => <Card key={order.id} order={order} />)}
          </div>
          <div label="Delivered Orders">
            {orders.received.map(order => <Card key={order.id} order={order} />)}
          </div>
        </Tabs>
      </div>
      <Footer/>
    </>
  );
};

export default OrderPageDispatcher;