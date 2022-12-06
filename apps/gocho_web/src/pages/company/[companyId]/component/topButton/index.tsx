import { FunctionComponent } from "react";
import Link from "next/link";

import { TopButtonProps } from "./type";
import { buttonContainer, changeDataButton } from "./style";

export const TopButton: FunctionComponent<TopButtonProps> = ({ id, pathName }) => {
  return (
    <div css={buttonContainer}>
      <Link href={`/company/${id}/detail`} passHref>
        <a css={changeDataButton(pathName === "detail")}>기업 정보</a>
      </Link>
      <Link href={`/company/${id}/jd`} passHref>
        <a css={changeDataButton(pathName === "jd")}>채용공고 모음</a>
      </Link>
    </div>
  );
};
