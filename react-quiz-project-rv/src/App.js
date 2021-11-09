import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { Navbar, Button, Alert } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'




function App() {
    return (
      <div className="App">
          <Router>
              <Switch>
                  { /*  Path = / => homepage = startup page  */ }
                  <Route exact path="/">
                      <Home />
                  </Route>
              </Switch>
            </Router>
      </div>
  );
}

export default App;
