import { useMutation } from "@tanstack/react-query";
import { ToastContext } from "core/context/ToastContext";
import { searchRider } from "features/dashboard/api/search_rider";

import { useContext } from "react";

export const useSearchRider = ({ onSuccess }: any) => {
  const notification = useContext(ToastContext);

  return useMutation<any, Error, any>(
    ["searchRider"],
    ({ start_location, end_location, user_location }) =>
      searchRider({ start_location, end_location, user_location }),
    {
      onSuccess: (data, variables) => {
        if (data)
          notification?.add(
            data?.message ?? "",
            data?.success ? "Success" : "Error",
            5000
          );

        onSuccess && onSuccess(data, variables);
      },
      onError: (error: Error) => {
        notification?.add(error?.message, "Error", 5000);
      },
    }
  );
};
