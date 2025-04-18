import { CSSProperties } from "react";

import { Typography } from "../Typography";

interface LoadingIndicatorProps {
  height?: CSSProperties["height"];
}

export const LoadingIndicator = ({ height }: LoadingIndicatorProps = {}) => {
  return (
    <div
      className="flex justify-center items-center w-full h-full"
      style={{ height }}
    >
      <Typography>Loading...</Typography>
    </div>
  );
};
