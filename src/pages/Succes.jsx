import React from 'react';
import '../styles/components/Success.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { AppContext } from '../context/AppContext';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';


let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

export const Succes = () => {
  const {state:{buyer}} = React.useContext(AppContext);
  const substracBuyer = (buyer.length - 1)
  const position = [51.505, -0.09]
  return (
    <div className="Succes">
      <div className="Success-content">
        <h2>{buyer[substracBuyer].name}, Gracias por tu compra</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <div className="Success-map">
          <MapContainer style={{ height: '500px', width: '100%' }} center={position} zoom={13} scrollWheelZoom={true}>
            <TileLayer
              attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup >
                Tu pedido está acá
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
