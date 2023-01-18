import { useState } from "react";
import { deleteUser, updateUsername } from "../store/usersSlice";

import Button from "./Button";

const UserCard = ({ user }) => {
  const [newUsername, setnewUsername] = useState([]);

  return (
    <div
      key={user.id}
      className="flex flex-col justify-center gap-4 font-bold bg-teal-700 shadow-black p-2 rounded-lg shadow-2xl"
    >
      <h1> {user.name}</h1>
      <h1> {user.username}</h1>
      <input
        className="rounded-md px-2"
        type="text"
        placeholder="New Username..."
        onChange={(event) => {
          setnewUsername(event.target.value);
        }}
      />
      <Button
        className="bg-teal-400 text-black rounded-l-md rounded-r-md px-4 py-2 m-2 font-bold"
        disabled={newUsername === ""}
        onClick={() => {
          dispatch(updateUsername({ id: user.id, username: newUsername }));
        }}
      />
      <button
        className="bg-teal-400 text-black rounded-l-md rounded-r-md px-4 py-2 m-2 font-bold"
        disabled={newUsername === ""}
        onClick={() => {
          dispatch(updateUsername({ id: user.id, username: newUsername }));
        }}
      >
        Update Username
      </button>
      <button
        className="bg-teal-600 text-white rounded-md px-4 py-2 shadow-black m-3 font-bold"
        type="button"
        onClick={() => {
          dispatch(deleteUser({ id: user.id }));
        }}
      >
        Delete Username
      </button>
    </div>
  );
};

export default UserCard;
