import mongoose, { Document, Schema } from 'mongoose';

interface IDelivery extends Document {
  name: string;
  weight: number;
  address: {
    street: string;
    number: string;
    neighborhood: string;
    complement: string;
    city: string;
    state: string;
    country: string;
  };
  coordinates: {
    lat: number;
    lon: number;
  };
}

const deliverySchema = new Schema<IDelivery>({
  name: { type: String, required: true },
  weight: { type: Number, required: true },
  address: {
    street: { type: String, required: true },
    number: { type: String, required: true },
    neighborhood: { type: String, required: true },
    complement: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
  },
  coordinates: {
    lat: { type: Number, required: true },
    lon: { type: Number, required: true },
  },
});

export const Delivery = mongoose.model<IDelivery>('Delivery', deliverySchema);
