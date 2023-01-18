import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addUser } from "./features/Users";
import Seperate from "./features/Seperate";
import Header from "./features/Header";

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  console.log(name);
  return (
    <div className="max-w-xl mx-auto rounded-lg shadow-black">
      <Header />
      <div className="flex flex-col justify-center">
        <input
          className="bg-slate-200 text-left placeholder-stone-600 p-2 rounded-t-lg"
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          className="bg-slate-300 placeholder-stone-600 p-2 "
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button
          className="bg-slate-600 text-white rounded-b-lg shadow-black font-semibold"
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name,
                username,
              })
            );
          }}
        >
          Add User
        </button>
      </div>

      <Seperate userList={userList} />
    </div>
  );
}

export default App;
