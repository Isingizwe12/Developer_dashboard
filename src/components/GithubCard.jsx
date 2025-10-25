import React from "react";

function GitHubCard() {
  // Static data for UI preview
  const userData = {
    login: "octocat",
    avatar_url: "https://github.com/octocat.png",
    public_repos: 12,
    followers: 345,
    following: 56,
  };

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
