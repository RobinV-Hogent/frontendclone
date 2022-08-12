import {
  BrowserRouter as Router,
  Routes,
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
import PlayQuizStart from "./pages/PlayQuizStart";
import PlayQuizGatherPlayers from "./pages/PlayQuizGatherPlayers";

function App() {
  return (
    <>
      <AuthProvider>
        <Quizzes_Provider>
          <Router>
            <Navigation />
            <main>
              <div className="App">
                <Routes>
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

                  <PrivateRoute path="/gatherpeople/quiz/:id/room/:r" exact>
                    <PlayQuizGatherPlayers />
                  </PrivateRoute>
                </Routes>
              </div>
            </main>
          </Router>
        </Quizzes_Provider>
      </AuthProvider>
    </>
  );
}

export default App;
