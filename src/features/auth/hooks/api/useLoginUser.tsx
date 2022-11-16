import { useMutation } from "@tanstack/react-query";
import { ToastContext } from "core/context/ToastContext";
import { getUser, setCookie } from "core/lib/cookie";

import { login } from "features/auth/api/login";
import { AuthContext } from "features/auth/context/authContext";

import { TAuth } from "features/auth/types/TAuth";
import { useContext } from "react";

export const useLoginUser = ({ onSuccess }: any) => {
  const { authenticate } = useContext(AuthContext);
  const user = getUser();

  const notification = useContext(ToastContext);

  return useMutation<TAuth, Error, TAuth>(
    ["login"],
    ({ credential, latitude, longitude }) =>
      login({ credential, latitude, longitude }),
    {
      onSuccess: (data, variables) => {
        if (data && data?.access_token) {
          setCookie(data?.access_token);
          authenticate(user);

          notification?.add("Logged in successfully!!", "Success", 5000);

          onSuccess && onSuccess(data, variables);
        }
      },
      onError: (error: Error) => {
        notification?.add(error?.message, "Error", 5000);
      },
    }
  );
};
