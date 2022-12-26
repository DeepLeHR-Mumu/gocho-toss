import { FunctionComponent } from "react";

import { PositionHeaderPartProps } from "./type";
import { blankPosition } from "./constant";
import { cssObj } from "./style";

export const PositionHeaderPart: FunctionComponent<PositionHeaderPartProps> = ({ append }) => (
  <section css={cssObj.partContainer}>
    <div>
      <h3 css={cssObj.title}>직무 내용</h3>
      <p>
        금번 공고에서 모집할 직무별로 작성해주세요. 작성 후 직무 복제하기 버튼으로 동일 조건의 다른 직무를 편하게 입력할
        수도 있습니다
      </p>
    </div>
    <button
      css={cssObj.addPositionButton}
      type="button"
      onClick={() => {
        append(blankPosition);
      }}
    >
      직무 카드 추가
    </button>
  </section>
);
