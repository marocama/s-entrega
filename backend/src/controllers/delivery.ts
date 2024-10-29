import { Request, Response } from 'express';
import { Delivery } from '../models/delivery';
import { getCoordinates } from '../services/geolocation';

export const getDeliveries = async (req: Request, res: Response) => {
  const limit = 10;
  const page = parseInt(req.query.page as string) || 1;

  const deliveries = await Delivery.find().skip((page - 1) * limit).limit(limit);
  
  const total = await Delivery.countDocuments();
  
  res.json({ deliveries, totalPages: Math.ceil(total / limit) });
};

export const addDelivery = async (req: Request, res: Response) => {
  try {
    const { name, weight, address } = req.body;

    if (!name || !weight || !address) {
      res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    const { lat, lon } = await getCoordinates(
      `${address.street}, ${address.number}, ${address.neighborhood}, ${address.city}, ${address.state}, ${address.country}`
    );

    const newDelivery = new Delivery({
      name,
      weight,
      address,
      coordinates: { lat, lon },
    });
    await newDelivery.save();

    res.status(201).json(newDelivery);
  } catch (error) {
    console.log("ERRORRR",error);
    res.status(500).json({ error: 'Erro ao cadastrar entrega', message: error });
  }
};

export const resetDeliveries = async (req: Request, res: Response) => {
  await Delivery.deleteMany({});
  res.status(200).json({ message: 'Todos os cadastros foram resetados' });
};
