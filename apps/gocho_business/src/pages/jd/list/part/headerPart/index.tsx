import { FunctionComponent } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/router";

import { COLORS } from "shared-style/color";
import { SharedButton } from "shared-ui/business/sharedButton";

import { INTERNAL_URL } from "@/constants/url";

import { cssObj } from "./style";

export const HeaderPart: FunctionComponent = () => {
  const router = useRouter();

  return (
    <section css={cssObj.partContainer} data-testid="jd/list/headerPart">
      <div>
        <h2 css={cssObj.title}>공고 목록</h2>
        <p>공고를 수정하면 승인기간이 늘어날 수 있습니다</p>
      </div>
      <div css={cssObj.buttonWrapper}>
        <SharedButton
          radius="round"
          size="medium"
          text="공고 등록하러 가기"
          isFullWidth
          iconObj={{ icon: FiArrowRight, location: "right" }}
          backgroundColor={COLORS.STATE_SUCCESS}
          fontColor={COLORS.BLUE_FIRST40}
          onClickHandler={() => {
            router.push({
              pathname: INTERNAL_URL.JD_UPLOAD,
            });
          }}
        />
      </div>
    </section>
  );
};
