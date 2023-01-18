import UserCard from "./UserCard";

const UserCardList = ({ userList }) => (
  <div className="space-y-6 mt-6">
    {userList.map((user) => (
      <UserCard user={user} />
    ))}
  </div>
);

export default UserCardList;
