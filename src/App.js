import "./App.css";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="App Forms">
      <div className="Form">
        <RegisterForm />
      </div>
      <div className="form">
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
