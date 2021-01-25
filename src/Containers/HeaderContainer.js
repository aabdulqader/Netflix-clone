import React from "react";
import Header, {
  HeaderButtonLink,
  HeaderFrame,
  HeaderLogo,
} from "../Components/Header/Header";
import logo from "../logo.svg";
import { useStateValue } from "../ContextApi/StateProvider";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

const HeaderContainer = ({ children }) => {
  const history = useHistory();
  const [{ user }] = useStateValue();

  const signout = (e) => {
    e.preventDefault();

    auth
      .signOut()
      .then(() => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <Header>
      <HeaderFrame>
        <HeaderLogo to="/" src={logo} alt="Netflix" />

        <HeaderButtonLink to="/browse">Browse Videos</HeaderButtonLink>
        {user ? (
          <HeaderButtonLink to="/" onClick={signout}>
            Log Out
          </HeaderButtonLink>
        ) : (
          <HeaderButtonLink to="/signin">Sign In</HeaderButtonLink>
        )}
      </HeaderFrame>
      {children}
    </Header>
  );
};
export default HeaderContainer;
