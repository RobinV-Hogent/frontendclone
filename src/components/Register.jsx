import { FormProvider, useForm } from "react-hook-form";
import LabelInput from "./LabelInput";
import { Button } from "react-bootstrap";
import { useCallback, useEffect, useMemo } from "react";
import { useRegister, useSession } from "../contexts/AuthProvider";
import { useHistory } from "react-router-dom";

export default function Login() {
  const { loading, error, isAuthed } = useSession();
  const history = useHistory();
  const register = useRegister();
  const methods = useForm();
  const { reset, getValues, handleSubmit } = methods;

  useEffect(() => {
    if (isAuthed) history.replace("/");
  }, [history, isAuthed]);

  const validationRules = useMemo(
    () => ({
      email: {
        required: "Email is required",
        pattern: {
          value:
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: "This email is not valid",
        },
      },
      name: {
        required: "Name is required",
        minLength: {
          value: 3,
          message: "Name should be at least 3 characters long",
        },
      },
      password: {
        required: true,
        minLength: {
          value: 5,
          message: "Password should be at least 5 characters long",
        },
      },
      confirmPassword: {
        required: true,
        validate: {
          notIdentical: (value) => {
            const password = getValues("password");
            return password === value
              ? null
              : "both password need to be identical";
          },
        },
      },
    }),
    [getValues]
  );

  const handleRegister = useCallback(
    async ({ name, email, password }) => {
      const success = await register({
        name,
        email,
        password,
      });

      if (success) history.replace("/");
    },
    [register, history]
  );

  const handleCancel = useCallback(() => {
    reset();
  }, [reset]);

  return (
    <FormProvider {...methods}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(handleRegister)}>
        <LabelInput
          label="email"
          type="text"
          defaultValue=""
          placeholder="your@email.com"
          validation={validationRules.email}
        />
        <LabelInput
          label="name"
          type="text"
          defaultValue=""
          placeholder="name"
          validation={validationRules.name}
        />

        <LabelInput
          label="password"
          type="password"
          defaultValue=""
          placeholder="password"
          validation={validationRules.password}
        />

        <LabelInput
          label="confirmPassword"
          type="password"
          defaultValue=""
          placeholder="comfirm password"
          validation={validationRules.confirmPassword}
        />

        <Button variant="primary" type="submit" disabled={loading}>
          Register
        </Button>
        <Button variant="danger" className="m-1" onClick={handleCancel}>
          Cancel
        </Button>
      </form>
    </FormProvider>
  );
}
