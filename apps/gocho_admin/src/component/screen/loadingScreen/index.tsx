import { FunctionComponent } from "react";
import Image from "next/image";
import Jobi from "@public/image/loadingJobi.png";

import { screenContainer, title, jobiContainer } from "../style";

export const LoadingScreen: FunctionComponent = () => {
  return (
    <div css={screenContainer}>
      <h2 css={title}>데이터 불러오는중...</h2>
      <div css={jobiContainer}>
        <Image src={Jobi} alt="" />
      </div>
    </div>
  );
};
