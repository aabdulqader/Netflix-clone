import React from "react";
import { Container, Image, Inner, Item, Pane, SubTitle, Title } from "./Style";

export default function Jumbotron({
  children,
  direction = "row",
  ...restProps
}) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

export const JumboContainer = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export const JumbotronPane = ({ children, ...restProps }) => {
  return <Pane {...restProps}>{children}</Pane>;
};

export const JumbotronTitle = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

export const JumbotronSubTitle = ({ children, ...restProps }) => {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

export const JumbotronImage = ({ ...restProps }) => {
  return <Image {...restProps} />;
};
