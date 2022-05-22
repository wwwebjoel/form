import "./Home.css";
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";
import ShowAllUsers from "../components/ShowAllUsers";
import ShowAllBooks from "../components/ShowAllBooks";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function App() {
  const [tokenAvailable, setTokenAvailable] = useState(false);
  const [goto, setGoto] = useState("/");

  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setGoto(location.state.from.pathname);
    }
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setTokenAvailable(true);
  }, [tokenAvailable]);

  return (
    <div>
      {!tokenAvailable && (
        <div className="App Forms">
          <div className="Form">
            <LoginForm setTokenAvailable={setTokenAvailable} goto={goto} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
