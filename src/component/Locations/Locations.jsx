import styllle from './Locations.module.scss'
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const streets = [
  { name: "Broadway", lat: 40.759, lng: -73.984 },

];

export const Locations = () => {
  const [street, setStreet] = useState(null);

  useEffect(() => {
    const randomStreet = streets[Math.floor(Math.random() * streets.length)];
    setStreet(randomStreet);
  }, []);

  return (
    <div>
      <h2>New York, NY</h2>
      {street && (
        <>
          <MapContainer
            center={[street.lat, street.lng]}
            zoom={15}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[street.lat, street.lng]}>
              <Popup>{street.name} , New York, NY</Popup>
            </Marker>
          </MapContainer>
          <p style={{ marginTop: "10px", fontSize: "18px" }} className={styllle.p}>
            Адрес: {street.name}, New York, NY
          </p>
        </>
      )}
      <div className={styllle.containerContacts}>
        <h3 className={styllle.contacts}>CONTACTS</h3>
        <a href="tel:+12125551234" className={styllle.aContact}>+1 (212) 555-1234</a>
        <a href="mailto:info@example.com"  className={styllle.aContact}>info@example.com</a>

    <p></p>
      </div>
    </div>




  );
};


