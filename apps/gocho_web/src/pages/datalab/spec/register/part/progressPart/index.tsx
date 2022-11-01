import { FunctionComponent, useEffect } from "react";

import { useProgress } from "@recoil/hook/spec";

import { progressCSS, activeLine } from "./style";

export const ProgressPart: FunctionComponent = () => {
  const { currentProgress, resetCurrentProgress } = useProgress();

  useEffect(() => {
    resetCurrentProgress();
  }, [resetCurrentProgress]);

  return (
    <div css={progressCSS}>
      <div css={activeLine(currentProgress)} />
    </div>
  );
};
