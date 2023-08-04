/* eslint-disable react/prop-types */
import { Marker, Popup, Tooltip } from "react-leaflet";
import Icono from "./Icono";

const Markers = ({ lugares }) => {
  const marcadores = lugares.map((lugar, indice) => (
    <Marker position={lugar.coordenadas} icon={Icono} key={indice}>
      <Tooltip sticky>{lugar.nombre}</Tooltip>
      <Popup>{lugar.nombre}</Popup>
    </Marker>
  ));
  return marcadores;
};

export default Markers;

{
  /* <Marker
      position={[41.65654590866354, -0.878894260323711]}
      icon={Icono}
      key={indice}
    >
      <Tooltip sticky>sticky Tooltip al pasar el raton</Tooltip>
      <Popup>
        Nombre del lugar.
        <br /> Descripcion.
      </Popup>
    </Marker> */
}
