import { FunctionComponent } from "react";
import { BiRocket } from "react-icons/bi";

import { COLORS } from "shared-style/color";
import { SharedButton } from "shared-ui/business/sharedButton";

import { cssObj } from "./style";

export const HeaderPart: FunctionComponent = () => (
  <section css={cssObj.partContainer}>
    <div>
      <h2 css={cssObj.title}>공고 등록</h2>
      <p>등록된 공고는 검수 이후 바로 업로드 됩니다</p>
    </div>

    <div css={cssObj.buttonWrapper}>
      <SharedButton
        radius="round"
        fontColor={`${COLORS.GRAY100}`}
        backgroundColor={`${COLORS.BLUE_FIRST40}`}
        isFullWidth
        size="medium"
        text="공고 등록하기"
        onClickHandler="submit"
        iconObj={{ icon: BiRocket, location: "left" }}
      />
    </div>
  </section>
);
