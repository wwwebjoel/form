import React from "react";
import jwt_decode from "jwt-decode";
import LoginForm from "./LoginForm";

const ShowAllUsers = () => {
  const token = localStorage.getItem("token");

  if (token) {
    const { isAdmin } = jwt_decode(token);

    if (!isAdmin)
      return <div>Sorry you are not authorized to access this page</div>;

    return <div>All Users from backend</div>;
  }
  if (!token)
    return (
      <div>
        <LoginForm />
      </div>
    );
};

export default ShowAllUsers;
