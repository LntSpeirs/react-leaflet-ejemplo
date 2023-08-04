import { useState } from "react";
import { Circle, Marker, Popup, useMapEvents } from "react-leaflet";

const LocationMarker = () => {
  const [position, setPosition] = useState(null);
  const [accuracy, setAccuracy] = useState(null);

  const map = useMapEvents({
    click() {
      map.locate({ enableHighAccuracy: true });
    },
    locationfound(e) {
      console.log(e);
      setPosition(e.latlng);
      setAccuracy(e.accuracy / 2);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <>
      <Marker position={position}>
        <Popup>Estás aquí</Popup>
      </Marker>
      <Circle center={position} radius={accuracy} />
    </>
  );
};

export default LocationMarker;
