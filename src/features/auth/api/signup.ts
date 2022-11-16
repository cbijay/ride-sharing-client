import { TAuth } from "features/auth/types/TAuth";

export const signup = async ({ credential, latitude, longitude }: TAuth) => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL!}/auth/signup`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        credential: credential,
        latitude: latitude,
        longitude: longitude,
      }),
    }
  );

  return response.json();
};
