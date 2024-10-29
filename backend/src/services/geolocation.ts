import axios from 'axios';

export const getCoordinates = async (address: string) => {
  const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${address}`);
  console.log("response address",response);

  if (response.data.length === 0) throw new Error("Endereço não encontrado");

  const { lat, lon } = response.data[0];
  return { lat: parseFloat(lat), lon: parseFloat(lon) };
};
