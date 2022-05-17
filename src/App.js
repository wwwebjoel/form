import "./App.css";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import ShowAllUsers from "./components/ShowAllUsers";
import ShowAllBooks from "./components/ShowAllBooks";

function App() {
  return (
    <div className="App Forms">
      {/* <div className="Form">
        <RegisterForm />
      </div>
      <div className="form">
        <LoginForm />
      </div> */}
      {/* <ShowAllUsers /> */}
      <ShowAllBooks />
    </div>
  );
}

export default App;
