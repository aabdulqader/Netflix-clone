import React from "react";
import Jumbotron, {
  JumboContainer,
  JumbotronImage,
  JumbotronPane,
  JumbotronSubTitle,
  JumbotronTitle,
} from "../Components/Jumbotron/Jumbotron";
import jumboData from "../fixtures/jumbo.json";

const JumbotronContainer = () => {
  return (
    <JumboContainer>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <JumbotronPane>
            <JumbotronTitle>{item.title}</JumbotronTitle>
            <JumbotronSubTitle>{item.subTitle}</JumbotronSubTitle>
          </JumbotronPane>
          <JumbotronPane>
            <JumbotronImage src={item.image} alt={item.alt} />
          </JumbotronPane>
        </Jumbotron>
      ))}
    </JumboContainer>
  );
};

export default JumbotronContainer;
