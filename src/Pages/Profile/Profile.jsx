import React from "react";

const Profile = () => {
  const user = {
    name: "Pritom Chakma",
    email: "pritom@example.com",
    bio: "Frontend Developer | MERN Stack Learner | Tech Enthusiast",
    location: "Chittagong, Bangladesh",
    joinDate: "January 2024",
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=500&auto=format&fit=crop&q=80",
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10 px-5">
      <div className="bg-white shadow-lg rounded-2xl max-w-lg w-full p-6">
        {/* Profile Image */}
        <div className="flex flex-col items-center">
          <img
            src={user.image}
            alt={user.name}
            className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-md"
          />
          <h2 className="mt-4 text-2xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>

        {/* Bio */}
        <div className="mt-6 text-center">
          <p className="text-gray-700">{user.bio}</p>
          <p className="mt-2 text-sm text-gray-500">
            📍 {user.location} | Joined {user.joinDate}
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button className="px-5 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">
            Edit Profile
          </button>
          <button className="px-5 py-2 bg-gray-200 text-gray-800 rounded-xl hover:bg-gray-300 transition">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
