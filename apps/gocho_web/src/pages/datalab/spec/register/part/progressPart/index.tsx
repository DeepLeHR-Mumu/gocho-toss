import { FunctionComponent, useEffect, useState } from "react";
import { useRouter } from "next/router";

// import { useProgress } from "@recoil/hook/spec";

import { progressCSS, activeLine } from "./style";

export const ProgressPart: FunctionComponent = () => {
  // const { currentProgress, resetCurrentProgress } = useProgress();
  const router = useRouter();
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    const progressPercent = sessionStorage.getItem("progressPercent");
    if (progressPercent) {
      setCurrentProgress(Number(progressPercent));
    }
  }, [router.asPath]);

  // useEffect(() => {
  //   resetCurrentProgress();
  // }, [resetCurrentProgress]);

  return (
    <div css={progressCSS}>
      <div css={activeLine(currentProgress)} />
    </div>
  );
};
