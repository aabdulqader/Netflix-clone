import React from "react";
import Header, {
  HeaderButtonLink,
  HeaderFrame,
  HeaderLogo,
} from "../Components/Header/Header";
import Profiles, {
  ProfilesList,
  ProfilesName,
  ProfilesPicture,
  ProfilesTitle,
  ProfilesUser,
} from "../Components/Profile/Profile";
import logo from "../logo.svg";

const SelectProfileContainer = () => {
  return (
    <>
      <Header bg={false}>
        <HeaderFrame>
          <HeaderLogo to="/" src={logo} alt="Netflix" />
          <HeaderButtonLink to="/signin">Sign In</HeaderButtonLink>
        </HeaderFrame>
      </Header>
      <Profiles>
        <ProfilesTitle>Who's watching?</ProfilesTitle>
        <ProfilesList>
          <ProfilesUser data-testid="user-profile">
            <ProfilesPicture src="images/users/2.png" />
            <ProfilesName>Sign In to see the MAGIC</ProfilesName>
          </ProfilesUser>
        </ProfilesList>
      </Profiles>
    </>
  );
};

export default SelectProfileContainer;
