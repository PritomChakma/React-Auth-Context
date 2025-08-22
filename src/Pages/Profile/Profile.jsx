import { useContext } from "react";
import { AuthContext } from "../../Components/Shared/AuthProvider";

const Profile = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("User Login Sucessfully");
      })
      .catch(() => {
        console.log("User Logout");
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10 px-5">
      <div className="bg-white shadow-lg rounded-2xl max-w-lg w-full p-6">
        {/* Profile Image */}
        <div className="flex flex-col items-center">
          <img
            src={user.photoURL}
            alt={user.name}
            className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-md"
          />
          <h2 className="mt-4 text-2xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button className="px-5 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">
            Edit Profile
          </button>
          <button
            onClick={handleSignOut}
            className="px-5 py-2 bg-gray-200 text-gray-800 rounded-xl hover:bg-gray-300 transition"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
