import { useCallback } from "react";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import { useLogout, useSession } from "../contexts/AuthProvider";

export default function QuizNav() {
  const { isAuthed, user } = useSession();
  const logout = useLogout();

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  return (
    <>
      <Navbar className="navbar" collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">Robin Quizzes</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              {user?.roles.includes("admin") ? (
                <>
                  <NavDropdown title="Lists">
                    <NavDropdown.Item href="/quiz/list">
                      Quiz List
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/category/list">
                      Category List
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/score/list">
                      Score List
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : null}
            </Nav>
            <Nav>
              {isAuthed ? (
                <>
                  <Nav.Link>{user?.name}</Nav.Link>
                  <Nav.Link variant="primary" onClick={handleLogout}>
                    Sign out
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href="/login">Sign in</Nav.Link>
                  <Nav.Link href="/register">Register</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
