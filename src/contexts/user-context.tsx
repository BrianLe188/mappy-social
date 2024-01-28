import React, { createContext, useState } from "react";
import services from "../services";

export const UserContext = createContext({
  location: {
    lat: "",
    lng: "",
  },
  getLocation: async () => {},
});

export default function UserContextProvider({ children }) {
  const [location, setLocation] = useState({
    lat: "",
    lng: "",
  });

  async function getLocation() {
    try {
      const res = await services.locationService.requestLocation();
      if (res && res?.latitude && res?.longitude) {
        setLocation({
          lat: res.latitude,
          lng: res.longitude,
        });
      }
    } catch (error) {}
  }

  return (
    <UserContext.Provider
      value={{
        location,
        getLocation,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
