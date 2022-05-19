import React from "react";
import jwt_decode from "jwt-decode";
import LoginForm from "./LoginForm";
import AllUsers from "./AllUsers";

const ShowAllUsers = () => {
  const token = localStorage.getItem("token");

  if (token) {
    const { isAdmin } = jwt_decode(token);

    // if (!isAdmin) return <></>;

    return <AllUsers />;
  }
  if (!token)
    return (
      <div>
        <LoginForm />
      </div>
    );
};

export default ShowAllUsers;
