import React, { useState } from "react";
import { Link as ReachRouterLink } from "react-router-dom";
import {
  Container,
  Group,
  Background,
  Dropdown,
  Picture,
  Link,
  Search,
  Profile,
  FeatureCallOut,
  SearchIcon,
  SearchInput,
  ButtonLink,
  PlayButton,
  Text,
  Feature,
  Logo,
} from "./HeaderStyle";

const Header = ({ bg = true, children, ...restProps }) => {
  return bg ? (
    <Background data-testid="header-bg" {...restProps}>
      {children}
    </Background>
  ) : (
    children
  );
};

export const HeaderFrame = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export const HeaderGroup = ({ children, ...restProps }) => {
  return <Group {...restProps}>{children}</Group>;
};

export const HeaderLogo = ({ to, ...restProps }) => {
  return (
    <ReachRouterLink to={to}>
      <Logo {...restProps} />
    </ReachRouterLink>
  );
};

export const HeaderSearch = ({ searchTerm, setSearchTerm, ...restProps }) => {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...restProps}>
      <SearchIcon
        onClick={() => setSearchActive((searchActive) => !searchActive)}
        data-testid="search-click"
      >
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search films and series"
        active={searchActive}
        data-testid="search-input"
      />
    </Search>
  );
};

export const HeaderProfile = ({ children, ...restProps }) => {
  return <Profile {...restProps}>{children}</Profile>;
};

export const HeaderFeature = ({ children, ...restProps }) => {
  return <Feature>{children}</Feature>;
};

export const HeaderPicture = ({ src, ...restProps }) => {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

export const HeaderDropdown = ({ children, ...restProps }) => {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

export const HeaderTextLink = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>;
};

export const HeaderPlayButton = ({ children, ...restProps }) => {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};

export const HeaderFeatureCallOut = ({ children, ...restProps }) => {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};
export const HeaderText = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

export const HeaderButtonLink = ({ children, ...restProps }) => {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

export default Header;
