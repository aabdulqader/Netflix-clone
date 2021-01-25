import React from "react";
import { Container, Input, Break, Button, Text } from "./OtpFormStyle";

export const OptForm = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export const OptFormInput = ({ ...restProps }) => {
  return <Input {...restProps} />;
};

export const OptFormButton = ({ children, ...restProps }) => {
  return (
    <Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

export const OptFormText = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

export const OptFormBreak = ({ ...restProps }) => {
  return <Break {...restProps} />;
};
