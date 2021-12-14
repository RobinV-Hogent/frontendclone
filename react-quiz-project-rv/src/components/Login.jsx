import { FormProvider, useForm } from "react-hook-form";
import LabelInput from "./LabelInput";
import { Button } from "react-bootstrap";
import { useCallback, useEffect } from "react";
import { useLogin, useSession } from "../contexts/AuthProvider";
import { useHistory } from "react-router-dom";

const validationRules = {
  email: { required: true },
  password: { required: true },
};

export default function Login() {
  const { loading, error, isAuthed } = useSession();
  const history = useHistory();
  const login = useLogin();
  const methods = useForm();
  const { handleSubmit, reset } = methods;

  useEffect(() => {
    if (isAuthed) history.replace("/");
  });

  const handleCancel = useCallback(() => {
    reset();
  }, [reset]);

  const handleLogin = useCallback(
    async ({ email, password }) => {
      const success = await login(email, password);
      if (success) history.replace("/");
    },
    [login, history]
  );

  return (
    <FormProvider {...methods}>
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit(handleLogin)}>
        {error ? <p className="error-text">{error}</p> : <p></p>}

        <LabelInput
          label="email"
          type="text"
          defaultValue="robin@mail.com"
          placeholder="your@email.com"
          validation={validationRules.email}
        />
        <LabelInput
          label="password"
          type="password"
          defaultValue="12345678"
          placeholder="password"
          validation={validationRules.password}
        />

        <Button variant="primary" type="submit" disabled={loading}>
          Sign in
        </Button>
        <Button variant="danger" className="m-1" onClick={handleCancel}>
          Cancel
        </Button>
      </form>
    </FormProvider>
  );
}
