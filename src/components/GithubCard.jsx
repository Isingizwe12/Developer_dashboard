import React, { useEffect, useState } from "react";

function GitHubCard() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const username = "isingizwe12"; 

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
          throw new Error("User not found");
        }
        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUser();
  }, [username]);

  if (loading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;

  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-sm flex flex-col items-center">
      {/* Avatar */}
      <img
        src={userData.avatar_url}
        alt={userData.login}
        className="w-24 h-24 rounded-full mb-4"
      />

      {/* Username */}
      <h2 className="text-xl font-semibold text-gray-800">{userData.login}</h2>

      {/* Stats */}
      <div className="flex justify-between w-full mt-4 text-gray-700">
        <div className="text-center">
          <p className="font-bold">{userData.public_repos}</p>
          <p className="text-sm">Repos</p>
        </div>
        <div className="text-center">
          <p className="font-bold">{userData.followers}</p>
          <p className="text-sm">Followers</p>
        </div>
        <div className="text-center">
          <p className="font-bold">{userData.following}</p>
          <p className="text-sm">Following</p>
        </div>
      </div>
    </div>
  );
}

export default GitHubCard;
