import React from "react";
import { Container, Title, List, Item, Picture, Name } from "./ProfileStyle";

const Profiles = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export const ProfilesTitle = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

export const ProfilesList = ({ children, ...restProps }) => {
  return <List {...restProps}>{children}</List>;
};

export const ProfilesUser = ({ children, ...restProps }) => {
  return <Item {...restProps}>{children}</Item>;
};

export const ProfilesPicture = ({ src, ...restProps }) => {
  return <Picture {...restProps} src={src} />;
};

export const ProfilesName = ({ children, ...restProps }) => {
  return <Name {...restProps}>{children}</Name>;
};

export default Profiles;
