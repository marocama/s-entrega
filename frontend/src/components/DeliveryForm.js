import React, { useState, useContext } from 'react';
import { DeliveryContext } from '../context/DeliveryContext';

const DeliveryForm = () => {
  const { addDelivery, resetDeliveries } = useContext(DeliveryContext);
  const [form, setForm] = useState({ name: '', weight: '', street: '', number: '', neighborhood: '', complement: '', city: 'São Paulo', state: 'SP', country: 'Brasil' });
  const [coordinates] = useState({ lat: '', lon: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const deliveryData = { name: form.name, weight: form.weight, address: form, coordinates: coordinates };
    addDelivery(deliveryData);
    setForm({ name: '', weight: '', street: '', number: '', neighborhood: '', complement: '', city: 'São Paulo', state: 'SP', country: 'Brasil' });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Nome Cliente" className="mb-3 form-control" required />
        <input name="weight" value={form.weight} onChange={handleChange} placeholder="Peso da Entrega" className="mb-3 form-control" required />
        <input name="street" value={form.street} onChange={handleChange} placeholder="Rua" className="mb-3 form-control" required />
        <input name="number" value={form.number} onChange={handleChange} placeholder="Número" className="mb-3 form-control" required />
        <input name="neighborhood" value={form.neighborhood} onChange={handleChange} placeholder="Bairro" className="mb-3 form-control" required />
        <input name="complement" value={form.complement} onChange={handleChange} placeholder="Complemento" className="mb-3 form-control" required />
        <input name="city" value={form.city} onChange={handleChange} placeholder="Cidade" className="mb-3 form-control" required />
        <input name="state" value={form.state} onChange={handleChange} placeholder="Estado" className="mb-3 form-control" required />
        <input name="country" value={form.country} onChange={handleChange} placeholder="País" className="mb-3 form-control" required />
        <button type="submit" className="btn btn-success w-100 mb-2">Cadastrar Entrega</button>
      </form>
      <button type="button" onClick={resetDeliveries} className="btn btn-danger w-100">Limpar Entregas</button>
    </div>
  );
};

export default DeliveryForm;
