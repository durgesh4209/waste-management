import React, { useEffect, useState } from 'react'; 
import Tabs from './tabs'; 
import api from '../../utils/api'; 
import HeaderProvider from '../../context/HeaderProver';
import Footer from '../Commons/footer';
import PickupCard from './pickupCard';

const ViewPickup = () => {

  const [orders, setOrders] = useState({ confirmed: [], received: [], });

  useEffect(() => {
    api.get('/ecobin/pickup')
      .then(response => {
        const confirmed = response.data.filter(pickup => pickup.waste.isPickupScheduled === false);
        const received = response.data.filter(pickup => pickup.waste === 'Delivered'); 
        setOrders({ confirmed, received });
      })
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  return (
    <>
      <HeaderProvider/>
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-4">Order Management</h2>
        <Tabs>
          <div label="Confirmed Orders">
            {orders.confirmed.map(order => <PickupCard key={order.id} order={order} />)}
          </div>

          <div label="Delivered Orders">
            {orders.received.map(order => <PickupCard key={order.id} order={order} />)}
          </div>
        </Tabs>
      </div>
      <Footer/>
    </>
  );
};

export default ViewPickup;