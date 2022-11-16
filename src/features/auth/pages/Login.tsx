import Card from "core/components/card/Card";
import useLogin from "features/auth/hooks/components/useLogin";
import { useEffect } from "react";

import { Link } from "react-router-dom";
import { googleInit } from "../utils/google";

const Login = () => {
  const { handleGoogle, loading, error } = useLogin();

  useEffect(() => {
    googleInit(
      "signin_with",
      document.getElementById("loginDiv"),
      handleGoogle
    );
  }, [googleInit, handleGoogle]);

  return (
    <Card className="max-w-[350px] w-full mt-16 mx-auto">
      <h2 className="text-gray-900 text-lg mb-2 font-medium title-font">
        Login
      </h2>

      {error && <p style={{ color: "red" }}>{error?.message}</p>}
      {loading ? (
        <div>Loading....</div>
      ) : (
        <div id="loginDiv" className="mb-2"></div>
      )}
      <p className="text-sm italic">
        Don't have account? <Link to="/signup">Signup</Link>
      </p>
    </Card>
  );
};

export default Login;
