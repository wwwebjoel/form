import React, { useState } from "react";
import "./Form.css";

export default function LoginForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = (e) => {
    e.preventDefault();

    async function submitToBackend() {
      const response = await fetch("http://localhost:3900/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      localStorage.setItem("token", data.jwt);
    }

    submitToBackend();
  };

  return (
    <>
      <div>
        <form className="formContainer" onSubmit={submitHandler}>
          <div className="inputContainer">
            <input
              className="input"
              type="email"
              placeholder="Email Address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="inputContainer">
            <input
              className="input"
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="inputContainer">
            <button className="submitButton" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
