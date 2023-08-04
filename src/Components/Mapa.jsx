import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import LocationMarker from "./LocationMarker";
import Markers from "./Markers";

import { lugares } from "../assets/localizaciones.json";

function Mapa() {
  return (
    <>
      <MapContainer
        center={[41.6521505126928, -0.8808339409004897]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LocationMarker />
        <Markers lugares={lugares} />
      </MapContainer>
    </>
  );
}

export default Mapa;
