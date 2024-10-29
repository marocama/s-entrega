import Pagination from './Pagination';
import React, { useContext, useEffect } from 'react';
import { DeliveryContext } from '../context/DeliveryContext';

const DeliveryTable = () => {
  const { deliveries, fetchDeliveries, totalPages } = useContext(DeliveryContext);

  useEffect(() => {
    fetchDeliveries();
  }, []);

  return (
    <div className="card mt-3">
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Peso (kg)</th>
              <th>Cidade</th>
              <th>Lat</th>
              <th>Lng</th>
            </tr>
          </thead>
          <tbody>
            {deliveries.map((delivery, index) => (
              <tr key={index}>
                <td>{delivery.name}</td>
                <td>{delivery.weight}</td>
                <td>{delivery.address.city}</td>
                <td>{delivery.coordinates.lat}</td>
                <td>{delivery.coordinates.lon}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination totalPages={totalPages} onPageChange={fetchDeliveries} />
        <p className="text-muted mt-3">
          Total de Clientes: {deliveries.length}
        </p>
      </div>
    </div>
  );
};

export default DeliveryTable;
