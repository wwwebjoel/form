import React from "react";

const MakeAdmin = ({ id, setReload }) => {
  let counter = 0;
  const handleClick = async () => {
    const res = await fetch(`http://localhost:3900/api/v1/users/admin/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setReload(++counter);
  };

  return (
    <div style={{ cursor: "pointer" }} onClick={handleClick}>
      MakeAdmin
    </div>
  );
};

export default MakeAdmin;
