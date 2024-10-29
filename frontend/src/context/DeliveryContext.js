import axios from 'axios';
import React, { createContext, useState } from 'react';

export const DeliveryContext = createContext();

export const DeliveryProvider = ({ children }) => {
  const [deliveries, setDeliveries] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const fetchDeliveries = async (page = 1) => {
    const response = await axios.get(`http://localhost:5001/api/deliveries?page=${page}`);
    setDeliveries(response.data.deliveries);
    setTotalPages(response.data.totalPages);
  };

  const addDelivery = async (deliveryData) => {
    const response = await axios.post('http://localhost:5001/api/deliveries', deliveryData);
    fetchDeliveries();
  };

  const resetDeliveries = async () => {
    await axios.delete('http://localhost:5001/api/deliveries');
    setDeliveries([]);
  };

  return (
    <DeliveryContext.Provider value={{ deliveries, fetchDeliveries, addDelivery, resetDeliveries, totalPages }}>
      {children}
    </DeliveryContext.Provider>
  );
};
