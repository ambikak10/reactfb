import "./App.css";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UpdateInfo from "./components/UpdateInfo/UpdateInfo";

function App() {
  return (
    <Router>
          <Route exact path='/' component={Login} />{" "}
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/update' component={UpdateInfo}/>
     
    </Router>
  );
}

export default App;
