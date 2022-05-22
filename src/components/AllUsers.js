import React, { useEffect, useState } from "react";
import MakeAdmin from "./MakeAdmin";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [reload, setReload] = useState(0);
  let url = "http://localhost:3900/api/v1/users";

  useEffect(() => {
    const getAllUsers = async () => {
      const res = await fetch(url);

      const data = await res.json();

      setUsers(data);
    };
    try {
      getAllUsers();
    } catch (e) {
      console.log(
        "Sorry there was an error connecting to server. Please try again."
      );
    }
  }, [url, reload]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gridAutoRows: "50px",
        gap: "5px",
        padding: "0 10px",
        margin: "auto",
      }}
    >
      {users.map((user, index) => (
        <div
          key={index}
          style={{
            display: "grid",
            gridTemplateColumns: "100px 300px 150px 100px",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.1)",
              display: "flex",
              alignItems: "center",
            }}
          >
            {user.name}
          </div>
          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.1)",
              display: "flex",
              alignItems: "center",
            }}
          >
            {user.email}
          </div>
          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.1)",
              display: "flex",
              alignItems: "center",
            }}
          >
            {user.isAdmin ? "admin" : "authenticated"}
          </div>
          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.1)",
              display: "flex",
              alignItems: "center",
            }}
          >
            <MakeAdmin id={user._id} setReload={setReload} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllUsers;
