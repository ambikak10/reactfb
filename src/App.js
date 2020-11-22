import "./App.css";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
          <Route exact path='/' component={Login} />{" "}
          <Route exact path='/dashboard' component={Dashboard} />
     
    </Router>
  );
}

export default App;
