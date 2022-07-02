import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import CategoryTable from "./components/old/CategoryTable";

// import Quizzes from "./pages/Quizzes";
// import QuizDetails from "./pages/QuizDetails";
import Navigation from "./components/Navigation";
// import CategoryIndex from "./pages/category/CategoryIndex";
// import QuizIndex from "./pages/QuizIndex";
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateRoute from "./components/PrivateRoute";
// import ScoreIndex from "./pages/ScoreIndex";
// import QuizEdit from "./pages/QuizEdit";
// import UserComponent from "./components/UserComponent";
import { Quizzes_Provider } from "./contexts/QuizContext";
import { AuthProvider } from "./contexts/AuthProvider";
import QuizOverviewPage from "./pages/QuizOverviewPage";
import io from "socket.io-client";
import PlayQuizStart from "./pages/PlayQuizStart";
const socket = io.connect("http://localhost:9000");

function App() {
  return (
    <>
      <AuthProvider>
        <Quizzes_Provider>
          <Router>
            <Navigation />
            <main>
              <div className="App">
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

                  <PrivateRoute
                    PrivateRoute
                    path="/frontendweb-karine-2122-RobinV-Hogent/"
                    exact
                  >
                    <Redirect to="/quizzes" />
                  </PrivateRoute>

                  <PrivateRoute path="/quizzes" exact>
                    <QuizOverviewPage />
                  </PrivateRoute>

                  <PrivateRoute path="/quiz/:id" exact>
                    <PlayQuizStart />
                  </PrivateRoute>

                  {/* <PrivateRoute path="/quizzes/detail/:id" exact>
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

                  <PrivateRoute path="/quiz/edit/:id" exact>
                    <QuizEdit />
                  </PrivateRoute>

                  <PrivateRoute path="/userdata/:id" exact>
                    <UserComponent />
                  </PrivateRoute> */}
                </Switch>
              </div>
            </main>
          </Router>
        </Quizzes_Provider>
      </AuthProvider>
    </>
  );
}

export default App;
