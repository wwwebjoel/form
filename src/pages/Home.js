import "./Home.css";
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";
import ShowAllUsers from "../components/ShowAllUsers";
import ShowAllBooks from "../components/ShowAllBooks";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [tokenAvailable, setTokenAvailable] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setTokenAvailable(true);
  }, [tokenAvailable]);

  return (
    <>
      <Link to={"/logout"} style={{ cursor: "pointer" }}>
        Logout
      </Link>
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
