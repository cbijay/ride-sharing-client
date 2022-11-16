import { UseMutationResult } from "@tanstack/react-query";
import useGeoLocation from "features/auth/hooks/components/useGeoLocation";
import { TAuth } from "features/auth/types/TAuth";
import { useSignupUser } from "../api/useSignupUser";

const useSignup = () => {
  const { latitude, longitude } = useGeoLocation();

  const {
    mutate,
    isLoading: loading,
    error,
  }: UseMutationResult<TAuth, Error, TAuth> = useSignupUser({});

  const handleGoogle = async (response: any) => {
    const { credential } = response;

    const formValues = {
      credential: credential,
      latitude: latitude,
      longitude: longitude,
    };

    mutate(formValues);
  };

  return { loading, handleGoogle, error };
};

export default useSignup;
