import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "./AuthProvider";

const GoogleLogin = () => {
  const { signInGoogle } = useContext(AuthContext);

  const handleSignInGoogle = () => {
    signInGoogle();
  };
  return (
    <button
      onClick={handleSignInGoogle}
      className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100 transition"
    >
      <FaGoogle className="text-red-500" /> Continue with Google
    </button>
  );
};

export default GoogleLogin;
