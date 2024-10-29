import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React, { useContext } from 'react';
import { DeliveryContext } from '../context/DeliveryContext';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const DeliveryMap = () => {
  const { deliveries } = useContext(DeliveryContext);

  return (
    <div className="col-12 mb-4">
      <div className="card">
        <div className="card-body">
          <div id="map" style={{ height: '400px', borderRadius: '8px' }}>
            <MapContainer center={[-23.55052, -46.633308]} zoom={12} style={{ height: '400px', width: '100%' }}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {deliveries.map((delivery, index) => (
                <Marker key={index} position={[delivery.coordinates.lat, delivery.coordinates.lon]}>
                  <Popup>{`${delivery.name} - ${delivery.weight}kg`}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryMap;
