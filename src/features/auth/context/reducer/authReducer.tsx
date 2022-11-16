import { AUTHENTICATE } from "features/auth/context/action/authAction";

export const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        user: action.payload,
      };

    default:
      return state;
  }
};
