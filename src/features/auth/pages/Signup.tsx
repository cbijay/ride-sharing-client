import Card from "core/components/card/Card";
import useSignup from "features/auth/hooks/components/useSignup";
import { useEffect } from "react";

import { googleInit } from "features/auth/utils/google";
import { Link } from "react-router-dom";

const Signup = () => {
  const { handleGoogle, loading } = useSignup();

  useEffect(() => {
    googleInit(
      "continue_with",
      document.getElementById("signUpDiv"),
      handleGoogle
    );
  }, [googleInit, handleGoogle]);

  return (
    <Card className="max-w-[350px] w-full mt-16 mx-auto">
      <h2 className="text-gray-900 text-lg mb-2 font-medium title-font">
        Signup
      </h2>
      {loading ? (
        <div>Loading....</div>
      ) : (
        <div id="signUpDiv" data-text="signup_with" className="mb-2"></div>
      )}
      <p className="text-sm italic">
        Already have an account? <Link to="/">Login</Link>
      </p>
    </Card>
  );
};

export default Signup;
