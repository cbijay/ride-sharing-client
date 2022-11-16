import { useMutation } from "@tanstack/react-query";
import { ToastContext } from "core/context/ToastContext";
import { useContext } from "react";

import { getUser, setCookie } from "core/lib/cookie";
import { AuthContext } from "features/auth/context/authContext";

import { signup } from "features/auth/api/signup";
import { TAuth } from "features/auth/types/TAuth";

export const useSignupUser = ({ onSuccess }: any) => {
  const { authenticate } = useContext(AuthContext);
  const user = getUser();

  const toast = useContext(ToastContext);

  return useMutation<TAuth, Error, TAuth>(
    ["signup"],
    ({ credential, latitude, longitude }) =>
      signup({ credential, latitude, longitude }),
    {
      onSuccess: (data, variables) => {
        if (data)
          toast?.add(
            data?.message ?? "",
            data?.success ? "Success" : "Error",
            5000
          );

        if (data && data?.access_token) {
          setCookie(data.access_token);
          authenticate(user);

          onSuccess && onSuccess(data, variables);
        }
      },
      onError: (error: Error) => {
        toast?.add(error?.message, "Error", 5000);
      },
    }
  );
};
