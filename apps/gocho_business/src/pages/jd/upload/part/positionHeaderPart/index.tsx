import { FunctionComponent } from "react";

import { PositionHeaderPartProps } from "./type";
import { blankPosition } from "../../constant";
import { cssObj } from "./style";

export const PositionHeaderPart: FunctionComponent<PositionHeaderPartProps> = ({ append, setIsCardOpen }) => (
  <section css={cssObj.partContainer}>
    <div>
      <h3 css={cssObj.title}>직무별 상세정보</h3>
      <p>
        직무별로 상세 정보를 입력해주세요. 작성 후 직무카드 복사 버튼으로 동일 조건의 다른 직무를 편하게 입력할 수
        있습니다
      </p>
    </div>
    <button
      css={cssObj.addPositionButton}
      type="button"
      onClick={() => {
        append(blankPosition);
        setIsCardOpen((prev) => [...prev, false]);
      }}
    >
      직무 카드 추가
    </button>
  </section>
);
