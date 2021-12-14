import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import * as api from "../api/users";
import config from "../config.json";
import { setAuthToken } from "../api";

const JWT_TOKEN_KEY = config.token_key;
const AuthContext = createContext();

function parseJwt(token) {
  if (!token) return {};
  const base64url = token.split(".")[1];
  const payload = Buffer.from(base64url, "base64");
  const jsonPayload = payload.toString("ascii");
  return JSON.parse(jsonPayload);
}

function parseExp(exp) {
  if (!exp) return null;
  if (typeof exp !== "number") exp = Number(exp);
  if (isNaN(exp)) return null;
  return new Date(exp * 1000);
}

const useAuth = () => useContext(AuthContext);

export const useSession = () => {
  const { loading, error, token, user, ready, hasRole } = useAuth();
  return {
    loading,
    error,
    token,
    user,
    ready,
    isAuthed: Boolean(token),
    hasRole,
  };
};

export const useRegister = () => {
  const { register } = useAuth();
  return register;
};

export const useLogin = () => {
  const { login } = useAuth();
  return login;
};

export const useLogout = () => {
  const { logout } = useAuth();
  return logout;
};

export const AuthProvider = ({ children }) => {
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [token, setToken] = useState(localStorage.getItem(JWT_TOKEN_KEY));
  const [user, setUser] = useState(null);

  const setSession = useCallback(async (token, user) => {
    const { exp, userId } = parseJwt(token);
    const expiry = parseExp(exp);
    const stillValid = expiry >= new Date();

    if (stillValid) {
      localStorage.setItem(JWT_TOKEN_KEY, token);
    } else {
      localStorage.removeItem(JWT_TOKEN_KEY);
      token = null;
    }
    setAuthToken(token);
    setToken(token);
    setReady(stillValid && token);

    if (!user && stillValid) {
      user = await api.getById(userId);
    }

    setUser(user);
  }, []);

  useEffect(() => {
    setSession(token);
  }, [token, setSession]);

  const login = useCallback(
    async (email, password) => {
      try {
        setLoading(true);
        setError("");
        const { token, user } = await api.login(email, password);
        setSession(token, user);
        return true;
      } catch (error) {
        console.log(error);
        setError("Login failed try again.");
        return false;
      } finally {
        setLoading(false);
      }
    },
    [setSession]
  );

  const register = useCallback(
    async ({ name, email, password }) => {
      try {
        setLoading(true);
        setError("");
        const { token, user } = await api.register({ name, email, password });
        setSession(token, user);
        return true;
      } catch (error) {
        console.log(error);
        setError("Something went wrong, try again.");
        return false;
      } finally {
        setLoading(false);
      }
    },
    [setSession]
  );

  const logout = useCallback(() => {
    setSession(null, null);
  }, [setSession]);

  // logt in, in mijn account
  // useEffect(() => {
  //   login("robin@mail.com", "12345678");
  // }, [login]);

  const value = useMemo(
    () => ({
      loading,
      error,
      token,
      user,
      login,
      logout,
      ready,
      register,
    }),
    [loading, error, token, user, ready, login, logout, register]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
