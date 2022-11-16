import { UseMutationResult } from "@tanstack/react-query";

import { TAuth } from "features/auth/types/TAuth";
import { useLoginUser } from "../api/useLoginUser";

const useLogin = () => {
  const {
    mutate,
    isLoading: loading,
    error,
  }: UseMutationResult<TAuth, Error, TAuth> = useLoginUser({});

  const handleGoogle = async (response: any) => {
    let formValues;

    formValues = {
      credential: response.credential,
    };

    mutate(formValues);
  };

  return { loading, error, handleGoogle };
};

export default useLogin;
