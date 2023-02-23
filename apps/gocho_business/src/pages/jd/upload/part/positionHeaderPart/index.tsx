import { FunctionComponent } from "react";

import { COLORS } from "shared-style/color";
import { SharedButton } from "shared-ui/business/sharedButton";

import { PositionHeaderPartProps } from "./type";
import { BLANK_POSITION } from "../../constant";
import { cssObj } from "./style";

export const PositionHeaderPart: FunctionComponent<PositionHeaderPartProps> = ({ fields, append, setIsCardOpen }) => (
  <section css={cssObj.partContainer}>
    <div>
      <h3 css={cssObj.title}>직무별 상세정보</h3>
      <p>
        직무별로 상세 정보를 입력해주세요. 작성 후 직무카드 복사 버튼으로 동일 조건의 다른 직무를 편하게 입력할 수
        있습니다
      </p>
    </div>
    <div css={cssObj.buttonWrapper}>
      <SharedButton
        radius="round"
        fontColor={`${COLORS.BLUE_FIRST40}`}
        borderColor={`${COLORS.BLUE_FIRST40}`}
        backgroundColor="#e9f6ff"
        size="medium"
        text="직무 카드 추가"
        onClickHandler={() => {
          if (fields.length < 10) {
            append(BLANK_POSITION);
            setIsCardOpen((prev) => [...prev, false]);
          }
        }}
      />
    </div>
  </section>
);
