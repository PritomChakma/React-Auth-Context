import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const GoogleLogin = () => {
    return (
         <button
          
          className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100 transition"
        >
          <FaGoogle className="text-red-500" /> Continue with Google
        </button>
    );
};

export default GoogleLogin;