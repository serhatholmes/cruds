import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "./store/usersSlice";

import Header from "./component/Header";
import UserCardList from "./component/UserCardList";
import Button from "./component/Button";

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  return (
    <div className="max-w-xl mx-auto rounded-lg shadow-black">
      <Header />
      <div className="flex flex-col justify-center">
        <input
          className="bg-slate-200 text-left placeholder-stone-600 px-4 py-2 rounded-t-lg"
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
        <Button
          className="bg-slate-600 text-white  font-semibold rounded-b-lg"
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name,
                username,
              })
            );
          }}
          label="Add User"
        />
      </div>
      <UserCardList userList={userList} />
    </div>
  );
}

export default App;
