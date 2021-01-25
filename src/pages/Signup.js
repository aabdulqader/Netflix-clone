import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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

const Signup = () => {
  const history = useHistory();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) =>
        userAuth.user
          .updateProfile({
            displayName: fullName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push("/browse");
          })
      )
      .catch((error) => {
        setFullName("");
        setEmail("");
        setPassword("");
        setError(error.message);
      });
  };
  return (
    <HeaderContainer>
      <Form>
        <FormTitle>Sign Up</FormTitle>
        {error && <FormError>{error}</FormError>}

        <FormBase onSubmit={handleSignup}>
          <FormInput
            placeholder="First Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
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
          <FormSubmit disabled={!email} type="submit" data-testid="sign-up">
            Sign Up
          </FormSubmit>
        </FormBase>

        <FormText>
          Already a user? <FormLink to="/signin">Sign in now.</FormLink>
        </FormText>
        <FormTextSmall>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </FormTextSmall>
      </Form>
    </HeaderContainer>
  );
};
export default Signup;
