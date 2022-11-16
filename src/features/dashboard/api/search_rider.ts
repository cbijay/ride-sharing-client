import api from "core/lib/api";
import { TSearchRider } from "../types/TSearchRider";

export const searchRider = async ({
  start_location,
  end_location,
  user_location,
}: TSearchRider) => {
  const response = await api.post("/rider/search", {
    start_location,
    end_location,
    user_location,
  });

  return response;
};
