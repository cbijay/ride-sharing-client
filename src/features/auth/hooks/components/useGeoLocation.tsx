import { useEffect, useState } from "react";

const useGeoLocation = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [error, setError] = useState("");

  const getUserLocation = () => {
    const geolocationAPI = navigator.geolocation;

    if (!geolocationAPI)
      setError("Geolocation API is not available in your browser!");

    geolocationAPI.getCurrentPosition(
      (position) => {
        const { coords } = position;

        setLatitude(coords.latitude);
        setLongitude(coords.longitude);
      },
      (error) => {
        setError(error?.message);
      }
    );
  };

  useEffect(() => {
    getUserLocation();

    return () => getUserLocation();
  }, [getUserLocation]);

  return { latitude, longitude, error };
};

export default useGeoLocation;
