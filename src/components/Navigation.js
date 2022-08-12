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
