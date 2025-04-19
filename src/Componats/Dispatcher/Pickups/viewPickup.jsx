import React, { useEffect, useState } from 'react'; 
import Tabs from './tabs'; 
import api from '../../../utils/api'; 
import HeaderProvider from '../../../context/HeaderProver';
import Footer from '../../Commons/footer';
import PickupCardDispacher from './pickupCard';
import DispatcherHeaderProvider from '../../../context/dispacherHeaderProvider';

const ViewPickupDispatcher = () => {

  const [orders, setOrders] = useState({ confirmed: [], received: [], });

  useEffect(() => {
    api.get('/ecobin/dispatcher/pickups')
      .then(response => {
        debugger
        console.log(response.data)
        const confirmed = response.data.filter(pickup => pickup.completed === false);
        const received = response.data.filter(pickup => pickup.completed === true); 
        setOrders({ confirmed, received });
      })
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  return (
    <>
      <DispatcherHeaderProvider/>
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-4">Order Management</h2>
        <Tabs>
          <div label="Confirmed Pickups">
            {orders.confirmed.map(order => <PickupCardDispacher key={order.id} order={order} />)}
          </div>

          <div label="picked up">
            {orders.received.map(order => <PickupCardDispacher key={order.id} order={order} />)}
          </div>
        </Tabs>
      </div>
      <Footer/>
    </>
  );
};

export default ViewPickupDispatcher;