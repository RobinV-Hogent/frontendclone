import logo from './logo.svg';
import Home from './pages/Home'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { Navbar, Button, Alert } from 'react-bootstrap'
import './index.css'




function App() {
    return (
        <main>

            <div className="App">
                <Router>
                    <Switch>
                        { /*  Path = / => homepage = startup page  */}
                        <Route exact path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </div>

        </main>
  );
}

export default App;
