import { FunctionComponent, useEffect, useState } from "react";

import { progressCSS, activeLine } from "./style";

export const ProgressPart: FunctionComponent = () => {
  const [currentProgress, setCurrentProgress] = useState(0);
  const [currentHash, setCurrentHash] = useState("#1");

  useEffect(() => {
    switch (currentHash) {
      case "#2":
        setCurrentProgress(20);
        break;

      case "#3":
        setCurrentProgress(40);
        break;

      case "#4":
        setCurrentProgress(60);
        break;

      case "#5":
        setCurrentProgress(60);
        break;

      case "#6":
        setCurrentProgress(75);
        break;

      case "#7":
        setCurrentProgress(85);
        break;

      case "#8":
        setCurrentProgress(100);
        break;

      default:
        setCurrentProgress(0);
        break;
    }
  }, [currentHash]);

  const changeProgressPercentHandler = () => {
    const { hash } = window.location;
    setCurrentHash(hash);
  };

  useEffect(() => {
    window.addEventListener("popstate", changeProgressPercentHandler);
    return () => {
      window.removeEventListener("popstate", changeProgressPercentHandler);
    };
  }, []);

  useEffect(() => {
    window.location.hash = "1";
  }, []);

  return (
    <div css={progressCSS}>
      <div css={activeLine(currentProgress)} />
    </div>
  );
};
