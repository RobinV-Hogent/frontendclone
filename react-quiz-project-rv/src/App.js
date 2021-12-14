import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Quizzes from "./pages/Quizzes";
import QuizDetails from "./pages/QuizDetails";
import QuizNav from "./components/QuizNav";
import CategoryIndex from "./pages/category/CategoryIndex";
import QuizIndex from "./pages/QuizIndex";
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateRoute from "./components/PrivateRoute";
import ScoreIndex from "./pages/ScoreIndex";

function App() {
  return (
    <>
      <QuizNav />
      <main>
        <div className="App">
          <Router>
            <Switch>
              <Route path="/login" exact>
                <Login />
              </Route>

              <Route path="/register" exact>
                <Register />
              </Route>

              <PrivateRoute path="/" exact>
                <Redirect to="/quizzes" />
              </PrivateRoute>

              <PrivateRoute path="/quizzes" exact>
                <Quizzes />
              </PrivateRoute>

              <PrivateRoute path="/quizzes/detail/:id" exact>
                <QuizDetails />
              </PrivateRoute>

              <PrivateRoute path="/quiz/list" exact>
                <QuizIndex />
              </PrivateRoute>

              <PrivateRoute path="/category/list" exact>
                <CategoryIndex />
              </PrivateRoute>

              <PrivateRoute path="/score/list" exact>
                <ScoreIndex />
              </PrivateRoute>
            </Switch>
          </Router>
        </div>
      </main>
    </>
  );
}

export default App;
