import { useState } from "react";
import AddUsers from "./component/Users/AddUsers";
import UsersList from "./component/Users/UsersList";

function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUserList((preUsersList) => {
      return [...preUsersList, { name: uName, age: uAge }];
    });
  };

  return (
    <>
      <AddUsers onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </>
  );
}

export default App;
