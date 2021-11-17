import logo from './logo.svg';
import Home from './pages/main/Home'
import QuizQuestion from './pages/main/QuizQuestion'
import QuizIndex from './pages/quiz/Index'
import QuizCreate from './pages/quiz/Create'
import QuizDelete from './pages/quiz/Delete'
import QuizEdit from './pages/quiz/Edit'
import QuizView from './pages/main/QuizView'
import QuizResults from './pages/main/QuizResults'
import CategoryIndex from './pages/category/Index'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { Navbar, Button, Alert, Container, Brand, NavDropdown, Item, Link, Nav } from 'react-bootstrap'
import './index.css'
import { QuizProvider } from './contexts/QuizProvider';
import { CategoryProvider } from './contexts/CategoryProvider';
import { QuestionProvider } from './contexts/QuestionProvider'
import { ScoreProvider } from './contexts/ScoreProvider';
import { QuizQuestionsProvider } from './contexts/QuizQuestionsProvider';





function App() {
    return (
            <ScoreProvider>
            <QuizProvider>
            <CategoryProvider>
            <QuestionProvider>
            <QuizQuestionsProvider>
                    <Navbar className="navbar" collapseOnSelect expand="lg" variant="dark">
                        <Container>
                            <Navbar.Brand href="/">Robin Quizzes</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <NavDropdown title="Quizzes">
                                        <NavDropdown.Item href="/quiz/index">Quiz List</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/quiz/create">Create Quiz</NavDropdown.Item>
                                    </NavDropdown>

                                    <NavDropdown title="Categories">
                                        <NavDropdown.Item href="/category/index">Category List</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>



                    <main>
                        <div className="App">
                            <Router>
                                <Switch>
                                    { /*  Path = / => homepage = startup page  */}
                                    <Route exact path="/">
                                        <Home />
                                    </Route>

                                    {/*quiz route*/}
                                    <Route exact path="/quiz/index">
                                        <QuizIndex />
                                    </Route>
                                    <Route exact path="/quiz/create">
                                        <QuizCreate />
                                    </Route>
                                    <Route exact path="/quiz/play">
                                        <QuizQuestion />
                                    </Route>
                                    <Route exact path="/quiz/info">
                                        <QuizView />
                                    </Route>
                                    <Route exact path="/quiz/edit">
                                        <QuizEdit />
                                    </Route>
                                    <Route exact path="/quiz/results">
                                          <QuizResults />      
                                    </Route>
                                    <Route exact path="/quiz/delete">
                                        <QuizDelete />
                                    </Route>


                                    {/*category route*/}
                                    <Route exact path="/category/index">
                                        <CategoryIndex />
                                    </Route>
                                </Switch>
                            </Router>
                        </div>
                    </main>
            </QuizQuestionsProvider>
            </QuestionProvider>
            </CategoryProvider>
            </QuizProvider>
            </ScoreProvider>
  );
}

export default App;
