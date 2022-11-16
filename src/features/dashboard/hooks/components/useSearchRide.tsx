import { UseMutationResult } from "@tanstack/react-query";
import useGeoLocation from "features/auth/hooks/components/useGeoLocation";

import { TSearchRider } from "features/dashboard/types/TSearchRider";
import { useSearchRider } from "../api/useSearchRider";

const useSearchRide = () => {
  const { latitude, longitude } = useGeoLocation();

  const {
    mutate,
    isLoading: loading,
    error,
  }: UseMutationResult<TSearchRider, Error, TSearchRider> = useSearchRider({});

  const handleSearch = async ({
    start_location,
    end_location,
  }: TSearchRider) => {
    mutate({
      start_location,
      end_location,
      user_location: [latitude, longitude],
    });
  };

  return { loading, error, handleSearch };
};

export default useSearchRide;
