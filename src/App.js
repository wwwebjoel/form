import "./App.css";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import ShowAllUsers from "./components/ShowAllUsers";
import ShowAllBooks from "./components/ShowAllBooks";
import { useEffect, useState } from "react";

function App() {
  const [tokenAvailable, setTokenAvailable] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setTokenAvailable(true);
  }, [tokenAvailable]);

  const logoutFunction = () => {
    localStorage.removeItem("token");
    setTokenAvailable(false);
  };

  return (
    <>
      <div style={{ cursor: "pointer" }} onClick={logoutFunction}>
        Logout
      </div>
      <div>
        {!tokenAvailable && (
          <div className="App Forms">
            <div className="Form">
              <RegisterForm />
            </div>
            <div className="Form">
              <LoginForm setTokenAvailable={setTokenAvailable} />
            </div>
          </div>
        )}
        {tokenAvailable && (
          <>
            <ShowAllUsers />
            <ShowAllBooks />
          </>
        )}
      </div>
    </>
  );
}

export default App;
