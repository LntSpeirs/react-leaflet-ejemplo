import icono from "../assets/icono.svg";
import L from "leaflet";

const Icono = L.icon({
  iconUrl: icono,
  iconRetinaUrl: icono,
  shadowUrl: null, //Sombra
  shadowAnchor: null,
  iconAnchor: null,
  iconSize: [55, 55], // size of the icon
  className: "leaflet-venue-icon",
});

export default Icono;
