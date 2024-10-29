import React from 'react';
import DeliveryMap from './components/DeliveryMap';
import DeliveryForm from './components/DeliveryForm';
import DeliveryTable from './components/DeliveryTable';
import { DeliveryProvider } from './context/DeliveryContext';

const App = () => (
  <DeliveryProvider>
    <div className="container my-5">
      <div className="row">
        <div className="col-md-4">
          <DeliveryForm />
        </div>
        <div className="col-md-8">
          <h5 className="card-title mb-3">Cadastro de Entrega</h5>
          <DeliveryMap />
          <DeliveryTable />
        </div>
      </div>
    </div>
  </DeliveryProvider>
);

export default App;
