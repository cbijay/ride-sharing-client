import { getUser } from "core/lib/cookie";
import { authReducer } from "features/auth/context/reducer/authReducer";
import { useReducer } from "react";

import { AUTHENTICATE } from "features/auth/context/action/authAction";
import { AuthContext, initialState } from "features/auth/context/authContext";

export const AuthProvider = (props: any) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const user = getUser();

  if (user && user !== undefined) state.user = user;

  const authenticate = (userData: any) => {
    dispatch({
      type: AUTHENTICATE,
      payload: userData,
    });
  };

  return (
    <AuthContext.Provider
      value={{ user: state.user, authenticate }}
      {...props}
    />
  );
};
