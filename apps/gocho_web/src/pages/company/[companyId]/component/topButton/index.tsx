import { FunctionComponent } from "react";
import Link from "next/link";

import { TopButtonProps } from "./type";
import { buttonContainer, changeDataButton } from "./style";

export const TopButton: FunctionComponent<TopButtonProps> = ({ id, pathName }) => {
  return (
    <div css={buttonContainer}>
      <Link href={`/company/${id}/detail`} passHref css={changeDataButton(pathName === "detail")}>
        기업 정보
      </Link>
      <Link href={`/company/${id}/jd`} passHref css={changeDataButton(pathName === "jd")}>
        채용공고 모음
      </Link>
    </div>
  );
};
