import React from "react";
import Feature, {
  FeatureTitle,
  FeatureSubTitle,
} from "../Components/HeaderFeature/HeaderFeature";
import {
  OptForm,
  OptFormText,
  OptFormInput,
  OptFormButton,
  OptFormBreak,
} from "../Components/OtpForm/OtpForm";
import FaqsContainer from "../Containers/FaqsContainer";
import HeaderContainer from "../Containers/HeaderContainer";

import JumbotronContainer from "../Containers/JumbotronContainer";

const Home = () => {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <FeatureTitle>Unlimited movies, TV shows, and more.</FeatureTitle>
          <FeatureSubTitle>Watch anywhere. Cancel anytime.</FeatureSubTitle>

          <OptForm>
            <OptFormText>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptFormText>
            <OptFormInput placeholder="Email address" />
            <OptFormButton>Get Started</OptFormButton>
            <OptFormBreak />
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
    </>
  );
};

export default Home;
