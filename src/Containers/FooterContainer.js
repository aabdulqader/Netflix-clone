import React from "react";
import Footer, {
  FooterBreak,
  FooterColumn,
  FooterLink,
  FooterRow,
  FooterText,
  FooterTitle,
} from "../Components/Footer/Footer";

const FooterContainer = () => {
  return (
    <Footer>
      <FooterTitle>Questions? Contact us.</FooterTitle>
      <FooterBreak />
      <FooterRow>
        <FooterColumn>
          <FooterLink>FAQ</FooterLink>
          <FooterLink>Investor Relations</FooterLink>
          <FooterLink>Ways to Watch</FooterLink>
          <FooterLink>Corporate Information</FooterLink>
          <FooterLink>Netflix Originals</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterLink>Help Centre</FooterLink>
          <FooterLink>Jobs</FooterLink>
          <FooterLink>Terms of Use</FooterLink>
          <FooterLink>Contact Us</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterLink>Account</FooterLink>
          <FooterLink>Redeem gift cards</FooterLink>
          <FooterLink>Privacy</FooterLink>
          <FooterLink>Speed Test</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterLink>Media Centre</FooterLink>
          <FooterLink>Buy gift cards</FooterLink>
          <FooterLink>Cookie Preferences</FooterLink>
          <FooterLink>Legal Notices</FooterLink>
        </FooterColumn>
      </FooterRow>
      <FooterBreak />
      <FooterText>Netflix Bangladesh</FooterText>
    </Footer>
  );
};

export default FooterContainer;
