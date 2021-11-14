import logo from './logo.svg';
import Home from './pages/Home'
import QuizIndex from './pages/quiz/Index'
import QuizCreate from './pages/quiz/Create'
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




function App() {
    return (
        <QuizProvider>
            <CategoryProvider>

                <Navbar className="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
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


                                {/*category route*/}
                                <Route exact path="/category/index">
                                    <CategoryIndex />
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </main>
            </CategoryProvider>
        </QuizProvider>
  );
}

export default App;
