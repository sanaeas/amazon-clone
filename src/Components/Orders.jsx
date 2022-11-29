import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, doc, query, orderBy, onSnapshot } from 'firebase/firestore';
import '../App.css';
import { useStateValue } from '../StateProvider';
import Order from './Order';

function Orders() {
  const [{ user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const docRef = doc(db, 'users', user?.uid);
      const colRef = collection(docRef, 'orders');
      const q = query(colRef, orderBy('created', 'desc'))
      onSnapshot(q, (snapshot) => (
        setOrders(snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data(),
        })))
      ))
    } else {
      setOrders([])
    }
  }, [user]);

  return (
    <div className='orders'>
      <h1>Your Orders</h1>

      <div className='orders__order'>
        {
          orders?.map(order => (
            <Order order={order} />
          ))
        }
      </div>
    </div>
  )
}

export default Orders