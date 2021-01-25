import React from "react";
import { Container, Title, SubTitle } from "./HeaderFeatureStyle";

const Feature = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export const FeatureTitle = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

export const FeatureSubTitle = ({ children, ...restProps }) => {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

export default Feature;
