import { useCallback } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SingleUser from "./SingleUser";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    const req = await axios.get("https://randomuser.me/api/?results=15");
    setUsers(req.data.results);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div className="user-list">
      <ul>
        {users &&
          users.map((user) => {
            return (
              <li key={user.id.value}>
                <SingleUser user={user} setUsers={setUsers} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default UsersList;
