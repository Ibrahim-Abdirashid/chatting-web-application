let img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s";

import { useState } from "react";

const SearchFriends = () => {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");
  const [error, setError] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  const handleSubmit = async () => {
    try {
      // Simulate a user search
    } catch (err) {
      setUserName("");
      setUser(null);
    }
  };

  return (
    <div className="">
      <div className="border-b border-[#02a093] py-2 px-3 flex justify-between">
          <input
            type="text"
          placeholder="Search Friend"
          className="outline-none text-white bg-transparent placeholder-gray-200 text-sm"
            value={userName}
            onKeyDown={handleKeyDown}
          onChange={(e) => setUserName(e.target.value)}
          />
      </div>

      {error && (
        <div className="text-sm text-red-500 px-3">
          Please enter a name to search.
        </div>
      )}

      {user && (
        <div className="flex p-3 items-center gap-4">
          <img src={img} alt="" className="w-16 h-16 rounded-full" />
          <div className="font-medium text-sm">
            <span>Abraham Razhid Abraham</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFriends;
