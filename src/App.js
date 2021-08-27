import LoginComponent from "./components/LoginComponent";
import { BrowserRouter as Link, Route } from "react-router-dom";
import LoggedInScreen from "./components/LoggedInScreen";

function App() {
  return (
    <Link>
      <h6 style={{ textAlign: "center" }}>MEAN LOGIN APP</h6>
      <Route exact path="/" component={LoginComponent} />
      <Route exact path="/user" component={LoggedInScreen} />
    </Link>
  );
}

export default App;
