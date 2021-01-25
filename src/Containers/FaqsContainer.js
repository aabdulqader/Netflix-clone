import React from "react";
import Faqs, {
  FaqBody,
  FaqFrame,
  FaqHeader,
  FaqItem,
  FaqTitle,
} from "../Components/Faqs/Faqs";
import faqsData from "../fixtures/faqs";
import OtpFormContainer from "./OtpFormContainer";

const FaqsContainer = () => {
  return (
    <Faqs>
      <FaqTitle>Frequently Asked Questions</FaqTitle>
      <FaqFrame>
        {faqsData.map((item) => (
          <FaqItem key={item.id}>
            <FaqHeader>{item.header}</FaqHeader>
            <FaqBody>{item.body}</FaqBody>
          </FaqItem>
        ))}
      </FaqFrame>
      <OtpFormContainer />
    </Faqs>
  );
};

export default FaqsContainer;
