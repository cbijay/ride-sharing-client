import { createContext } from "react";

export const initialState = {
  user: {
    name: "",
    email: "",
    role: "",
    profile_pic: "",
    isLoggedIn: false,
  },
};

export const AuthContext = createContext({
  user: initialState.user,
  authenticate: (userData: any) => userData,
});
