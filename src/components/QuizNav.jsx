import { useCallback } from "react";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import { useLogout, useSession } from "../contexts/AuthProvider";
import { Link } from "react-router-dom";

export default function QuizNav() {
  const { isAuthed, user } = useSession();
  const logout = useLogout();

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  return (
    <>
      <Navbar className="shadowBoxNav" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand>Robin Quizzes</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/">Home</Link>
              {user?.roles.includes("admin") ? (
                <>
                  <NavDropdown title="Lists">
                    <NavDropdown.Item>
                      <Link to="/quiz/list" data-cy="navScoreList">
                        Quiz List
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                      <Link to="/category/list" data-cy="navScoreList">
                        Category List
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                      <Link to="/score/list" data-cy="navScoreList">
                        Score List
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : null}
            </Nav>
            <Nav>
              {isAuthed ? (
                <>
                  <Link to={`/userdata/${user?.id}`} data-cy="quizNavUsername">
                    {user?.name}
                  </Link>

                  <Link variant="primary" onClick={handleLogout}>
                    Sign out
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login">Sign in</Link>
                  <Link to="/register">Register</Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
