import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import { useHistory } from 'react-router-dom';
import Form, {
  FormBase,
  FormError,
  FormInput,
  FormLink,
  FormSubmit,
  FormText,
  FormTextSmall,
  FormTitle,
} from "../Components/Form/Form";
import HeaderContainer from "../Containers/HeaderContainer";
import { auth } from "../firebase";

export default function SignIn() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignin = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/browse");
      })
      .catch((error) => {
        setEmail("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <HeaderContainer>
      <Form>
        <FormTitle>Sign In</FormTitle>
        {error && <FormError data-testid="error">{error}</FormError>}

        <FormBase onSubmit={handleSignin}>
          <FormInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            type="password"
            value={password}
            autoComplete="off"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormSubmit disabled={!email} type="submit" data-testid="sign-in">
            Sign In
          </FormSubmit>
        </FormBase>

        <FormText>
          New to Netflix? <FormLink to="/signup">Sign up now.</FormLink>
        </FormText>
        <FormTextSmall>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </FormTextSmall>
      </Form>
    </HeaderContainer>
  );
}
