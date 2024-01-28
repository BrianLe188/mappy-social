import React from "react";
import { Marker } from "react-leaflet";
import L from "leaflet";

export default function Person({ position }: { position: [number, number] }) {
  const customIcon = new L.Icon({
    iconUrl: "assets/images/default-avatar.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
    className: "rounded-full",
  });

  return <Marker position={position} icon={customIcon}></Marker>;
}
