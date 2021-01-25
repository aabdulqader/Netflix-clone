import React from "react";
import { LockBody, ReleaseBody, Spinner, Picture } from "./LoadingStyle";

const Loading = ({ src, ...restProps }) => {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} data-testid="loading-picture" />
    </Spinner>
  );
};

export const LoadingReleaseBody = () => {
  return <ReleaseBody />;
};

export default Loading;
