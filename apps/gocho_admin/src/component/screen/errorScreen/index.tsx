import { FunctionComponent } from "react";
import Image from "next/image";
import Jobi from "@public/image/errorJobi.png";

import { screenContainer, title, jobiContainer } from "../style";

export const ErrorScreen: FunctionComponent = () => {
  return (
    <div css={screenContainer}>
      <h2 css={title}>데이터를 불러올 수 없습니다.</h2>
      <div css={jobiContainer}>
        <Image src={Jobi} alt="" />
      </div>
    </div>
  );
};
