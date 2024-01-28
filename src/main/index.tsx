"use client";
import React, { useContext, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import BottomNavigation from "../components/bottom-navigation";
import { Page, Box } from "zmp-ui";
import { UserContext } from "../contexts/user-context";
import Person from "../components/person";

export default function HomePage() {
  const { getLocation, location } = useContext(UserContext);

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <Page className="!px-0 !pt-0">
      <Box className="relative z-10 h-[calc(100vh-3rem)]">
        <MapContainer
          className="h-full w-full"
          center={[Number(location.lat), Number(location.lng)]}
          zoom={13}
          scrollWheelZoom
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Person position={[Number(location.lat), Number(location.lng)]} />
        </MapContainer>
      </Box>
      <BottomNavigation />
    </Page>
  );
}
