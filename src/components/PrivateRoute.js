import { Redirect, useLocation, Route } from "react-router-dom";
import { useMemo } from "react";
import { useSession } from "../contexts/AuthProvider";

export default function PrivateRoute({ children, role, ...rest }) {
  const { isAuthed } = useSession();
  const { pathname } = useLocation();

  return (
    <Route {...rest}>
      {isAuthed ? children : <Redirect from={pathname} to="/login" />}
    </Route>
  );
}
