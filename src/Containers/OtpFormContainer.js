import React from "react";
import {
  OptForm,
  OptFormBreak,
  OptFormButton,
  OptFormInput,
  OptFormText,
} from "../Components/OtpForm/OtpForm";

const OtpFormContainer = () => {
  return (
    <OptForm>
      <OptFormText>
        Ready to watch? Enter your email to create or restart your membership.
      </OptFormText>
      <OptFormInput placeholder="Email address" />
      <OptFormButton>Try It Now</OptFormButton>
      <OptFormBreak />
    </OptForm>
  );
};

export default OtpFormContainer;
