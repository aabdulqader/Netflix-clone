import React from "react";
import {
  Container,
  Error,
  Base,
  Title,
  Text,
  TextSmall,
  Link,
  Input,
  Submit,
} from "./FormStyle";

const Form = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export const FormError = ({ children, ...restProps }) => {
  return <Error {...restProps}>{children}</Error>;
};

export const FormBase = ({ children, ...restProps }) => {
  return <Base {...restProps}>{children}</Base>;
};

export const FormTitle = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

export const FormText = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

export const FormTextSmall = ({ children, ...restProps }) => {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

export const FormLink = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>;
};

export const FormInput = ({ children, ...restProps }) => {
  return <Input {...restProps}>{children}</Input>;
};

export const FormSubmit = ({ children, ...restProps }) => {
  return <Submit {...restProps}>{children}</Submit>;
};

export default Form;
