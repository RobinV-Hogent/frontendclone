import { useCallback } from "react";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import { useLogout, useSession } from "../contexts/AuthProvider";
import { Link } from "react-router-dom";

const Navigation = () => {
  const { isAuthed, user } = useSession();
  const logout = useLogout();

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  return (
    <>
      {/* <Navbar className="shadowBoxNav" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand>Robin Quizzes</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="navItem center">
                Home
              </Link>
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
                  <Link
                    className="navItem"
                    to={`/userdata/${user?.id}`}
                    data-cy="quizNavUsername"
                  >
                    {user?.name}
                  </Link>

                  <Link
                    className="navItem"
                    variant="primary"
                    onClick={handleLogout}
                  >
                    Sign out
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login" className="navItem">
                    Sign in
                  </Link>
                  <Link to="/register" className="navItem">
                    Register
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      <nav>
        <h1>QUIZZES</h1>
        <ul>
          <li>POPULAR</li>
          <li>HOME</li>
          <li>ACCOUNT</li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
