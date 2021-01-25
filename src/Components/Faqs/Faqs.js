import React, { createContext, useState, useContext } from "react";
import { Container, Frame, Title, Item, Inner, Header, Body } from "./FaqStyle";

const toggleContext = createContext();

const Faqs = ({ children, ...restProps }) => {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
};

export const FaqTitle = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

export const FaqFrame = ({ children, ...restProps }) => {
  return <Frame {...restProps}>{children}</Frame>;
};

export const FaqItem = ({ children, ...restProps }) => {
  const [toggleIsOpen, setToggleIsOpen] = useState(false);

  return (
    <toggleContext.Provider value={{ toggleIsOpen, setToggleIsOpen }}>
      <Item {...restProps}>{children}</Item>
    </toggleContext.Provider>
  );
};

export const FaqHeader = ({ children, ...restProps }) => {
  const { toggleIsOpen, setToggleIsOpen } = useContext(toggleContext);

  return (
    <Header onClick={() => setToggleIsOpen(!toggleIsOpen)} {...restProps}>
      {children}
      {toggleIsOpen ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

export const FaqBody = ({ children, ...restProps }) => {
  const { toggleIsOpen } = useContext(toggleContext);
  return (
    <Body className={toggleIsOpen ? "open" : "closed"} {...restProps}>
      <span>{children}</span>
    </Body>
  );
};

export default Faqs;
