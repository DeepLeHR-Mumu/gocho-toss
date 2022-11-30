import { FunctionComponent } from "react";
import { useRouter } from "next/router";

import { COMPANY_DETAIL_URL, COMPANY_JD_URL } from "shared-constant/internalURL";

import { TopButtonProps } from "./type";
import { buttonContainer, changeDataButton } from "./style";

export const TopButton: FunctionComponent<TopButtonProps> = ({ id }) => {
  const router = useRouter();
  const companyPartPath = router.asPath.split("/")[2];

  return (
    <div css={buttonContainer}>
      <button
        type="button"
        onClick={() => {
          router.replace(`${COMPANY_DETAIL_URL}/${id}`);
        }}
        css={changeDataButton(Boolean(companyPartPath === "detail"))}
      >
        기업 정보
      </button>
      <button
        type="button"
        onClick={() => {
          router.replace(`${COMPANY_JD_URL}/${id}`);
        }}
        css={changeDataButton(Boolean(companyPartPath === "jd"))}
      >
        채용공고 모음
      </button>
    </div>
  );
};
